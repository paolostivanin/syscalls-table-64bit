#!/bin/bash
set -euo pipefail

KERNEL_VERSION="6.17.4"
LINK="https://www.kernel.org/pub/linux/kernel/v6.x/linux-${KERNEL_VERSION}.tar.xz"
WORKDIR="/tmp/linux-${KERNEL_VERSION}"

if [ ! -d "$WORKDIR" ]; then
    curl -L "$LINK" -o "${WORKDIR}.tar.xz"
    tar -xf "${WORKDIR}.tar.xz" -C /tmp/
fi

TBL_64="${WORKDIR}/arch/x86/entry/syscalls/syscall_64.tbl"
if [ ! -f "$TBL_64" ]; then
    echo "File syscall_64.tbl doesn't exist"
    exit 1
fi

echo "[+] Generating tags..."
ctags --fields=+nKsSt --languages=C --output-format=json -R "$WORKDIR" > "${WORKDIR}/tags.json"

cp "$TBL_64" syscall_64.tbl
sed -i 's/__x64_//g; s/__x32_compat_//g' syscall_64.tbl

echo "[+] Running gen_syscalls.py..."
KERNEL_VERSION=$KERNEL_VERSION ./gen_syscalls.py > www/syscalls-x86_64.js

rm -rf "$WORKDIR" "${WORKDIR}.tar.xz" syscall_64.tbl
echo "[+] Done!"
