#!/bin/bash

KERNEL_VERSION="4.10"
LINK="https://www.kernel.org/pub/linux/kernel/v4.x/linux-${KERNEL_VERSION}.tar.xz"

TBL_64="/tmp/linux-${KERNEL_VERSION}/arch/x86/entry/syscalls/syscall_64.tbl"

if [ ! -d ${DIR}/linux-${KERNEL_VERSION} ];then
    curl $LINK > /tmp/linux-${KERNEL_VERSION}.tar.xz
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
sed -i '1,8d' syscall_64.tbl
echo "[+] Done :)"
rm -rf "/tmp/linux-${KERNEL_VERSION}"
rm -rf "/tmp/linux-${KERNEL_VERSION}.tar.xz"
echo "[I] Calling gen_syscalls.py..."
./gen_syscalls.py > www/syscalls-x86_64.js
