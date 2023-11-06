#!/bin/bash

KERNEL_VERSION="6.6"
LINK="https://www.kernel.org/pub/linux/kernel/v6.x/linux-${KERNEL_VERSION}.tar.xz"

TBL_64="/tmp/linux-${KERNEL_VERSION}/arch/x86/entry/syscalls/syscall_64.tbl"

if [ ! -d ${DIR}/linux-${KERNEL_VERSION} ];then
    curl -L $LINK > /tmp/linux-${KERNEL_VERSION}.tar.xz
    tar xf /tmp/linux-${KERNEL_VERSION}.tar.xz -C /tmp/
fi

if [ ! -f ${TBL_64} ];then
	echo "File syscall_64.tbl doesn't exist"
	exit -1
fi

echo "[+] Generating tags, this may take a while..."
ctags --fields=afmikKlnsStz --c-kinds=+pc -R /tmp/linux-${KERNEL_VERSION}
echo "[+] Tags generated"
echo "[+] Preparing the syscall table file..."
cp -v $TBL_64 .
sed -i "s/__x64_//g" syscall_64.tbl
sed -i "s/__x32_compat_//g" syscall_64.tbl
echo "[+] Done :)"
rm -rf "/tmp/linux-${KERNEL_VERSION}"
rm -rf "/tmp/linux-${KERNEL_VERSION}.tar.xz"
echo "[I] Calling gen_syscalls.py..."
./gen_syscalls.py > www/syscalls-x86_64.js
rm -rf tags
rm -rf syscall_64.tbl
sed -i "s/\/tmp\/linux-${KERNEL_VERSION}\///g" www/syscalls-x86_64.js
