#!/bin/bash
set -euo pipefail

KERNEL_VERSION="6.17.3"
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
ctags -R \
  --languages=C \
  --fields=+nKsSt \
  --fields-c=+{macrodef} \
  --kinds-C=+p \
  --output-format=json \
  --regex-C='/^[[:space:]]*SYSCALL_DEFINE[0-9]*[[:space:]]*\(([a-zA-Z0-9_]+).*/sys_\1/f,function/' \
  --regex-C='/^[[:space:]]*COMPAT_SYSCALL_DEFINE[0-9]*[[:space:]]*\(([a-zA-Z0-9_]+).*/sys_\1/f,function/' \
  --regex-C='/^[[:space:]]*SYSCALL_DEFINE_COMPAT[0-9]*[[:space:]]*\(([a-zA-Z0-9_]+).*/sys_\1/f,function/' \
  --regex-C='/^[[:space:]]*COND_SYSCALL[[:space:]]*\(([a-zA-Z0-9_]+).*/sys_\1/f,function/' \
  --regex-C='/^[[:space:]]*SYSCALL_ALIAS[[:space:]]*\(([a-zA-Z0-9_]+).*/sys_\1/f,function/' \
  ${WORKDIR}/arch/x86 \
  ${WORKDIR}/include \
  ${WORKDIR}/kernel \
  ${WORKDIR}/fs \
  > ${WORKDIR}/tags.json

cp "$TBL_64" syscall_64.tbl
sed -i 's/__x64_//g; s/__x32_compat_//g' syscall_64.tbl

echo "[+] Running gen_syscalls.py..."
KERNEL_VERSION=$KERNEL_VERSION ./gen_syscalls.py > www/syscalls-x86_64.js

#rm -rf "$WORKDIR" "${WORKDIR}.tar.xz" syscall_64.tbl
echo "[+] Done!"
