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

# Normalize paths to be relative to kernel root
prefix = f"/tmp/linux-{KERNEL_VERSION}/"
for t in tags:
    path = t.get("path", "")
    if path.startswith(prefix):
        t["path"] = path[len(prefix):]

# Build name index for fast lookups
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
    """Find the SYSCALL_DEFINE* macro for a given syscall name (x86-only)."""
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
            kind = t.get("kind", "")
            tag_pat = t.get("pattern", "")

            if not tag_pat:
                continue

            # normalize pattern text
            if tag_pat.startswith("/^") and tag_pat.endswith("$/"):
                tag_pat = tag_pat[2:-2]

            # our ctags tags have name == "SYSCALL_DEFINE3" etc., so match on pattern instead
            if not regex.search(tag_pat):
                continue

            # prioritize x86-specific
            if "arch/x86/" in path:
                found_x86 = t
                break
            if "/arch/" not in path and found_generic is None:
                found_generic = t

        if found_x86 or found_generic:
            return found_x86 or found_generic

    # No match found
    return None

def extract_params_from_macro(tag):
    """
    Extract syscall arguments using Universal Ctags 'signature' field.
    Example signature:
        "(open,const char __user *,filename,int,flags,umode_t,mode)"
    """
    sig = tag.get("signature", "").strip()
    if not sig.startswith("(") or not sig.endswith(")"):
        return []

    inside = sig[1:-1].strip()
    if not inside:
        return []

    parts = [p.strip() for p in inside.split(",") if p.strip()]
    if len(parts) <= 1:
        return []

    # Drop syscall name (first element)
    parts = parts[1:]
    params = []

    # Parse type/name pairs
    for i in range(0, len(parts), 2):
        if i + 1 < len(parts):
            params.append({
                "type": parts[i],
                "name": parts[i + 1]
            })
    return params

def create_signature(params):
    """Create a function signature string from parameters."""
    if not params:
        return "(void)"
    param_strs = [f"{p['type']} {p['name']}" for p in params]
    return f"({', '.join(param_strs)})"

def map_params_to_registers(params, file_path, line_num):
    """Map parameters to x86-64 syscall registers.

    x86-64 syscall calling convention:
    - syscall number: rax
    - arg1: rdi
    - arg2: rsi
    - arg3: rdx
    - arg4: r10
    - arg5: r8
    - arg6: r9
    """
    regs = ['rdi', 'rsi', 'rdx', 'r10', 'r8', 'r9']
    mapped = []
    for i, reg in enumerate(regs):
        if i < len(params):
            p = params[i]
            mapped.append({
                "type": f"{p['type']} {p['name']}",
                "def": {"file": file_path, "line": line_num}
            })
        else:
            mapped.append({"type": "", "def": {}})
    return mapped

sys_calls = []

with open(SCT_PATH, "r", encoding="utf-8", errors="ignore") as sct_file:
    for line in sct_file:
        if line.startswith("#") or not line.strip():
            continue

        parts = line.split()
        if len(parts) > 3 and parts[0].isdigit():
            nr = int(parts[0])
            name = parts[3]
            hex_id = f"0x{nr:x}"

            sc_def = find_syscall_define(name)

            if sc_def:
                params = extract_params_from_macro(sc_def)
                sig_clean = create_signature(params)
                file_path = sc_def.get("path", "not found")
                line_num = int(sc_def.get("line", 0))
                register_data = map_params_to_registers(params, file_path, line_num)
            else:
                entry = find_symbol(name, kind="function")
                if entry:
                    e = entry[0]
                    sig_clean = e.get("signature", "(void)").strip()
                    file_path = e.get("path", "not found")
                    line_num = int(e.get("line", 0))
                    register_data = [{"type": "", "def": {}} for _ in range(6)]
                else:
                    sig_clean = "not found"
                    file_path = "not found"
                    line_num = ""
                    register_data = [{"type": "", "def": {}} for _ in range(6)]

            details = [nr, name, sig_clean, hex_id] + register_data + [file_path, line_num if line_num else ""]
            sys_calls.append(details)

output = json.dumps({"aaData": sys_calls}, indent=3, ensure_ascii=False)
sys.stdout.write("var syscalls_x86_64 = ")
sys.stdout.write(output)
sys.stdout.write(";\n")
