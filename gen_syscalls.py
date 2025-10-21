#!/usr/bin/env python3
import json, re, os, sys

KERNEL_VERSION = os.getenv("KERNEL_VERSION", "6.17.3")
TAGS_PATH = f"/tmp/linux-{KERNEL_VERSION}/tags.json"
SCT_PATH = "syscall_64.tbl"

def load_tags(path):
    with open(path, "r", encoding="utf-8", errors="ignore") as f:
        return [json.loads(line) for line in f if line.strip()]

print(f"[+] Loading tags from {TAGS_PATH}", file=sys.stderr)
tags = load_tags(TAGS_PATH)

# Index tags by name for quick lookup
symbols = {}
for t in tags:
    n = t.get("name")
    if n:
        symbols.setdefault(n, []).append(t)

def find_symbol(name, kind=None):
    entries = symbols.get(name, [])
    if kind:
        return [e for e in entries if e.get("kind") == kind]
    return entries

def find_syscall_define(name):
    """Find the SYSCALL_DEFINE* macro for a given syscall name, x86-only."""
    base = name.replace("sys_", "")
    patterns = [
        rf"SYSCALL_DEFINE\d*\({re.escape(base)}",
        rf"COMPAT_SYSCALL_DEFINE\d*\({re.escape(base)}",
        rf"SYSCALL_DEFINE_COMPAT\d*\({re.escape(base)}",
        rf"COND_SYSCALL\({re.escape(base)}",
        rf"SYSCALL_ALIAS\({re.escape(base)}",
    ]

    for pat in patterns:
        regex = re.compile(pat)
        found_x86 = None
        found_generic = None

        for t in tags:
            path = t.get("path", "")
            tag_pat = t.get("pattern", "")
            if not tag_pat or not regex.search(tag_pat):
                continue
            # prioritize x86-specific implementations
            if "arch/x86/" in path:
                found_x86 = t
                break
            if "/arch/" not in path and found_generic is None:
                found_generic = t

        if found_x86 or found_generic:
            return found_x86 or found_generic

    return None

def extract_signature_from_macro(tag):
    """Extract parameter signature from SYSCALL_DEFINE macro pattern."""
    pattern = tag.get("pattern", "")

    # Match SYSCALL_DEFINE patterns: SYSCALL_DEFINEn(name, type1, arg1, type2, arg2, ...)
    match = re.search(r'SYSCALL_DEFINE\d*\([^,)]+,\s*(.+?)\)', pattern)
    if not match:
        return "(void)"

    params_str = match.group(1).strip()
    if not params_str:
        return "(void)"

    # Parse type/name pairs
    parts = [p.strip() for p in params_str.split(',')]
    params = []
    for i in range(0, len(parts), 2):
        if i + 1 < len(parts):
            param_type = parts[i]
            param_name = parts[i + 1]
            params.append(f"{param_type} {param_name}")

    if params:
        return f"({', '.join(params)})"
    return "(void)"

sys_calls = []

with open(SCT_PATH, "r", encoding="utf-8", errors="ignore") as sct_file:
    for line in sct_file:
        if line.startswith("#") or not line.strip():
            continue

        parts = line.split()
        # Only process lines that are valid 64-bit syscalls
        if len(parts) > 3 and parts[0].isdigit():
            nr = int(parts[0])
            name = parts[3]
            hex_id = f"0x{nr:x}"

            # Try to find syscall definition
            sc_def = find_syscall_define(name)

            if sc_def:
                # Extract signature from macro
                sig_clean = extract_signature_from_macro(sc_def)
                file = sc_def.get("path", "not found")
                line_num = int(sc_def.get("line", 0))
            else:
                # Try fallback to function symbol
                entry = find_symbol(name, kind="function")
                if entry:
                    e = entry[0]
                    sig_clean = e.get("signature", "(void)").strip()
                    file = e.get("path", "not found")
                    line_num = int(e.get("line", 0))
                else:
                    sig_clean = "not found"
                    file = "not found"
                    line_num = ""

            # Base syscall info
            details = [nr, name, sig_clean, hex_id]

            # Fill parameter placeholders (rdi..r9)
            for _ in range(6):
                details.append("")

            details.append(file)
            details.append(line_num if line_num else "")

            # Ensure exactly 12 columns
            while len(details) < 12:
                details.append("")

            sys_calls.append(details)
        # else: skip invalid/malformed lines silently

# Output as valid JavaScript for web consumption
output = json.dumps({"aaData": sys_calls}, indent=3, ensure_ascii=False)
sys.stdout.write("var syscalls_x86_64 = ")
sys.stdout.write(output)
sys.stdout.write(";\n")
