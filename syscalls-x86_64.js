var kernel_version = "7.2.10";
var syscalls_x86_64 = {
   "aaData": [
      [
         0,
         "sys_read",
         "(int fd, compat_arg_u64_dual (offset) size_t)",
         "0x0",
         {
            "type": "int fd",
            "def": {
               "file": "mm/readahead.c",
               "line": 762
            }
         },
         {
            "type": "compat_arg_u64_dual (offset) size_t",
            "def": {
               "file": "mm/readahead.c",
               "line": 762
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "mm/readahead.c",
         762
      ],
      [
         1,
         "sys_write",
         "(unsigned int fd, const char __user * buf, size_t count)",
         "0x1",
         {
            "type": "unsigned int fd",
            "def": {
               "file": "fs/read_write.c",
               "line": 747
            }
         },
         {
            "type": "const char __user * buf",
            "def": {
               "file": "fs/read_write.c",
               "line": 747
            }
         },
         {
            "type": "size_t count",
            "def": {
               "file": "fs/read_write.c",
               "line": 747
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/read_write.c",
         747
      ],
      [
         2,
         "sys_open",
         "(int mountdirfd, struct file_handle __user * handle, int flags)",
         "0x2",
         {
            "type": "int mountdirfd",
            "def": {
               "file": "fs/fhandle.c",
               "line": 469
            }
         },
         {
            "type": "struct file_handle __user * handle",
            "def": {
               "file": "fs/fhandle.c",
               "line": 469
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/fhandle.c",
               "line": 469
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/fhandle.c",
         469
      ],
      [
         3,
         "sys_close",
         "(unsigned int fd)",
         "0x3",
         {
            "type": "unsigned int fd",
            "def": {
               "file": "fs/open.c",
               "line": 1496
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/open.c",
         1496
      ],
      [
         4,
         "sys_newstat",
         "(const char __user * filename, struct compat_stat __user * statbuf)",
         "0x4",
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/stat.c",
               "line": 853
            }
         },
         {
            "type": "struct compat_stat __user * statbuf",
            "def": {
               "file": "fs/stat.c",
               "line": 853
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/stat.c",
         853
      ],
      [
         5,
         "sys_newfstat",
         "(unsigned int fd, struct compat_stat __user * statbuf)",
         "0x5",
         {
            "type": "unsigned int fd",
            "def": {
               "file": "fs/stat.c",
               "line": 892
            }
         },
         {
            "type": "struct compat_stat __user * statbuf",
            "def": {
               "file": "fs/stat.c",
               "line": 892
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/stat.c",
         892
      ],
      [
         6,
         "sys_newlstat",
         "(const char __user * filename, struct compat_stat __user * statbuf)",
         "0x6",
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/stat.c",
               "line": 865
            }
         },
         {
            "type": "struct compat_stat __user * statbuf",
            "def": {
               "file": "fs/stat.c",
               "line": 865
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/stat.c",
         865
      ],
      [
         7,
         "sys_poll",
         "(struct pollfd __user * ufds, unsigned int nfds, int timeout_msecs)",
         "0x7",
         {
            "type": "struct pollfd __user * ufds",
            "def": {
               "file": "fs/select.c",
               "line": 1060
            }
         },
         {
            "type": "unsigned int nfds",
            "def": {
               "file": "fs/select.c",
               "line": 1060
            }
         },
         {
            "type": "int timeout_msecs",
            "def": {
               "file": "fs/select.c",
               "line": 1060
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/select.c",
         1060
      ],
      [
         8,
         "sys_lseek",
         "(unsigned int fd, compat_off_t offset, unsigned int whence)",
         "0x8",
         {
            "type": "unsigned int fd",
            "def": {
               "file": "fs/read_write.c",
               "line": 418
            }
         },
         {
            "type": "compat_off_t offset",
            "def": {
               "file": "fs/read_write.c",
               "line": 418
            }
         },
         {
            "type": "unsigned int whence",
            "def": {
               "file": "fs/read_write.c",
               "line": 418
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/read_write.c",
         418
      ],
      [
         9,
         "sys_mmap",
         "(unsigned long addr, unsigned long len, unsigned long prot, unsigned long flags, unsigned long fd, unsigned long off)",
         "0x9",
         {
            "type": "unsigned long addr",
            "def": {
               "file": "arch/x86/kernel/sys_x86_64.c",
               "line": 89
            }
         },
         {
            "type": "unsigned long len",
            "def": {
               "file": "arch/x86/kernel/sys_x86_64.c",
               "line": 89
            }
         },
         {
            "type": "unsigned long prot",
            "def": {
               "file": "arch/x86/kernel/sys_x86_64.c",
               "line": 89
            }
         },
         {
            "type": "unsigned long flags",
            "def": {
               "file": "arch/x86/kernel/sys_x86_64.c",
               "line": 89
            }
         },
         {
            "type": "unsigned long fd",
            "def": {
               "file": "arch/x86/kernel/sys_x86_64.c",
               "line": 89
            }
         },
         {
            "type": "unsigned long off",
            "def": {
               "file": "arch/x86/kernel/sys_x86_64.c",
               "line": 89
            }
         },
         "arch/x86/kernel/sys_x86_64.c",
         89
      ],
      [
         10,
         "sys_mprotect",
         "(unsigned long start, size_t len, unsigned long prot)",
         "0xa",
         {
            "type": "unsigned long start",
            "def": {
               "file": "mm/mprotect.c",
               "line": 985
            }
         },
         {
            "type": "size_t len",
            "def": {
               "file": "mm/mprotect.c",
               "line": 985
            }
         },
         {
            "type": "unsigned long prot",
            "def": {
               "file": "mm/mprotect.c",
               "line": 985
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "mm/mprotect.c",
         985
      ],
      [
         11,
         "sys_munmap",
         "(unsigned long addr, size_t len)",
         "0xb",
         {
            "type": "unsigned long addr",
            "def": {
               "file": "mm/mmap.c",
               "line": 1076
            }
         },
         {
            "type": "size_t len",
            "def": {
               "file": "mm/mmap.c",
               "line": 1076
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "mm/mmap.c",
         1076
      ],
      [
         12,
         "sys_brk",
         "(unsigned long brk)",
         "0xc",
         {
            "type": "unsigned long brk",
            "def": {
               "file": "mm/mmap.c",
               "line": 116
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "mm/mmap.c",
         116
      ],
      [
         13,
         "sys_rt_sigaction",
         "(int sig, const struct compat_sigaction __user * act, struct compat_sigaction __user * oact, compat_size_t sigsetsize)",
         "0xd",
         {
            "type": "int sig",
            "def": {
               "file": "kernel/signal.c",
               "line": 4735
            }
         },
         {
            "type": "const struct compat_sigaction __user * act",
            "def": {
               "file": "kernel/signal.c",
               "line": 4735
            }
         },
         {
            "type": "struct compat_sigaction __user * oact",
            "def": {
               "file": "kernel/signal.c",
               "line": 4735
            }
         },
         {
            "type": "compat_size_t sigsetsize",
            "def": {
               "file": "kernel/signal.c",
               "line": 4735
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/signal.c",
         4735
      ],
      [
         14,
         "sys_rt_sigprocmask",
         "(int how, compat_sigset_t __user * nset, compat_sigset_t __user * oset, compat_size_t sigsetsize)",
         "0xe",
         {
            "type": "int how",
            "def": {
               "file": "kernel/signal.c",
               "line": 3430
            }
         },
         {
            "type": "compat_sigset_t __user * nset",
            "def": {
               "file": "kernel/signal.c",
               "line": 3430
            }
         },
         {
            "type": "compat_sigset_t __user * oset",
            "def": {
               "file": "kernel/signal.c",
               "line": 3430
            }
         },
         {
            "type": "compat_size_t sigsetsize",
            "def": {
               "file": "kernel/signal.c",
               "line": 3430
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/signal.c",
         3430
      ],
      [
         15,
         "sys_rt_sigreturn",
         "(void)",
         "0xf",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "arch/x86/kernel/signal_64.c",
         246
      ],
      [
         16,
         "sys_ioctl",
         "(unsigned int fd, unsigned int cmd, compat_ulong_t arg)",
         "0x10",
         {
            "type": "unsigned int fd",
            "def": {
               "file": "fs/ioctl.c",
               "line": 638
            }
         },
         {
            "type": "unsigned int cmd",
            "def": {
               "file": "fs/ioctl.c",
               "line": 638
            }
         },
         {
            "type": "compat_ulong_t arg",
            "def": {
               "file": "fs/ioctl.c",
               "line": 638
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/ioctl.c",
         638
      ],
      [
         17,
         "sys_pread64",
         "(unsigned int fd, char __user * buf, size_t count)",
         "0x11",
         {
            "type": "unsigned int fd",
            "def": {
               "file": "fs/read_write.c",
               "line": 776
            }
         },
         {
            "type": "char __user * buf",
            "def": {
               "file": "fs/read_write.c",
               "line": 776
            }
         },
         {
            "type": "size_t count",
            "def": {
               "file": "fs/read_write.c",
               "line": 776
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/read_write.c",
         776
      ],
      [
         18,
         "sys_pwrite64",
         "(unsigned int fd, const char __user * buf, size_t count)",
         "0x12",
         {
            "type": "unsigned int fd",
            "def": {
               "file": "fs/read_write.c",
               "line": 806
            }
         },
         {
            "type": "const char __user * buf",
            "def": {
               "file": "fs/read_write.c",
               "line": 806
            }
         },
         {
            "type": "size_t count",
            "def": {
               "file": "fs/read_write.c",
               "line": 806
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/read_write.c",
         806
      ],
      [
         19,
         "sys_readv",
         "(unsigned long fd, const struct iovec __user * vec, unsigned long vlen)",
         "0x13",
         {
            "type": "unsigned long fd",
            "def": {
               "file": "fs/read_write.c",
               "line": 1163
            }
         },
         {
            "type": "const struct iovec __user * vec",
            "def": {
               "file": "fs/read_write.c",
               "line": 1163
            }
         },
         {
            "type": "unsigned long vlen",
            "def": {
               "file": "fs/read_write.c",
               "line": 1163
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/read_write.c",
         1163
      ],
      [
         20,
         "sys_writev",
         "(unsigned long fd, const struct iovec __user * vec, unsigned long vlen)",
         "0x14",
         {
            "type": "unsigned long fd",
            "def": {
               "file": "fs/read_write.c",
               "line": 1169
            }
         },
         {
            "type": "const struct iovec __user * vec",
            "def": {
               "file": "fs/read_write.c",
               "line": 1169
            }
         },
         {
            "type": "unsigned long vlen",
            "def": {
               "file": "fs/read_write.c",
               "line": 1169
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/read_write.c",
         1169
      ],
      [
         21,
         "sys_access",
         "(const char __user * filename, int mode)",
         "0x15",
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/open.c",
               "line": 545
            }
         },
         {
            "type": "int mode",
            "def": {
               "file": "fs/open.c",
               "line": 545
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/open.c",
         545
      ],
      [
         22,
         "sys_pipe",
         "(int __user * fildes)",
         "0x16",
         {
            "type": "int __user * fildes",
            "def": {
               "file": "fs/pipe.c",
               "line": 1157
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/pipe.c",
         1157
      ],
      [
         23,
         "sys_select",
         "(int n, compat_ulong_t __user * inp, compat_ulong_t __user * outp, compat_ulong_t __user * exp, struct old_timeval32 __user * tvp)",
         "0x17",
         {
            "type": "int n",
            "def": {
               "file": "fs/select.c",
               "line": 1279
            }
         },
         {
            "type": "compat_ulong_t __user * inp",
            "def": {
               "file": "fs/select.c",
               "line": 1279
            }
         },
         {
            "type": "compat_ulong_t __user * outp",
            "def": {
               "file": "fs/select.c",
               "line": 1279
            }
         },
         {
            "type": "compat_ulong_t __user * exp",
            "def": {
               "file": "fs/select.c",
               "line": 1279
            }
         },
         {
            "type": "struct old_timeval32 __user * tvp",
            "def": {
               "file": "fs/select.c",
               "line": 1279
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/select.c",
         1279
      ],
      [
         24,
         "sys_sched_yield",
         "(void)",
         "0x18",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sched/syscalls.c",
         1360
      ],
      [
         25,
         "sys_mremap",
         "(unsigned long addr, unsigned long old_len, unsigned long new_len, unsigned long flags, unsigned long new_addr)",
         "0x19",
         {
            "type": "unsigned long addr",
            "def": {
               "file": "mm/mremap.c",
               "line": 2033
            }
         },
         {
            "type": "unsigned long old_len",
            "def": {
               "file": "mm/mremap.c",
               "line": 2033
            }
         },
         {
            "type": "unsigned long new_len",
            "def": {
               "file": "mm/mremap.c",
               "line": 2033
            }
         },
         {
            "type": "unsigned long flags",
            "def": {
               "file": "mm/mremap.c",
               "line": 2033
            }
         },
         {
            "type": "unsigned long new_addr",
            "def": {
               "file": "mm/mremap.c",
               "line": 2033
            }
         },
         {
            "type": "",
            "def": {}
         },
         "mm/mremap.c",
         2033
      ],
      [
         26,
         "sys_msync",
         "(unsigned long start, size_t len, int flags)",
         "0x1a",
         {
            "type": "unsigned long start",
            "def": {
               "file": "mm/msync.c",
               "line": 32
            }
         },
         {
            "type": "size_t len",
            "def": {
               "file": "mm/msync.c",
               "line": 32
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "mm/msync.c",
               "line": 32
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "mm/msync.c",
         32
      ],
      [
         27,
         "sys_mincore",
         "(unsigned long start, size_t len, unsigned char __user * vec)",
         "0x1b",
         {
            "type": "unsigned long start",
            "def": {
               "file": "mm/mincore.c",
               "line": 291
            }
         },
         {
            "type": "size_t len",
            "def": {
               "file": "mm/mincore.c",
               "line": 291
            }
         },
         {
            "type": "unsigned char __user * vec",
            "def": {
               "file": "mm/mincore.c",
               "line": 291
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "mm/mincore.c",
         291
      ],
      [
         28,
         "sys_madvise",
         "(unsigned long start, size_t len_in, int behavior)",
         "0x1c",
         {
            "type": "unsigned long start",
            "def": {
               "file": "mm/madvise.c",
               "line": 2020
            }
         },
         {
            "type": "size_t len_in",
            "def": {
               "file": "mm/madvise.c",
               "line": 2020
            }
         },
         {
            "type": "int behavior",
            "def": {
               "file": "mm/madvise.c",
               "line": 2020
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "mm/madvise.c",
         2020
      ],
      [
         29,
         "sys_shmget",
         "(key_t key, size_t size, int shmflg)",
         "0x1d",
         {
            "type": "key_t key",
            "def": {
               "file": "ipc/shm.c",
               "line": 849
            }
         },
         {
            "type": "size_t size",
            "def": {
               "file": "ipc/shm.c",
               "line": 849
            }
         },
         {
            "type": "int shmflg",
            "def": {
               "file": "ipc/shm.c",
               "line": 849
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "ipc/shm.c",
         849
      ],
      [
         30,
         "sys_shmat",
         "(int shmid, compat_uptr_t shmaddr, int shmflg)",
         "0x1e",
         {
            "type": "int shmid",
            "def": {
               "file": "ipc/shm.c",
               "line": 1713
            }
         },
         {
            "type": "compat_uptr_t shmaddr",
            "def": {
               "file": "ipc/shm.c",
               "line": 1713
            }
         },
         {
            "type": "int shmflg",
            "def": {
               "file": "ipc/shm.c",
               "line": 1713
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "ipc/shm.c",
         1713
      ],
      [
         31,
         "sys_shmctl",
         "(int shmid, int cmd, void __user * uptr)",
         "0x1f",
         {
            "type": "int shmid",
            "def": {
               "file": "ipc/shm.c",
               "line": 1494
            }
         },
         {
            "type": "int cmd",
            "def": {
               "file": "ipc/shm.c",
               "line": 1494
            }
         },
         {
            "type": "void __user * uptr",
            "def": {
               "file": "ipc/shm.c",
               "line": 1494
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "ipc/shm.c",
         1494
      ],
      [
         32,
         "sys_dup",
         "(unsigned int fildes)",
         "0x20",
         {
            "type": "unsigned int fildes",
            "def": {
               "file": "fs/file.c",
               "line": 1481
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/file.c",
         1481
      ],
      [
         33,
         "sys_dup2",
         "(unsigned int oldfd, unsigned int newfd)",
         "0x21",
         {
            "type": "unsigned int oldfd",
            "def": {
               "file": "fs/file.c",
               "line": 1462
            }
         },
         {
            "type": "unsigned int newfd",
            "def": {
               "file": "fs/file.c",
               "line": 1462
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/file.c",
         1462
      ],
      [
         34,
         "sys_pause",
         "(void)",
         "0x22",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/signal.c",
         4903
      ],
      [
         35,
         "sys_nanosleep",
         "(struct __kernel_timespec __user * rqtp, struct __kernel_timespec __user * rmtp)",
         "0x23",
         {
            "type": "struct __kernel_timespec __user * rqtp",
            "def": {
               "file": "kernel/time/hrtimer.c",
               "line": 2475
            }
         },
         {
            "type": "struct __kernel_timespec __user * rmtp",
            "def": {
               "file": "kernel/time/hrtimer.c",
               "line": 2475
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/time/hrtimer.c",
         2475
      ],
      [
         36,
         "sys_getitimer",
         "(int which, struct old_itimerval32 __user * value)",
         "0x24",
         {
            "type": "int which",
            "def": {
               "file": "kernel/time/itimer.c",
               "line": 141
            }
         },
         {
            "type": "struct old_itimerval32 __user * value",
            "def": {
               "file": "kernel/time/itimer.c",
               "line": 141
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/time/itimer.c",
         141
      ],
      [
         37,
         "sys_alarm",
         "(unsigned int seconds)",
         "0x25",
         {
            "type": "unsigned int seconds",
            "def": {
               "file": "kernel/time/itimer.c",
               "line": 325
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/time/itimer.c",
         325
      ],
      [
         38,
         "sys_setitimer",
         "(int which, struct old_itimerval32 __user * value, struct old_itimerval32 __user * ovalue)",
         "0x26",
         {
            "type": "int which",
            "def": {
               "file": "kernel/time/itimer.c",
               "line": 397
            }
         },
         {
            "type": "struct old_itimerval32 __user * value",
            "def": {
               "file": "kernel/time/itimer.c",
               "line": 397
            }
         },
         {
            "type": "struct old_itimerval32 __user * ovalue",
            "def": {
               "file": "kernel/time/itimer.c",
               "line": 397
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/time/itimer.c",
         397
      ],
      [
         39,
         "sys_getpid",
         "(void)",
         "0x27",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         999
      ],
      [
         40,
         "sys_sendfile64",
         "(int out_fd, int in_fd, compat_loff_t __user * offset, compat_size_t count)",
         "0x28",
         {
            "type": "int out_fd",
            "def": {
               "file": "fs/read_write.c",
               "line": 1456
            }
         },
         {
            "type": "int in_fd",
            "def": {
               "file": "fs/read_write.c",
               "line": 1456
            }
         },
         {
            "type": "compat_loff_t __user * offset",
            "def": {
               "file": "fs/read_write.c",
               "line": 1456
            }
         },
         {
            "type": "compat_size_t count",
            "def": {
               "file": "fs/read_write.c",
               "line": 1456
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/read_write.c",
         1456
      ],
      [
         41,
         "sys_socket",
         "(int call, u32 __user * args)",
         "0x29",
         {
            "type": "int call",
            "def": {
               "file": "net/compat.c",
               "line": 422
            }
         },
         {
            "type": "u32 __user * args",
            "def": {
               "file": "net/compat.c",
               "line": 422
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "net/compat.c",
         422
      ],
      [
         42,
         "sys_connect",
         "(int fd, struct sockaddr __user * uservaddr, int addrlen)",
         "0x2a",
         {
            "type": "int fd",
            "def": {
               "file": "net/socket.c",
               "line": 2157
            }
         },
         {
            "type": "struct sockaddr __user * uservaddr",
            "def": {
               "file": "net/socket.c",
               "line": 2157
            }
         },
         {
            "type": "int addrlen",
            "def": {
               "file": "net/socket.c",
               "line": 2157
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "net/socket.c",
         2157
      ],
      [
         43,
         "sys_accept",
         "(int fd, struct sockaddr __user * upeer_sockaddr, int __user * upeer_addrlen)",
         "0x2b",
         {
            "type": "int fd",
            "def": {
               "file": "net/socket.c",
               "line": 2100
            }
         },
         {
            "type": "struct sockaddr __user * upeer_sockaddr",
            "def": {
               "file": "net/socket.c",
               "line": 2100
            }
         },
         {
            "type": "int __user * upeer_addrlen",
            "def": {
               "file": "net/socket.c",
               "line": 2100
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "net/socket.c",
         2100
      ],
      [
         44,
         "sys_sendto",
         "(int fd, void __user * buff, size_t len, unsigned int flags, struct sockaddr __user * addr, int addr_len)",
         "0x2c",
         {
            "type": "int fd",
            "def": {
               "file": "net/socket.c",
               "line": 2255
            }
         },
         {
            "type": "void __user * buff",
            "def": {
               "file": "net/socket.c",
               "line": 2255
            }
         },
         {
            "type": "size_t len",
            "def": {
               "file": "net/socket.c",
               "line": 2255
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "net/socket.c",
               "line": 2255
            }
         },
         {
            "type": "struct sockaddr __user * addr",
            "def": {
               "file": "net/socket.c",
               "line": 2255
            }
         },
         {
            "type": "int addr_len",
            "def": {
               "file": "net/socket.c",
               "line": 2255
            }
         },
         "net/socket.c",
         2255
      ],
      [
         45,
         "sys_recvfrom",
         "(int fd, void __user * buf, compat_size_t len, unsigned int flags, struct sockaddr __user * addr, int __user * addrlen)",
         "0x2d",
         {
            "type": "int fd",
            "def": {
               "file": "net/compat.c",
               "line": 397
            }
         },
         {
            "type": "void __user * buf",
            "def": {
               "file": "net/compat.c",
               "line": 397
            }
         },
         {
            "type": "compat_size_t len",
            "def": {
               "file": "net/compat.c",
               "line": 397
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "net/compat.c",
               "line": 397
            }
         },
         {
            "type": "struct sockaddr __user * addr",
            "def": {
               "file": "net/compat.c",
               "line": 397
            }
         },
         {
            "type": "int __user * addrlen",
            "def": {
               "file": "net/compat.c",
               "line": 397
            }
         },
         "net/compat.c",
         397
      ],
      [
         46,
         "sys_sendmsg",
         "(int fd, struct compat_msghdr __user * msg, unsigned int flags)",
         "0x2e",
         {
            "type": "int fd",
            "def": {
               "file": "net/compat.c",
               "line": 349
            }
         },
         {
            "type": "struct compat_msghdr __user * msg",
            "def": {
               "file": "net/compat.c",
               "line": 349
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "net/compat.c",
               "line": 349
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "net/compat.c",
         349
      ],
      [
         47,
         "sys_recvmsg",
         "(int fd, struct compat_msghdr __user * msg, unsigned int flags)",
         "0x2f",
         {
            "type": "int fd",
            "def": {
               "file": "net/compat.c",
               "line": 377
            }
         },
         {
            "type": "struct compat_msghdr __user * msg",
            "def": {
               "file": "net/compat.c",
               "line": 377
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "net/compat.c",
               "line": 377
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "net/compat.c",
         377
      ],
      [
         48,
         "sys_shutdown",
         "(int fd, int how)",
         "0x30",
         {
            "type": "int fd",
            "def": {
               "file": "net/socket.c",
               "line": 2544
            }
         },
         {
            "type": "int how",
            "def": {
               "file": "net/socket.c",
               "line": 2544
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "net/socket.c",
         2544
      ],
      [
         49,
         "sys_bind",
         "(int fd, struct sockaddr __user * umyaddr, int addrlen)",
         "0x31",
         {
            "type": "int fd",
            "def": {
               "file": "net/socket.c",
               "line": 1954
            }
         },
         {
            "type": "struct sockaddr __user * umyaddr",
            "def": {
               "file": "net/socket.c",
               "line": 1954
            }
         },
         {
            "type": "int addrlen",
            "def": {
               "file": "net/socket.c",
               "line": 1954
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "net/socket.c",
         1954
      ],
      [
         50,
         "sys_listen",
         "(int fd, int backlog)",
         "0x32",
         {
            "type": "int fd",
            "def": {
               "file": "net/socket.c",
               "line": 1992
            }
         },
         {
            "type": "int backlog",
            "def": {
               "file": "net/socket.c",
               "line": 1992
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "net/socket.c",
         1992
      ],
      [
         51,
         "sys_getsockname",
         "(int fd, struct sockaddr __user * usockaddr, int __user * usockaddr_len)",
         "0x33",
         {
            "type": "int fd",
            "def": {
               "file": "net/socket.c",
               "line": 2200
            }
         },
         {
            "type": "struct sockaddr __user * usockaddr",
            "def": {
               "file": "net/socket.c",
               "line": 2200
            }
         },
         {
            "type": "int __user * usockaddr_len",
            "def": {
               "file": "net/socket.c",
               "line": 2200
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "net/socket.c",
         2200
      ],
      [
         52,
         "sys_getpeername",
         "(int fd, struct sockaddr __user * usockaddr, int __user * usockaddr_len)",
         "0x34",
         {
            "type": "int fd",
            "def": {
               "file": "net/socket.c",
               "line": 2206
            }
         },
         {
            "type": "struct sockaddr __user * usockaddr",
            "def": {
               "file": "net/socket.c",
               "line": 2206
            }
         },
         {
            "type": "int __user * usockaddr_len",
            "def": {
               "file": "net/socket.c",
               "line": 2206
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "net/socket.c",
         2206
      ],
      [
         53,
         "sys_socketpair",
         "(int family, int type, int protocol, int __user * usockvec)",
         "0x35",
         {
            "type": "int family",
            "def": {
               "file": "net/socket.c",
               "line": 1906
            }
         },
         {
            "type": "int type",
            "def": {
               "file": "net/socket.c",
               "line": 1906
            }
         },
         {
            "type": "int protocol",
            "def": {
               "file": "net/socket.c",
               "line": 1906
            }
         },
         {
            "type": "int __user * usockvec",
            "def": {
               "file": "net/socket.c",
               "line": 1906
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "net/socket.c",
         1906
      ],
      [
         54,
         "sys_setsockopt",
         "(int fd, int level, int optname, char __user * optval, int optlen)",
         "0x36",
         {
            "type": "int fd",
            "def": {
               "file": "net/socket.c",
               "line": 2396
            }
         },
         {
            "type": "int level",
            "def": {
               "file": "net/socket.c",
               "line": 2396
            }
         },
         {
            "type": "int optname",
            "def": {
               "file": "net/socket.c",
               "line": 2396
            }
         },
         {
            "type": "char __user * optval",
            "def": {
               "file": "net/socket.c",
               "line": 2396
            }
         },
         {
            "type": "int optlen",
            "def": {
               "file": "net/socket.c",
               "line": 2396
            }
         },
         {
            "type": "",
            "def": {}
         },
         "net/socket.c",
         2396
      ],
      [
         55,
         "sys_getsockopt",
         "(int fd, int level, int optname, char __user * optval, int __user * optlen)",
         "0x37",
         {
            "type": "int fd",
            "def": {
               "file": "net/socket.c",
               "line": 2509
            }
         },
         {
            "type": "int level",
            "def": {
               "file": "net/socket.c",
               "line": 2509
            }
         },
         {
            "type": "int optname",
            "def": {
               "file": "net/socket.c",
               "line": 2509
            }
         },
         {
            "type": "char __user * optval",
            "def": {
               "file": "net/socket.c",
               "line": 2509
            }
         },
         {
            "type": "int __user * optlen",
            "def": {
               "file": "net/socket.c",
               "line": 2509
            }
         },
         {
            "type": "",
            "def": {}
         },
         "net/socket.c",
         2509
      ],
      [
         56,
         "sys_clone",
         "(struct clone_args __user * uargs, size_t size)",
         "0x38",
         {
            "type": "struct clone_args __user * uargs",
            "def": {
               "file": "kernel/fork.c",
               "line": 3033
            }
         },
         {
            "type": "size_t size",
            "def": {
               "file": "kernel/fork.c",
               "line": 3033
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/fork.c",
         3033
      ],
      [
         57,
         "sys_fork",
         "(void)",
         "0x39",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/fork.c",
         2832
      ],
      [
         58,
         "sys_vfork",
         "(void)",
         "0x3a",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/fork.c",
         2848
      ],
      [
         59,
         "sys_execve",
         "(const char __user * filename, const compat_uptr_t __user * argv, const compat_uptr_t __user * envp)",
         "0x3b",
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/exec.c",
               "line": 1994
            }
         },
         {
            "type": "const compat_uptr_t __user * argv",
            "def": {
               "file": "fs/exec.c",
               "line": 1994
            }
         },
         {
            "type": "const compat_uptr_t __user * envp",
            "def": {
               "file": "fs/exec.c",
               "line": 1994
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/exec.c",
         1994
      ],
      [
         60,
         "sys_exit",
         "(int error_code)",
         "0x3c",
         {
            "type": "int error_code",
            "def": {
               "file": "kernel/exit.c",
               "line": 1095
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/exit.c",
         1095
      ],
      [
         61,
         "sys_wait4",
         "(compat_pid_t pid, compat_uint_t __user * stat_addr, int options, struct compat_rusage __user * ru)",
         "0x3d",
         {
            "type": "compat_pid_t pid",
            "def": {
               "file": "kernel/exit.c",
               "line": 1944
            }
         },
         {
            "type": "compat_uint_t __user * stat_addr",
            "def": {
               "file": "kernel/exit.c",
               "line": 1944
            }
         },
         {
            "type": "int options",
            "def": {
               "file": "kernel/exit.c",
               "line": 1944
            }
         },
         {
            "type": "struct compat_rusage __user * ru",
            "def": {
               "file": "kernel/exit.c",
               "line": 1944
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/exit.c",
         1944
      ],
      [
         62,
         "sys_kill",
         "(pid_t pid, int sig)",
         "0x3e",
         {
            "type": "pid_t pid",
            "def": {
               "file": "kernel/signal.c",
               "line": 4030
            }
         },
         {
            "type": "int sig",
            "def": {
               "file": "kernel/signal.c",
               "line": 4030
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/signal.c",
         4030
      ],
      [
         63,
         "sys_newuname",
         "(struct new_utsname __user * name)",
         "0x3f",
         {
            "type": "struct new_utsname __user * name",
            "def": {
               "file": "kernel/sys.c",
               "line": 1351
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         1351
      ],
      [
         64,
         "sys_semget",
         "(key_t key, int nsems, int semflg)",
         "0x40",
         {
            "type": "key_t key",
            "def": {
               "file": "ipc/sem.c",
               "line": 624
            }
         },
         {
            "type": "int nsems",
            "def": {
               "file": "ipc/sem.c",
               "line": 624
            }
         },
         {
            "type": "int semflg",
            "def": {
               "file": "ipc/sem.c",
               "line": 624
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "ipc/sem.c",
         624
      ],
      [
         65,
         "sys_semop",
         "(int semid, struct sembuf __user * tsops, unsigned int nsops)",
         "0x41",
         {
            "type": "int semid",
            "def": {
               "file": "ipc/sem.c",
               "line": 2296
            }
         },
         {
            "type": "struct sembuf __user * tsops",
            "def": {
               "file": "ipc/sem.c",
               "line": 2296
            }
         },
         {
            "type": "unsigned int nsops",
            "def": {
               "file": "ipc/sem.c",
               "line": 2296
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "ipc/sem.c",
         2296
      ],
      [
         66,
         "sys_semctl",
         "(int semid, int semnum, int cmd, int arg)",
         "0x42",
         {
            "type": "int semid",
            "def": {
               "file": "ipc/sem.c",
               "line": 1819
            }
         },
         {
            "type": "int semnum",
            "def": {
               "file": "ipc/sem.c",
               "line": 1819
            }
         },
         {
            "type": "int cmd",
            "def": {
               "file": "ipc/sem.c",
               "line": 1819
            }
         },
         {
            "type": "int arg",
            "def": {
               "file": "ipc/sem.c",
               "line": 1819
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "ipc/sem.c",
         1819
      ],
      [
         67,
         "sys_shmdt",
         "(char __user * shmaddr)",
         "0x43",
         {
            "type": "char __user * shmaddr",
            "def": {
               "file": "ipc/shm.c",
               "line": 1836
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "ipc/shm.c",
         1836
      ],
      [
         68,
         "sys_msgget",
         "(key_t key, int msgflg)",
         "0x44",
         {
            "type": "key_t key",
            "def": {
               "file": "ipc/msg.c",
               "line": 315
            }
         },
         {
            "type": "int msgflg",
            "def": {
               "file": "ipc/msg.c",
               "line": 315
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "ipc/msg.c",
         315
      ],
      [
         69,
         "sys_msgsnd",
         "(int msqid, compat_uptr_t msgp, compat_ssize_t msgsz, int msgflg)",
         "0x45",
         {
            "type": "int msqid",
            "def": {
               "file": "ipc/msg.c",
               "line": 995
            }
         },
         {
            "type": "compat_uptr_t msgp",
            "def": {
               "file": "ipc/msg.c",
               "line": 995
            }
         },
         {
            "type": "compat_ssize_t msgsz",
            "def": {
               "file": "ipc/msg.c",
               "line": 995
            }
         },
         {
            "type": "int msgflg",
            "def": {
               "file": "ipc/msg.c",
               "line": 995
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "ipc/msg.c",
         995
      ],
      [
         70,
         "sys_msgrcv",
         "(int msqid, compat_uptr_t msgp, compat_ssize_t msgsz, compat_long_t msgtyp, int msgflg)",
         "0x46",
         {
            "type": "int msqid",
            "def": {
               "file": "ipc/msg.c",
               "line": 1298
            }
         },
         {
            "type": "compat_uptr_t msgp",
            "def": {
               "file": "ipc/msg.c",
               "line": 1298
            }
         },
         {
            "type": "compat_ssize_t msgsz",
            "def": {
               "file": "ipc/msg.c",
               "line": 1298
            }
         },
         {
            "type": "compat_long_t msgtyp",
            "def": {
               "file": "ipc/msg.c",
               "line": 1298
            }
         },
         {
            "type": "int msgflg",
            "def": {
               "file": "ipc/msg.c",
               "line": 1298
            }
         },
         {
            "type": "",
            "def": {}
         },
         "ipc/msg.c",
         1298
      ],
      [
         71,
         "sys_msgctl",
         "(int msqid, int cmd, void __user * uptr)",
         "0x47",
         {
            "type": "int msqid",
            "def": {
               "file": "ipc/msg.c",
               "line": 774
            }
         },
         {
            "type": "int cmd",
            "def": {
               "file": "ipc/msg.c",
               "line": 774
            }
         },
         {
            "type": "void __user * uptr",
            "def": {
               "file": "ipc/msg.c",
               "line": 774
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "ipc/msg.c",
         774
      ],
      [
         72,
         "sys_fcntl",
         "(unsigned int fd, unsigned int cmd, compat_ulong_t arg)",
         "0x48",
         {
            "type": "unsigned int fd",
            "def": {
               "file": "fs/fcntl.c",
               "line": 812
            }
         },
         {
            "type": "unsigned int cmd",
            "def": {
               "file": "fs/fcntl.c",
               "line": 812
            }
         },
         {
            "type": "compat_ulong_t arg",
            "def": {
               "file": "fs/fcntl.c",
               "line": 812
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/fcntl.c",
         812
      ],
      [
         73,
         "sys_flock",
         "(unsigned int fd, unsigned int cmd)",
         "0x49",
         {
            "type": "unsigned int fd",
            "def": {
               "file": "fs/locks.c",
               "line": 2280
            }
         },
         {
            "type": "unsigned int cmd",
            "def": {
               "file": "fs/locks.c",
               "line": 2280
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/locks.c",
         2280
      ],
      [
         74,
         "sys_fsync",
         "(unsigned int fd)",
         "0x4a",
         {
            "type": "unsigned int fd",
            "def": {
               "file": "fs/sync.c",
               "line": 214
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/sync.c",
         214
      ],
      [
         75,
         "sys_fdatasync",
         "(unsigned int fd)",
         "0x4b",
         {
            "type": "unsigned int fd",
            "def": {
               "file": "fs/sync.c",
               "line": 219
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/sync.c",
         219
      ],
      [
         76,
         "sys_truncate",
         "(const char __user * path, compat_off_t length)",
         "0x4c",
         {
            "type": "const char __user * path",
            "def": {
               "file": "fs/open.c",
               "line": 158
            }
         },
         {
            "type": "compat_off_t length",
            "def": {
               "file": "fs/open.c",
               "line": 158
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/open.c",
         158
      ],
      [
         77,
         "sys_ftruncate",
         "(unsigned int fd, compat_off_t length)",
         "0x4d",
         {
            "type": "unsigned int fd",
            "def": {
               "file": "fs/open.c",
               "line": 215
            }
         },
         {
            "type": "compat_off_t length",
            "def": {
               "file": "fs/open.c",
               "line": 215
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/open.c",
         215
      ],
      [
         78,
         "sys_getdents",
         "(unsigned int fd, struct compat_linux_dirent __user * dirent, unsigned int count)",
         "0x4e",
         {
            "type": "unsigned int fd",
            "def": {
               "file": "fs/readdir.c",
               "line": 544
            }
         },
         {
            "type": "struct compat_linux_dirent __user * dirent",
            "def": {
               "file": "fs/readdir.c",
               "line": 544
            }
         },
         {
            "type": "unsigned int count",
            "def": {
               "file": "fs/readdir.c",
               "line": 544
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/readdir.c",
         544
      ],
      [
         79,
         "sys_getcwd",
         "(char __user * buf, unsigned long size)",
         "0x4f",
         {
            "type": "char __user * buf",
            "def": {
               "file": "fs/d_path.c",
               "line": 413
            }
         },
         {
            "type": "unsigned long size",
            "def": {
               "file": "fs/d_path.c",
               "line": 413
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/d_path.c",
         413
      ],
      [
         80,
         "sys_chdir",
         "(const char __user * filename)",
         "0x50",
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/open.c",
               "line": 550
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/open.c",
         550
      ],
      [
         81,
         "sys_fchdir",
         "(unsigned int fd)",
         "0x51",
         {
            "type": "unsigned int fd",
            "def": {
               "file": "fs/open.c",
               "line": 571
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/open.c",
         571
      ],
      [
         82,
         "sys_rename",
         "(const char __user * oldname, const char __user * newname)",
         "0x52",
         {
            "type": "const char __user * oldname",
            "def": {
               "file": "fs/namei.c",
               "line": 6232
            }
         },
         {
            "type": "const char __user * newname",
            "def": {
               "file": "fs/namei.c",
               "line": 6232
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/namei.c",
         6232
      ],
      [
         83,
         "sys_mkdir",
         "(const char __user * pathname, umode_t mode)",
         "0x53",
         {
            "type": "const char __user * pathname",
            "def": {
               "file": "fs/namei.c",
               "line": 5333
            }
         },
         {
            "type": "umode_t mode",
            "def": {
               "file": "fs/namei.c",
               "line": 5333
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/namei.c",
         5333
      ],
      [
         84,
         "sys_rmdir",
         "(const char __user * pathname)",
         "0x54",
         {
            "type": "const char __user * pathname",
            "def": {
               "file": "fs/namei.c",
               "line": 5458
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/namei.c",
         5458
      ],
      [
         85,
         "sys_creat",
         "(const char __user * pathname, umode_t mode)",
         "0x55",
         {
            "type": "const char __user * pathname",
            "def": {
               "file": "fs/open.c",
               "line": 1446
            }
         },
         {
            "type": "umode_t mode",
            "def": {
               "file": "fs/open.c",
               "line": 1446
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/open.c",
         1446
      ],
      [
         86,
         "sys_link",
         "(const char __user * oldname, const char __user * newname)",
         "0x56",
         {
            "type": "const char __user * oldname",
            "def": {
               "file": "fs/namei.c",
               "line": 5888
            }
         },
         {
            "type": "const char __user * newname",
            "def": {
               "file": "fs/namei.c",
               "line": 5888
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/namei.c",
         5888
      ],
      [
         87,
         "sys_unlink",
         "(const char __user * pathname)",
         "0x57",
         {
            "type": "const char __user * pathname",
            "def": {
               "file": "fs/namei.c",
               "line": 5617
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/namei.c",
         5617
      ],
      [
         88,
         "sys_symlink",
         "(const char __user * oldname, const char __user * newname)",
         "0x58",
         {
            "type": "const char __user * oldname",
            "def": {
               "file": "fs/namei.c",
               "line": 5708
            }
         },
         {
            "type": "const char __user * newname",
            "def": {
               "file": "fs/namei.c",
               "line": 5708
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/namei.c",
         5708
      ],
      [
         89,
         "sys_readlink",
         "(const char __user * path, char __user * buf, int bufsiz)",
         "0x59",
         {
            "type": "const char __user * path",
            "def": {
               "file": "fs/stat.c",
               "line": 602
            }
         },
         {
            "type": "char __user * buf",
            "def": {
               "file": "fs/stat.c",
               "line": 602
            }
         },
         {
            "type": "int bufsiz",
            "def": {
               "file": "fs/stat.c",
               "line": 602
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/stat.c",
         602
      ],
      [
         90,
         "sys_chmod",
         "(const char __user * filename, umode_t mode)",
         "0x5a",
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/open.c",
               "line": 704
            }
         },
         {
            "type": "umode_t mode",
            "def": {
               "file": "fs/open.c",
               "line": 704
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/open.c",
         704
      ],
      [
         91,
         "sys_fchmod",
         "(unsigned int fd, umode_t mode)",
         "0x5b",
         {
            "type": "unsigned int fd",
            "def": {
               "file": "fs/open.c",
               "line": 657
            }
         },
         {
            "type": "umode_t mode",
            "def": {
               "file": "fs/open.c",
               "line": 657
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/open.c",
         657
      ],
      [
         92,
         "sys_chown",
         "(const char __user * filename, uid_t user, gid_t group)",
         "0x5c",
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/open.c",
               "line": 822
            }
         },
         {
            "type": "uid_t user",
            "def": {
               "file": "fs/open.c",
               "line": 822
            }
         },
         {
            "type": "gid_t group",
            "def": {
               "file": "fs/open.c",
               "line": 822
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/open.c",
         822
      ],
      [
         93,
         "sys_fchown",
         "(unsigned int fd, uid_t user, gid_t group)",
         "0x5d",
         {
            "type": "unsigned int fd",
            "def": {
               "file": "fs/open.c",
               "line": 856
            }
         },
         {
            "type": "uid_t user",
            "def": {
               "file": "fs/open.c",
               "line": 856
            }
         },
         {
            "type": "gid_t group",
            "def": {
               "file": "fs/open.c",
               "line": 856
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/open.c",
         856
      ],
      [
         94,
         "sys_lchown",
         "(const char __user * filename, uid_t user, gid_t group)",
         "0x5e",
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/open.c",
               "line": 827
            }
         },
         {
            "type": "uid_t user",
            "def": {
               "file": "fs/open.c",
               "line": 827
            }
         },
         {
            "type": "gid_t group",
            "def": {
               "file": "fs/open.c",
               "line": 827
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/open.c",
         827
      ],
      [
         95,
         "sys_umask",
         "(int mask)",
         "0x5f",
         {
            "type": "int mask",
            "def": {
               "file": "kernel/sys.c",
               "line": 1960
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         1960
      ],
      [
         96,
         "sys_gettimeofday",
         "(struct old_timeval32 __user * tv, struct timezone __user * tz)",
         "0x60",
         {
            "type": "struct old_timeval32 __user * tv",
            "def": {
               "file": "kernel/time/time.c",
               "line": 224
            }
         },
         {
            "type": "struct timezone __user * tz",
            "def": {
               "file": "kernel/time/time.c",
               "line": 224
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/time/time.c",
         224
      ],
      [
         97,
         "sys_getrlimit",
         "(unsigned int resource, struct compat_rlimit __user * rlim)",
         "0x61",
         {
            "type": "unsigned int resource",
            "def": {
               "file": "kernel/sys.c",
               "line": 1597
            }
         },
         {
            "type": "struct compat_rlimit __user * rlim",
            "def": {
               "file": "kernel/sys.c",
               "line": 1597
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         1597
      ],
      [
         98,
         "sys_getrusage",
         "(int who, struct compat_rusage __user * ru)",
         "0x62",
         {
            "type": "int who",
            "def": {
               "file": "kernel/sys.c",
               "line": 1947
            }
         },
         {
            "type": "struct compat_rusage __user * ru",
            "def": {
               "file": "kernel/sys.c",
               "line": 1947
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         1947
      ],
      [
         99,
         "sys_sysinfo",
         "(struct compat_sysinfo __user * info)",
         "0x63",
         {
            "type": "struct compat_sysinfo __user * info",
            "def": {
               "file": "kernel/sys.c",
               "line": 3027
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         3027
      ],
      [
         100,
         "sys_times",
         "(struct compat_tms __user * tbuf)",
         "0x64",
         {
            "type": "struct compat_tms __user * tbuf",
            "def": {
               "file": "kernel/sys.c",
               "line": 1083
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         1083
      ],
      [
         101,
         "sys_ptrace",
         "(compat_long_t request, compat_long_t pid, compat_long_t addr, compat_long_t data)",
         "0x65",
         {
            "type": "compat_long_t request",
            "def": {
               "file": "kernel/ptrace.c",
               "line": 1552
            }
         },
         {
            "type": "compat_long_t pid",
            "def": {
               "file": "kernel/ptrace.c",
               "line": 1552
            }
         },
         {
            "type": "compat_long_t addr",
            "def": {
               "file": "kernel/ptrace.c",
               "line": 1552
            }
         },
         {
            "type": "compat_long_t data",
            "def": {
               "file": "kernel/ptrace.c",
               "line": 1552
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/ptrace.c",
         1552
      ],
      [
         102,
         "sys_getuid",
         "(void)",
         "0x66",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         1027
      ],
      [
         103,
         "sys_syslog",
         "(int type, char __user * buf, int len)",
         "0x67",
         {
            "type": "int type",
            "def": {
               "file": "kernel/printk/printk.c",
               "line": 1853
            }
         },
         {
            "type": "char __user * buf",
            "def": {
               "file": "kernel/printk/printk.c",
               "line": 1853
            }
         },
         {
            "type": "int len",
            "def": {
               "file": "kernel/printk/printk.c",
               "line": 1853
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/printk/printk.c",
         1853
      ],
      [
         104,
         "sys_getgid",
         "(void)",
         "0x68",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         1039
      ],
      [
         105,
         "sys_setuid",
         "(uid_t uid)",
         "0x69",
         {
            "type": "uid_t uid",
            "def": {
               "file": "kernel/sys.c",
               "line": 698
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         698
      ],
      [
         106,
         "sys_setgid",
         "(gid_t gid)",
         "0x6a",
         {
            "type": "gid_t gid",
            "def": {
               "file": "kernel/sys.c",
               "line": 515
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         515
      ],
      [
         107,
         "sys_geteuid",
         "(void)",
         "0x6b",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         1033
      ],
      [
         108,
         "sys_getegid",
         "(void)",
         "0x6c",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         1045
      ],
      [
         109,
         "sys_setpgid",
         "(pid_t pid, pid_t pgid)",
         "0x6d",
         {
            "type": "pid_t pid",
            "def": {
               "file": "kernel/sys.c",
               "line": 1114
            }
         },
         {
            "type": "pid_t pgid",
            "def": {
               "file": "kernel/sys.c",
               "line": 1114
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         1114
      ],
      [
         110,
         "sys_getppid",
         "(void)",
         "0x6e",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         1016
      ],
      [
         111,
         "sys_getpgrp",
         "(void)",
         "0x6f",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         1222
      ],
      [
         112,
         "sys_setsid",
         "(void)",
         "0x70",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         1303
      ],
      [
         113,
         "sys_setreuid",
         "(uid_t ruid, uid_t euid)",
         "0x71",
         {
            "type": "uid_t ruid",
            "def": {
               "file": "kernel/sys.c",
               "line": 635
            }
         },
         {
            "type": "uid_t euid",
            "def": {
               "file": "kernel/sys.c",
               "line": 635
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         635
      ],
      [
         114,
         "sys_setregid",
         "(gid_t rgid, gid_t egid)",
         "0x72",
         {
            "type": "gid_t rgid",
            "def": {
               "file": "kernel/sys.c",
               "line": 469
            }
         },
         {
            "type": "gid_t egid",
            "def": {
               "file": "kernel/sys.c",
               "line": 469
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         469
      ],
      [
         115,
         "sys_getgroups",
         "(int gidsetsize, gid_t __user * grouplist)",
         "0x73",
         {
            "type": "int gidsetsize",
            "def": {
               "file": "kernel/groups.c",
               "line": 161
            }
         },
         {
            "type": "gid_t __user * grouplist",
            "def": {
               "file": "kernel/groups.c",
               "line": 161
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/groups.c",
         161
      ],
      [
         116,
         "sys_setgroups",
         "(int gidsetsize, gid_t __user * grouplist)",
         "0x74",
         {
            "type": "int gidsetsize",
            "def": {
               "file": "kernel/groups.c",
               "line": 198
            }
         },
         {
            "type": "gid_t __user * grouplist",
            "def": {
               "file": "kernel/groups.c",
               "line": 198
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/groups.c",
         198
      ],
      [
         117,
         "sys_setresuid",
         "(uid_t ruid, uid_t euid, uid_t suid)",
         "0x75",
         {
            "type": "uid_t ruid",
            "def": {
               "file": "kernel/sys.c",
               "line": 783
            }
         },
         {
            "type": "uid_t euid",
            "def": {
               "file": "kernel/sys.c",
               "line": 783
            }
         },
         {
            "type": "uid_t suid",
            "def": {
               "file": "kernel/sys.c",
               "line": 783
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         783
      ],
      [
         118,
         "sys_getresuid",
         "(uid_t __user * ruidp, uid_t __user * euidp, uid_t __user * suidp)",
         "0x76",
         {
            "type": "uid_t __user * ruidp",
            "def": {
               "file": "kernel/sys.c",
               "line": 788
            }
         },
         {
            "type": "uid_t __user * euidp",
            "def": {
               "file": "kernel/sys.c",
               "line": 788
            }
         },
         {
            "type": "uid_t __user * suidp",
            "def": {
               "file": "kernel/sys.c",
               "line": 788
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         788
      ],
      [
         119,
         "sys_setresgid",
         "(gid_t rgid, gid_t egid, gid_t sgid)",
         "0x77",
         {
            "type": "gid_t rgid",
            "def": {
               "file": "kernel/sys.c",
               "line": 872
            }
         },
         {
            "type": "gid_t egid",
            "def": {
               "file": "kernel/sys.c",
               "line": 872
            }
         },
         {
            "type": "gid_t sgid",
            "def": {
               "file": "kernel/sys.c",
               "line": 872
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         872
      ],
      [
         120,
         "sys_getresgid",
         "(gid_t __user * rgidp, gid_t __user * egidp, gid_t __user * sgidp)",
         "0x78",
         {
            "type": "gid_t __user * rgidp",
            "def": {
               "file": "kernel/sys.c",
               "line": 877
            }
         },
         {
            "type": "gid_t __user * egidp",
            "def": {
               "file": "kernel/sys.c",
               "line": 877
            }
         },
         {
            "type": "gid_t __user * sgidp",
            "def": {
               "file": "kernel/sys.c",
               "line": 877
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         877
      ],
      [
         121,
         "sys_getpgid",
         "(pid_t pid)",
         "0x79",
         {
            "type": "pid_t pid",
            "def": {
               "file": "kernel/sys.c",
               "line": 1215
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         1215
      ],
      [
         122,
         "sys_setfsuid",
         "(uid_t uid)",
         "0x7a",
         {
            "type": "uid_t uid",
            "def": {
               "file": "kernel/sys.c",
               "line": 940
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         940
      ],
      [
         123,
         "sys_setfsgid",
         "(gid_t gid)",
         "0x7b",
         {
            "type": "gid_t gid",
            "def": {
               "file": "kernel/sys.c",
               "line": 984
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         984
      ],
      [
         124,
         "sys_getsid",
         "(pid_t pid)",
         "0x7c",
         {
            "type": "pid_t pid",
            "def": {
               "file": "kernel/sys.c",
               "line": 1229
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         1229
      ],
      [
         125,
         "sys_capget",
         "(cap_user_header_t header, cap_user_data_t dataptr)",
         "0x7d",
         {
            "type": "cap_user_header_t header",
            "def": {
               "file": "kernel/capability.c",
               "line": 137
            }
         },
         {
            "type": "cap_user_data_t dataptr",
            "def": {
               "file": "kernel/capability.c",
               "line": 137
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/capability.c",
         137
      ],
      [
         126,
         "sys_capset",
         "(cap_user_header_t header, const cap_user_data_t data)",
         "0x7e",
         {
            "type": "cap_user_header_t header",
            "def": {
               "file": "kernel/capability.c",
               "line": 216
            }
         },
         {
            "type": "const cap_user_data_t data",
            "def": {
               "file": "kernel/capability.c",
               "line": 216
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/capability.c",
         216
      ],
      [
         127,
         "sys_rt_sigpending",
         "(compat_sigset_t __user * uset, compat_size_t sigsetsize)",
         "0x7f",
         {
            "type": "compat_sigset_t __user * uset",
            "def": {
               "file": "kernel/signal.c",
               "line": 3487
            }
         },
         {
            "type": "compat_size_t sigsetsize",
            "def": {
               "file": "kernel/signal.c",
               "line": 3487
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/signal.c",
         3487
      ],
      [
         128,
         "sys_rt_sigtimedwait",
         "(compat_sigset_t __user * uthese, struct compat_siginfo __user * uinfo, struct old_timespec32 __user * uts, compat_size_t sigsetsize)",
         "0x80",
         {
            "type": "compat_sigset_t __user * uthese",
            "def": {
               "file": "kernel/signal.c",
               "line": 3982
            }
         },
         {
            "type": "struct compat_siginfo __user * uinfo",
            "def": {
               "file": "kernel/signal.c",
               "line": 3982
            }
         },
         {
            "type": "struct old_timespec32 __user * uts",
            "def": {
               "file": "kernel/signal.c",
               "line": 3982
            }
         },
         {
            "type": "compat_size_t sigsetsize",
            "def": {
               "file": "kernel/signal.c",
               "line": 3982
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/signal.c",
         3982
      ],
      [
         129,
         "sys_rt_sigqueueinfo",
         "(compat_pid_t pid, int sig, struct compat_siginfo __user * uinfo)",
         "0x81",
         {
            "type": "compat_pid_t pid",
            "def": {
               "file": "kernel/signal.c",
               "line": 4303
            }
         },
         {
            "type": "int sig",
            "def": {
               "file": "kernel/signal.c",
               "line": 4303
            }
         },
         {
            "type": "struct compat_siginfo __user * uinfo",
            "def": {
               "file": "kernel/signal.c",
               "line": 4303
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/signal.c",
         4303
      ],
      [
         130,
         "sys_rt_sigsuspend",
         "(compat_sigset_t __user * unewset, compat_size_t sigsetsize)",
         "0x82",
         {
            "type": "compat_sigset_t __user * unewset",
            "def": {
               "file": "kernel/signal.c",
               "line": 4947
            }
         },
         {
            "type": "compat_size_t sigsetsize",
            "def": {
               "file": "kernel/signal.c",
               "line": 4947
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/signal.c",
         4947
      ],
      [
         131,
         "sys_sigaltstack",
         "(const compat_stack_t __user * uss_ptr, compat_stack_t __user * uoss_ptr)",
         "0x83",
         {
            "type": "const compat_stack_t __user * uss_ptr",
            "def": {
               "file": "kernel/signal.c",
               "line": 4591
            }
         },
         {
            "type": "compat_stack_t __user * uoss_ptr",
            "def": {
               "file": "kernel/signal.c",
               "line": 4591
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/signal.c",
         4591
      ],
      [
         132,
         "sys_utime",
         "(char __user * filename, struct utimbuf __user * times)",
         "0x84",
         {
            "type": "char __user * filename",
            "def": {
               "file": "fs/utimes.c",
               "line": 209
            }
         },
         {
            "type": "struct utimbuf __user * times",
            "def": {
               "file": "fs/utimes.c",
               "line": 209
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/utimes.c",
         209
      ],
      [
         133,
         "sys_mknod",
         "(const char __user * filename, umode_t mode, unsigned dev)",
         "0x85",
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/namei.c",
               "line": 5219
            }
         },
         {
            "type": "umode_t mode",
            "def": {
               "file": "fs/namei.c",
               "line": 5219
            }
         },
         {
            "type": "unsigned dev",
            "def": {
               "file": "fs/namei.c",
               "line": 5219
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/namei.c",
         5219
      ],
      [
         135,
         "sys_personality",
         "(unsigned int personality)",
         "0x87",
         {
            "type": "unsigned int personality",
            "def": {
               "file": "kernel/exec_domain.c",
               "line": 38
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/exec_domain.c",
         38
      ],
      [
         136,
         "sys_ustat",
         "(unsigned dev, struct compat_ustat __user * u)",
         "0x88",
         {
            "type": "unsigned dev",
            "def": {
               "file": "fs/statfs.c",
               "line": 390
            }
         },
         {
            "type": "struct compat_ustat __user * u",
            "def": {
               "file": "fs/statfs.c",
               "line": 390
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/statfs.c",
         390
      ],
      [
         137,
         "sys_statfs",
         "(const char __user * pathname, struct compat_statfs __user * buf)",
         "0x89",
         {
            "type": "const char __user * pathname",
            "def": {
               "file": "fs/statfs.c",
               "line": 304
            }
         },
         {
            "type": "struct compat_statfs __user * buf",
            "def": {
               "file": "fs/statfs.c",
               "line": 304
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/statfs.c",
         304
      ],
      [
         138,
         "sys_fstatfs",
         "(unsigned int fd, struct compat_statfs __user * buf)",
         "0x8a",
         {
            "type": "unsigned int fd",
            "def": {
               "file": "fs/statfs.c",
               "line": 313
            }
         },
         {
            "type": "struct compat_statfs __user * buf",
            "def": {
               "file": "fs/statfs.c",
               "line": 313
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/statfs.c",
         313
      ],
      [
         139,
         "sys_sysfs",
         "(int option, unsigned long arg1, unsigned long arg2)",
         "0x8b",
         {
            "type": "int option",
            "def": {
               "file": "fs/filesystems.c",
               "line": 199
            }
         },
         {
            "type": "unsigned long arg1",
            "def": {
               "file": "fs/filesystems.c",
               "line": 199
            }
         },
         {
            "type": "unsigned long arg2",
            "def": {
               "file": "fs/filesystems.c",
               "line": 199
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/filesystems.c",
         199
      ],
      [
         140,
         "sys_getpriority",
         "(int which, int who)",
         "0x8c",
         {
            "type": "int which",
            "def": {
               "file": "kernel/sys.c",
               "line": 329
            }
         },
         {
            "type": "int who",
            "def": {
               "file": "kernel/sys.c",
               "line": 329
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         329
      ],
      [
         141,
         "sys_setpriority",
         "(int which, int who, int niceval)",
         "0x8d",
         {
            "type": "int which",
            "def": {
               "file": "kernel/sys.c",
               "line": 259
            }
         },
         {
            "type": "int who",
            "def": {
               "file": "kernel/sys.c",
               "line": 259
            }
         },
         {
            "type": "int niceval",
            "def": {
               "file": "kernel/sys.c",
               "line": 259
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         259
      ],
      [
         142,
         "sys_sched_setparam",
         "(pid_t pid, struct sched_param __user * param)",
         "0x8e",
         {
            "type": "pid_t pid",
            "def": {
               "file": "kernel/sched/syscalls.c",
               "line": 949
            }
         },
         {
            "type": "struct sched_param __user * param",
            "def": {
               "file": "kernel/sched/syscalls.c",
               "line": 949
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sched/syscalls.c",
         949
      ],
      [
         143,
         "sys_sched_getparam",
         "(pid_t pid, struct sched_param __user * param)",
         "0x8f",
         {
            "type": "pid_t pid",
            "def": {
               "file": "kernel/sched/syscalls.c",
               "line": 1025
            }
         },
         {
            "type": "struct sched_param __user * param",
            "def": {
               "file": "kernel/sched/syscalls.c",
               "line": 1025
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sched/syscalls.c",
         1025
      ],
      [
         144,
         "sys_sched_setscheduler",
         "(pid_t pid, int policy, struct sched_param __user * param)",
         "0x90",
         {
            "type": "pid_t pid",
            "def": {
               "file": "kernel/sched/syscalls.c",
               "line": 934
            }
         },
         {
            "type": "int policy",
            "def": {
               "file": "kernel/sched/syscalls.c",
               "line": 934
            }
         },
         {
            "type": "struct sched_param __user * param",
            "def": {
               "file": "kernel/sched/syscalls.c",
               "line": 934
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sched/syscalls.c",
         934
      ],
      [
         145,
         "sys_sched_getscheduler",
         "(pid_t pid)",
         "0x91",
         {
            "type": "pid_t pid",
            "def": {
               "file": "kernel/sched/syscalls.c",
               "line": 995
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sched/syscalls.c",
         995
      ],
      [
         146,
         "sys_sched_get_priority_max",
         "(int policy)",
         "0x92",
         {
            "type": "int policy",
            "def": {
               "file": "kernel/sched/syscalls.c",
               "line": 1469
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sched/syscalls.c",
         1469
      ],
      [
         147,
         "sys_sched_get_priority_min",
         "(int policy)",
         "0x93",
         {
            "type": "int policy",
            "def": {
               "file": "kernel/sched/syscalls.c",
               "line": 1497
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sched/syscalls.c",
         1497
      ],
      [
         148,
         "sys_sched_rr_get_interval",
         "(pid_t pid, struct __kernel_timespec __user * interval)",
         "0x94",
         {
            "type": "pid_t pid",
            "def": {
               "file": "kernel/sched/syscalls.c",
               "line": 1555
            }
         },
         {
            "type": "struct __kernel_timespec __user * interval",
            "def": {
               "file": "kernel/sched/syscalls.c",
               "line": 1555
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sched/syscalls.c",
         1555
      ],
      [
         149,
         "sys_mlock",
         "(int flags)",
         "0x95",
         {
            "type": "int flags",
            "def": {
               "file": "mm/mlock.c",
               "line": 751
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "mm/mlock.c",
         751
      ],
      [
         150,
         "sys_munlock",
         "(void)",
         "0x96",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "mm/mlock.c",
         780
      ],
      [
         151,
         "sys_mlockall",
         "(int flags)",
         "0x97",
         {
            "type": "int flags",
            "def": {
               "file": "mm/mlock.c",
               "line": 751
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "mm/mlock.c",
         751
      ],
      [
         152,
         "sys_munlockall",
         "(void)",
         "0x98",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "mm/mlock.c",
         780
      ],
      [
         153,
         "sys_vhangup",
         "(void)",
         "0x99",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/open.c",
         1530
      ],
      [
         154,
         "sys_modify_ldt",
         "(int func, void __user * ptr, unsigned long bytecount)",
         "0x9a",
         {
            "type": "int func",
            "def": {
               "file": "arch/x86/kernel/ldt.c",
               "line": 667
            }
         },
         {
            "type": "void __user * ptr",
            "def": {
               "file": "arch/x86/kernel/ldt.c",
               "line": 667
            }
         },
         {
            "type": "unsigned long bytecount",
            "def": {
               "file": "arch/x86/kernel/ldt.c",
               "line": 667
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "arch/x86/kernel/ldt.c",
         667
      ],
      [
         155,
         "sys_pivot_root",
         "(const char __user * new_root, const char __user * put_old)",
         "0x9b",
         {
            "type": "const char __user * new_root",
            "def": {
               "file": "fs/namespace.c",
               "line": 4767
            }
         },
         {
            "type": "const char __user * put_old",
            "def": {
               "file": "fs/namespace.c",
               "line": 4767
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/namespace.c",
         4767
      ],
      [
         156,
         "sys_ni_syscall",
         "(void)",
         "0x9c",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "arch/x86/kernel/process.c",
         1085
      ],
      [
         157,
         "sys_prctl",
         "(int option, unsigned long arg2, unsigned long arg3, unsigned long arg4, unsigned long arg5)",
         "0x9d",
         {
            "type": "int option",
            "def": {
               "file": "kernel/sys.c",
               "line": 2534
            }
         },
         {
            "type": "unsigned long arg2",
            "def": {
               "file": "kernel/sys.c",
               "line": 2534
            }
         },
         {
            "type": "unsigned long arg3",
            "def": {
               "file": "kernel/sys.c",
               "line": 2534
            }
         },
         {
            "type": "unsigned long arg4",
            "def": {
               "file": "kernel/sys.c",
               "line": 2534
            }
         },
         {
            "type": "unsigned long arg5",
            "def": {
               "file": "kernel/sys.c",
               "line": 2534
            }
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         2534
      ],
      [
         158,
         "sys_arch_prctl",
         "(int option, unsigned long arg2)",
         "0x9e",
         {
            "type": "int option",
            "def": {
               "file": "arch/x86/kernel/process.c",
               "line": 1064
            }
         },
         {
            "type": "unsigned long arg2",
            "def": {
               "file": "arch/x86/kernel/process.c",
               "line": 1064
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "arch/x86/kernel/process.c",
         1064
      ],
      [
         159,
         "sys_adjtimex",
         "(struct __kernel_timex __user * txc_p)",
         "0x9f",
         {
            "type": "struct __kernel_timex __user * txc_p",
            "def": {
               "file": "kernel/time/time.c",
               "line": 269
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/time/time.c",
         269
      ],
      [
         160,
         "sys_setrlimit",
         "(unsigned int resource, struct compat_rlimit __user * rlim)",
         "0xa0",
         {
            "type": "unsigned int resource",
            "def": {
               "file": "kernel/sys.c",
               "line": 1577
            }
         },
         {
            "type": "struct compat_rlimit __user * rlim",
            "def": {
               "file": "kernel/sys.c",
               "line": 1577
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         1577
      ],
      [
         161,
         "sys_chroot",
         "(const char __user * filename)",
         "0xa1",
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/open.c",
               "line": 588
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/open.c",
         588
      ],
      [
         162,
         "sys_sync",
         "(int fd, compat_arg_u64_dual (offset) compat_arg_u64_dual (nbytes), unsigned int flags)",
         "0xa2",
         {
            "type": "int fd",
            "def": {
               "file": "fs/sync.c",
               "line": 366
            }
         },
         {
            "type": "compat_arg_u64_dual (offset) compat_arg_u64_dual (nbytes)",
            "def": {
               "file": "fs/sync.c",
               "line": 366
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/sync.c",
               "line": 366
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/sync.c",
         366
      ],
      [
         163,
         "sys_acct",
         "(const char __user * name)",
         "0xa3",
         {
            "type": "const char __user * name",
            "def": {
               "file": "kernel/acct.c",
               "line": 293
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/acct.c",
         293
      ],
      [
         164,
         "sys_settimeofday",
         "(struct old_timeval32 __user * tv, struct timezone __user * tz)",
         "0xa4",
         {
            "type": "struct old_timeval32 __user * tv",
            "def": {
               "file": "kernel/time/time.c",
               "line": 243
            }
         },
         {
            "type": "struct timezone __user * tz",
            "def": {
               "file": "kernel/time/time.c",
               "line": 243
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/time/time.c",
         243
      ],
      [
         165,
         "sys_mount",
         "(char __user * dev_name, char __user * dir_name, char __user * type, unsigned long flags, void __user * data)",
         "0xa5",
         {
            "type": "char __user * dev_name",
            "def": {
               "file": "fs/namespace.c",
               "line": 4367
            }
         },
         {
            "type": "char __user * dir_name",
            "def": {
               "file": "fs/namespace.c",
               "line": 4367
            }
         },
         {
            "type": "char __user * type",
            "def": {
               "file": "fs/namespace.c",
               "line": 4367
            }
         },
         {
            "type": "unsigned long flags",
            "def": {
               "file": "fs/namespace.c",
               "line": 4367
            }
         },
         {
            "type": "void __user * data",
            "def": {
               "file": "fs/namespace.c",
               "line": 4367
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/namespace.c",
         4367
      ],
      [
         166,
         "sys_umount",
         "(char __user * name, int flags)",
         "0xa6",
         {
            "type": "char __user * name",
            "def": {
               "file": "fs/namespace.c",
               "line": 2073
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/namespace.c",
               "line": 2073
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/namespace.c",
         2073
      ],
      [
         167,
         "sys_swapon",
         "(const char __user * specialfile, int swap_flags)",
         "0xa7",
         {
            "type": "const char __user * specialfile",
            "def": {
               "file": "mm/swapfile.c",
               "line": 3601
            }
         },
         {
            "type": "int swap_flags",
            "def": {
               "file": "mm/swapfile.c",
               "line": 3601
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "mm/swapfile.c",
         3601
      ],
      [
         168,
         "sys_swapoff",
         "(const char __user * specialfile)",
         "0xa8",
         {
            "type": "const char __user * specialfile",
            "def": {
               "file": "mm/swapfile.c",
               "line": 3070
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "mm/swapfile.c",
         3070
      ],
      [
         169,
         "sys_reboot",
         "(int magic1, int magic2, unsigned int cmd, void __user * arg)",
         "0xa9",
         {
            "type": "int magic1",
            "def": {
               "file": "kernel/reboot.c",
               "line": 729
            }
         },
         {
            "type": "int magic2",
            "def": {
               "file": "kernel/reboot.c",
               "line": 729
            }
         },
         {
            "type": "unsigned int cmd",
            "def": {
               "file": "kernel/reboot.c",
               "line": 729
            }
         },
         {
            "type": "void __user * arg",
            "def": {
               "file": "kernel/reboot.c",
               "line": 729
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/reboot.c",
         729
      ],
      [
         170,
         "sys_sethostname",
         "(char __user * name, int len)",
         "0xaa",
         {
            "type": "char __user * name",
            "def": {
               "file": "kernel/sys.c",
               "line": 1419
            }
         },
         {
            "type": "int len",
            "def": {
               "file": "kernel/sys.c",
               "line": 1419
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         1419
      ],
      [
         171,
         "sys_setdomainname",
         "(char __user * name, int len)",
         "0xab",
         {
            "type": "char __user * name",
            "def": {
               "file": "kernel/sys.c",
               "line": 1473
            }
         },
         {
            "type": "int len",
            "def": {
               "file": "kernel/sys.c",
               "line": 1473
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         1473
      ],
      [
         172,
         "sys_iopl",
         "(unsigned int level)",
         "0xac",
         {
            "type": "unsigned int level",
            "def": {
               "file": "arch/x86/kernel/ioport.c",
               "line": 179
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "arch/x86/kernel/ioport.c",
         179
      ],
      [
         173,
         "sys_ioperm",
         "(unsigned long from, unsigned long num, int turn_on)",
         "0xad",
         {
            "type": "unsigned long from",
            "def": {
               "file": "arch/x86/kernel/ioport.c",
               "line": 158
            }
         },
         {
            "type": "unsigned long num",
            "def": {
               "file": "arch/x86/kernel/ioport.c",
               "line": 158
            }
         },
         {
            "type": "int turn_on",
            "def": {
               "file": "arch/x86/kernel/ioport.c",
               "line": 158
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "arch/x86/kernel/ioport.c",
         158
      ],
      [
         175,
         "sys_init_module",
         "(void __user * umod, unsigned long len, const char __user * uargs)",
         "0xaf",
         {
            "type": "void __user * umod",
            "def": {
               "file": "kernel/module/main.c",
               "line": 3650
            }
         },
         {
            "type": "unsigned long len",
            "def": {
               "file": "kernel/module/main.c",
               "line": 3650
            }
         },
         {
            "type": "const char __user * uargs",
            "def": {
               "file": "kernel/module/main.c",
               "line": 3650
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/module/main.c",
         3650
      ],
      [
         176,
         "sys_delete_module",
         "(const char __user * name_user, unsigned int flags)",
         "0xb0",
         {
            "type": "const char __user * name_user",
            "def": {
               "file": "kernel/module/main.c",
               "line": 804
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "kernel/module/main.c",
               "line": 804
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/module/main.c",
         804
      ],
      [
         179,
         "sys_quotactl",
         "(unsigned int cmd, const char __user * special, qid_t id, void __user * addr)",
         "0xb3",
         {
            "type": "unsigned int cmd",
            "def": {
               "file": "fs/quota/quota.c",
               "line": 917
            }
         },
         {
            "type": "const char __user * special",
            "def": {
               "file": "fs/quota/quota.c",
               "line": 917
            }
         },
         {
            "type": "qid_t id",
            "def": {
               "file": "fs/quota/quota.c",
               "line": 917
            }
         },
         {
            "type": "void __user * addr",
            "def": {
               "file": "fs/quota/quota.c",
               "line": 917
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/quota/quota.c",
         917
      ],
      [
         186,
         "sys_gettid",
         "(void)",
         "0xba",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         1005
      ],
      [
         187,
         "sys_readahead",
         "(int fd, compat_arg_u64_dual (offset) size_t)",
         "0xbb",
         {
            "type": "int fd",
            "def": {
               "file": "mm/readahead.c",
               "line": 762
            }
         },
         {
            "type": "compat_arg_u64_dual (offset) size_t",
            "def": {
               "file": "mm/readahead.c",
               "line": 762
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "mm/readahead.c",
         762
      ],
      [
         188,
         "sys_setxattr",
         "(const char __user * pathname, const char __user * name, const void __user * value, size_t size, int flags)",
         "0xbc",
         {
            "type": "const char __user * pathname",
            "def": {
               "file": "fs/xattr.c",
               "line": 764
            }
         },
         {
            "type": "const char __user * name",
            "def": {
               "file": "fs/xattr.c",
               "line": 764
            }
         },
         {
            "type": "const void __user * value",
            "def": {
               "file": "fs/xattr.c",
               "line": 764
            }
         },
         {
            "type": "size_t size",
            "def": {
               "file": "fs/xattr.c",
               "line": 764
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/xattr.c",
               "line": 764
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/xattr.c",
         764
      ],
      [
         189,
         "sys_lsetxattr",
         "(const char __user * pathname, const char __user * name, const void __user * value, size_t size, int flags)",
         "0xbd",
         {
            "type": "const char __user * pathname",
            "def": {
               "file": "fs/xattr.c",
               "line": 771
            }
         },
         {
            "type": "const char __user * name",
            "def": {
               "file": "fs/xattr.c",
               "line": 771
            }
         },
         {
            "type": "const void __user * value",
            "def": {
               "file": "fs/xattr.c",
               "line": 771
            }
         },
         {
            "type": "size_t size",
            "def": {
               "file": "fs/xattr.c",
               "line": 771
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/xattr.c",
               "line": 771
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/xattr.c",
         771
      ],
      [
         190,
         "sys_fsetxattr",
         "(int fd, const char __user * name, const void __user * value, size_t size, int flags)",
         "0xbe",
         {
            "type": "int fd",
            "def": {
               "file": "fs/xattr.c",
               "line": 779
            }
         },
         {
            "type": "const char __user * name",
            "def": {
               "file": "fs/xattr.c",
               "line": 779
            }
         },
         {
            "type": "const void __user * value",
            "def": {
               "file": "fs/xattr.c",
               "line": 779
            }
         },
         {
            "type": "size_t size",
            "def": {
               "file": "fs/xattr.c",
               "line": 779
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/xattr.c",
               "line": 779
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/xattr.c",
         779
      ],
      [
         191,
         "sys_getxattr",
         "(const char __user * pathname, const char __user * name, void __user * value, size_t size)",
         "0xbf",
         {
            "type": "const char __user * pathname",
            "def": {
               "file": "fs/xattr.c",
               "line": 905
            }
         },
         {
            "type": "const char __user * name",
            "def": {
               "file": "fs/xattr.c",
               "line": 905
            }
         },
         {
            "type": "void __user * value",
            "def": {
               "file": "fs/xattr.c",
               "line": 905
            }
         },
         {
            "type": "size_t size",
            "def": {
               "file": "fs/xattr.c",
               "line": 905
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/xattr.c",
         905
      ],
      [
         192,
         "sys_lgetxattr",
         "(const char __user * pathname, const char __user * name, void __user * value, size_t size)",
         "0xc0",
         {
            "type": "const char __user * pathname",
            "def": {
               "file": "fs/xattr.c",
               "line": 911
            }
         },
         {
            "type": "const char __user * name",
            "def": {
               "file": "fs/xattr.c",
               "line": 911
            }
         },
         {
            "type": "void __user * value",
            "def": {
               "file": "fs/xattr.c",
               "line": 911
            }
         },
         {
            "type": "size_t size",
            "def": {
               "file": "fs/xattr.c",
               "line": 911
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/xattr.c",
         911
      ],
      [
         193,
         "sys_fgetxattr",
         "(int fd, const char __user * name, void __user * value, size_t size)",
         "0xc1",
         {
            "type": "int fd",
            "def": {
               "file": "fs/xattr.c",
               "line": 918
            }
         },
         {
            "type": "const char __user * name",
            "def": {
               "file": "fs/xattr.c",
               "line": 918
            }
         },
         {
            "type": "void __user * value",
            "def": {
               "file": "fs/xattr.c",
               "line": 918
            }
         },
         {
            "type": "size_t size",
            "def": {
               "file": "fs/xattr.c",
               "line": 918
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/xattr.c",
         918
      ],
      [
         194,
         "sys_listxattr",
         "(const char __user * pathname, char __user * list, size_t size)",
         "0xc2",
         {
            "type": "const char __user * pathname",
            "def": {
               "file": "fs/xattr.c",
               "line": 1011
            }
         },
         {
            "type": "char __user * list",
            "def": {
               "file": "fs/xattr.c",
               "line": 1011
            }
         },
         {
            "type": "size_t size",
            "def": {
               "file": "fs/xattr.c",
               "line": 1011
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/xattr.c",
         1011
      ],
      [
         195,
         "sys_llistxattr",
         "(const char __user * pathname, char __user * list, size_t size)",
         "0xc3",
         {
            "type": "const char __user * pathname",
            "def": {
               "file": "fs/xattr.c",
               "line": 1017
            }
         },
         {
            "type": "char __user * list",
            "def": {
               "file": "fs/xattr.c",
               "line": 1017
            }
         },
         {
            "type": "size_t size",
            "def": {
               "file": "fs/xattr.c",
               "line": 1017
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/xattr.c",
         1017
      ],
      [
         196,
         "sys_flistxattr",
         "(int fd, char __user * list, size_t size)",
         "0xc4",
         {
            "type": "int fd",
            "def": {
               "file": "fs/xattr.c",
               "line": 1023
            }
         },
         {
            "type": "char __user * list",
            "def": {
               "file": "fs/xattr.c",
               "line": 1023
            }
         },
         {
            "type": "size_t size",
            "def": {
               "file": "fs/xattr.c",
               "line": 1023
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/xattr.c",
         1023
      ],
      [
         197,
         "sys_removexattr",
         "(const char __user * pathname, const char __user * name)",
         "0xc5",
         {
            "type": "const char __user * pathname",
            "def": {
               "file": "fs/xattr.c",
               "line": 1106
            }
         },
         {
            "type": "const char __user * name",
            "def": {
               "file": "fs/xattr.c",
               "line": 1106
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/xattr.c",
         1106
      ],
      [
         198,
         "sys_lremovexattr",
         "(const char __user * pathname, const char __user * name)",
         "0xc6",
         {
            "type": "const char __user * pathname",
            "def": {
               "file": "fs/xattr.c",
               "line": 1112
            }
         },
         {
            "type": "const char __user * name",
            "def": {
               "file": "fs/xattr.c",
               "line": 1112
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/xattr.c",
         1112
      ],
      [
         199,
         "sys_fremovexattr",
         "(int fd, const char __user * name)",
         "0xc7",
         {
            "type": "int fd",
            "def": {
               "file": "fs/xattr.c",
               "line": 1118
            }
         },
         {
            "type": "const char __user * name",
            "def": {
               "file": "fs/xattr.c",
               "line": 1118
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/xattr.c",
         1118
      ],
      [
         200,
         "sys_tkill",
         "(pid_t pid, int sig)",
         "0xc8",
         {
            "type": "pid_t pid",
            "def": {
               "file": "kernel/signal.c",
               "line": 4264
            }
         },
         {
            "type": "int sig",
            "def": {
               "file": "kernel/signal.c",
               "line": 4264
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/signal.c",
         4264
      ],
      [
         201,
         "sys_time",
         "(struct compat_tms __user * tbuf)",
         "0xc9",
         {
            "type": "struct compat_tms __user * tbuf",
            "def": {
               "file": "kernel/sys.c",
               "line": 1083
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         1083
      ],
      [
         202,
         "sys_futex",
         "(struct futex_waitv __user * waiters, unsigned int flags, int nr_wake, int nr_requeue)",
         "0xca",
         {
            "type": "struct futex_waitv __user * waiters",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 445
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 445
            }
         },
         {
            "type": "int nr_wake",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 445
            }
         },
         {
            "type": "int nr_requeue",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 445
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/futex/syscalls.c",
         445
      ],
      [
         203,
         "sys_sched_setaffinity",
         "(compat_pid_t pid, unsigned int len, compat_ulong_t __user * user_mask_ptr)",
         "0xcb",
         {
            "type": "compat_pid_t pid",
            "def": {
               "file": "kernel/compat.c",
               "line": 124
            }
         },
         {
            "type": "unsigned int len",
            "def": {
               "file": "kernel/compat.c",
               "line": 124
            }
         },
         {
            "type": "compat_ulong_t __user * user_mask_ptr",
            "def": {
               "file": "kernel/compat.c",
               "line": 124
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/compat.c",
         124
      ],
      [
         204,
         "sys_sched_getaffinity",
         "(compat_pid_t pid, unsigned int len, compat_ulong_t __user * user_mask_ptr)",
         "0xcc",
         {
            "type": "compat_pid_t pid",
            "def": {
               "file": "kernel/compat.c",
               "line": 144
            }
         },
         {
            "type": "unsigned int len",
            "def": {
               "file": "kernel/compat.c",
               "line": 144
            }
         },
         {
            "type": "compat_ulong_t __user * user_mask_ptr",
            "def": {
               "file": "kernel/compat.c",
               "line": 144
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/compat.c",
         144
      ],
      [
         206,
         "sys_io_setup",
         "(unsigned nr_events, u32 __user * ctx32p)",
         "0xce",
         {
            "type": "unsigned nr_events",
            "def": {
               "file": "fs/aio.c",
               "line": 1466
            }
         },
         {
            "type": "u32 __user * ctx32p",
            "def": {
               "file": "fs/aio.c",
               "line": 1466
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/aio.c",
         1466
      ],
      [
         207,
         "sys_io_destroy",
         "(aio_context_t ctx)",
         "0xcf",
         {
            "type": "aio_context_t ctx",
            "def": {
               "file": "fs/aio.c",
               "line": 1504
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/aio.c",
         1504
      ],
      [
         208,
         "sys_io_getevents",
         "(aio_context_t ctx_id, long min_nr, long nr, struct io_event __user * events, struct __kernel_timespec __user * timeout)",
         "0xd0",
         {
            "type": "aio_context_t ctx_id",
            "def": {
               "file": "fs/aio.c",
               "line": 2304
            }
         },
         {
            "type": "long min_nr",
            "def": {
               "file": "fs/aio.c",
               "line": 2304
            }
         },
         {
            "type": "long nr",
            "def": {
               "file": "fs/aio.c",
               "line": 2304
            }
         },
         {
            "type": "struct io_event __user * events",
            "def": {
               "file": "fs/aio.c",
               "line": 2304
            }
         },
         {
            "type": "struct __kernel_timespec __user * timeout",
            "def": {
               "file": "fs/aio.c",
               "line": 2304
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/aio.c",
         2304
      ],
      [
         209,
         "sys_io_submit",
         "(compat_aio_context_t ctx_id, int nr, compat_uptr_t __user * iocbpp)",
         "0xd1",
         {
            "type": "compat_aio_context_t ctx_id",
            "def": {
               "file": "fs/aio.c",
               "line": 2177
            }
         },
         {
            "type": "int nr",
            "def": {
               "file": "fs/aio.c",
               "line": 2177
            }
         },
         {
            "type": "compat_uptr_t __user * iocbpp",
            "def": {
               "file": "fs/aio.c",
               "line": 2177
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/aio.c",
         2177
      ],
      [
         210,
         "sys_io_cancel",
         "(aio_context_t ctx_id, struct iocb __user * iocb, struct io_event __user * result)",
         "0xd2",
         {
            "type": "aio_context_t ctx_id",
            "def": {
               "file": "fs/aio.c",
               "line": 2229
            }
         },
         {
            "type": "struct iocb __user * iocb",
            "def": {
               "file": "fs/aio.c",
               "line": 2229
            }
         },
         {
            "type": "struct io_event __user * result",
            "def": {
               "file": "fs/aio.c",
               "line": 2229
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/aio.c",
         2229
      ],
      [
         213,
         "sys_epoll_create",
         "(int size)",
         "0xd5",
         {
            "type": "int size",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2528
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/eventpoll.c",
         2528
      ],
      [
         216,
         "sys_remap_file_pages",
         "(unsigned long start, unsigned long size, unsigned long prot, unsigned long pgoff, unsigned long flags)",
         "0xd8",
         {
            "type": "unsigned long start",
            "def": {
               "file": "mm/mmap.c",
               "line": 1086
            }
         },
         {
            "type": "unsigned long size",
            "def": {
               "file": "mm/mmap.c",
               "line": 1086
            }
         },
         {
            "type": "unsigned long prot",
            "def": {
               "file": "mm/mmap.c",
               "line": 1086
            }
         },
         {
            "type": "unsigned long pgoff",
            "def": {
               "file": "mm/mmap.c",
               "line": 1086
            }
         },
         {
            "type": "unsigned long flags",
            "def": {
               "file": "mm/mmap.c",
               "line": 1086
            }
         },
         {
            "type": "",
            "def": {}
         },
         "mm/mmap.c",
         1086
      ],
      [
         217,
         "sys_getdents64",
         "(unsigned int fd, struct linux_dirent64 __user * dirent, unsigned int count)",
         "0xd9",
         {
            "type": "unsigned int fd",
            "def": {
               "file": "fs/readdir.c",
               "line": 384
            }
         },
         {
            "type": "struct linux_dirent64 __user * dirent",
            "def": {
               "file": "fs/readdir.c",
               "line": 384
            }
         },
         {
            "type": "unsigned int count",
            "def": {
               "file": "fs/readdir.c",
               "line": 384
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/readdir.c",
         384
      ],
      [
         218,
         "sys_set_tid_address",
         "(int __user * tidptr)",
         "0xda",
         {
            "type": "int __user * tidptr",
            "def": {
               "file": "kernel/fork.c",
               "line": 1810
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/fork.c",
         1810
      ],
      [
         219,
         "sys_restart_syscall",
         "(void)",
         "0xdb",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/signal.c",
         3256
      ],
      [
         220,
         "sys_semtimedop",
         "(int semid, struct sembuf __user * tsops, unsigned int nsops, const struct __kernel_timespec __user * timeout)",
         "0xdc",
         {
            "type": "int semid",
            "def": {
               "file": "ipc/sem.c",
               "line": 2268
            }
         },
         {
            "type": "struct sembuf __user * tsops",
            "def": {
               "file": "ipc/sem.c",
               "line": 2268
            }
         },
         {
            "type": "unsigned int nsops",
            "def": {
               "file": "ipc/sem.c",
               "line": 2268
            }
         },
         {
            "type": "const struct __kernel_timespec __user * timeout",
            "def": {
               "file": "ipc/sem.c",
               "line": 2268
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "ipc/sem.c",
         2268
      ],
      [
         221,
         "sys_fadvise64",
         "(int fd, compat_arg_u64_dual (offset) compat_arg_u64_dual (len), int advice)",
         "0xdd",
         {
            "type": "int fd",
            "def": {
               "file": "mm/fadvise.c",
               "line": 216
            }
         },
         {
            "type": "compat_arg_u64_dual (offset) compat_arg_u64_dual (len)",
            "def": {
               "file": "mm/fadvise.c",
               "line": 216
            }
         },
         {
            "type": "int advice",
            "def": {
               "file": "mm/fadvise.c",
               "line": 216
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "mm/fadvise.c",
         216
      ],
      [
         222,
         "sys_timer_create",
         "(clockid_t which_clock, struct compat_sigevent __user * timer_event_spec, timer_t __user * created_timer_id)",
         "0xde",
         {
            "type": "clockid_t which_clock",
            "def": {
               "file": "kernel/time/posix-timers.c",
               "line": 589
            }
         },
         {
            "type": "struct compat_sigevent __user * timer_event_spec",
            "def": {
               "file": "kernel/time/posix-timers.c",
               "line": 589
            }
         },
         {
            "type": "timer_t __user * created_timer_id",
            "def": {
               "file": "kernel/time/posix-timers.c",
               "line": 589
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/time/posix-timers.c",
         589
      ],
      [
         223,
         "sys_timer_settime",
         "(timer_t timer_id, int flags, const struct __kernel_itimerspec __user * new_setting, struct __kernel_itimerspec __user * old_setting)",
         "0xdf",
         {
            "type": "timer_t timer_id",
            "def": {
               "file": "kernel/time/posix-timers.c",
               "line": 962
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "kernel/time/posix-timers.c",
               "line": 962
            }
         },
         {
            "type": "const struct __kernel_itimerspec __user * new_setting",
            "def": {
               "file": "kernel/time/posix-timers.c",
               "line": 962
            }
         },
         {
            "type": "struct __kernel_itimerspec __user * old_setting",
            "def": {
               "file": "kernel/time/posix-timers.c",
               "line": 962
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/time/posix-timers.c",
         962
      ],
      [
         224,
         "sys_timer_gettime",
         "(timer_t timer_id, struct __kernel_itimerspec __user * setting)",
         "0xe0",
         {
            "type": "timer_t timer_id",
            "def": {
               "file": "kernel/time/posix-timers.c",
               "line": 752
            }
         },
         {
            "type": "struct __kernel_itimerspec __user * setting",
            "def": {
               "file": "kernel/time/posix-timers.c",
               "line": 752
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/time/posix-timers.c",
         752
      ],
      [
         225,
         "sys_timer_getoverrun",
         "(timer_t timer_id)",
         "0xe1",
         {
            "type": "timer_t timer_id",
            "def": {
               "file": "kernel/time/posix-timers.c",
               "line": 800
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/time/posix-timers.c",
         800
      ],
      [
         226,
         "sys_timer_delete",
         "(timer_t timer_id)",
         "0xe2",
         {
            "type": "timer_t timer_id",
            "def": {
               "file": "kernel/time/posix-timers.c",
               "line": 1067
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/time/posix-timers.c",
         1067
      ],
      [
         227,
         "sys_clock_settime",
         "(const clockid_t which_clock, const struct __kernel_timespec __user * tp)",
         "0xe3",
         {
            "type": "const clockid_t which_clock",
            "def": {
               "file": "kernel/time/posix-stubs.c",
               "line": 26
            }
         },
         {
            "type": "const struct __kernel_timespec __user * tp",
            "def": {
               "file": "kernel/time/posix-stubs.c",
               "line": 26
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/time/posix-stubs.c",
         26
      ],
      [
         228,
         "sys_clock_gettime",
         "(const clockid_t which_clock, struct __kernel_timespec __user * tp)",
         "0xe4",
         {
            "type": "const clockid_t which_clock",
            "def": {
               "file": "kernel/time/posix-stubs.c",
               "line": 60
            }
         },
         {
            "type": "struct __kernel_timespec __user * tp",
            "def": {
               "file": "kernel/time/posix-stubs.c",
               "line": 60
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/time/posix-stubs.c",
         60
      ],
      [
         229,
         "sys_clock_getres",
         "(const clockid_t which_clock, struct __kernel_timespec __user * tp)",
         "0xe5",
         {
            "type": "const clockid_t which_clock",
            "def": {
               "file": "kernel/time/posix-stubs.c",
               "line": 75
            }
         },
         {
            "type": "struct __kernel_timespec __user * tp",
            "def": {
               "file": "kernel/time/posix-stubs.c",
               "line": 75
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/time/posix-stubs.c",
         75
      ],
      [
         230,
         "sys_clock_nanosleep",
         "(const clockid_t which_clock, int flags, const struct __kernel_timespec __user * rqtp, struct __kernel_timespec __user * rmtp)",
         "0xe6",
         {
            "type": "const clockid_t which_clock",
            "def": {
               "file": "kernel/time/posix-stubs.c",
               "line": 94
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "kernel/time/posix-stubs.c",
               "line": 94
            }
         },
         {
            "type": "const struct __kernel_timespec __user * rqtp",
            "def": {
               "file": "kernel/time/posix-stubs.c",
               "line": 94
            }
         },
         {
            "type": "struct __kernel_timespec __user * rmtp",
            "def": {
               "file": "kernel/time/posix-stubs.c",
               "line": 94
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/time/posix-stubs.c",
         94
      ],
      [
         231,
         "sys_exit_group",
         "(int error_code)",
         "0xe7",
         {
            "type": "int error_code",
            "def": {
               "file": "kernel/exit.c",
               "line": 1139
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/exit.c",
         1139
      ],
      [
         232,
         "sys_epoll_wait",
         "(int epfd, struct epoll_event __user * events, int maxevents, int timeout)",
         "0xe8",
         {
            "type": "int epfd",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2830
            }
         },
         {
            "type": "struct epoll_event __user * events",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2830
            }
         },
         {
            "type": "int maxevents",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2830
            }
         },
         {
            "type": "int timeout",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2830
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/eventpoll.c",
         2830
      ],
      [
         233,
         "sys_epoll_ctl",
         "(int epfd, int op, int fd, struct epoll_event __user * event)",
         "0xe9",
         {
            "type": "int epfd",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2748
            }
         },
         {
            "type": "int op",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2748
            }
         },
         {
            "type": "int fd",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2748
            }
         },
         {
            "type": "struct epoll_event __user * event",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2748
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/eventpoll.c",
         2748
      ],
      [
         234,
         "sys_tgkill",
         "(pid_t tgid, pid_t pid, int sig)",
         "0xea",
         {
            "type": "pid_t tgid",
            "def": {
               "file": "kernel/signal.c",
               "line": 4248
            }
         },
         {
            "type": "pid_t pid",
            "def": {
               "file": "kernel/signal.c",
               "line": 4248
            }
         },
         {
            "type": "int sig",
            "def": {
               "file": "kernel/signal.c",
               "line": 4248
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/signal.c",
         4248
      ],
      [
         235,
         "sys_utimes",
         "(char __user * filename, struct __kernel_old_timeval __user * utimes)",
         "0xeb",
         {
            "type": "char __user * filename",
            "def": {
               "file": "fs/utimes.c",
               "line": 203
            }
         },
         {
            "type": "struct __kernel_old_timeval __user * utimes",
            "def": {
               "file": "fs/utimes.c",
               "line": 203
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/utimes.c",
         203
      ],
      [
         237,
         "sys_mbind",
         "(unsigned long start, unsigned long len, unsigned long mode, const unsigned long __user * nmask, unsigned long maxnode, unsigned int flags)",
         "0xed",
         {
            "type": "unsigned long start",
            "def": {
               "file": "mm/mempolicy.c",
               "line": 1829
            }
         },
         {
            "type": "unsigned long len",
            "def": {
               "file": "mm/mempolicy.c",
               "line": 1829
            }
         },
         {
            "type": "unsigned long mode",
            "def": {
               "file": "mm/mempolicy.c",
               "line": 1829
            }
         },
         {
            "type": "const unsigned long __user * nmask",
            "def": {
               "file": "mm/mempolicy.c",
               "line": 1829
            }
         },
         {
            "type": "unsigned long maxnode",
            "def": {
               "file": "mm/mempolicy.c",
               "line": 1829
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "mm/mempolicy.c",
               "line": 1829
            }
         },
         "mm/mempolicy.c",
         1829
      ],
      [
         238,
         "sys_set_mempolicy",
         "(int mode, const unsigned long __user * nmask, unsigned long maxnode)",
         "0xee",
         {
            "type": "int mode",
            "def": {
               "file": "mm/mempolicy.c",
               "line": 1856
            }
         },
         {
            "type": "const unsigned long __user * nmask",
            "def": {
               "file": "mm/mempolicy.c",
               "line": 1856
            }
         },
         {
            "type": "unsigned long maxnode",
            "def": {
               "file": "mm/mempolicy.c",
               "line": 1856
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "mm/mempolicy.c",
         1856
      ],
      [
         239,
         "sys_get_mempolicy",
         "(int __user * policy, unsigned long __user * nmask, unsigned long maxnode, unsigned long addr, unsigned long flags)",
         "0xef",
         {
            "type": "int __user * policy",
            "def": {
               "file": "mm/mempolicy.c",
               "line": 1985
            }
         },
         {
            "type": "unsigned long __user * nmask",
            "def": {
               "file": "mm/mempolicy.c",
               "line": 1985
            }
         },
         {
            "type": "unsigned long maxnode",
            "def": {
               "file": "mm/mempolicy.c",
               "line": 1985
            }
         },
         {
            "type": "unsigned long addr",
            "def": {
               "file": "mm/mempolicy.c",
               "line": 1985
            }
         },
         {
            "type": "unsigned long flags",
            "def": {
               "file": "mm/mempolicy.c",
               "line": 1985
            }
         },
         {
            "type": "",
            "def": {}
         },
         "mm/mempolicy.c",
         1985
      ],
      [
         240,
         "sys_mq_open",
         "(const char __user * u_name, int oflag, compat_mode_t mode, struct compat_mq_attr __user * u_attr)",
         "0xf0",
         {
            "type": "const char __user * u_name",
            "def": {
               "file": "ipc/mqueue.c",
               "line": 1493
            }
         },
         {
            "type": "int oflag",
            "def": {
               "file": "ipc/mqueue.c",
               "line": 1493
            }
         },
         {
            "type": "compat_mode_t mode",
            "def": {
               "file": "ipc/mqueue.c",
               "line": 1493
            }
         },
         {
            "type": "struct compat_mq_attr __user * u_attr",
            "def": {
               "file": "ipc/mqueue.c",
               "line": 1493
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "ipc/mqueue.c",
         1493
      ],
      [
         241,
         "sys_mq_unlink",
         "(const char __user * u_name)",
         "0xf1",
         {
            "type": "const char __user * u_name",
            "def": {
               "file": "ipc/mqueue.c",
               "line": 940
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "ipc/mqueue.c",
         940
      ],
      [
         242,
         "sys_mq_timedsend",
         "(mqd_t mqdes, const char __user * u_msg_ptr, size_t msg_len, unsigned int msg_prio, const struct __kernel_timespec __user * u_abs_timeout)",
         "0xf2",
         {
            "type": "mqd_t mqdes",
            "def": {
               "file": "ipc/mqueue.c",
               "line": 1233
            }
         },
         {
            "type": "const char __user * u_msg_ptr",
            "def": {
               "file": "ipc/mqueue.c",
               "line": 1233
            }
         },
         {
            "type": "size_t msg_len",
            "def": {
               "file": "ipc/mqueue.c",
               "line": 1233
            }
         },
         {
            "type": "unsigned int msg_prio",
            "def": {
               "file": "ipc/mqueue.c",
               "line": 1233
            }
         },
         {
            "type": "const struct __kernel_timespec __user * u_abs_timeout",
            "def": {
               "file": "ipc/mqueue.c",
               "line": 1233
            }
         },
         {
            "type": "",
            "def": {}
         },
         "ipc/mqueue.c",
         1233
      ],
      [
         243,
         "sys_mq_timedreceive",
         "(mqd_t mqdes, char __user * u_msg_ptr, size_t msg_len, unsigned int __user * u_msg_prio, const struct __kernel_timespec __user * u_abs_timeout)",
         "0xf3",
         {
            "type": "mqd_t mqdes",
            "def": {
               "file": "ipc/mqueue.c",
               "line": 1247
            }
         },
         {
            "type": "char __user * u_msg_ptr",
            "def": {
               "file": "ipc/mqueue.c",
               "line": 1247
            }
         },
         {
            "type": "size_t msg_len",
            "def": {
               "file": "ipc/mqueue.c",
               "line": 1247
            }
         },
         {
            "type": "unsigned int __user * u_msg_prio",
            "def": {
               "file": "ipc/mqueue.c",
               "line": 1247
            }
         },
         {
            "type": "const struct __kernel_timespec __user * u_abs_timeout",
            "def": {
               "file": "ipc/mqueue.c",
               "line": 1247
            }
         },
         {
            "type": "",
            "def": {}
         },
         "ipc/mqueue.c",
         1247
      ],
      [
         244,
         "sys_mq_notify",
         "(mqd_t mqdes, const struct compat_sigevent __user * u_notification)",
         "0xf4",
         {
            "type": "mqd_t mqdes",
            "def": {
               "file": "ipc/mqueue.c",
               "line": 1506
            }
         },
         {
            "type": "const struct compat_sigevent __user * u_notification",
            "def": {
               "file": "ipc/mqueue.c",
               "line": 1506
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "ipc/mqueue.c",
         1506
      ],
      [
         245,
         "sys_mq_getsetattr",
         "(mqd_t mqdes, const struct compat_mq_attr __user * u_mqstat, struct compat_mq_attr __user * u_omqstat)",
         "0xf5",
         {
            "type": "mqd_t mqdes",
            "def": {
               "file": "ipc/mqueue.c",
               "line": 1520
            }
         },
         {
            "type": "const struct compat_mq_attr __user * u_mqstat",
            "def": {
               "file": "ipc/mqueue.c",
               "line": 1520
            }
         },
         {
            "type": "struct compat_mq_attr __user * u_omqstat",
            "def": {
               "file": "ipc/mqueue.c",
               "line": 1520
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "ipc/mqueue.c",
         1520
      ],
      [
         246,
         "sys_kexec_load",
         "(compat_ulong_t entry, compat_ulong_t nr_segments, struct compat_kexec_segment __user * segments, compat_ulong_t flags)",
         "0xf6",
         {
            "type": "compat_ulong_t entry",
            "def": {
               "file": "kernel/kexec.c",
               "line": 268
            }
         },
         {
            "type": "compat_ulong_t nr_segments",
            "def": {
               "file": "kernel/kexec.c",
               "line": 268
            }
         },
         {
            "type": "struct compat_kexec_segment __user * segments",
            "def": {
               "file": "kernel/kexec.c",
               "line": 268
            }
         },
         {
            "type": "compat_ulong_t flags",
            "def": {
               "file": "kernel/kexec.c",
               "line": 268
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/kexec.c",
         268
      ],
      [
         247,
         "sys_waitid",
         "(int which, compat_pid_t pid, struct compat_siginfo __user * infop, int options, struct compat_rusage __user * uru)",
         "0xf7",
         {
            "type": "int which",
            "def": {
               "file": "kernel/exit.c",
               "line": 1959
            }
         },
         {
            "type": "compat_pid_t pid",
            "def": {
               "file": "kernel/exit.c",
               "line": 1959
            }
         },
         {
            "type": "struct compat_siginfo __user * infop",
            "def": {
               "file": "kernel/exit.c",
               "line": 1959
            }
         },
         {
            "type": "int options",
            "def": {
               "file": "kernel/exit.c",
               "line": 1959
            }
         },
         {
            "type": "struct compat_rusage __user * uru",
            "def": {
               "file": "kernel/exit.c",
               "line": 1959
            }
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/exit.c",
         1959
      ],
      [
         248,
         "sys_add_key",
         "(void)",
         "0xf8",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys_ni.c",
         163
      ],
      [
         249,
         "sys_request_key",
         "(void)",
         "0xf9",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys_ni.c",
         164
      ],
      [
         250,
         "sys_keyctl",
         "(void)",
         "0xfa",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys_ni.c",
         165
      ],
      [
         251,
         "sys_ioprio_set",
         "(void)",
         "0xfb",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys_ni.c",
         64
      ],
      [
         252,
         "sys_ioprio_get",
         "(void)",
         "0xfc",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys_ni.c",
         65
      ],
      [
         253,
         "sys_inotify_init",
         "(void)",
         "0xfd",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/notify/inotify/inotify_user.c",
         712
      ],
      [
         254,
         "sys_inotify_add_watch",
         "(int fd, const char __user * pathname, u32 mask)",
         "0xfe",
         {
            "type": "int fd",
            "def": {
               "file": "fs/notify/inotify/inotify_user.c",
               "line": 717
            }
         },
         {
            "type": "const char __user * pathname",
            "def": {
               "file": "fs/notify/inotify/inotify_user.c",
               "line": 717
            }
         },
         {
            "type": "u32 mask",
            "def": {
               "file": "fs/notify/inotify/inotify_user.c",
               "line": 717
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/notify/inotify/inotify_user.c",
         717
      ],
      [
         255,
         "sys_inotify_rm_watch",
         "(int fd, __s32 wd)",
         "0xff",
         {
            "type": "int fd",
            "def": {
               "file": "fs/notify/inotify/inotify_user.c",
               "line": 774
            }
         },
         {
            "type": "__s32 wd",
            "def": {
               "file": "fs/notify/inotify/inotify_user.c",
               "line": 774
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/notify/inotify/inotify_user.c",
         774
      ],
      [
         256,
         "sys_migrate_pages",
         "(pid_t pid, unsigned long maxnode, const unsigned long __user * old_nodes, const unsigned long __user * new_nodes)",
         "0x100",
         {
            "type": "pid_t pid",
            "def": {
               "file": "mm/mempolicy.c",
               "line": 1948
            }
         },
         {
            "type": "unsigned long maxnode",
            "def": {
               "file": "mm/mempolicy.c",
               "line": 1948
            }
         },
         {
            "type": "const unsigned long __user * old_nodes",
            "def": {
               "file": "mm/mempolicy.c",
               "line": 1948
            }
         },
         {
            "type": "const unsigned long __user * new_nodes",
            "def": {
               "file": "mm/mempolicy.c",
               "line": 1948
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "mm/mempolicy.c",
         1948
      ],
      [
         257,
         "sys_openat",
         "(int dfd, const char __user * filename, int flags, umode_t mode)",
         "0x101",
         {
            "type": "int dfd",
            "def": {
               "file": "fs/open.c",
               "line": 1434
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/open.c",
               "line": 1434
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/open.c",
               "line": 1434
            }
         },
         {
            "type": "umode_t mode",
            "def": {
               "file": "fs/open.c",
               "line": 1434
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/open.c",
         1434
      ],
      [
         258,
         "sys_mkdirat",
         "(int dfd, const char __user * pathname, umode_t mode)",
         "0x102",
         {
            "type": "int dfd",
            "def": {
               "file": "fs/namei.c",
               "line": 5327
            }
         },
         {
            "type": "const char __user * pathname",
            "def": {
               "file": "fs/namei.c",
               "line": 5327
            }
         },
         {
            "type": "umode_t mode",
            "def": {
               "file": "fs/namei.c",
               "line": 5327
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/namei.c",
         5327
      ],
      [
         259,
         "sys_mknodat",
         "(int dfd, const char __user * filename, umode_t mode, unsigned int dev)",
         "0x103",
         {
            "type": "int dfd",
            "def": {
               "file": "fs/namei.c",
               "line": 5212
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/namei.c",
               "line": 5212
            }
         },
         {
            "type": "umode_t mode",
            "def": {
               "file": "fs/namei.c",
               "line": 5212
            }
         },
         {
            "type": "unsigned int dev",
            "def": {
               "file": "fs/namei.c",
               "line": 5212
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/namei.c",
         5212
      ],
      [
         260,
         "sys_fchownat",
         "(int dfd, const char __user * filename, uid_t user, gid_t group, int flag)",
         "0x104",
         {
            "type": "int dfd",
            "def": {
               "file": "fs/open.c",
               "line": 816
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/open.c",
               "line": 816
            }
         },
         {
            "type": "uid_t user",
            "def": {
               "file": "fs/open.c",
               "line": 816
            }
         },
         {
            "type": "gid_t group",
            "def": {
               "file": "fs/open.c",
               "line": 816
            }
         },
         {
            "type": "int flag",
            "def": {
               "file": "fs/open.c",
               "line": 816
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/open.c",
         816
      ],
      [
         261,
         "sys_futimesat",
         "(int dfd, const char __user * filename, struct __kernel_old_timeval __user * utimes)",
         "0x105",
         {
            "type": "int dfd",
            "def": {
               "file": "fs/utimes.c",
               "line": 197
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/utimes.c",
               "line": 197
            }
         },
         {
            "type": "struct __kernel_old_timeval __user * utimes",
            "def": {
               "file": "fs/utimes.c",
               "line": 197
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/utimes.c",
         197
      ],
      [
         262,
         "sys_newfstatat",
         "(unsigned int dfd, const char __user * filename, struct compat_stat __user * statbuf, int flag)",
         "0x106",
         {
            "type": "unsigned int dfd",
            "def": {
               "file": "fs/stat.c",
               "line": 878
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/stat.c",
               "line": 878
            }
         },
         {
            "type": "struct compat_stat __user * statbuf",
            "def": {
               "file": "fs/stat.c",
               "line": 878
            }
         },
         {
            "type": "int flag",
            "def": {
               "file": "fs/stat.c",
               "line": 878
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/stat.c",
         878
      ],
      [
         263,
         "sys_unlinkat",
         "(int dfd, const char __user * pathname, int flag)",
         "0x107",
         {
            "type": "int dfd",
            "def": {
               "file": "fs/namei.c",
               "line": 5606
            }
         },
         {
            "type": "const char __user * pathname",
            "def": {
               "file": "fs/namei.c",
               "line": 5606
            }
         },
         {
            "type": "int flag",
            "def": {
               "file": "fs/namei.c",
               "line": 5606
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/namei.c",
         5606
      ],
      [
         264,
         "sys_renameat",
         "(int olddfd, const char __user * oldname, int newdfd, const char __user * newname)",
         "0x108",
         {
            "type": "int olddfd",
            "def": {
               "file": "fs/namei.c",
               "line": 6224
            }
         },
         {
            "type": "const char __user * oldname",
            "def": {
               "file": "fs/namei.c",
               "line": 6224
            }
         },
         {
            "type": "int newdfd",
            "def": {
               "file": "fs/namei.c",
               "line": 6224
            }
         },
         {
            "type": "const char __user * newname",
            "def": {
               "file": "fs/namei.c",
               "line": 6224
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/namei.c",
         6224
      ],
      [
         265,
         "sys_linkat",
         "(int olddfd, const char __user * oldname, int newdfd, const char __user * newname, int flags)",
         "0x109",
         {
            "type": "int olddfd",
            "def": {
               "file": "fs/namei.c",
               "line": 5880
            }
         },
         {
            "type": "const char __user * oldname",
            "def": {
               "file": "fs/namei.c",
               "line": 5880
            }
         },
         {
            "type": "int newdfd",
            "def": {
               "file": "fs/namei.c",
               "line": 5880
            }
         },
         {
            "type": "const char __user * newname",
            "def": {
               "file": "fs/namei.c",
               "line": 5880
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/namei.c",
               "line": 5880
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/namei.c",
         5880
      ],
      [
         266,
         "sys_symlinkat",
         "(const char __user * oldname, int newdfd, const char __user * newname)",
         "0x10a",
         {
            "type": "const char __user * oldname",
            "def": {
               "file": "fs/namei.c",
               "line": 5700
            }
         },
         {
            "type": "int newdfd",
            "def": {
               "file": "fs/namei.c",
               "line": 5700
            }
         },
         {
            "type": "const char __user * newname",
            "def": {
               "file": "fs/namei.c",
               "line": 5700
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/namei.c",
         5700
      ],
      [
         267,
         "sys_readlinkat",
         "(int dfd, const char __user * pathname, char __user * buf, int bufsiz)",
         "0x10b",
         {
            "type": "int dfd",
            "def": {
               "file": "fs/stat.c",
               "line": 596
            }
         },
         {
            "type": "const char __user * pathname",
            "def": {
               "file": "fs/stat.c",
               "line": 596
            }
         },
         {
            "type": "char __user * buf",
            "def": {
               "file": "fs/stat.c",
               "line": 596
            }
         },
         {
            "type": "int bufsiz",
            "def": {
               "file": "fs/stat.c",
               "line": 596
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/stat.c",
         596
      ],
      [
         268,
         "sys_fchmodat",
         "(int dfd, const char __user * filename, umode_t mode)",
         "0x10c",
         {
            "type": "int dfd",
            "def": {
               "file": "fs/open.c",
               "line": 698
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/open.c",
               "line": 698
            }
         },
         {
            "type": "umode_t mode",
            "def": {
               "file": "fs/open.c",
               "line": 698
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/open.c",
         698
      ],
      [
         269,
         "sys_faccessat",
         "(int dfd, const char __user * filename, int mode)",
         "0x10d",
         {
            "type": "int dfd",
            "def": {
               "file": "fs/open.c",
               "line": 534
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/open.c",
               "line": 534
            }
         },
         {
            "type": "int mode",
            "def": {
               "file": "fs/open.c",
               "line": 534
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/open.c",
         534
      ],
      [
         270,
         "sys_pselect6",
         "(int n, compat_ulong_t __user * inp, compat_ulong_t __user * outp, compat_ulong_t __user * exp, struct old_timespec32 __user * tsp, void __user * sig)",
         "0x10e",
         {
            "type": "int n",
            "def": {
               "file": "fs/select.c",
               "line": 1372
            }
         },
         {
            "type": "compat_ulong_t __user * inp",
            "def": {
               "file": "fs/select.c",
               "line": 1372
            }
         },
         {
            "type": "compat_ulong_t __user * outp",
            "def": {
               "file": "fs/select.c",
               "line": 1372
            }
         },
         {
            "type": "compat_ulong_t __user * exp",
            "def": {
               "file": "fs/select.c",
               "line": 1372
            }
         },
         {
            "type": "struct old_timespec32 __user * tsp",
            "def": {
               "file": "fs/select.c",
               "line": 1372
            }
         },
         {
            "type": "void __user * sig",
            "def": {
               "file": "fs/select.c",
               "line": 1372
            }
         },
         "fs/select.c",
         1372
      ],
      [
         271,
         "sys_ppoll",
         "(struct pollfd __user * ufds, unsigned int nfds, struct old_timespec32 __user * tsp, const compat_sigset_t __user * sigmask, compat_size_t sigsetsize)",
         "0x10f",
         {
            "type": "struct pollfd __user * ufds",
            "def": {
               "file": "fs/select.c",
               "line": 1388
            }
         },
         {
            "type": "unsigned int nfds",
            "def": {
               "file": "fs/select.c",
               "line": 1388
            }
         },
         {
            "type": "struct old_timespec32 __user * tsp",
            "def": {
               "file": "fs/select.c",
               "line": 1388
            }
         },
         {
            "type": "const compat_sigset_t __user * sigmask",
            "def": {
               "file": "fs/select.c",
               "line": 1388
            }
         },
         {
            "type": "compat_size_t sigsetsize",
            "def": {
               "file": "fs/select.c",
               "line": 1388
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/select.c",
         1388
      ],
      [
         272,
         "sys_unshare",
         "(unsigned long unshare_flags)",
         "0x110",
         {
            "type": "unsigned long unshare_flags",
            "def": {
               "file": "kernel/fork.c",
               "line": 3345
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/fork.c",
         3345
      ],
      [
         273,
         "sys_set_robust_list",
         "(struct compat_robust_list_head __user * head, compat_size_t len)",
         "0x111",
         {
            "type": "struct compat_robust_list_head __user * head",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 481
            }
         },
         {
            "type": "compat_size_t len",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 481
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/futex/syscalls.c",
         481
      ],
      [
         274,
         "sys_get_robust_list",
         "(int pid, compat_uptr_t __user * head_ptr, compat_size_t __user * len_ptr)",
         "0x112",
         {
            "type": "int pid",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 491
            }
         },
         {
            "type": "compat_uptr_t __user * head_ptr",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 491
            }
         },
         {
            "type": "compat_size_t __user * len_ptr",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 491
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/futex/syscalls.c",
         491
      ],
      [
         275,
         "sys_splice",
         "(int fd_in, loff_t __user * off_in, int fd_out, loff_t __user * off_out, size_t len, unsigned int flags)",
         "0x113",
         {
            "type": "int fd_in",
            "def": {
               "file": "fs/splice.c",
               "line": 1616
            }
         },
         {
            "type": "loff_t __user * off_in",
            "def": {
               "file": "fs/splice.c",
               "line": 1616
            }
         },
         {
            "type": "int fd_out",
            "def": {
               "file": "fs/splice.c",
               "line": 1616
            }
         },
         {
            "type": "loff_t __user * off_out",
            "def": {
               "file": "fs/splice.c",
               "line": 1616
            }
         },
         {
            "type": "size_t len",
            "def": {
               "file": "fs/splice.c",
               "line": 1616
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/splice.c",
               "line": 1616
            }
         },
         "fs/splice.c",
         1616
      ],
      [
         276,
         "sys_tee",
         "(int fdin, int fdout, size_t len, unsigned int flags)",
         "0x114",
         {
            "type": "int fdin",
            "def": {
               "file": "fs/splice.c",
               "line": 1977
            }
         },
         {
            "type": "int fdout",
            "def": {
               "file": "fs/splice.c",
               "line": 1977
            }
         },
         {
            "type": "size_t len",
            "def": {
               "file": "fs/splice.c",
               "line": 1977
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/splice.c",
               "line": 1977
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/splice.c",
         1977
      ],
      [
         277,
         "sys_sync_file_range",
         "(int fd, compat_arg_u64_dual (offset) compat_arg_u64_dual (nbytes), unsigned int flags)",
         "0x115",
         {
            "type": "int fd",
            "def": {
               "file": "fs/sync.c",
               "line": 366
            }
         },
         {
            "type": "compat_arg_u64_dual (offset) compat_arg_u64_dual (nbytes)",
            "def": {
               "file": "fs/sync.c",
               "line": 366
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/sync.c",
               "line": 366
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/sync.c",
         366
      ],
      [
         278,
         "sys_vmsplice",
         "(int fd, const struct iovec __user * uiov, unsigned long nr_segs, unsigned int flags)",
         "0x116",
         {
            "type": "int fd",
            "def": {
               "file": "fs/splice.c",
               "line": 1578
            }
         },
         {
            "type": "const struct iovec __user * uiov",
            "def": {
               "file": "fs/splice.c",
               "line": 1578
            }
         },
         {
            "type": "unsigned long nr_segs",
            "def": {
               "file": "fs/splice.c",
               "line": 1578
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/splice.c",
               "line": 1578
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/splice.c",
         1578
      ],
      [
         279,
         "sys_move_pages",
         "(pid_t pid, unsigned long nr_pages, const void __user * __user * pages, const int __user * nodes, int __user * status, int flags)",
         "0x117",
         {
            "type": "pid_t pid",
            "def": {
               "file": "mm/migrate.c",
               "line": 2627
            }
         },
         {
            "type": "unsigned long nr_pages",
            "def": {
               "file": "mm/migrate.c",
               "line": 2627
            }
         },
         {
            "type": "const void __user * __user * pages",
            "def": {
               "file": "mm/migrate.c",
               "line": 2627
            }
         },
         {
            "type": "const int __user * nodes",
            "def": {
               "file": "mm/migrate.c",
               "line": 2627
            }
         },
         {
            "type": "int __user * status",
            "def": {
               "file": "mm/migrate.c",
               "line": 2627
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "mm/migrate.c",
               "line": 2627
            }
         },
         "mm/migrate.c",
         2627
      ],
      [
         280,
         "sys_utimensat",
         "(int dfd, const char __user * filename, struct __kernel_timespec __user * utimes, int flags)",
         "0x118",
         {
            "type": "int dfd",
            "def": {
               "file": "fs/utimes.c",
               "line": 142
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/utimes.c",
               "line": 142
            }
         },
         {
            "type": "struct __kernel_timespec __user * utimes",
            "def": {
               "file": "fs/utimes.c",
               "line": 142
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/utimes.c",
               "line": 142
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/utimes.c",
         142
      ],
      [
         281,
         "sys_epoll_pwait",
         "(int epfd, struct epoll_event __user * events, int maxevents, int timeout, const compat_sigset_t __user * sigmask, compat_size_t sigsetsize)",
         "0x119",
         {
            "type": "int epfd",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2960
            }
         },
         {
            "type": "struct epoll_event __user * events",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2960
            }
         },
         {
            "type": "int maxevents",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2960
            }
         },
         {
            "type": "int timeout",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2960
            }
         },
         {
            "type": "const compat_sigset_t __user * sigmask",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2960
            }
         },
         {
            "type": "compat_size_t sigsetsize",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2960
            }
         },
         "fs/eventpoll.c",
         2960
      ],
      [
         282,
         "sys_signalfd",
         "(int ufd, const compat_sigset_t __user * user_mask, compat_size_t sigsetsize)",
         "0x11a",
         {
            "type": "int ufd",
            "def": {
               "file": "fs/signalfd.c",
               "line": 345
            }
         },
         {
            "type": "const compat_sigset_t __user * user_mask",
            "def": {
               "file": "fs/signalfd.c",
               "line": 345
            }
         },
         {
            "type": "compat_size_t sigsetsize",
            "def": {
               "file": "fs/signalfd.c",
               "line": 345
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/signalfd.c",
         345
      ],
      [
         283,
         "sys_timerfd_create",
         "(int clockid, int flags)",
         "0x11b",
         {
            "type": "int clockid",
            "def": {
               "file": "fs/timerfd.c",
               "line": 424
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/timerfd.c",
               "line": 424
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/timerfd.c",
         424
      ],
      [
         284,
         "sys_eventfd",
         "(unsigned int count)",
         "0x11c",
         {
            "type": "unsigned int count",
            "def": {
               "file": "fs/eventfd.c",
               "line": 419
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/eventfd.c",
         419
      ],
      [
         285,
         "sys_fallocate",
         "(int fd, int mode, compat_arg_u64_dual (offset) compat_arg_u64_dual (len))",
         "0x11d",
         {
            "type": "int fd",
            "def": {
               "file": "fs/open.c",
               "line": 371
            }
         },
         {
            "type": "int mode",
            "def": {
               "file": "fs/open.c",
               "line": 371
            }
         },
         {
            "type": "compat_arg_u64_dual (offset) compat_arg_u64_dual (len)",
            "def": {
               "file": "fs/open.c",
               "line": 371
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/open.c",
         371
      ],
      [
         286,
         "sys_timerfd_settime",
         "(int ufd, int flags, const struct __kernel_itimerspec __user * utmr, struct __kernel_itimerspec __user * otmr)",
         "0x11e",
         {
            "type": "int ufd",
            "def": {
               "file": "fs/timerfd.c",
               "line": 567
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/timerfd.c",
               "line": 567
            }
         },
         {
            "type": "const struct __kernel_itimerspec __user * utmr",
            "def": {
               "file": "fs/timerfd.c",
               "line": 567
            }
         },
         {
            "type": "struct __kernel_itimerspec __user * otmr",
            "def": {
               "file": "fs/timerfd.c",
               "line": 567
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/timerfd.c",
         567
      ],
      [
         287,
         "sys_timerfd_gettime",
         "(int ufd, struct __kernel_itimerspec __user * otmr)",
         "0x11f",
         {
            "type": "int ufd",
            "def": {
               "file": "fs/timerfd.c",
               "line": 585
            }
         },
         {
            "type": "struct __kernel_itimerspec __user * otmr",
            "def": {
               "file": "fs/timerfd.c",
               "line": 585
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/timerfd.c",
         585
      ],
      [
         288,
         "sys_accept4",
         "(int fd, struct sockaddr __user * upeer_sockaddr, int __user * upeer_addrlen, int flags)",
         "0x120",
         {
            "type": "int fd",
            "def": {
               "file": "net/socket.c",
               "line": 2094
            }
         },
         {
            "type": "struct sockaddr __user * upeer_sockaddr",
            "def": {
               "file": "net/socket.c",
               "line": 2094
            }
         },
         {
            "type": "int __user * upeer_addrlen",
            "def": {
               "file": "net/socket.c",
               "line": 2094
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "net/socket.c",
               "line": 2094
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "net/socket.c",
         2094
      ],
      [
         289,
         "sys_signalfd4",
         "(int ufd, const compat_sigset_t __user * user_mask, compat_size_t sigsetsize, int flags)",
         "0x121",
         {
            "type": "int ufd",
            "def": {
               "file": "fs/signalfd.c",
               "line": 337
            }
         },
         {
            "type": "const compat_sigset_t __user * user_mask",
            "def": {
               "file": "fs/signalfd.c",
               "line": 337
            }
         },
         {
            "type": "compat_size_t sigsetsize",
            "def": {
               "file": "fs/signalfd.c",
               "line": 337
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/signalfd.c",
               "line": 337
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/signalfd.c",
         337
      ],
      [
         290,
         "sys_eventfd2",
         "(unsigned int count, int flags)",
         "0x122",
         {
            "type": "unsigned int count",
            "def": {
               "file": "fs/eventfd.c",
               "line": 414
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/eventfd.c",
               "line": 414
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/eventfd.c",
         414
      ],
      [
         291,
         "sys_epoll_create1",
         "(int flags)",
         "0x123",
         {
            "type": "int flags",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2523
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/eventpoll.c",
         2523
      ],
      [
         292,
         "sys_dup3",
         "(unsigned int oldfd, unsigned int newfd, int flags)",
         "0x124",
         {
            "type": "unsigned int oldfd",
            "def": {
               "file": "fs/file.c",
               "line": 1457
            }
         },
         {
            "type": "unsigned int newfd",
            "def": {
               "file": "fs/file.c",
               "line": 1457
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/file.c",
               "line": 1457
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/file.c",
         1457
      ],
      [
         293,
         "sys_pipe2",
         "(int __user * fildes, int flags)",
         "0x125",
         {
            "type": "int __user * fildes",
            "def": {
               "file": "fs/pipe.c",
               "line": 1152
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/pipe.c",
               "line": 1152
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/pipe.c",
         1152
      ],
      [
         294,
         "sys_inotify_init1",
         "(int flags)",
         "0x126",
         {
            "type": "int flags",
            "def": {
               "file": "fs/notify/inotify/inotify_user.c",
               "line": 707
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/notify/inotify/inotify_user.c",
         707
      ],
      [
         295,
         "sys_preadv",
         "(unsigned long fd, const struct iovec __user * vec, unsigned long vlen, loff_t pos)",
         "0x127",
         {
            "type": "unsigned long fd",
            "def": {
               "file": "fs/read_write.c",
               "line": 1222
            }
         },
         {
            "type": "const struct iovec __user * vec",
            "def": {
               "file": "fs/read_write.c",
               "line": 1222
            }
         },
         {
            "type": "unsigned long vlen",
            "def": {
               "file": "fs/read_write.c",
               "line": 1222
            }
         },
         {
            "type": "loff_t pos",
            "def": {
               "file": "fs/read_write.c",
               "line": 1222
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/read_write.c",
         1222
      ],
      [
         296,
         "sys_pwritev",
         "(unsigned long fd, const struct iovec __user * vec, unsigned long vlen, loff_t pos)",
         "0x128",
         {
            "type": "unsigned long fd",
            "def": {
               "file": "fs/read_write.c",
               "line": 1263
            }
         },
         {
            "type": "const struct iovec __user * vec",
            "def": {
               "file": "fs/read_write.c",
               "line": 1263
            }
         },
         {
            "type": "unsigned long vlen",
            "def": {
               "file": "fs/read_write.c",
               "line": 1263
            }
         },
         {
            "type": "loff_t pos",
            "def": {
               "file": "fs/read_write.c",
               "line": 1263
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/read_write.c",
         1263
      ],
      [
         297,
         "sys_rt_tgsigqueueinfo",
         "(compat_pid_t tgid, compat_pid_t pid, int sig, struct compat_siginfo __user * uinfo)",
         "0x129",
         {
            "type": "compat_pid_t tgid",
            "def": {
               "file": "kernel/signal.c",
               "line": 4343
            }
         },
         {
            "type": "compat_pid_t pid",
            "def": {
               "file": "kernel/signal.c",
               "line": 4343
            }
         },
         {
            "type": "int sig",
            "def": {
               "file": "kernel/signal.c",
               "line": 4343
            }
         },
         {
            "type": "struct compat_siginfo __user * uinfo",
            "def": {
               "file": "kernel/signal.c",
               "line": 4343
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/signal.c",
         4343
      ],
      [
         298,
         "sys_perf_event_open",
         "(struct perf_event_attr __user * attr_uptr, pid_t pid, int cpu, int group_fd, unsigned long flags)",
         "0x12a",
         {
            "type": "struct perf_event_attr __user * attr_uptr",
            "def": {
               "file": "kernel/events/core.c",
               "line": 13854
            }
         },
         {
            "type": "pid_t pid",
            "def": {
               "file": "kernel/events/core.c",
               "line": 13854
            }
         },
         {
            "type": "int cpu",
            "def": {
               "file": "kernel/events/core.c",
               "line": 13854
            }
         },
         {
            "type": "int group_fd",
            "def": {
               "file": "kernel/events/core.c",
               "line": 13854
            }
         },
         {
            "type": "unsigned long flags",
            "def": {
               "file": "kernel/events/core.c",
               "line": 13854
            }
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/events/core.c",
         13854
      ],
      [
         299,
         "sys_recvmmsg",
         "(int fd, struct compat_mmsghdr __user * mmsg, unsigned int vlen, unsigned int flags, struct old_timespec32 __user * timeout)",
         "0x12b",
         {
            "type": "int fd",
            "def": {
               "file": "net/compat.c",
               "line": 413
            }
         },
         {
            "type": "struct compat_mmsghdr __user * mmsg",
            "def": {
               "file": "net/compat.c",
               "line": 413
            }
         },
         {
            "type": "unsigned int vlen",
            "def": {
               "file": "net/compat.c",
               "line": 413
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "net/compat.c",
               "line": 413
            }
         },
         {
            "type": "struct old_timespec32 __user * timeout",
            "def": {
               "file": "net/compat.c",
               "line": 413
            }
         },
         {
            "type": "",
            "def": {}
         },
         "net/compat.c",
         413
      ],
      [
         300,
         "sys_fanotify_init",
         "(unsigned int flags, unsigned int event_f_flags)",
         "0x12c",
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/notify/fanotify/fanotify_user.c",
               "line": 1589
            }
         },
         {
            "type": "unsigned int event_f_flags",
            "def": {
               "file": "fs/notify/fanotify/fanotify_user.c",
               "line": 1589
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/notify/fanotify/fanotify_user.c",
         1589
      ],
      [
         301,
         "sys_fanotify_mark",
         "(int fanotify_fd, unsigned int flags, __u64 mask, int dfd, const char __user * pathname)",
         "0x12d",
         {
            "type": "int fanotify_fd",
            "def": {
               "file": "fs/notify/fanotify/fanotify_user.c",
               "line": 2139
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/notify/fanotify/fanotify_user.c",
               "line": 2139
            }
         },
         {
            "type": "__u64 mask",
            "def": {
               "file": "fs/notify/fanotify/fanotify_user.c",
               "line": 2139
            }
         },
         {
            "type": "int dfd",
            "def": {
               "file": "fs/notify/fanotify/fanotify_user.c",
               "line": 2139
            }
         },
         {
            "type": "const char __user * pathname",
            "def": {
               "file": "fs/notify/fanotify/fanotify_user.c",
               "line": 2139
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/notify/fanotify/fanotify_user.c",
         2139
      ],
      [
         302,
         "sys_prlimit64",
         "(pid_t pid, unsigned int resource, const struct rlimit64 __user * new_rlim, struct rlimit64 __user * old_rlim)",
         "0x12e",
         {
            "type": "pid_t pid",
            "def": {
               "file": "kernel/sys.c",
               "line": 1729
            }
         },
         {
            "type": "unsigned int resource",
            "def": {
               "file": "kernel/sys.c",
               "line": 1729
            }
         },
         {
            "type": "const struct rlimit64 __user * new_rlim",
            "def": {
               "file": "kernel/sys.c",
               "line": 1729
            }
         },
         {
            "type": "struct rlimit64 __user * old_rlim",
            "def": {
               "file": "kernel/sys.c",
               "line": 1729
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         1729
      ],
      [
         303,
         "sys_name_to_handle_at",
         "(int dfd, const char __user * name, struct file_handle __user * handle, void __user * mnt_id, int flag)",
         "0x12f",
         {
            "type": "int dfd",
            "def": {
               "file": "fs/fhandle.c",
               "line": 129
            }
         },
         {
            "type": "const char __user * name",
            "def": {
               "file": "fs/fhandle.c",
               "line": 129
            }
         },
         {
            "type": "struct file_handle __user * handle",
            "def": {
               "file": "fs/fhandle.c",
               "line": 129
            }
         },
         {
            "type": "void __user * mnt_id",
            "def": {
               "file": "fs/fhandle.c",
               "line": 129
            }
         },
         {
            "type": "int flag",
            "def": {
               "file": "fs/fhandle.c",
               "line": 129
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/fhandle.c",
         129
      ],
      [
         304,
         "sys_open_by_handle_at",
         "(int mountdirfd, struct file_handle __user * handle, int flags)",
         "0x130",
         {
            "type": "int mountdirfd",
            "def": {
               "file": "fs/fhandle.c",
               "line": 469
            }
         },
         {
            "type": "struct file_handle __user * handle",
            "def": {
               "file": "fs/fhandle.c",
               "line": 469
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/fhandle.c",
               "line": 469
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/fhandle.c",
         469
      ],
      [
         305,
         "sys_clock_adjtime",
         "(const clockid_t which_clock, struct __kernel_timex __user * utx)",
         "0x131",
         {
            "type": "const clockid_t which_clock",
            "def": {
               "file": "kernel/time/posix-timers.c",
               "line": 1172
            }
         },
         {
            "type": "struct __kernel_timex __user * utx",
            "def": {
               "file": "kernel/time/posix-timers.c",
               "line": 1172
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/time/posix-timers.c",
         1172
      ],
      [
         306,
         "sys_syncfs",
         "(int fd)",
         "0x132",
         {
            "type": "int fd",
            "def": {
               "file": "fs/sync.c",
               "line": 148
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/sync.c",
         148
      ],
      [
         307,
         "sys_sendmmsg",
         "(int fd, struct compat_mmsghdr __user * mmsg, unsigned int vlen, unsigned int flags)",
         "0x133",
         {
            "type": "int fd",
            "def": {
               "file": "net/compat.c",
               "line": 363
            }
         },
         {
            "type": "struct compat_mmsghdr __user * mmsg",
            "def": {
               "file": "net/compat.c",
               "line": 363
            }
         },
         {
            "type": "unsigned int vlen",
            "def": {
               "file": "net/compat.c",
               "line": 363
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "net/compat.c",
               "line": 363
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "net/compat.c",
         363
      ],
      [
         308,
         "sys_setns",
         "(int fd, int flags)",
         "0x134",
         {
            "type": "int fd",
            "def": {
               "file": "kernel/nsproxy.c",
               "line": 569
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "kernel/nsproxy.c",
               "line": 569
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/nsproxy.c",
         569
      ],
      [
         309,
         "sys_getcpu",
         "(unsigned __user * cpup, unsigned __user * nodep, void __user * unused)",
         "0x135",
         {
            "type": "unsigned __user * cpup",
            "def": {
               "file": "kernel/sys.c",
               "line": 2918
            }
         },
         {
            "type": "unsigned __user * nodep",
            "def": {
               "file": "kernel/sys.c",
               "line": 2918
            }
         },
         {
            "type": "void __user * unused",
            "def": {
               "file": "kernel/sys.c",
               "line": 2918
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         2918
      ],
      [
         310,
         "sys_process_vm_readv",
         "(pid_t pid, const struct iovec __user * lvec, unsigned long liovcnt, const struct iovec __user * rvec, unsigned long riovcnt, unsigned long flags)",
         "0x136",
         {
            "type": "pid_t pid",
            "def": {
               "file": "mm/process_vm_access.c",
               "line": 292
            }
         },
         {
            "type": "const struct iovec __user * lvec",
            "def": {
               "file": "mm/process_vm_access.c",
               "line": 292
            }
         },
         {
            "type": "unsigned long liovcnt",
            "def": {
               "file": "mm/process_vm_access.c",
               "line": 292
            }
         },
         {
            "type": "const struct iovec __user * rvec",
            "def": {
               "file": "mm/process_vm_access.c",
               "line": 292
            }
         },
         {
            "type": "unsigned long riovcnt",
            "def": {
               "file": "mm/process_vm_access.c",
               "line": 292
            }
         },
         {
            "type": "unsigned long flags",
            "def": {
               "file": "mm/process_vm_access.c",
               "line": 292
            }
         },
         "mm/process_vm_access.c",
         292
      ],
      [
         311,
         "sys_process_vm_writev",
         "(pid_t pid, const struct iovec __user * lvec, unsigned long liovcnt, const struct iovec __user * rvec, unsigned long riovcnt, unsigned long flags)",
         "0x137",
         {
            "type": "pid_t pid",
            "def": {
               "file": "mm/process_vm_access.c",
               "line": 299
            }
         },
         {
            "type": "const struct iovec __user * lvec",
            "def": {
               "file": "mm/process_vm_access.c",
               "line": 299
            }
         },
         {
            "type": "unsigned long liovcnt",
            "def": {
               "file": "mm/process_vm_access.c",
               "line": 299
            }
         },
         {
            "type": "const struct iovec __user * rvec",
            "def": {
               "file": "mm/process_vm_access.c",
               "line": 299
            }
         },
         {
            "type": "unsigned long riovcnt",
            "def": {
               "file": "mm/process_vm_access.c",
               "line": 299
            }
         },
         {
            "type": "unsigned long flags",
            "def": {
               "file": "mm/process_vm_access.c",
               "line": 299
            }
         },
         "mm/process_vm_access.c",
         299
      ],
      [
         312,
         "sys_kcmp",
         "(pid_t pid1, pid_t pid2, int type, unsigned long idx1, unsigned long idx2)",
         "0x138",
         {
            "type": "pid_t pid1",
            "def": {
               "file": "kernel/kcmp.c",
               "line": 135
            }
         },
         {
            "type": "pid_t pid2",
            "def": {
               "file": "kernel/kcmp.c",
               "line": 135
            }
         },
         {
            "type": "int type",
            "def": {
               "file": "kernel/kcmp.c",
               "line": 135
            }
         },
         {
            "type": "unsigned long idx1",
            "def": {
               "file": "kernel/kcmp.c",
               "line": 135
            }
         },
         {
            "type": "unsigned long idx2",
            "def": {
               "file": "kernel/kcmp.c",
               "line": 135
            }
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/kcmp.c",
         135
      ],
      [
         313,
         "sys_finit_module",
         "(int fd, const char __user * uargs, int flags)",
         "0x139",
         {
            "type": "int fd",
            "def": {
               "file": "kernel/module/main.c",
               "line": 3815
            }
         },
         {
            "type": "const char __user * uargs",
            "def": {
               "file": "kernel/module/main.c",
               "line": 3815
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "kernel/module/main.c",
               "line": 3815
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/module/main.c",
         3815
      ],
      [
         314,
         "sys_sched_setattr",
         "(pid_t pid, struct sched_attr __user * uattr, unsigned int flags)",
         "0x13a",
         {
            "type": "pid_t pid",
            "def": {
               "file": "kernel/sched/syscalls.c",
               "line": 960
            }
         },
         {
            "type": "struct sched_attr __user * uattr",
            "def": {
               "file": "kernel/sched/syscalls.c",
               "line": 960
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "kernel/sched/syscalls.c",
               "line": 960
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sched/syscalls.c",
         960
      ],
      [
         315,
         "sys_sched_getattr",
         "(pid_t pid, struct sched_attr __user * uattr, unsigned int usize, unsigned int flags)",
         "0x13b",
         {
            "type": "pid_t pid",
            "def": {
               "file": "kernel/sched/syscalls.c",
               "line": 1060
            }
         },
         {
            "type": "struct sched_attr __user * uattr",
            "def": {
               "file": "kernel/sched/syscalls.c",
               "line": 1060
            }
         },
         {
            "type": "unsigned int usize",
            "def": {
               "file": "kernel/sched/syscalls.c",
               "line": 1060
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "kernel/sched/syscalls.c",
               "line": 1060
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sched/syscalls.c",
         1060
      ],
      [
         316,
         "sys_renameat2",
         "(int olddfd, const char __user * oldname, int newdfd, const char __user * newname, unsigned int flags)",
         "0x13c",
         {
            "type": "int olddfd",
            "def": {
               "file": "fs/namei.c",
               "line": 6216
            }
         },
         {
            "type": "const char __user * oldname",
            "def": {
               "file": "fs/namei.c",
               "line": 6216
            }
         },
         {
            "type": "int newdfd",
            "def": {
               "file": "fs/namei.c",
               "line": 6216
            }
         },
         {
            "type": "const char __user * newname",
            "def": {
               "file": "fs/namei.c",
               "line": 6216
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/namei.c",
               "line": 6216
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/namei.c",
         6216
      ],
      [
         317,
         "sys_seccomp",
         "(unsigned int op, unsigned int flags, void __user * uargs)",
         "0x13d",
         {
            "type": "unsigned int op",
            "def": {
               "file": "kernel/seccomp.c",
               "line": 2126
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "kernel/seccomp.c",
               "line": 2126
            }
         },
         {
            "type": "void __user * uargs",
            "def": {
               "file": "kernel/seccomp.c",
               "line": 2126
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/seccomp.c",
         2126
      ],
      [
         318,
         "sys_getrandom",
         "(char __user * ubuf, size_t len, unsigned int flags)",
         "0x13e",
         {
            "type": "char __user * ubuf",
            "def": {
               "file": "drivers/char/random.c",
               "line": 1380
            }
         },
         {
            "type": "size_t len",
            "def": {
               "file": "drivers/char/random.c",
               "line": 1380
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "drivers/char/random.c",
               "line": 1380
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "drivers/char/random.c",
         1380
      ],
      [
         319,
         "sys_memfd_create",
         "(const char __user * uname, unsigned int flags)",
         "0x13f",
         {
            "type": "const char __user * uname",
            "def": {
               "file": "mm/memfd.c",
               "line": 505
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "mm/memfd.c",
               "line": 505
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "mm/memfd.c",
         505
      ],
      [
         320,
         "sys_kexec_file_load",
         "(int kernel_fd, int initrd_fd, unsigned long cmdline_len, const char __user * cmdline_ptr, unsigned long flags)",
         "0x140",
         {
            "type": "int kernel_fd",
            "def": {
               "file": "kernel/kexec_file.c",
               "line": 364
            }
         },
         {
            "type": "int initrd_fd",
            "def": {
               "file": "kernel/kexec_file.c",
               "line": 364
            }
         },
         {
            "type": "unsigned long cmdline_len",
            "def": {
               "file": "kernel/kexec_file.c",
               "line": 364
            }
         },
         {
            "type": "const char __user * cmdline_ptr",
            "def": {
               "file": "kernel/kexec_file.c",
               "line": 364
            }
         },
         {
            "type": "unsigned long flags",
            "def": {
               "file": "kernel/kexec_file.c",
               "line": 364
            }
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/kexec_file.c",
         364
      ],
      [
         321,
         "sys_bpf",
         "(int cmd, union bpf_attr __user * uattr, unsigned int size, struct bpf_common_attr __user * uattr_common, unsigned int size_common)",
         "0x141",
         {
            "type": "int cmd",
            "def": {
               "file": "kernel/bpf/syscall.c",
               "line": 6567
            }
         },
         {
            "type": "union bpf_attr __user * uattr",
            "def": {
               "file": "kernel/bpf/syscall.c",
               "line": 6567
            }
         },
         {
            "type": "unsigned int size",
            "def": {
               "file": "kernel/bpf/syscall.c",
               "line": 6567
            }
         },
         {
            "type": "struct bpf_common_attr __user * uattr_common",
            "def": {
               "file": "kernel/bpf/syscall.c",
               "line": 6567
            }
         },
         {
            "type": "unsigned int size_common",
            "def": {
               "file": "kernel/bpf/syscall.c",
               "line": 6567
            }
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/bpf/syscall.c",
         6567
      ],
      [
         322,
         "sys_execveat",
         "(int fd, const char __user * filename, const compat_uptr_t __user * argv, const compat_uptr_t __user * envp, int flags)",
         "0x142",
         {
            "type": "int fd",
            "def": {
               "file": "fs/exec.c",
               "line": 2003
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/exec.c",
               "line": 2003
            }
         },
         {
            "type": "const compat_uptr_t __user * argv",
            "def": {
               "file": "fs/exec.c",
               "line": 2003
            }
         },
         {
            "type": "const compat_uptr_t __user * envp",
            "def": {
               "file": "fs/exec.c",
               "line": 2003
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/exec.c",
               "line": 2003
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/exec.c",
         2003
      ],
      [
         323,
         "sys_userfaultfd",
         "(int flags)",
         "0x143",
         {
            "type": "int flags",
            "def": {
               "file": "mm/userfaultfd.c",
               "line": 4500
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "mm/userfaultfd.c",
         4500
      ],
      [
         324,
         "sys_membarrier",
         "(int cmd, unsigned int flags, int cpu_id)",
         "0x144",
         {
            "type": "int cmd",
            "def": {
               "file": "kernel/sched/membarrier.c",
               "line": 634
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "kernel/sched/membarrier.c",
               "line": 634
            }
         },
         {
            "type": "int cpu_id",
            "def": {
               "file": "kernel/sched/membarrier.c",
               "line": 634
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sched/membarrier.c",
         634
      ],
      [
         325,
         "sys_mlock2",
         "(unsigned long start, size_t len, int flags)",
         "0x145",
         {
            "type": "unsigned long start",
            "def": {
               "file": "mm/mlock.c",
               "line": 670
            }
         },
         {
            "type": "size_t len",
            "def": {
               "file": "mm/mlock.c",
               "line": 670
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "mm/mlock.c",
               "line": 670
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "mm/mlock.c",
         670
      ],
      [
         326,
         "sys_copy_file_range",
         "(int fd_in, loff_t __user * off_in, int fd_out, loff_t __user * off_out, size_t len, unsigned int flags)",
         "0x146",
         {
            "type": "int fd_in",
            "def": {
               "file": "fs/read_write.c",
               "line": 1649
            }
         },
         {
            "type": "loff_t __user * off_in",
            "def": {
               "file": "fs/read_write.c",
               "line": 1649
            }
         },
         {
            "type": "int fd_out",
            "def": {
               "file": "fs/read_write.c",
               "line": 1649
            }
         },
         {
            "type": "loff_t __user * off_out",
            "def": {
               "file": "fs/read_write.c",
               "line": 1649
            }
         },
         {
            "type": "size_t len",
            "def": {
               "file": "fs/read_write.c",
               "line": 1649
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/read_write.c",
               "line": 1649
            }
         },
         "fs/read_write.c",
         1649
      ],
      [
         327,
         "sys_preadv2",
         "(compat_ulong_t fd, const struct iovec __user * vec, compat_ulong_t vlen, u32 pos_low, u32 pos_high, rwf_t flags)",
         "0x147",
         {
            "type": "compat_ulong_t fd",
            "def": {
               "file": "fs/read_write.c",
               "line": 1250
            }
         },
         {
            "type": "const struct iovec __user * vec",
            "def": {
               "file": "fs/read_write.c",
               "line": 1250
            }
         },
         {
            "type": "compat_ulong_t vlen",
            "def": {
               "file": "fs/read_write.c",
               "line": 1250
            }
         },
         {
            "type": "u32 pos_low",
            "def": {
               "file": "fs/read_write.c",
               "line": 1250
            }
         },
         {
            "type": "u32 pos_high",
            "def": {
               "file": "fs/read_write.c",
               "line": 1250
            }
         },
         {
            "type": "rwf_t flags",
            "def": {
               "file": "fs/read_write.c",
               "line": 1250
            }
         },
         "fs/read_write.c",
         1250
      ],
      [
         328,
         "sys_pwritev2",
         "(compat_ulong_t fd, const struct iovec __user * vec, compat_ulong_t vlen, u32 pos_low, u32 pos_high, rwf_t flags)",
         "0x148",
         {
            "type": "compat_ulong_t fd",
            "def": {
               "file": "fs/read_write.c",
               "line": 1291
            }
         },
         {
            "type": "const struct iovec __user * vec",
            "def": {
               "file": "fs/read_write.c",
               "line": 1291
            }
         },
         {
            "type": "compat_ulong_t vlen",
            "def": {
               "file": "fs/read_write.c",
               "line": 1291
            }
         },
         {
            "type": "u32 pos_low",
            "def": {
               "file": "fs/read_write.c",
               "line": 1291
            }
         },
         {
            "type": "u32 pos_high",
            "def": {
               "file": "fs/read_write.c",
               "line": 1291
            }
         },
         {
            "type": "rwf_t flags",
            "def": {
               "file": "fs/read_write.c",
               "line": 1291
            }
         },
         "fs/read_write.c",
         1291
      ],
      [
         329,
         "sys_pkey_mprotect",
         "(unsigned long start, size_t len, unsigned long prot, int pkey)",
         "0x149",
         {
            "type": "unsigned long start",
            "def": {
               "file": "mm/mprotect.c",
               "line": 993
            }
         },
         {
            "type": "size_t len",
            "def": {
               "file": "mm/mprotect.c",
               "line": 993
            }
         },
         {
            "type": "unsigned long prot",
            "def": {
               "file": "mm/mprotect.c",
               "line": 993
            }
         },
         {
            "type": "int pkey",
            "def": {
               "file": "mm/mprotect.c",
               "line": 993
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "mm/mprotect.c",
         993
      ],
      [
         330,
         "sys_pkey_alloc",
         "(unsigned long flags, unsigned long init_val)",
         "0x14a",
         {
            "type": "unsigned long flags",
            "def": {
               "file": "mm/mprotect.c",
               "line": 999
            }
         },
         {
            "type": "unsigned long init_val",
            "def": {
               "file": "mm/mprotect.c",
               "line": 999
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "mm/mprotect.c",
         999
      ],
      [
         331,
         "sys_pkey_free",
         "(int pkey)",
         "0x14b",
         {
            "type": "int pkey",
            "def": {
               "file": "mm/mprotect.c",
               "line": 1029
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "mm/mprotect.c",
         1029
      ],
      [
         332,
         "sys_statx",
         "(int dfd, const char __user * filename, unsigned flags, unsigned int mask, struct statx __user * buffer)",
         "0x14c",
         {
            "type": "int dfd",
            "def": {
               "file": "fs/stat.c",
               "line": 804
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/stat.c",
               "line": 804
            }
         },
         {
            "type": "unsigned flags",
            "def": {
               "file": "fs/stat.c",
               "line": 804
            }
         },
         {
            "type": "unsigned int mask",
            "def": {
               "file": "fs/stat.c",
               "line": 804
            }
         },
         {
            "type": "struct statx __user * buffer",
            "def": {
               "file": "fs/stat.c",
               "line": 804
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/stat.c",
         804
      ],
      [
         333,
         "sys_io_pgetevents",
         "(compat_aio_context_t ctx_id, compat_long_t min_nr, compat_long_t nr, struct io_event __user * events, struct old_timespec32 __user * timeout, const struct __compat_aio_sigset __user * usig)",
         "0x14d",
         {
            "type": "compat_aio_context_t ctx_id",
            "def": {
               "file": "fs/aio.c",
               "line": 2431
            }
         },
         {
            "type": "compat_long_t min_nr",
            "def": {
               "file": "fs/aio.c",
               "line": 2431
            }
         },
         {
            "type": "compat_long_t nr",
            "def": {
               "file": "fs/aio.c",
               "line": 2431
            }
         },
         {
            "type": "struct io_event __user * events",
            "def": {
               "file": "fs/aio.c",
               "line": 2431
            }
         },
         {
            "type": "struct old_timespec32 __user * timeout",
            "def": {
               "file": "fs/aio.c",
               "line": 2431
            }
         },
         {
            "type": "const struct __compat_aio_sigset __user * usig",
            "def": {
               "file": "fs/aio.c",
               "line": 2431
            }
         },
         "fs/aio.c",
         2431
      ],
      [
         334,
         "sys_rseq",
         "(void)",
         "0x14e",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/rseq.c",
         812
      ],
      [
         335,
         "sys_uretprobe",
         "(void)",
         "0x14f",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "arch/x86/kernel/uprobes.c",
         367
      ],
      [
         336,
         "sys_uprobe",
         "(void)",
         "0x150",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "arch/x86/kernel/uprobes.c",
         762
      ],
      [
         424,
         "sys_pidfd_send_signal",
         "(int pidfd, int sig, siginfo_t __user * info, unsigned int flags)",
         "0x1a8",
         {
            "type": "int pidfd",
            "def": {
               "file": "kernel/signal.c",
               "line": 4146
            }
         },
         {
            "type": "int sig",
            "def": {
               "file": "kernel/signal.c",
               "line": 4146
            }
         },
         {
            "type": "siginfo_t __user * info",
            "def": {
               "file": "kernel/signal.c",
               "line": 4146
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "kernel/signal.c",
               "line": 4146
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/signal.c",
         4146
      ],
      [
         425,
         "sys_io_uring_setup",
         "(void)",
         "0x1a9",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys_ni.c",
         51
      ],
      [
         426,
         "sys_io_uring_enter",
         "(void)",
         "0x1aa",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys_ni.c",
         52
      ],
      [
         427,
         "sys_io_uring_register",
         "(void)",
         "0x1ab",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys_ni.c",
         53
      ],
      [
         428,
         "sys_open_tree",
         "(int dfd, const char __user * filename, unsigned flags)",
         "0x1ac",
         {
            "type": "int dfd",
            "def": {
               "file": "fs/namespace.c",
               "line": 3245
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/namespace.c",
               "line": 3245
            }
         },
         {
            "type": "unsigned flags",
            "def": {
               "file": "fs/namespace.c",
               "line": 3245
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/namespace.c",
         3245
      ],
      [
         429,
         "sys_move_mount",
         "(int from_dfd, const char __user * from_pathname, int to_dfd, const char __user * to_pathname, unsigned int flags)",
         "0x1ad",
         {
            "type": "int from_dfd",
            "def": {
               "file": "fs/namespace.c",
               "line": 4577
            }
         },
         {
            "type": "const char __user * from_pathname",
            "def": {
               "file": "fs/namespace.c",
               "line": 4577
            }
         },
         {
            "type": "int to_dfd",
            "def": {
               "file": "fs/namespace.c",
               "line": 4577
            }
         },
         {
            "type": "const char __user * to_pathname",
            "def": {
               "file": "fs/namespace.c",
               "line": 4577
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/namespace.c",
               "line": 4577
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/namespace.c",
         4577
      ],
      [
         430,
         "sys_fsopen",
         "(const char __user * _fs_name, unsigned int flags)",
         "0x1ae",
         {
            "type": "const char __user * _fs_name",
            "def": {
               "file": "fs/fsopen.c",
               "line": 120
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/fsopen.c",
               "line": 120
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/fsopen.c",
         120
      ],
      [
         431,
         "sys_fsconfig",
         "(int fd, unsigned int cmd, const char __user * _key, const void __user * _value, int aux)",
         "0x1af",
         {
            "type": "int fd",
            "def": {
               "file": "fs/fsopen.c",
               "line": 350
            }
         },
         {
            "type": "unsigned int cmd",
            "def": {
               "file": "fs/fsopen.c",
               "line": 350
            }
         },
         {
            "type": "const char __user * _key",
            "def": {
               "file": "fs/fsopen.c",
               "line": 350
            }
         },
         {
            "type": "const void __user * _value",
            "def": {
               "file": "fs/fsopen.c",
               "line": 350
            }
         },
         {
            "type": "int aux",
            "def": {
               "file": "fs/fsopen.c",
               "line": 350
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/fsopen.c",
         350
      ],
      [
         432,
         "sys_fsmount",
         "(int fs_fd, unsigned int flags, unsigned int attr_flags)",
         "0x1b0",
         {
            "type": "int fs_fd",
            "def": {
               "file": "fs/namespace.c",
               "line": 4435
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/namespace.c",
               "line": 4435
            }
         },
         {
            "type": "unsigned int attr_flags",
            "def": {
               "file": "fs/namespace.c",
               "line": 4435
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/namespace.c",
         4435
      ],
      [
         433,
         "sys_fspick",
         "(int dfd, const char __user * path, unsigned int flags)",
         "0x1b1",
         {
            "type": "int dfd",
            "def": {
               "file": "fs/fsopen.c",
               "line": 163
            }
         },
         {
            "type": "const char __user * path",
            "def": {
               "file": "fs/fsopen.c",
               "line": 163
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/fsopen.c",
               "line": 163
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/fsopen.c",
         163
      ],
      [
         434,
         "sys_pidfd_open",
         "(pid_t pid, unsigned int flags)",
         "0x1b2",
         {
            "type": "pid_t pid",
            "def": {
               "file": "kernel/pid.c",
               "line": 697
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "kernel/pid.c",
               "line": 697
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/pid.c",
         697
      ],
      [
         435,
         "sys_clone3",
         "(struct clone_args __user * uargs, size_t size)",
         "0x1b3",
         {
            "type": "struct clone_args __user * uargs",
            "def": {
               "file": "kernel/fork.c",
               "line": 3033
            }
         },
         {
            "type": "size_t size",
            "def": {
               "file": "kernel/fork.c",
               "line": 3033
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/fork.c",
         3033
      ],
      [
         436,
         "sys_close_range",
         "(unsigned int fd, unsigned int max_fd, unsigned int flags)",
         "0x1b4",
         {
            "type": "unsigned int fd",
            "def": {
               "file": "fs/file.c",
               "line": 818
            }
         },
         {
            "type": "unsigned int max_fd",
            "def": {
               "file": "fs/file.c",
               "line": 818
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/file.c",
               "line": 818
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/file.c",
         818
      ],
      [
         437,
         "sys_openat2",
         "(int dfd, const char __user * filename, struct open_how __user * how, size_t usize)",
         "0x1b5",
         {
            "type": "int dfd",
            "def": {
               "file": "fs/open.c",
               "line": 1393
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/open.c",
               "line": 1393
            }
         },
         {
            "type": "struct open_how __user * how",
            "def": {
               "file": "fs/open.c",
               "line": 1393
            }
         },
         {
            "type": "size_t usize",
            "def": {
               "file": "fs/open.c",
               "line": 1393
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/open.c",
         1393
      ],
      [
         438,
         "sys_pidfd_getfd",
         "(int pidfd, int fd, unsigned int flags)",
         "0x1b6",
         {
            "type": "int pidfd",
            "def": {
               "file": "kernel/pid.c",
               "line": 927
            }
         },
         {
            "type": "int fd",
            "def": {
               "file": "kernel/pid.c",
               "line": 927
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "kernel/pid.c",
               "line": 927
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/pid.c",
         927
      ],
      [
         439,
         "sys_faccessat2",
         "(int dfd, const char __user * filename, int mode, int flags)",
         "0x1b7",
         {
            "type": "int dfd",
            "def": {
               "file": "fs/open.c",
               "line": 539
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/open.c",
               "line": 539
            }
         },
         {
            "type": "int mode",
            "def": {
               "file": "fs/open.c",
               "line": 539
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/open.c",
               "line": 539
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/open.c",
         539
      ],
      [
         440,
         "sys_process_madvise",
         "(int pidfd, const struct iovec __user * vec, size_t vlen, int behavior, unsigned int flags)",
         "0x1b8",
         {
            "type": "int pidfd",
            "def": {
               "file": "mm/madvise.c",
               "line": 2093
            }
         },
         {
            "type": "const struct iovec __user * vec",
            "def": {
               "file": "mm/madvise.c",
               "line": 2093
            }
         },
         {
            "type": "size_t vlen",
            "def": {
               "file": "mm/madvise.c",
               "line": 2093
            }
         },
         {
            "type": "int behavior",
            "def": {
               "file": "mm/madvise.c",
               "line": 2093
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "mm/madvise.c",
               "line": 2093
            }
         },
         {
            "type": "",
            "def": {}
         },
         "mm/madvise.c",
         2093
      ],
      [
         441,
         "sys_epoll_pwait2",
         "(int epfd, struct epoll_event __user * events, int maxevents, const struct __kernel_timespec __user * timeout, const compat_sigset_t __user * sigmask, compat_size_t sigsetsize)",
         "0x1b9",
         {
            "type": "int epfd",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2973
            }
         },
         {
            "type": "struct epoll_event __user * events",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2973
            }
         },
         {
            "type": "int maxevents",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2973
            }
         },
         {
            "type": "const struct __kernel_timespec __user * timeout",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2973
            }
         },
         {
            "type": "const compat_sigset_t __user * sigmask",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2973
            }
         },
         {
            "type": "compat_size_t sigsetsize",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2973
            }
         },
         "fs/eventpoll.c",
         2973
      ],
      [
         442,
         "sys_mount_setattr",
         "(int dfd, const char __user * path, unsigned int flags, struct mount_attr __user * uattr, size_t usize)",
         "0x1ba",
         {
            "type": "int dfd",
            "def": {
               "file": "fs/namespace.c",
               "line": 5145
            }
         },
         {
            "type": "const char __user * path",
            "def": {
               "file": "fs/namespace.c",
               "line": 5145
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/namespace.c",
               "line": 5145
            }
         },
         {
            "type": "struct mount_attr __user * uattr",
            "def": {
               "file": "fs/namespace.c",
               "line": 5145
            }
         },
         {
            "type": "size_t usize",
            "def": {
               "file": "fs/namespace.c",
               "line": 5145
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/namespace.c",
         5145
      ],
      [
         443,
         "sys_quotactl_fd",
         "(unsigned int fd, unsigned int cmd, qid_t id, void __user * addr)",
         "0x1bb",
         {
            "type": "unsigned int fd",
            "def": {
               "file": "fs/quota/quota.c",
               "line": 973
            }
         },
         {
            "type": "unsigned int cmd",
            "def": {
               "file": "fs/quota/quota.c",
               "line": 973
            }
         },
         {
            "type": "qid_t id",
            "def": {
               "file": "fs/quota/quota.c",
               "line": 973
            }
         },
         {
            "type": "void __user * addr",
            "def": {
               "file": "fs/quota/quota.c",
               "line": 973
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/quota/quota.c",
         973
      ],
      [
         444,
         "sys_landlock_create_ruleset",
         "(void)",
         "0x1bc",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys_ni.c",
         167
      ],
      [
         445,
         "sys_landlock_add_rule",
         "(void)",
         "0x1bd",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys_ni.c",
         168
      ],
      [
         446,
         "sys_landlock_restrict_self",
         "(void)",
         "0x1be",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys_ni.c",
         169
      ],
      [
         447,
         "sys_memfd_secret",
         "(unsigned int flags)",
         "0x1bf",
         {
            "type": "unsigned int flags",
            "def": {
               "file": "mm/secretmem.c",
               "line": 322
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "mm/secretmem.c",
         322
      ],
      [
         448,
         "sys_process_mrelease",
         "(int pidfd, unsigned int flags)",
         "0x1c0",
         {
            "type": "int pidfd",
            "def": {
               "file": "mm/oom_kill.c",
               "line": 1195
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "mm/oom_kill.c",
               "line": 1195
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "mm/oom_kill.c",
         1195
      ],
      [
         449,
         "sys_futex_waitv",
         "(struct futex_waitv __user * waiters, unsigned int nr_futexes, unsigned int flags, struct __kernel_timespec __user * timeout, clockid_t clockid)",
         "0x1c1",
         {
            "type": "struct futex_waitv __user * waiters",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 321
            }
         },
         {
            "type": "unsigned int nr_futexes",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 321
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 321
            }
         },
         {
            "type": "struct __kernel_timespec __user * timeout",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 321
            }
         },
         {
            "type": "clockid_t clockid",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 321
            }
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/futex/syscalls.c",
         321
      ],
      [
         450,
         "sys_set_mempolicy_home_node",
         "(unsigned long start, unsigned long len, unsigned long home_node, unsigned long flags)",
         "0x1c2",
         {
            "type": "unsigned long start",
            "def": {
               "file": "mm/mempolicy.c",
               "line": 1762
            }
         },
         {
            "type": "unsigned long len",
            "def": {
               "file": "mm/mempolicy.c",
               "line": 1762
            }
         },
         {
            "type": "unsigned long home_node",
            "def": {
               "file": "mm/mempolicy.c",
               "line": 1762
            }
         },
         {
            "type": "unsigned long flags",
            "def": {
               "file": "mm/mempolicy.c",
               "line": 1762
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "mm/mempolicy.c",
         1762
      ],
      [
         451,
         "sys_cachestat",
         "(unsigned int fd, struct cachestat_range __user * cstat_range, struct cachestat __user * cstat, unsigned int flags)",
         "0x1c3",
         {
            "type": "unsigned int fd",
            "def": {
               "file": "mm/filemap.c",
               "line": 4752
            }
         },
         {
            "type": "struct cachestat_range __user * cstat_range",
            "def": {
               "file": "mm/filemap.c",
               "line": 4752
            }
         },
         {
            "type": "struct cachestat __user * cstat",
            "def": {
               "file": "mm/filemap.c",
               "line": 4752
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "mm/filemap.c",
               "line": 4752
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "mm/filemap.c",
         4752
      ],
      [
         452,
         "sys_fchmodat2",
         "(int dfd, const char __user * filename, umode_t mode, unsigned int flags)",
         "0x1c4",
         {
            "type": "int dfd",
            "def": {
               "file": "fs/open.c",
               "line": 692
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/open.c",
               "line": 692
            }
         },
         {
            "type": "umode_t mode",
            "def": {
               "file": "fs/open.c",
               "line": 692
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/open.c",
               "line": 692
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/open.c",
         692
      ],
      [
         453,
         "sys_map_shadow_stack",
         "(unsigned long addr, unsigned long size, unsigned int flags)",
         "0x1c5",
         {
            "type": "unsigned long addr",
            "def": {
               "file": "arch/x86/kernel/shstk.c",
               "line": 542
            }
         },
         {
            "type": "unsigned long size",
            "def": {
               "file": "arch/x86/kernel/shstk.c",
               "line": 542
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "arch/x86/kernel/shstk.c",
               "line": 542
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "arch/x86/kernel/shstk.c",
         542
      ],
      [
         454,
         "sys_futex_wake",
         "(void __user * uaddr, unsigned long mask, int nr, unsigned int flags)",
         "0x1c6",
         {
            "type": "void __user * uaddr",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 369
            }
         },
         {
            "type": "unsigned long mask",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 369
            }
         },
         {
            "type": "int nr",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 369
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 369
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/futex/syscalls.c",
         369
      ],
      [
         455,
         "sys_futex_wait",
         "(struct futex_waitv __user * waiters, unsigned int nr_futexes, unsigned int flags, struct __kernel_timespec __user * timeout, clockid_t clockid)",
         "0x1c7",
         {
            "type": "struct futex_waitv __user * waiters",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 321
            }
         },
         {
            "type": "unsigned int nr_futexes",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 321
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 321
            }
         },
         {
            "type": "struct __kernel_timespec __user * timeout",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 321
            }
         },
         {
            "type": "clockid_t clockid",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 321
            }
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/futex/syscalls.c",
         321
      ],
      [
         456,
         "sys_futex_requeue",
         "(struct futex_waitv __user * waiters, unsigned int flags, int nr_wake, int nr_requeue)",
         "0x1c8",
         {
            "type": "struct futex_waitv __user * waiters",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 445
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 445
            }
         },
         {
            "type": "int nr_wake",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 445
            }
         },
         {
            "type": "int nr_requeue",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 445
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/futex/syscalls.c",
         445
      ],
      [
         457,
         "sys_statmount",
         "(const struct mnt_id_req __user * req, struct statmount __user * buf, size_t bufsize, unsigned int flags)",
         "0x1c9",
         {
            "type": "const struct mnt_id_req __user * req",
            "def": {
               "file": "fs/namespace.c",
               "line": 5961
            }
         },
         {
            "type": "struct statmount __user * buf",
            "def": {
               "file": "fs/namespace.c",
               "line": 5961
            }
         },
         {
            "type": "size_t bufsize",
            "def": {
               "file": "fs/namespace.c",
               "line": 5961
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/namespace.c",
               "line": 5961
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/namespace.c",
         5961
      ],
      [
         458,
         "sys_listmount",
         "(const struct mnt_id_req __user * req, u64 __user * mnt_ids, size_t nr_mnt_ids, unsigned int flags)",
         "0x1ca",
         {
            "type": "const struct mnt_id_req __user * req",
            "def": {
               "file": "fs/namespace.c",
               "line": 6123
            }
         },
         {
            "type": "u64 __user * mnt_ids",
            "def": {
               "file": "fs/namespace.c",
               "line": 6123
            }
         },
         {
            "type": "size_t nr_mnt_ids",
            "def": {
               "file": "fs/namespace.c",
               "line": 6123
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/namespace.c",
               "line": 6123
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/namespace.c",
         6123
      ],
      [
         459,
         "sys_lsm_get_self_attr",
         "(void)",
         "0x1cb",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys_ni.c",
         172
      ],
      [
         460,
         "sys_lsm_set_self_attr",
         "(void)",
         "0x1cc",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys_ni.c",
         173
      ],
      [
         461,
         "sys_lsm_list_modules",
         "(void)",
         "0x1cd",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys_ni.c",
         174
      ],
      [
         462,
         "sys_mseal",
         "(unsigned long start, size_t len, unsigned long flags)",
         "0x1ce",
         {
            "type": "unsigned long start",
            "def": {
               "file": "mm/mseal.c",
               "line": 191
            }
         },
         {
            "type": "size_t len",
            "def": {
               "file": "mm/mseal.c",
               "line": 191
            }
         },
         {
            "type": "unsigned long flags",
            "def": {
               "file": "mm/mseal.c",
               "line": 191
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "mm/mseal.c",
         191
      ],
      [
         463,
         "sys_setxattrat",
         "(int dfd, const char __user * pathname, unsigned int at_flags, const char __user * name, const struct xattr_args __user * uargs, size_t usize)",
         "0x1cf",
         {
            "type": "int dfd",
            "def": {
               "file": "fs/xattr.c",
               "line": 740
            }
         },
         {
            "type": "const char __user * pathname",
            "def": {
               "file": "fs/xattr.c",
               "line": 740
            }
         },
         {
            "type": "unsigned int at_flags",
            "def": {
               "file": "fs/xattr.c",
               "line": 740
            }
         },
         {
            "type": "const char __user * name",
            "def": {
               "file": "fs/xattr.c",
               "line": 740
            }
         },
         {
            "type": "const struct xattr_args __user * uargs",
            "def": {
               "file": "fs/xattr.c",
               "line": 740
            }
         },
         {
            "type": "size_t usize",
            "def": {
               "file": "fs/xattr.c",
               "line": 740
            }
         },
         "fs/xattr.c",
         740
      ],
      [
         464,
         "sys_getxattrat",
         "(int dfd, const char __user * pathname, unsigned int at_flags, const char __user * name, struct xattr_args __user * uargs, size_t usize)",
         "0x1d0",
         {
            "type": "int dfd",
            "def": {
               "file": "fs/xattr.c",
               "line": 880
            }
         },
         {
            "type": "const char __user * pathname",
            "def": {
               "file": "fs/xattr.c",
               "line": 880
            }
         },
         {
            "type": "unsigned int at_flags",
            "def": {
               "file": "fs/xattr.c",
               "line": 880
            }
         },
         {
            "type": "const char __user * name",
            "def": {
               "file": "fs/xattr.c",
               "line": 880
            }
         },
         {
            "type": "struct xattr_args __user * uargs",
            "def": {
               "file": "fs/xattr.c",
               "line": 880
            }
         },
         {
            "type": "size_t usize",
            "def": {
               "file": "fs/xattr.c",
               "line": 880
            }
         },
         "fs/xattr.c",
         880
      ],
      [
         465,
         "sys_listxattrat",
         "(int dfd, const char __user * pathname, unsigned int at_flags, char __user * list, size_t size)",
         "0x1d1",
         {
            "type": "int dfd",
            "def": {
               "file": "fs/xattr.c",
               "line": 1004
            }
         },
         {
            "type": "const char __user * pathname",
            "def": {
               "file": "fs/xattr.c",
               "line": 1004
            }
         },
         {
            "type": "unsigned int at_flags",
            "def": {
               "file": "fs/xattr.c",
               "line": 1004
            }
         },
         {
            "type": "char __user * list",
            "def": {
               "file": "fs/xattr.c",
               "line": 1004
            }
         },
         {
            "type": "size_t size",
            "def": {
               "file": "fs/xattr.c",
               "line": 1004
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/xattr.c",
         1004
      ],
      [
         466,
         "sys_removexattrat",
         "(int dfd, const char __user * pathname, unsigned int at_flags, const char __user * name)",
         "0x1d2",
         {
            "type": "int dfd",
            "def": {
               "file": "fs/xattr.c",
               "line": 1100
            }
         },
         {
            "type": "const char __user * pathname",
            "def": {
               "file": "fs/xattr.c",
               "line": 1100
            }
         },
         {
            "type": "unsigned int at_flags",
            "def": {
               "file": "fs/xattr.c",
               "line": 1100
            }
         },
         {
            "type": "const char __user * name",
            "def": {
               "file": "fs/xattr.c",
               "line": 1100
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/xattr.c",
         1100
      ],
      [
         467,
         "sys_open_tree_attr",
         "(int dfd, const char __user * filename, unsigned flags, struct mount_attr __user * uattr, size_t usize)",
         "0x1d3",
         {
            "type": "int dfd",
            "def": {
               "file": "fs/namespace.c",
               "line": 5186
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/namespace.c",
               "line": 5186
            }
         },
         {
            "type": "unsigned flags",
            "def": {
               "file": "fs/namespace.c",
               "line": 5186
            }
         },
         {
            "type": "struct mount_attr __user * uattr",
            "def": {
               "file": "fs/namespace.c",
               "line": 5186
            }
         },
         {
            "type": "size_t usize",
            "def": {
               "file": "fs/namespace.c",
               "line": 5186
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/namespace.c",
         5186
      ],
      [
         468,
         "sys_file_getattr",
         "(int dfd, const char __user * filename, struct file_attr __user * ufattr, size_t usize, unsigned int at_flags)",
         "0x1d4",
         {
            "type": "int dfd",
            "def": {
               "file": "fs/file_attr.c",
               "line": 374
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/file_attr.c",
               "line": 374
            }
         },
         {
            "type": "struct file_attr __user * ufattr",
            "def": {
               "file": "fs/file_attr.c",
               "line": 374
            }
         },
         {
            "type": "size_t usize",
            "def": {
               "file": "fs/file_attr.c",
               "line": 374
            }
         },
         {
            "type": "unsigned int at_flags",
            "def": {
               "file": "fs/file_attr.c",
               "line": 374
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/file_attr.c",
         374
      ],
      [
         469,
         "sys_file_setattr",
         "(int dfd, const char __user * filename, struct file_attr __user * ufattr, size_t usize, unsigned int at_flags)",
         "0x1d5",
         {
            "type": "int dfd",
            "def": {
               "file": "fs/file_attr.c",
               "line": 427
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/file_attr.c",
               "line": 427
            }
         },
         {
            "type": "struct file_attr __user * ufattr",
            "def": {
               "file": "fs/file_attr.c",
               "line": 427
            }
         },
         {
            "type": "size_t usize",
            "def": {
               "file": "fs/file_attr.c",
               "line": 427
            }
         },
         {
            "type": "unsigned int at_flags",
            "def": {
               "file": "fs/file_attr.c",
               "line": 427
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/file_attr.c",
         427
      ],
      [
         470,
         "sys_listns",
         "(const struct ns_id_req __user * req, u64 __user * ns_ids, size_t nr_ns_ids, unsigned int flags)",
         "0x1d6",
         {
            "type": "const struct ns_id_req __user * req",
            "def": {
               "file": "kernel/nstree.c",
               "line": 757
            }
         },
         {
            "type": "u64 __user * ns_ids",
            "def": {
               "file": "kernel/nstree.c",
               "line": 757
            }
         },
         {
            "type": "size_t nr_ns_ids",
            "def": {
               "file": "kernel/nstree.c",
               "line": 757
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "kernel/nstree.c",
               "line": 757
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/nstree.c",
         757
      ],
      [
         471,
         "sys_rseq_slice_yield",
         "(void)",
         "0x1d7",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/rseq.c",
         812
      ],
      [
         512,
         "compat_sys_rt_sigaction",
         "(int sig, const struct compat_sigaction __user * act, struct compat_sigaction __user * oact, compat_size_t sigsetsize)",
         "0x200",
         {
            "type": "int sig",
            "def": {
               "file": "kernel/signal.c",
               "line": 4735
            }
         },
         {
            "type": "const struct compat_sigaction __user * act",
            "def": {
               "file": "kernel/signal.c",
               "line": 4735
            }
         },
         {
            "type": "struct compat_sigaction __user * oact",
            "def": {
               "file": "kernel/signal.c",
               "line": 4735
            }
         },
         {
            "type": "compat_size_t sigsetsize",
            "def": {
               "file": "kernel/signal.c",
               "line": 4735
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/signal.c",
         4735
      ],
      [
         513,
         "compat_sys_x32_rt_sigreturn",
         "(void)",
         "0x201",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "arch/x86/kernel/signal_64.c",
         364
      ],
      [
         514,
         "compat_sys_ioctl",
         "(unsigned int fd, unsigned int cmd, compat_ulong_t arg)",
         "0x202",
         {
            "type": "unsigned int fd",
            "def": {
               "file": "fs/ioctl.c",
               "line": 638
            }
         },
         {
            "type": "unsigned int cmd",
            "def": {
               "file": "fs/ioctl.c",
               "line": 638
            }
         },
         {
            "type": "compat_ulong_t arg",
            "def": {
               "file": "fs/ioctl.c",
               "line": 638
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/ioctl.c",
         638
      ],
      [
         515,
         "sys_readv",
         "(unsigned long fd, const struct iovec __user * vec, unsigned long vlen)",
         "0x203",
         {
            "type": "unsigned long fd",
            "def": {
               "file": "fs/read_write.c",
               "line": 1163
            }
         },
         {
            "type": "const struct iovec __user * vec",
            "def": {
               "file": "fs/read_write.c",
               "line": 1163
            }
         },
         {
            "type": "unsigned long vlen",
            "def": {
               "file": "fs/read_write.c",
               "line": 1163
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/read_write.c",
         1163
      ],
      [
         516,
         "sys_writev",
         "(unsigned long fd, const struct iovec __user * vec, unsigned long vlen)",
         "0x204",
         {
            "type": "unsigned long fd",
            "def": {
               "file": "fs/read_write.c",
               "line": 1169
            }
         },
         {
            "type": "const struct iovec __user * vec",
            "def": {
               "file": "fs/read_write.c",
               "line": 1169
            }
         },
         {
            "type": "unsigned long vlen",
            "def": {
               "file": "fs/read_write.c",
               "line": 1169
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/read_write.c",
         1169
      ],
      [
         517,
         "compat_sys_recvfrom",
         "(int fd, void __user * buf, compat_size_t len, unsigned int flags, struct sockaddr __user * addr, int __user * addrlen)",
         "0x205",
         {
            "type": "int fd",
            "def": {
               "file": "net/compat.c",
               "line": 397
            }
         },
         {
            "type": "void __user * buf",
            "def": {
               "file": "net/compat.c",
               "line": 397
            }
         },
         {
            "type": "compat_size_t len",
            "def": {
               "file": "net/compat.c",
               "line": 397
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "net/compat.c",
               "line": 397
            }
         },
         {
            "type": "struct sockaddr __user * addr",
            "def": {
               "file": "net/compat.c",
               "line": 397
            }
         },
         {
            "type": "int __user * addrlen",
            "def": {
               "file": "net/compat.c",
               "line": 397
            }
         },
         "net/compat.c",
         397
      ],
      [
         518,
         "compat_sys_sendmsg",
         "(int fd, struct compat_msghdr __user * msg, unsigned int flags)",
         "0x206",
         {
            "type": "int fd",
            "def": {
               "file": "net/compat.c",
               "line": 349
            }
         },
         {
            "type": "struct compat_msghdr __user * msg",
            "def": {
               "file": "net/compat.c",
               "line": 349
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "net/compat.c",
               "line": 349
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "net/compat.c",
         349
      ],
      [
         519,
         "compat_sys_recvmsg",
         "(int fd, struct compat_msghdr __user * msg, unsigned int flags)",
         "0x207",
         {
            "type": "int fd",
            "def": {
               "file": "net/compat.c",
               "line": 377
            }
         },
         {
            "type": "struct compat_msghdr __user * msg",
            "def": {
               "file": "net/compat.c",
               "line": 377
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "net/compat.c",
               "line": 377
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "net/compat.c",
         377
      ],
      [
         520,
         "compat_sys_execve",
         "(const char __user * filename, const compat_uptr_t __user * argv, const compat_uptr_t __user * envp)",
         "0x208",
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/exec.c",
               "line": 1994
            }
         },
         {
            "type": "const compat_uptr_t __user * argv",
            "def": {
               "file": "fs/exec.c",
               "line": 1994
            }
         },
         {
            "type": "const compat_uptr_t __user * envp",
            "def": {
               "file": "fs/exec.c",
               "line": 1994
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/exec.c",
         1994
      ],
      [
         521,
         "compat_sys_ptrace",
         "(compat_long_t request, compat_long_t pid, compat_long_t addr, compat_long_t data)",
         "0x209",
         {
            "type": "compat_long_t request",
            "def": {
               "file": "kernel/ptrace.c",
               "line": 1552
            }
         },
         {
            "type": "compat_long_t pid",
            "def": {
               "file": "kernel/ptrace.c",
               "line": 1552
            }
         },
         {
            "type": "compat_long_t addr",
            "def": {
               "file": "kernel/ptrace.c",
               "line": 1552
            }
         },
         {
            "type": "compat_long_t data",
            "def": {
               "file": "kernel/ptrace.c",
               "line": 1552
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/ptrace.c",
         1552
      ],
      [
         522,
         "compat_sys_rt_sigpending",
         "(compat_sigset_t __user * uset, compat_size_t sigsetsize)",
         "0x20a",
         {
            "type": "compat_sigset_t __user * uset",
            "def": {
               "file": "kernel/signal.c",
               "line": 3487
            }
         },
         {
            "type": "compat_size_t sigsetsize",
            "def": {
               "file": "kernel/signal.c",
               "line": 3487
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/signal.c",
         3487
      ],
      [
         523,
         "compat_sys_rt_sigtimedwait_time64",
         "(compat_sigset_t __user * uthese, struct compat_siginfo __user * uinfo, struct __kernel_timespec __user * uts, compat_size_t sigsetsize)",
         "0x20b",
         {
            "type": "compat_sigset_t __user * uthese",
            "def": {
               "file": "kernel/signal.c",
               "line": 3951
            }
         },
         {
            "type": "struct compat_siginfo __user * uinfo",
            "def": {
               "file": "kernel/signal.c",
               "line": 3951
            }
         },
         {
            "type": "struct __kernel_timespec __user * uts",
            "def": {
               "file": "kernel/signal.c",
               "line": 3951
            }
         },
         {
            "type": "compat_size_t sigsetsize",
            "def": {
               "file": "kernel/signal.c",
               "line": 3951
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/signal.c",
         3951
      ],
      [
         524,
         "compat_sys_rt_sigqueueinfo",
         "(compat_pid_t pid, int sig, struct compat_siginfo __user * uinfo)",
         "0x20c",
         {
            "type": "compat_pid_t pid",
            "def": {
               "file": "kernel/signal.c",
               "line": 4303
            }
         },
         {
            "type": "int sig",
            "def": {
               "file": "kernel/signal.c",
               "line": 4303
            }
         },
         {
            "type": "struct compat_siginfo __user * uinfo",
            "def": {
               "file": "kernel/signal.c",
               "line": 4303
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/signal.c",
         4303
      ],
      [
         525,
         "compat_sys_sigaltstack",
         "(const compat_stack_t __user * uss_ptr, compat_stack_t __user * uoss_ptr)",
         "0x20d",
         {
            "type": "const compat_stack_t __user * uss_ptr",
            "def": {
               "file": "kernel/signal.c",
               "line": 4591
            }
         },
         {
            "type": "compat_stack_t __user * uoss_ptr",
            "def": {
               "file": "kernel/signal.c",
               "line": 4591
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/signal.c",
         4591
      ],
      [
         526,
         "compat_sys_timer_create",
         "(clockid_t which_clock, struct compat_sigevent __user * timer_event_spec, timer_t __user * created_timer_id)",
         "0x20e",
         {
            "type": "clockid_t which_clock",
            "def": {
               "file": "kernel/time/posix-timers.c",
               "line": 589
            }
         },
         {
            "type": "struct compat_sigevent __user * timer_event_spec",
            "def": {
               "file": "kernel/time/posix-timers.c",
               "line": 589
            }
         },
         {
            "type": "timer_t __user * created_timer_id",
            "def": {
               "file": "kernel/time/posix-timers.c",
               "line": 589
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/time/posix-timers.c",
         589
      ],
      [
         527,
         "compat_sys_mq_notify",
         "(mqd_t mqdes, const struct compat_sigevent __user * u_notification)",
         "0x20f",
         {
            "type": "mqd_t mqdes",
            "def": {
               "file": "ipc/mqueue.c",
               "line": 1506
            }
         },
         {
            "type": "const struct compat_sigevent __user * u_notification",
            "def": {
               "file": "ipc/mqueue.c",
               "line": 1506
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "ipc/mqueue.c",
         1506
      ],
      [
         528,
         "compat_sys_kexec_load",
         "(compat_ulong_t entry, compat_ulong_t nr_segments, struct compat_kexec_segment __user * segments, compat_ulong_t flags)",
         "0x210",
         {
            "type": "compat_ulong_t entry",
            "def": {
               "file": "kernel/kexec.c",
               "line": 268
            }
         },
         {
            "type": "compat_ulong_t nr_segments",
            "def": {
               "file": "kernel/kexec.c",
               "line": 268
            }
         },
         {
            "type": "struct compat_kexec_segment __user * segments",
            "def": {
               "file": "kernel/kexec.c",
               "line": 268
            }
         },
         {
            "type": "compat_ulong_t flags",
            "def": {
               "file": "kernel/kexec.c",
               "line": 268
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/kexec.c",
         268
      ],
      [
         529,
         "compat_sys_waitid",
         "(int which, compat_pid_t pid, struct compat_siginfo __user * infop, int options, struct compat_rusage __user * uru)",
         "0x211",
         {
            "type": "int which",
            "def": {
               "file": "kernel/exit.c",
               "line": 1959
            }
         },
         {
            "type": "compat_pid_t pid",
            "def": {
               "file": "kernel/exit.c",
               "line": 1959
            }
         },
         {
            "type": "struct compat_siginfo __user * infop",
            "def": {
               "file": "kernel/exit.c",
               "line": 1959
            }
         },
         {
            "type": "int options",
            "def": {
               "file": "kernel/exit.c",
               "line": 1959
            }
         },
         {
            "type": "struct compat_rusage __user * uru",
            "def": {
               "file": "kernel/exit.c",
               "line": 1959
            }
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/exit.c",
         1959
      ],
      [
         530,
         "compat_sys_set_robust_list",
         "(struct compat_robust_list_head __user * head, compat_size_t len)",
         "0x212",
         {
            "type": "struct compat_robust_list_head __user * head",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 481
            }
         },
         {
            "type": "compat_size_t len",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 481
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/futex/syscalls.c",
         481
      ],
      [
         531,
         "compat_sys_get_robust_list",
         "(int pid, compat_uptr_t __user * head_ptr, compat_size_t __user * len_ptr)",
         "0x213",
         {
            "type": "int pid",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 491
            }
         },
         {
            "type": "compat_uptr_t __user * head_ptr",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 491
            }
         },
         {
            "type": "compat_size_t __user * len_ptr",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 491
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/futex/syscalls.c",
         491
      ],
      [
         532,
         "sys_vmsplice",
         "(int fd, const struct iovec __user * uiov, unsigned long nr_segs, unsigned int flags)",
         "0x214",
         {
            "type": "int fd",
            "def": {
               "file": "fs/splice.c",
               "line": 1578
            }
         },
         {
            "type": "const struct iovec __user * uiov",
            "def": {
               "file": "fs/splice.c",
               "line": 1578
            }
         },
         {
            "type": "unsigned long nr_segs",
            "def": {
               "file": "fs/splice.c",
               "line": 1578
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/splice.c",
               "line": 1578
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/splice.c",
         1578
      ],
      [
         533,
         "sys_move_pages",
         "(pid_t pid, unsigned long nr_pages, const void __user * __user * pages, const int __user * nodes, int __user * status, int flags)",
         "0x215",
         {
            "type": "pid_t pid",
            "def": {
               "file": "mm/migrate.c",
               "line": 2627
            }
         },
         {
            "type": "unsigned long nr_pages",
            "def": {
               "file": "mm/migrate.c",
               "line": 2627
            }
         },
         {
            "type": "const void __user * __user * pages",
            "def": {
               "file": "mm/migrate.c",
               "line": 2627
            }
         },
         {
            "type": "const int __user * nodes",
            "def": {
               "file": "mm/migrate.c",
               "line": 2627
            }
         },
         {
            "type": "int __user * status",
            "def": {
               "file": "mm/migrate.c",
               "line": 2627
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "mm/migrate.c",
               "line": 2627
            }
         },
         "mm/migrate.c",
         2627
      ],
      [
         534,
         "compat_sys_preadv64",
         "(unsigned long fd, const struct iovec __user * vec, unsigned long vlen, loff_t pos)",
         "0x216",
         {
            "type": "unsigned long fd",
            "def": {
               "file": "fs/read_write.c",
               "line": 1222
            }
         },
         {
            "type": "const struct iovec __user * vec",
            "def": {
               "file": "fs/read_write.c",
               "line": 1222
            }
         },
         {
            "type": "unsigned long vlen",
            "def": {
               "file": "fs/read_write.c",
               "line": 1222
            }
         },
         {
            "type": "loff_t pos",
            "def": {
               "file": "fs/read_write.c",
               "line": 1222
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/read_write.c",
         1222
      ],
      [
         535,
         "compat_sys_pwritev64",
         "(unsigned long fd, const struct iovec __user * vec, unsigned long vlen, loff_t pos)",
         "0x217",
         {
            "type": "unsigned long fd",
            "def": {
               "file": "fs/read_write.c",
               "line": 1263
            }
         },
         {
            "type": "const struct iovec __user * vec",
            "def": {
               "file": "fs/read_write.c",
               "line": 1263
            }
         },
         {
            "type": "unsigned long vlen",
            "def": {
               "file": "fs/read_write.c",
               "line": 1263
            }
         },
         {
            "type": "loff_t pos",
            "def": {
               "file": "fs/read_write.c",
               "line": 1263
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/read_write.c",
         1263
      ],
      [
         536,
         "compat_sys_rt_tgsigqueueinfo",
         "(compat_pid_t tgid, compat_pid_t pid, int sig, struct compat_siginfo __user * uinfo)",
         "0x218",
         {
            "type": "compat_pid_t tgid",
            "def": {
               "file": "kernel/signal.c",
               "line": 4343
            }
         },
         {
            "type": "compat_pid_t pid",
            "def": {
               "file": "kernel/signal.c",
               "line": 4343
            }
         },
         {
            "type": "int sig",
            "def": {
               "file": "kernel/signal.c",
               "line": 4343
            }
         },
         {
            "type": "struct compat_siginfo __user * uinfo",
            "def": {
               "file": "kernel/signal.c",
               "line": 4343
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/signal.c",
         4343
      ],
      [
         537,
         "compat_sys_recvmmsg_time64",
         "(int fd, struct compat_mmsghdr __user * mmsg, unsigned int vlen, unsigned int flags, struct __kernel_timespec __user * timeout)",
         "0x219",
         {
            "type": "int fd",
            "def": {
               "file": "net/compat.c",
               "line": 404
            }
         },
         {
            "type": "struct compat_mmsghdr __user * mmsg",
            "def": {
               "file": "net/compat.c",
               "line": 404
            }
         },
         {
            "type": "unsigned int vlen",
            "def": {
               "file": "net/compat.c",
               "line": 404
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "net/compat.c",
               "line": 404
            }
         },
         {
            "type": "struct __kernel_timespec __user * timeout",
            "def": {
               "file": "net/compat.c",
               "line": 404
            }
         },
         {
            "type": "",
            "def": {}
         },
         "net/compat.c",
         404
      ],
      [
         538,
         "compat_sys_sendmmsg",
         "(int fd, struct compat_mmsghdr __user * mmsg, unsigned int vlen, unsigned int flags)",
         "0x21a",
         {
            "type": "int fd",
            "def": {
               "file": "net/compat.c",
               "line": 363
            }
         },
         {
            "type": "struct compat_mmsghdr __user * mmsg",
            "def": {
               "file": "net/compat.c",
               "line": 363
            }
         },
         {
            "type": "unsigned int vlen",
            "def": {
               "file": "net/compat.c",
               "line": 363
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "net/compat.c",
               "line": 363
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "net/compat.c",
         363
      ],
      [
         539,
         "sys_process_vm_readv",
         "(pid_t pid, const struct iovec __user * lvec, unsigned long liovcnt, const struct iovec __user * rvec, unsigned long riovcnt, unsigned long flags)",
         "0x21b",
         {
            "type": "pid_t pid",
            "def": {
               "file": "mm/process_vm_access.c",
               "line": 292
            }
         },
         {
            "type": "const struct iovec __user * lvec",
            "def": {
               "file": "mm/process_vm_access.c",
               "line": 292
            }
         },
         {
            "type": "unsigned long liovcnt",
            "def": {
               "file": "mm/process_vm_access.c",
               "line": 292
            }
         },
         {
            "type": "const struct iovec __user * rvec",
            "def": {
               "file": "mm/process_vm_access.c",
               "line": 292
            }
         },
         {
            "type": "unsigned long riovcnt",
            "def": {
               "file": "mm/process_vm_access.c",
               "line": 292
            }
         },
         {
            "type": "unsigned long flags",
            "def": {
               "file": "mm/process_vm_access.c",
               "line": 292
            }
         },
         "mm/process_vm_access.c",
         292
      ],
      [
         540,
         "sys_process_vm_writev",
         "(pid_t pid, const struct iovec __user * lvec, unsigned long liovcnt, const struct iovec __user * rvec, unsigned long riovcnt, unsigned long flags)",
         "0x21c",
         {
            "type": "pid_t pid",
            "def": {
               "file": "mm/process_vm_access.c",
               "line": 299
            }
         },
         {
            "type": "const struct iovec __user * lvec",
            "def": {
               "file": "mm/process_vm_access.c",
               "line": 299
            }
         },
         {
            "type": "unsigned long liovcnt",
            "def": {
               "file": "mm/process_vm_access.c",
               "line": 299
            }
         },
         {
            "type": "const struct iovec __user * rvec",
            "def": {
               "file": "mm/process_vm_access.c",
               "line": 299
            }
         },
         {
            "type": "unsigned long riovcnt",
            "def": {
               "file": "mm/process_vm_access.c",
               "line": 299
            }
         },
         {
            "type": "unsigned long flags",
            "def": {
               "file": "mm/process_vm_access.c",
               "line": 299
            }
         },
         "mm/process_vm_access.c",
         299
      ],
      [
         541,
         "sys_setsockopt",
         "(int fd, int level, int optname, char __user * optval, int optlen)",
         "0x21d",
         {
            "type": "int fd",
            "def": {
               "file": "net/socket.c",
               "line": 2396
            }
         },
         {
            "type": "int level",
            "def": {
               "file": "net/socket.c",
               "line": 2396
            }
         },
         {
            "type": "int optname",
            "def": {
               "file": "net/socket.c",
               "line": 2396
            }
         },
         {
            "type": "char __user * optval",
            "def": {
               "file": "net/socket.c",
               "line": 2396
            }
         },
         {
            "type": "int optlen",
            "def": {
               "file": "net/socket.c",
               "line": 2396
            }
         },
         {
            "type": "",
            "def": {}
         },
         "net/socket.c",
         2396
      ],
      [
         542,
         "sys_getsockopt",
         "(int fd, int level, int optname, char __user * optval, int __user * optlen)",
         "0x21e",
         {
            "type": "int fd",
            "def": {
               "file": "net/socket.c",
               "line": 2509
            }
         },
         {
            "type": "int level",
            "def": {
               "file": "net/socket.c",
               "line": 2509
            }
         },
         {
            "type": "int optname",
            "def": {
               "file": "net/socket.c",
               "line": 2509
            }
         },
         {
            "type": "char __user * optval",
            "def": {
               "file": "net/socket.c",
               "line": 2509
            }
         },
         {
            "type": "int __user * optlen",
            "def": {
               "file": "net/socket.c",
               "line": 2509
            }
         },
         {
            "type": "",
            "def": {}
         },
         "net/socket.c",
         2509
      ],
      [
         543,
         "compat_sys_io_setup",
         "(unsigned nr_events, u32 __user * ctx32p)",
         "0x21f",
         {
            "type": "unsigned nr_events",
            "def": {
               "file": "fs/aio.c",
               "line": 1466
            }
         },
         {
            "type": "u32 __user * ctx32p",
            "def": {
               "file": "fs/aio.c",
               "line": 1466
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/aio.c",
         1466
      ],
      [
         544,
         "compat_sys_io_submit",
         "(compat_aio_context_t ctx_id, int nr, compat_uptr_t __user * iocbpp)",
         "0x220",
         {
            "type": "compat_aio_context_t ctx_id",
            "def": {
               "file": "fs/aio.c",
               "line": 2177
            }
         },
         {
            "type": "int nr",
            "def": {
               "file": "fs/aio.c",
               "line": 2177
            }
         },
         {
            "type": "compat_uptr_t __user * iocbpp",
            "def": {
               "file": "fs/aio.c",
               "line": 2177
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/aio.c",
         2177
      ],
      [
         545,
         "compat_sys_execveat",
         "(int fd, const char __user * filename, const compat_uptr_t __user * argv, const compat_uptr_t __user * envp, int flags)",
         "0x221",
         {
            "type": "int fd",
            "def": {
               "file": "fs/exec.c",
               "line": 2003
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/exec.c",
               "line": 2003
            }
         },
         {
            "type": "const compat_uptr_t __user * argv",
            "def": {
               "file": "fs/exec.c",
               "line": 2003
            }
         },
         {
            "type": "const compat_uptr_t __user * envp",
            "def": {
               "file": "fs/exec.c",
               "line": 2003
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/exec.c",
               "line": 2003
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/exec.c",
         2003
      ],
      [
         546,
         "compat_sys_preadv64v2",
         "(unsigned long fd, const struct iovec __user * vec, unsigned long vlen, loff_t pos, rwf_t flags)",
         "0x222",
         {
            "type": "unsigned long fd",
            "def": {
               "file": "fs/read_write.c",
               "line": 1240
            }
         },
         {
            "type": "const struct iovec __user * vec",
            "def": {
               "file": "fs/read_write.c",
               "line": 1240
            }
         },
         {
            "type": "unsigned long vlen",
            "def": {
               "file": "fs/read_write.c",
               "line": 1240
            }
         },
         {
            "type": "loff_t pos",
            "def": {
               "file": "fs/read_write.c",
               "line": 1240
            }
         },
         {
            "type": "rwf_t flags",
            "def": {
               "file": "fs/read_write.c",
               "line": 1240
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/read_write.c",
         1240
      ],
      [
         547,
         "compat_sys_pwritev64v2",
         "(unsigned long fd, const struct iovec __user * vec, unsigned long vlen, loff_t pos, rwf_t flags)",
         "0x223",
         {
            "type": "unsigned long fd",
            "def": {
               "file": "fs/read_write.c",
               "line": 1281
            }
         },
         {
            "type": "const struct iovec __user * vec",
            "def": {
               "file": "fs/read_write.c",
               "line": 1281
            }
         },
         {
            "type": "unsigned long vlen",
            "def": {
               "file": "fs/read_write.c",
               "line": 1281
            }
         },
         {
            "type": "loff_t pos",
            "def": {
               "file": "fs/read_write.c",
               "line": 1281
            }
         },
         {
            "type": "rwf_t flags",
            "def": {
               "file": "fs/read_write.c",
               "line": 1281
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/read_write.c",
         1281
      ]
   ]
};
