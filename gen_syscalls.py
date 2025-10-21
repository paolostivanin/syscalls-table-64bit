#!/usr/bin/env python3
import json, re, os, sys

KERNEL_VERSION = os.getenv("KERNEL_VERSION", "6.17.4")
TAGS_PATH = f"/tmp/linux-{KERNEL_VERSION}/tags.json"
SCT_PATH = "syscall_64.tbl"

def load_tags(path):
    with open(path, "r", encoding="utf-8", errors="ignore") as f:
        return [json.loads(line) for line in f if line.strip()]

print(f"[+] Loading tags from {TAGS_PATH}", file=sys.stderr)
tags = load_tags(TAGS_PATH)

# Index tags by name
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
    pattern = re.compile(rf"SYSCALL_DEFINE\d+\({re.escape(name)}")
    for t in tags:
        pat = t.get("pattern")
        if pat and pattern.search(pat):
            return t
    return None

sys_calls = []
i = 0

with open(SCT_PATH, "r", encoding="utf-8", errors="ignore") as sct_file:
    for line in sct_file:
        if line.startswith("#") or not line.strip():
            continue
        parts = line.split()
        if len(parts) > 3 and parts[0].isdigit():
            nr = int(parts[0])
            name = parts[3]
            hex_id = f"0x{nr:x}"
            entry = find_symbol(name, kind="function")

            if entry:
                e = entry[0]
                sig = e.get("signature", "(void)")
                sig_clean = sig.strip()
                if sig_clean == "(void)":
                    params = []
                else:
                    params = [p.strip() for p in sig_clean.strip("()").split(",") if p.strip()]

                details = [nr, name, sig_clean, hex_id]
                ...
                sys_calls.append(details)
            else:
                sys_calls.append([nr, name, "not found", hex_id, "", "", "", "", "", "", "not found", ""])
        else:
            sys_calls.append(["", "not implemented", "", "", "", "", "", "", "", "", "", ""])

output = json.dumps({"aaData": sys_calls}, indent=3, ensure_ascii=False)

# Print as valid JS variable declaration (no trailing newline issues)
sys.stdout.write("var syscalls_x86_64 = ")
sys.stdout.write(output)
sys.stdout.write(";\n")
