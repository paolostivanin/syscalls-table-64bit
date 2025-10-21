var syscalls_x86_64 = {
   "aaData": [
      [
         0,
         "sys_read",
         "(unsigned int fd, char __user * buf, size_t count)",
         "0x0",
         {
            "type": "unsigned int fd",
            "def": {
               "file": "fs/read_write.c",
               "line": 722
            }
         },
         {
            "type": "char __user * buf",
            "def": {
               "file": "fs/read_write.c",
               "line": 722
            }
         },
         {
            "type": "size_t count",
            "def": {
               "file": "fs/read_write.c",
               "line": 722
            }
         },
         {
            "type": "",
            "def": {}
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
         722
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
               "line": 746
            }
         },
         {
            "type": "const char __user * buf",
            "def": {
               "file": "fs/read_write.c",
               "line": 746
            }
         },
         {
            "type": "size_t count",
            "def": {
               "file": "fs/read_write.c",
               "line": 746
            }
         },
         {
            "type": "",
            "def": {}
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
         746
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
               "line": 458
            }
         },
         {
            "type": "struct file_handle __user * handle",
            "def": {
               "file": "fs/fhandle.c",
               "line": 458
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/fhandle.c",
               "line": 458
            }
         },
         {
            "type": "",
            "def": {}
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
         458
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
               "line": 1572
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         1572
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
         5,
         "sys_newfstat",
         "(unsigned int fd, struct compat_stat __user * statbuf)",
         "0x5",
         {
            "type": "unsigned int fd",
            "def": {
               "file": "fs/stat.c",
               "line": 904
            }
         },
         {
            "type": "struct compat_stat __user * statbuf",
            "def": {
               "file": "fs/stat.c",
               "line": 904
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         904
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
               "line": 877
            }
         },
         {
            "type": "struct compat_stat __user * statbuf",
            "def": {
               "file": "fs/stat.c",
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
         {
            "type": "",
            "def": {}
         },
         "fs/stat.c",
         877
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
               "line": 1062
            }
         },
         {
            "type": "unsigned int nfds",
            "def": {
               "file": "fs/select.c",
               "line": 1062
            }
         },
         {
            "type": "int timeout_msecs",
            "def": {
               "file": "fs/select.c",
               "line": 1062
            }
         },
         {
            "type": "",
            "def": {}
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
         1062
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
               "line": 416
            }
         },
         {
            "type": "compat_off_t offset",
            "def": {
               "file": "fs/read_write.c",
               "line": 416
            }
         },
         {
            "type": "unsigned int whence",
            "def": {
               "file": "fs/read_write.c",
               "line": 416
            }
         },
         {
            "type": "",
            "def": {}
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
         416
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
               "line": 82
            }
         },
         {
            "type": "unsigned long len",
            "def": {
               "file": "arch/x86/kernel/sys_x86_64.c",
               "line": 82
            }
         },
         {
            "type": "unsigned long prot",
            "def": {
               "file": "arch/x86/kernel/sys_x86_64.c",
               "line": 82
            }
         },
         {
            "type": "unsigned long flags",
            "def": {
               "file": "arch/x86/kernel/sys_x86_64.c",
               "line": 82
            }
         },
         {
            "type": "unsigned long fd",
            "def": {
               "file": "arch/x86/kernel/sys_x86_64.c",
               "line": 82
            }
         },
         {
            "type": "unsigned long off",
            "def": {
               "file": "arch/x86/kernel/sys_x86_64.c",
               "line": 82
            }
         },
         "arch/x86/kernel/sys_x86_64.c",
         82
      ],
      [
         10,
         "sys_mprotect",
         "(void)",
         "0xa",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         179
      ],
      [
         11,
         "sys_munmap",
         "not found",
         "0xb",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "not found",
         ""
      ],
      [
         12,
         "sys_brk",
         "not found",
         "0xc",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "not found",
         ""
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
               "line": 4654
            }
         },
         {
            "type": "const struct compat_sigaction __user * act",
            "def": {
               "file": "kernel/signal.c",
               "line": 4654
            }
         },
         {
            "type": "struct compat_sigaction __user * oact",
            "def": {
               "file": "kernel/signal.c",
               "line": 4654
            }
         },
         {
            "type": "compat_size_t sigsetsize",
            "def": {
               "file": "kernel/signal.c",
               "line": 4654
            }
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
         4654
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
               "line": 3349
            }
         },
         {
            "type": "compat_sigset_t __user * nset",
            "def": {
               "file": "kernel/signal.c",
               "line": 3349
            }
         },
         {
            "type": "compat_sigset_t __user * oset",
            "def": {
               "file": "kernel/signal.c",
               "line": 3349
            }
         },
         {
            "type": "compat_size_t sigsetsize",
            "def": {
               "file": "kernel/signal.c",
               "line": 3349
            }
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
         3349
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
               "line": 639
            }
         },
         {
            "type": "unsigned int cmd",
            "def": {
               "file": "fs/ioctl.c",
               "line": 639
            }
         },
         {
            "type": "compat_ulong_t arg",
            "def": {
               "file": "fs/ioctl.c",
               "line": 639
            }
         },
         {
            "type": "",
            "def": {}
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
         639
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
               "line": 775
            }
         },
         {
            "type": "char __user * buf",
            "def": {
               "file": "fs/read_write.c",
               "line": 775
            }
         },
         {
            "type": "size_t count",
            "def": {
               "file": "fs/read_write.c",
               "line": 775
            }
         },
         {
            "type": "",
            "def": {}
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
         775
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
               "line": 805
            }
         },
         {
            "type": "const char __user * buf",
            "def": {
               "file": "fs/read_write.c",
               "line": 805
            }
         },
         {
            "type": "size_t count",
            "def": {
               "file": "fs/read_write.c",
               "line": 805
            }
         },
         {
            "type": "",
            "def": {}
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
         805
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
               "line": 1162
            }
         },
         {
            "type": "const struct iovec __user * vec",
            "def": {
               "file": "fs/read_write.c",
               "line": 1162
            }
         },
         {
            "type": "unsigned long vlen",
            "def": {
               "file": "fs/read_write.c",
               "line": 1162
            }
         },
         {
            "type": "",
            "def": {}
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
         1162
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
               "line": 1168
            }
         },
         {
            "type": "const struct iovec __user * vec",
            "def": {
               "file": "fs/read_write.c",
               "line": 1168
            }
         },
         {
            "type": "unsigned long vlen",
            "def": {
               "file": "fs/read_write.c",
               "line": 1168
            }
         },
         {
            "type": "",
            "def": {}
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
         1168
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
               "line": 550
            }
         },
         {
            "type": "int mode",
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
         "fs/open.c",
         550
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
               "line": 1057
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         1057
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
               "line": 1282
            }
         },
         {
            "type": "compat_ulong_t __user * inp",
            "def": {
               "file": "fs/select.c",
               "line": 1282
            }
         },
         {
            "type": "compat_ulong_t __user * outp",
            "def": {
               "file": "fs/select.c",
               "line": 1282
            }
         },
         {
            "type": "compat_ulong_t __user * exp",
            "def": {
               "file": "fs/select.c",
               "line": 1282
            }
         },
         {
            "type": "struct old_timeval32 __user * tvp",
            "def": {
               "file": "fs/select.c",
               "line": 1282
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/select.c",
         1282
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
         1371
      ],
      [
         25,
         "sys_mremap",
         "(void)",
         "0x19",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         162
      ],
      [
         26,
         "sys_msync",
         "(void)",
         "0x1a",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         180
      ],
      [
         27,
         "sys_mincore",
         "(void)",
         "0x1b",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         185
      ],
      [
         28,
         "sys_madvise",
         "(void)",
         "0x1c",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         186
      ],
      [
         29,
         "sys_shmget",
         "(void)",
         "0x1d",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         134
      ],
      [
         30,
         "sys_shmat",
         "(void)",
         "0x1e",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         139
      ],
      [
         31,
         "sys_shmctl",
         "(void)",
         "0x1f",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         136
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
               "line": 1454
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         1454
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
               "line": 1435
            }
         },
         {
            "type": "unsigned int newfd",
            "def": {
               "file": "fs/file.c",
               "line": 1435
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         1435
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
         4822
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
               "line": 2168
            }
         },
         {
            "type": "struct __kernel_timespec __user * rmtp",
            "def": {
               "file": "kernel/time/hrtimer.c",
               "line": 2168
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         2168
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
               "line": 326
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         326
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
               "line": 398
            }
         },
         {
            "type": "struct old_itimerval32 __user * value",
            "def": {
               "file": "kernel/time/itimer.c",
               "line": 398
            }
         },
         {
            "type": "struct old_itimerval32 __user * ovalue",
            "def": {
               "file": "kernel/time/itimer.c",
               "line": 398
            }
         },
         {
            "type": "",
            "def": {}
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
         398
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
               "line": 1455
            }
         },
         {
            "type": "int in_fd",
            "def": {
               "file": "fs/read_write.c",
               "line": 1455
            }
         },
         {
            "type": "compat_loff_t __user * offset",
            "def": {
               "file": "fs/read_write.c",
               "line": 1455
            }
         },
         {
            "type": "compat_size_t count",
            "def": {
               "file": "fs/read_write.c",
               "line": 1455
            }
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
         1455
      ],
      [
         41,
         "sys_socket",
         "(void)",
         "0x29",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         142
      ],
      [
         42,
         "sys_connect",
         "(void)",
         "0x2a",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         147
      ],
      [
         43,
         "sys_accept",
         "(void)",
         "0x2b",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         146
      ],
      [
         44,
         "sys_sendto",
         "(void)",
         "0x2c",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         154
      ],
      [
         45,
         "sys_recvfrom",
         "(void)",
         "0x2d",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         156
      ],
      [
         46,
         "sys_sendmsg",
         "(void)",
         "0x2e",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         158
      ],
      [
         47,
         "sys_recvmsg",
         "(void)",
         "0x2f",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         160
      ],
      [
         48,
         "sys_shutdown",
         "(void)",
         "0x30",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         155
      ],
      [
         49,
         "sys_bind",
         "(void)",
         "0x31",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         144
      ],
      [
         50,
         "sys_listen",
         "(void)",
         "0x32",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         145
      ],
      [
         51,
         "sys_getsockname",
         "(void)",
         "0x33",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         148
      ],
      [
         52,
         "sys_getpeername",
         "(void)",
         "0x34",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         149
      ],
      [
         53,
         "sys_socketpair",
         "(void)",
         "0x35",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         143
      ],
      [
         54,
         "sys_setsockopt",
         "(void)",
         "0x36",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         150
      ],
      [
         55,
         "sys_getsockopt",
         "(void)",
         "0x37",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         152
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
               "line": 2888
            }
         },
         {
            "type": "size_t size",
            "def": {
               "file": "kernel/fork.c",
               "line": 2888
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         2888
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
         2687
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
         2703
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
               "line": 2025
            }
         },
         {
            "type": "const compat_uptr_t __user * argv",
            "def": {
               "file": "fs/exec.c",
               "line": 2025
            }
         },
         {
            "type": "const compat_uptr_t __user * envp",
            "def": {
               "file": "fs/exec.c",
               "line": 2025
            }
         },
         {
            "type": "",
            "def": {}
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
         2025
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
         "kernel/exit.c",
         1067
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
               "line": 1916
            }
         },
         {
            "type": "compat_uint_t __user * stat_addr",
            "def": {
               "file": "kernel/exit.c",
               "line": 1916
            }
         },
         {
            "type": "int options",
            "def": {
               "file": "kernel/exit.c",
               "line": 1916
            }
         },
         {
            "type": "struct compat_rusage __user * ru",
            "def": {
               "file": "kernel/exit.c",
               "line": 1916
            }
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
         1916
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
               "line": 3949
            }
         },
         {
            "type": "int sig",
            "def": {
               "file": "kernel/signal.c",
               "line": 3949
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         3949
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
         "(void)",
         "0x40",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         126
      ],
      [
         65,
         "sys_semop",
         "(void)",
         "0x41",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         133
      ],
      [
         66,
         "sys_semctl",
         "(void)",
         "0x42",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         128
      ],
      [
         67,
         "sys_shmdt",
         "(void)",
         "0x43",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         141
      ],
      [
         68,
         "sys_msgget",
         "(void)",
         "0x44",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         117
      ],
      [
         69,
         "sys_msgsnd",
         "(void)",
         "0x45",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         124
      ],
      [
         70,
         "sys_msgrcv",
         "(void)",
         "0x46",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         122
      ],
      [
         71,
         "sys_msgctl",
         "(void)",
         "0x47",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         119
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
               "line": 801
            }
         },
         {
            "type": "unsigned int cmd",
            "def": {
               "file": "fs/fcntl.c",
               "line": 801
            }
         },
         {
            "type": "compat_ulong_t arg",
            "def": {
               "file": "fs/fcntl.c",
               "line": 801
            }
         },
         {
            "type": "",
            "def": {}
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
         801
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
               "line": 2135
            }
         },
         {
            "type": "unsigned int cmd",
            "def": {
               "file": "fs/locks.c",
               "line": 2135
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         2135
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
         {
            "type": "",
            "def": {}
         },
         "fs/sync.c",
         215
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
               "line": 220
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         220
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
               "line": 157
            }
         },
         {
            "type": "compat_off_t length",
            "def": {
               "file": "fs/open.c",
               "line": 157
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         157
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
               "line": 219
            }
         },
         {
            "type": "compat_off_t length",
            "def": {
               "file": "fs/open.c",
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
         "fs/open.c",
         219
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
               "line": 565
            }
         },
         {
            "type": "struct compat_linux_dirent __user * dirent",
            "def": {
               "file": "fs/readdir.c",
               "line": 565
            }
         },
         {
            "type": "unsigned int count",
            "def": {
               "file": "fs/readdir.c",
               "line": 565
            }
         },
         {
            "type": "",
            "def": {}
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
         565
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
               "line": 412
            }
         },
         {
            "type": "unsigned long size",
            "def": {
               "file": "fs/d_path.c",
               "line": 412
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         412
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
               "line": 555
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         555
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
               "line": 581
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         581
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
               "line": 5323
            }
         },
         {
            "type": "const char __user * newname",
            "def": {
               "file": "fs/namei.c",
               "line": 5323
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         5323
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
               "line": 4419
            }
         },
         {
            "type": "umode_t mode",
            "def": {
               "file": "fs/namei.c",
               "line": 4419
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         4419
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
               "line": 4533
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         4533
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
               "line": 1522
            }
         },
         {
            "type": "umode_t mode",
            "def": {
               "file": "fs/open.c",
               "line": 1522
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         1522
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
               "line": 4956
            }
         },
         {
            "type": "const char __user * newname",
            "def": {
               "file": "fs/namei.c",
               "line": 4956
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         4956
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
               "line": 4694
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         4694
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
               "line": 4775
            }
         },
         {
            "type": "const char __user * newname",
            "def": {
               "file": "fs/namei.c",
               "line": 4775
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         4775
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
               "line": 610
            }
         },
         {
            "type": "char __user * buf",
            "def": {
               "file": "fs/stat.c",
               "line": 610
            }
         },
         {
            "type": "int bufsiz",
            "def": {
               "file": "fs/stat.c",
               "line": 610
            }
         },
         {
            "type": "",
            "def": {}
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
         610
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
               "line": 719
            }
         },
         {
            "type": "umode_t mode",
            "def": {
               "file": "fs/open.c",
               "line": 719
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         719
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
               "line": 670
            }
         },
         {
            "type": "umode_t mode",
            "def": {
               "file": "fs/open.c",
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
         {
            "type": "",
            "def": {}
         },
         "fs/open.c",
         670
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
               "line": 840
            }
         },
         {
            "type": "uid_t user",
            "def": {
               "file": "fs/open.c",
               "line": 840
            }
         },
         {
            "type": "gid_t group",
            "def": {
               "file": "fs/open.c",
               "line": 840
            }
         },
         {
            "type": "",
            "def": {}
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
         840
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
               "line": 874
            }
         },
         {
            "type": "uid_t user",
            "def": {
               "file": "fs/open.c",
               "line": 874
            }
         },
         {
            "type": "gid_t group",
            "def": {
               "file": "fs/open.c",
               "line": 874
            }
         },
         {
            "type": "",
            "def": {}
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
         874
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
               "line": 845
            }
         },
         {
            "type": "uid_t user",
            "def": {
               "file": "fs/open.c",
               "line": 845
            }
         },
         {
            "type": "gid_t group",
            "def": {
               "file": "fs/open.c",
               "line": 845
            }
         },
         {
            "type": "",
            "def": {}
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
         845
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
               "line": 1942
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         1942
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
               "line": 1929
            }
         },
         {
            "type": "struct compat_rusage __user * ru",
            "def": {
               "file": "kernel/sys.c",
               "line": 1929
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         1929
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
               "line": 2926
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         2926
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
               "line": 1526
            }
         },
         {
            "type": "compat_long_t pid",
            "def": {
               "file": "kernel/ptrace.c",
               "line": 1526
            }
         },
         {
            "type": "compat_long_t addr",
            "def": {
               "file": "kernel/ptrace.c",
               "line": 1526
            }
         },
         {
            "type": "compat_long_t data",
            "def": {
               "file": "kernel/ptrace.c",
               "line": 1526
            }
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
         1526
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
               "line": 1875
            }
         },
         {
            "type": "char __user * buf",
            "def": {
               "file": "kernel/printk/printk.c",
               "line": 1875
            }
         },
         {
            "type": "int len",
            "def": {
               "file": "kernel/printk/printk.c",
               "line": 1875
            }
         },
         {
            "type": "",
            "def": {}
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
         1875
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
               "line": 3406
            }
         },
         {
            "type": "compat_size_t sigsetsize",
            "def": {
               "file": "kernel/signal.c",
               "line": 3406
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         3406
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
               "line": 3901
            }
         },
         {
            "type": "struct compat_siginfo __user * uinfo",
            "def": {
               "file": "kernel/signal.c",
               "line": 3901
            }
         },
         {
            "type": "struct old_timespec32 __user * uts",
            "def": {
               "file": "kernel/signal.c",
               "line": 3901
            }
         },
         {
            "type": "compat_size_t sigsetsize",
            "def": {
               "file": "kernel/signal.c",
               "line": 3901
            }
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
         3901
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
               "line": 4222
            }
         },
         {
            "type": "int sig",
            "def": {
               "file": "kernel/signal.c",
               "line": 4222
            }
         },
         {
            "type": "struct compat_siginfo __user * uinfo",
            "def": {
               "file": "kernel/signal.c",
               "line": 4222
            }
         },
         {
            "type": "",
            "def": {}
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
         4222
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
               "line": 4866
            }
         },
         {
            "type": "compat_size_t sigsetsize",
            "def": {
               "file": "kernel/signal.c",
               "line": 4866
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         4866
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
               "line": 4510
            }
         },
         {
            "type": "compat_stack_t __user * uoss_ptr",
            "def": {
               "file": "kernel/signal.c",
               "line": 4510
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         4510
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
               "line": 210
            }
         },
         {
            "type": "struct utimbuf __user * times",
            "def": {
               "file": "fs/utimes.c",
               "line": 210
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         210
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
               "line": 4316
            }
         },
         {
            "type": "umode_t mode",
            "def": {
               "file": "fs/namei.c",
               "line": 4316
            }
         },
         {
            "type": "unsigned dev",
            "def": {
               "file": "fs/namei.c",
               "line": 4316
            }
         },
         {
            "type": "",
            "def": {}
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
         4316
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
               "line": 389
            }
         },
         {
            "type": "struct compat_ustat __user * u",
            "def": {
               "file": "fs/statfs.c",
               "line": 389
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         389
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
               "line": 303
            }
         },
         {
            "type": "struct compat_statfs __user * buf",
            "def": {
               "file": "fs/statfs.c",
               "line": 303
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         303
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
               "line": 312
            }
         },
         {
            "type": "struct compat_statfs __user * buf",
            "def": {
               "file": "fs/statfs.c",
               "line": 312
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         312
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
               "line": 195
            }
         },
         {
            "type": "unsigned long arg1",
            "def": {
               "file": "fs/filesystems.c",
               "line": 195
            }
         },
         {
            "type": "unsigned long arg2",
            "def": {
               "file": "fs/filesystems.c",
               "line": 195
            }
         },
         {
            "type": "",
            "def": {}
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
         195
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
               "line": 966
            }
         },
         {
            "type": "struct sched_param __user * param",
            "def": {
               "file": "kernel/sched/syscalls.c",
               "line": 966
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         966
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
               "line": 1042
            }
         },
         {
            "type": "struct sched_param __user * param",
            "def": {
               "file": "kernel/sched/syscalls.c",
               "line": 1042
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         1042
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
               "line": 951
            }
         },
         {
            "type": "int policy",
            "def": {
               "file": "kernel/sched/syscalls.c",
               "line": 951
            }
         },
         {
            "type": "struct sched_param __user * param",
            "def": {
               "file": "kernel/sched/syscalls.c",
               "line": 951
            }
         },
         {
            "type": "",
            "def": {}
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
         951
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
               "line": 1012
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         1012
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
               "line": 1479
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         1479
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
               "line": 1507
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         1507
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
               "line": 1565
            }
         },
         {
            "type": "struct __kernel_timespec __user * interval",
            "def": {
               "file": "kernel/sched/syscalls.c",
               "line": 1565
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         1565
      ],
      [
         149,
         "sys_mlock",
         "(void)",
         "0x95",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         181
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
         "kernel/sys_ni.c",
         182
      ],
      [
         151,
         "sys_mlockall",
         "(void)",
         "0x97",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         183
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
         "kernel/sys_ni.c",
         184
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
         1606
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
               "line": 4661
            }
         },
         {
            "type": "const char __user * put_old",
            "def": {
               "file": "fs/namespace.c",
               "line": 4661
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         4661
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
         1086
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
               "line": 2455
            }
         },
         {
            "type": "unsigned long arg2",
            "def": {
               "file": "kernel/sys.c",
               "line": 2455
            }
         },
         {
            "type": "unsigned long arg3",
            "def": {
               "file": "kernel/sys.c",
               "line": 2455
            }
         },
         {
            "type": "unsigned long arg4",
            "def": {
               "file": "kernel/sys.c",
               "line": 2455
            }
         },
         {
            "type": "unsigned long arg5",
            "def": {
               "file": "kernel/sys.c",
               "line": 2455
            }
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/sys.c",
         2455
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
               "line": 1065
            }
         },
         {
            "type": "unsigned long arg2",
            "def": {
               "file": "arch/x86/kernel/process.c",
               "line": 1065
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         1065
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
               "line": 598
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         598
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
               "line": 370
            }
         },
         {
            "type": "compat_arg_u64_dual (offset) compat_arg_u64_dual (nbytes)",
            "def": {
               "file": "fs/sync.c",
               "line": 370
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/sync.c",
               "line": 370
            }
         },
         {
            "type": "",
            "def": {}
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
         370
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
               "line": 314
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         314
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
               "line": 4324
            }
         },
         {
            "type": "char __user * dir_name",
            "def": {
               "file": "fs/namespace.c",
               "line": 4324
            }
         },
         {
            "type": "char __user * type",
            "def": {
               "file": "fs/namespace.c",
               "line": 4324
            }
         },
         {
            "type": "unsigned long flags",
            "def": {
               "file": "fs/namespace.c",
               "line": 4324
            }
         },
         {
            "type": "void __user * data",
            "def": {
               "file": "fs/namespace.c",
               "line": 4324
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/namespace.c",
         4324
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
               "line": 2118
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/namespace.c",
               "line": 2118
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         2118
      ],
      [
         167,
         "sys_swapon",
         "(void)",
         "0xa7",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         177
      ],
      [
         168,
         "sys_swapoff",
         "(void)",
         "0xa8",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         178
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
               "line": 728
            }
         },
         {
            "type": "int magic2",
            "def": {
               "file": "kernel/reboot.c",
               "line": 728
            }
         },
         {
            "type": "unsigned int cmd",
            "def": {
               "file": "kernel/reboot.c",
               "line": 728
            }
         },
         {
            "type": "void __user * arg",
            "def": {
               "file": "kernel/reboot.c",
               "line": 728
            }
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
         728
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
               "line": 3569
            }
         },
         {
            "type": "unsigned long len",
            "def": {
               "file": "kernel/module/main.c",
               "line": 3569
            }
         },
         {
            "type": "const char __user * uargs",
            "def": {
               "file": "kernel/module/main.c",
               "line": 3569
            }
         },
         {
            "type": "",
            "def": {}
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
         3569
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
               "line": 776
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "kernel/module/main.c",
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
         {
            "type": "",
            "def": {}
         },
         "kernel/module/main.c",
         776
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
         "not found",
         "0xbb",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "not found",
         ""
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
               "line": 743
            }
         },
         {
            "type": "const char __user * name",
            "def": {
               "file": "fs/xattr.c",
               "line": 743
            }
         },
         {
            "type": "const void __user * value",
            "def": {
               "file": "fs/xattr.c",
               "line": 743
            }
         },
         {
            "type": "size_t size",
            "def": {
               "file": "fs/xattr.c",
               "line": 743
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/xattr.c",
               "line": 743
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/xattr.c",
         743
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
               "line": 750
            }
         },
         {
            "type": "const char __user * name",
            "def": {
               "file": "fs/xattr.c",
               "line": 750
            }
         },
         {
            "type": "const void __user * value",
            "def": {
               "file": "fs/xattr.c",
               "line": 750
            }
         },
         {
            "type": "size_t size",
            "def": {
               "file": "fs/xattr.c",
               "line": 750
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/xattr.c",
               "line": 750
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/xattr.c",
         750
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
               "line": 758
            }
         },
         {
            "type": "const char __user * name",
            "def": {
               "file": "fs/xattr.c",
               "line": 758
            }
         },
         {
            "type": "const void __user * value",
            "def": {
               "file": "fs/xattr.c",
               "line": 758
            }
         },
         {
            "type": "size_t size",
            "def": {
               "file": "fs/xattr.c",
               "line": 758
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/xattr.c",
               "line": 758
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/xattr.c",
         758
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
               "line": 888
            }
         },
         {
            "type": "const char __user * name",
            "def": {
               "file": "fs/xattr.c",
               "line": 888
            }
         },
         {
            "type": "void __user * value",
            "def": {
               "file": "fs/xattr.c",
               "line": 888
            }
         },
         {
            "type": "size_t size",
            "def": {
               "file": "fs/xattr.c",
               "line": 888
            }
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
         888
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
               "line": 894
            }
         },
         {
            "type": "const char __user * name",
            "def": {
               "file": "fs/xattr.c",
               "line": 894
            }
         },
         {
            "type": "void __user * value",
            "def": {
               "file": "fs/xattr.c",
               "line": 894
            }
         },
         {
            "type": "size_t size",
            "def": {
               "file": "fs/xattr.c",
               "line": 894
            }
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
         894
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
               "line": 901
            }
         },
         {
            "type": "const char __user * name",
            "def": {
               "file": "fs/xattr.c",
               "line": 901
            }
         },
         {
            "type": "void __user * value",
            "def": {
               "file": "fs/xattr.c",
               "line": 901
            }
         },
         {
            "type": "size_t size",
            "def": {
               "file": "fs/xattr.c",
               "line": 901
            }
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
         901
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
               "line": 998
            }
         },
         {
            "type": "char __user * list",
            "def": {
               "file": "fs/xattr.c",
               "line": 998
            }
         },
         {
            "type": "size_t size",
            "def": {
               "file": "fs/xattr.c",
               "line": 998
            }
         },
         {
            "type": "",
            "def": {}
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
         998
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
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/xattr.c",
         1004
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
               "line": 1010
            }
         },
         {
            "type": "char __user * list",
            "def": {
               "file": "fs/xattr.c",
               "line": 1010
            }
         },
         {
            "type": "size_t size",
            "def": {
               "file": "fs/xattr.c",
               "line": 1010
            }
         },
         {
            "type": "",
            "def": {}
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
         1010
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
               "line": 1097
            }
         },
         {
            "type": "const char __user * name",
            "def": {
               "file": "fs/xattr.c",
               "line": 1097
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         1097
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
               "line": 1103
            }
         },
         {
            "type": "const char __user * name",
            "def": {
               "file": "fs/xattr.c",
               "line": 1103
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         1103
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
               "line": 1109
            }
         },
         {
            "type": "const char __user * name",
            "def": {
               "file": "fs/xattr.c",
               "line": 1109
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         1109
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
               "line": 4183
            }
         },
         {
            "type": "int sig",
            "def": {
               "file": "kernel/signal.c",
               "line": 4183
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         4183
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
               "line": 414
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 414
            }
         },
         {
            "type": "int nr_wake",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 414
            }
         },
         {
            "type": "int nr_requeue",
            "def": {
               "file": "kernel/futex/syscalls.c",
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
         "kernel/futex/syscalls.c",
         414
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
               "line": 1413
            }
         },
         {
            "type": "u32 __user * ctx32p",
            "def": {
               "file": "fs/aio.c",
               "line": 1413
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         1413
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
               "line": 1451
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         1451
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
               "line": 2251
            }
         },
         {
            "type": "long min_nr",
            "def": {
               "file": "fs/aio.c",
               "line": 2251
            }
         },
         {
            "type": "long nr",
            "def": {
               "file": "fs/aio.c",
               "line": 2251
            }
         },
         {
            "type": "struct io_event __user * events",
            "def": {
               "file": "fs/aio.c",
               "line": 2251
            }
         },
         {
            "type": "struct __kernel_timespec __user * timeout",
            "def": {
               "file": "fs/aio.c",
               "line": 2251
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/aio.c",
         2251
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
               "line": 2124
            }
         },
         {
            "type": "int nr",
            "def": {
               "file": "fs/aio.c",
               "line": 2124
            }
         },
         {
            "type": "compat_uptr_t __user * iocbpp",
            "def": {
               "file": "fs/aio.c",
               "line": 2124
            }
         },
         {
            "type": "",
            "def": {}
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
         2124
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
               "line": 2176
            }
         },
         {
            "type": "struct iocb __user * iocb",
            "def": {
               "file": "fs/aio.c",
               "line": 2176
            }
         },
         {
            "type": "struct io_event __user * result",
            "def": {
               "file": "fs/aio.c",
               "line": 2176
            }
         },
         {
            "type": "",
            "def": {}
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
         2176
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
               "line": 2301
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         2301
      ],
      [
         216,
         "sys_remap_file_pages",
         "(void)",
         "0xd8",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         189
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
               "line": 396
            }
         },
         {
            "type": "struct linux_dirent64 __user * dirent",
            "def": {
               "file": "fs/readdir.c",
               "line": 396
            }
         },
         {
            "type": "unsigned int count",
            "def": {
               "file": "fs/readdir.c",
               "line": 396
            }
         },
         {
            "type": "",
            "def": {}
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
         396
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
               "line": 1733
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         1733
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
         3175
      ],
      [
         220,
         "sys_semtimedop",
         "(void)",
         "0xdc",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         131
      ],
      [
         221,
         "sys_fadvise64",
         "(void)",
         "0xdd",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         322
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
               "line": 955
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "kernel/time/posix-timers.c",
               "line": 955
            }
         },
         {
            "type": "const struct __kernel_itimerspec __user * new_setting",
            "def": {
               "file": "kernel/time/posix-timers.c",
               "line": 955
            }
         },
         {
            "type": "struct __kernel_itimerspec __user * old_setting",
            "def": {
               "file": "kernel/time/posix-timers.c",
               "line": 955
            }
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
         955
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
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/time/posix-timers.c",
         1060
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
               "line": 1111
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         1111
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
               "line": 2563
            }
         },
         {
            "type": "struct epoll_event __user * events",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2563
            }
         },
         {
            "type": "int maxevents",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2563
            }
         },
         {
            "type": "int timeout",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2563
            }
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
         2563
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
               "line": 2481
            }
         },
         {
            "type": "int op",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2481
            }
         },
         {
            "type": "int fd",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2481
            }
         },
         {
            "type": "struct epoll_event __user * event",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2481
            }
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
         2481
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
               "line": 4167
            }
         },
         {
            "type": "pid_t pid",
            "def": {
               "file": "kernel/signal.c",
               "line": 4167
            }
         },
         {
            "type": "int sig",
            "def": {
               "file": "kernel/signal.c",
               "line": 4167
            }
         },
         {
            "type": "",
            "def": {}
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
         4167
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
               "line": 204
            }
         },
         {
            "type": "struct __kernel_old_timeval __user * utimes",
            "def": {
               "file": "fs/utimes.c",
               "line": 204
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         204
      ],
      [
         237,
         "sys_mbind",
         "(void)",
         "0xed",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         190
      ],
      [
         238,
         "sys_set_mempolicy",
         "(void)",
         "0xee",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         192
      ],
      [
         239,
         "sys_get_mempolicy",
         "(void)",
         "0xef",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         191
      ],
      [
         240,
         "sys_mq_open",
         "(void)",
         "0xf0",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         106
      ],
      [
         241,
         "sys_mq_unlink",
         "(void)",
         "0xf1",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         108
      ],
      [
         242,
         "sys_mq_timedsend",
         "(void)",
         "0xf2",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         109
      ],
      [
         243,
         "sys_mq_timedreceive",
         "(void)",
         "0xf3",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         111
      ],
      [
         244,
         "sys_mq_notify",
         "(void)",
         "0xf4",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         113
      ],
      [
         245,
         "sys_mq_getsetattr",
         "(void)",
         "0xf5",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         115
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
               "line": 1931
            }
         },
         {
            "type": "compat_pid_t pid",
            "def": {
               "file": "kernel/exit.c",
               "line": 1931
            }
         },
         {
            "type": "struct compat_siginfo __user * infop",
            "def": {
               "file": "kernel/exit.c",
               "line": 1931
            }
         },
         {
            "type": "int options",
            "def": {
               "file": "kernel/exit.c",
               "line": 1931
            }
         },
         {
            "type": "struct compat_rusage __user * uru",
            "def": {
               "file": "kernel/exit.c",
               "line": 1931
            }
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/exit.c",
         1931
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
         724
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
               "line": 729
            }
         },
         {
            "type": "const char __user * pathname",
            "def": {
               "file": "fs/notify/inotify/inotify_user.c",
               "line": 729
            }
         },
         {
            "type": "u32 mask",
            "def": {
               "file": "fs/notify/inotify/inotify_user.c",
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
         {
            "type": "",
            "def": {}
         },
         "fs/notify/inotify/inotify_user.c",
         729
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
               "line": 786
            }
         },
         {
            "type": "__s32 wd",
            "def": {
               "file": "fs/notify/inotify/inotify_user.c",
               "line": 786
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         786
      ],
      [
         256,
         "sys_migrate_pages",
         "(void)",
         "0x100",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         193
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
               "line": 1510
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/open.c",
               "line": 1510
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/open.c",
               "line": 1510
            }
         },
         {
            "type": "umode_t mode",
            "def": {
               "file": "fs/open.c",
               "line": 1510
            }
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
         1510
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
               "line": 4414
            }
         },
         {
            "type": "const char __user * pathname",
            "def": {
               "file": "fs/namei.c",
               "line": 4414
            }
         },
         {
            "type": "umode_t mode",
            "def": {
               "file": "fs/namei.c",
               "line": 4414
            }
         },
         {
            "type": "",
            "def": {}
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
         4414
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
               "line": 4310
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/namei.c",
               "line": 4310
            }
         },
         {
            "type": "umode_t mode",
            "def": {
               "file": "fs/namei.c",
               "line": 4310
            }
         },
         {
            "type": "unsigned int dev",
            "def": {
               "file": "fs/namei.c",
               "line": 4310
            }
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
         4310
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
               "line": 834
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/open.c",
               "line": 834
            }
         },
         {
            "type": "uid_t user",
            "def": {
               "file": "fs/open.c",
               "line": 834
            }
         },
         {
            "type": "gid_t group",
            "def": {
               "file": "fs/open.c",
               "line": 834
            }
         },
         {
            "type": "int flag",
            "def": {
               "file": "fs/open.c",
               "line": 834
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/open.c",
         834
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
               "line": 198
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/utimes.c",
               "line": 198
            }
         },
         {
            "type": "struct __kernel_old_timeval __user * utimes",
            "def": {
               "file": "fs/utimes.c",
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
         "fs/utimes.c",
         198
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
               "line": 890
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/stat.c",
               "line": 890
            }
         },
         {
            "type": "struct compat_stat __user * statbuf",
            "def": {
               "file": "fs/stat.c",
               "line": 890
            }
         },
         {
            "type": "int flag",
            "def": {
               "file": "fs/stat.c",
               "line": 890
            }
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
         890
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
               "line": 4684
            }
         },
         {
            "type": "const char __user * pathname",
            "def": {
               "file": "fs/namei.c",
               "line": 4684
            }
         },
         {
            "type": "int flag",
            "def": {
               "file": "fs/namei.c",
               "line": 4684
            }
         },
         {
            "type": "",
            "def": {}
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
         4684
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
               "line": 5316
            }
         },
         {
            "type": "const char __user * oldname",
            "def": {
               "file": "fs/namei.c",
               "line": 5316
            }
         },
         {
            "type": "int newdfd",
            "def": {
               "file": "fs/namei.c",
               "line": 5316
            }
         },
         {
            "type": "const char __user * newname",
            "def": {
               "file": "fs/namei.c",
               "line": 5316
            }
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
         5316
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
               "line": 4949
            }
         },
         {
            "type": "const char __user * oldname",
            "def": {
               "file": "fs/namei.c",
               "line": 4949
            }
         },
         {
            "type": "int newdfd",
            "def": {
               "file": "fs/namei.c",
               "line": 4949
            }
         },
         {
            "type": "const char __user * newname",
            "def": {
               "file": "fs/namei.c",
               "line": 4949
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/namei.c",
               "line": 4949
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/namei.c",
         4949
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
               "line": 4769
            }
         },
         {
            "type": "int newdfd",
            "def": {
               "file": "fs/namei.c",
               "line": 4769
            }
         },
         {
            "type": "const char __user * newname",
            "def": {
               "file": "fs/namei.c",
               "line": 4769
            }
         },
         {
            "type": "",
            "def": {}
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
         4769
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
               "line": 604
            }
         },
         {
            "type": "const char __user * pathname",
            "def": {
               "file": "fs/stat.c",
               "line": 604
            }
         },
         {
            "type": "char __user * buf",
            "def": {
               "file": "fs/stat.c",
               "line": 604
            }
         },
         {
            "type": "int bufsiz",
            "def": {
               "file": "fs/stat.c",
               "line": 604
            }
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
         604
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
               "line": 713
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/open.c",
               "line": 713
            }
         },
         {
            "type": "umode_t mode",
            "def": {
               "file": "fs/open.c",
               "line": 713
            }
         },
         {
            "type": "",
            "def": {}
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
         713
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
            "type": "",
            "def": {}
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
         270,
         "sys_pselect6",
         "(int n, compat_ulong_t __user * inp, compat_ulong_t __user * outp, compat_ulong_t __user * exp, struct old_timespec32 __user * tsp, void __user * sig)",
         "0x10e",
         {
            "type": "int n",
            "def": {
               "file": "fs/select.c",
               "line": 1377
            }
         },
         {
            "type": "compat_ulong_t __user * inp",
            "def": {
               "file": "fs/select.c",
               "line": 1377
            }
         },
         {
            "type": "compat_ulong_t __user * outp",
            "def": {
               "file": "fs/select.c",
               "line": 1377
            }
         },
         {
            "type": "compat_ulong_t __user * exp",
            "def": {
               "file": "fs/select.c",
               "line": 1377
            }
         },
         {
            "type": "struct old_timespec32 __user * tsp",
            "def": {
               "file": "fs/select.c",
               "line": 1377
            }
         },
         {
            "type": "void __user * sig",
            "def": {
               "file": "fs/select.c",
               "line": 1377
            }
         },
         "fs/select.c",
         1377
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
               "line": 1393
            }
         },
         {
            "type": "unsigned int nfds",
            "def": {
               "file": "fs/select.c",
               "line": 1393
            }
         },
         {
            "type": "struct old_timespec32 __user * tsp",
            "def": {
               "file": "fs/select.c",
               "line": 1393
            }
         },
         {
            "type": "const compat_sigset_t __user * sigmask",
            "def": {
               "file": "fs/select.c",
               "line": 1393
            }
         },
         {
            "type": "compat_size_t sigsetsize",
            "def": {
               "file": "fs/select.c",
               "line": 1393
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/select.c",
         1393
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
               "line": 3196
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         3196
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
               "line": 442
            }
         },
         {
            "type": "compat_size_t len",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 442
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         442
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
               "line": 454
            }
         },
         {
            "type": "compat_uptr_t __user * head_ptr",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 454
            }
         },
         {
            "type": "compat_size_t __user * len_ptr",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 454
            }
         },
         {
            "type": "",
            "def": {}
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
         454
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
               "line": 1618
            }
         },
         {
            "type": "loff_t __user * off_in",
            "def": {
               "file": "fs/splice.c",
               "line": 1618
            }
         },
         {
            "type": "int fd_out",
            "def": {
               "file": "fs/splice.c",
               "line": 1618
            }
         },
         {
            "type": "loff_t __user * off_out",
            "def": {
               "file": "fs/splice.c",
               "line": 1618
            }
         },
         {
            "type": "size_t len",
            "def": {
               "file": "fs/splice.c",
               "line": 1618
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/splice.c",
               "line": 1618
            }
         },
         "fs/splice.c",
         1618
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
               "line": 1979
            }
         },
         {
            "type": "int fdout",
            "def": {
               "file": "fs/splice.c",
               "line": 1979
            }
         },
         {
            "type": "size_t len",
            "def": {
               "file": "fs/splice.c",
               "line": 1979
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/splice.c",
               "line": 1979
            }
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
         1979
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
               "line": 370
            }
         },
         {
            "type": "compat_arg_u64_dual (offset) compat_arg_u64_dual (nbytes)",
            "def": {
               "file": "fs/sync.c",
               "line": 370
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/sync.c",
               "line": 370
            }
         },
         {
            "type": "",
            "def": {}
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
         370
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
               "line": 1580
            }
         },
         {
            "type": "const struct iovec __user * uiov",
            "def": {
               "file": "fs/splice.c",
               "line": 1580
            }
         },
         {
            "type": "unsigned long nr_segs",
            "def": {
               "file": "fs/splice.c",
               "line": 1580
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/splice.c",
               "line": 1580
            }
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
         1580
      ],
      [
         279,
         "sys_move_pages",
         "(void)",
         "0x117",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         194
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
               "line": 143
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/utimes.c",
               "line": 143
            }
         },
         {
            "type": "struct __kernel_timespec __user * utimes",
            "def": {
               "file": "fs/utimes.c",
               "line": 143
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/utimes.c",
               "line": 143
            }
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
         143
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
               "line": 2649
            }
         },
         {
            "type": "struct epoll_event __user * events",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2649
            }
         },
         {
            "type": "int maxevents",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2649
            }
         },
         {
            "type": "int timeout",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2649
            }
         },
         {
            "type": "const compat_sigset_t __user * sigmask",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2649
            }
         },
         {
            "type": "compat_size_t sigsetsize",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2649
            }
         },
         "fs/eventpoll.c",
         2649
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
               "line": 352
            }
         },
         {
            "type": "const compat_sigset_t __user * user_mask",
            "def": {
               "file": "fs/signalfd.c",
               "line": 352
            }
         },
         {
            "type": "compat_size_t sigsetsize",
            "def": {
               "file": "fs/signalfd.c",
               "line": 352
            }
         },
         {
            "type": "",
            "def": {}
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
         352
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
               "line": 394
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/timerfd.c",
               "line": 394
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         394
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
               "line": 428
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         428
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
               "line": 375
            }
         },
         {
            "type": "int mode",
            "def": {
               "file": "fs/open.c",
               "line": 375
            }
         },
         {
            "type": "compat_arg_u64_dual (offset) compat_arg_u64_dual (len)",
            "def": {
               "file": "fs/open.c",
               "line": 375
            }
         },
         {
            "type": "",
            "def": {}
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
         375
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
               "line": 559
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/timerfd.c",
               "line": 559
            }
         },
         {
            "type": "const struct __kernel_itimerspec __user * utmr",
            "def": {
               "file": "fs/timerfd.c",
               "line": 559
            }
         },
         {
            "type": "struct __kernel_itimerspec __user * otmr",
            "def": {
               "file": "fs/timerfd.c",
               "line": 559
            }
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
         559
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
               "line": 577
            }
         },
         {
            "type": "struct __kernel_itimerspec __user * otmr",
            "def": {
               "file": "fs/timerfd.c",
               "line": 577
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         577
      ],
      [
         288,
         "sys_accept4",
         "(void)",
         "0x120",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         200
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
               "line": 344
            }
         },
         {
            "type": "const compat_sigset_t __user * user_mask",
            "def": {
               "file": "fs/signalfd.c",
               "line": 344
            }
         },
         {
            "type": "compat_size_t sigsetsize",
            "def": {
               "file": "fs/signalfd.c",
               "line": 344
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/signalfd.c",
               "line": 344
            }
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
         344
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
               "line": 423
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/eventfd.c",
               "line": 423
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         423
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
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/eventpoll.c",
         2296
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
               "line": 1430
            }
         },
         {
            "type": "unsigned int newfd",
            "def": {
               "file": "fs/file.c",
               "line": 1430
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/file.c",
               "line": 1430
            }
         },
         {
            "type": "",
            "def": {}
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
         1430
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
               "line": 1052
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/pipe.c",
               "line": 1052
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         1052
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
               "line": 719
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         719
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
               "line": 1221
            }
         },
         {
            "type": "const struct iovec __user * vec",
            "def": {
               "file": "fs/read_write.c",
               "line": 1221
            }
         },
         {
            "type": "unsigned long vlen",
            "def": {
               "file": "fs/read_write.c",
               "line": 1221
            }
         },
         {
            "type": "loff_t pos",
            "def": {
               "file": "fs/read_write.c",
               "line": 1221
            }
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
         1221
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
               "line": 1262
            }
         },
         {
            "type": "const struct iovec __user * vec",
            "def": {
               "file": "fs/read_write.c",
               "line": 1262
            }
         },
         {
            "type": "unsigned long vlen",
            "def": {
               "file": "fs/read_write.c",
               "line": 1262
            }
         },
         {
            "type": "loff_t pos",
            "def": {
               "file": "fs/read_write.c",
               "line": 1262
            }
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
         1262
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
               "line": 4262
            }
         },
         {
            "type": "compat_pid_t pid",
            "def": {
               "file": "kernel/signal.c",
               "line": 4262
            }
         },
         {
            "type": "int sig",
            "def": {
               "file": "kernel/signal.c",
               "line": 4262
            }
         },
         {
            "type": "struct compat_siginfo __user * uinfo",
            "def": {
               "file": "kernel/signal.c",
               "line": 4262
            }
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
         4262
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
               "line": 13360
            }
         },
         {
            "type": "pid_t pid",
            "def": {
               "file": "kernel/events/core.c",
               "line": 13360
            }
         },
         {
            "type": "int cpu",
            "def": {
               "file": "kernel/events/core.c",
               "line": 13360
            }
         },
         {
            "type": "int group_fd",
            "def": {
               "file": "kernel/events/core.c",
               "line": 13360
            }
         },
         {
            "type": "unsigned long flags",
            "def": {
               "file": "kernel/events/core.c",
               "line": 13360
            }
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/events/core.c",
         13360
      ],
      [
         299,
         "sys_recvmmsg",
         "(void)",
         "0x12b",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         201
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
               "line": 1500
            }
         },
         {
            "type": "unsigned int event_f_flags",
            "def": {
               "file": "fs/notify/fanotify/fanotify_user.c",
               "line": 1500
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         1500
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
               "line": 2069
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/notify/fanotify/fanotify_user.c",
               "line": 2069
            }
         },
         {
            "type": "__u64 mask",
            "def": {
               "file": "fs/notify/fanotify/fanotify_user.c",
               "line": 2069
            }
         },
         {
            "type": "int dfd",
            "def": {
               "file": "fs/notify/fanotify/fanotify_user.c",
               "line": 2069
            }
         },
         {
            "type": "const char __user * pathname",
            "def": {
               "file": "fs/notify/fanotify/fanotify_user.c",
               "line": 2069
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/notify/fanotify/fanotify_user.c",
         2069
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
               "line": 458
            }
         },
         {
            "type": "struct file_handle __user * handle",
            "def": {
               "file": "fs/fhandle.c",
               "line": 458
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/fhandle.c",
               "line": 458
            }
         },
         {
            "type": "",
            "def": {}
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
         458
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
               "line": 1165
            }
         },
         {
            "type": "struct __kernel_timex __user * utx",
            "def": {
               "file": "kernel/time/posix-timers.c",
               "line": 1165
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         1165
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
               "line": 149
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         149
      ],
      [
         307,
         "sys_sendmmsg",
         "(void)",
         "0x133",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         233
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
               "line": 536
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "kernel/nsproxy.c",
               "line": 536
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         536
      ],
      [
         309,
         "sys_getcpu",
         "(unsigned __user * cpup, unsigned __user * nodep, struct getcpu_cache __user * unused)",
         "0x135",
         {
            "type": "unsigned __user * cpup",
            "def": {
               "file": "kernel/sys.c",
               "line": 2816
            }
         },
         {
            "type": "unsigned __user * nodep",
            "def": {
               "file": "kernel/sys.c",
               "line": 2816
            }
         },
         {
            "type": "struct getcpu_cache __user * unused",
            "def": {
               "file": "kernel/sys.c",
               "line": 2816
            }
         },
         {
            "type": "",
            "def": {}
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
         2816
      ],
      [
         310,
         "sys_process_vm_readv",
         "(void)",
         "0x136",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         235
      ],
      [
         311,
         "sys_process_vm_writev",
         "(void)",
         "0x137",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         237
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
               "line": 3723
            }
         },
         {
            "type": "const char __user * uargs",
            "def": {
               "file": "kernel/module/main.c",
               "line": 3723
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "kernel/module/main.c",
               "line": 3723
            }
         },
         {
            "type": "",
            "def": {}
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
         3723
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
               "line": 977
            }
         },
         {
            "type": "struct sched_attr __user * uattr",
            "def": {
               "file": "kernel/sched/syscalls.c",
               "line": 977
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "kernel/sched/syscalls.c",
               "line": 977
            }
         },
         {
            "type": "",
            "def": {}
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
         977
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
               "line": 1077
            }
         },
         {
            "type": "struct sched_attr __user * uattr",
            "def": {
               "file": "kernel/sched/syscalls.c",
               "line": 1077
            }
         },
         {
            "type": "unsigned int usize",
            "def": {
               "file": "kernel/sched/syscalls.c",
               "line": 1077
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "kernel/sched/syscalls.c",
               "line": 1077
            }
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
         1077
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
               "line": 5309
            }
         },
         {
            "type": "const char __user * oldname",
            "def": {
               "file": "fs/namei.c",
               "line": 5309
            }
         },
         {
            "type": "int newdfd",
            "def": {
               "file": "fs/namei.c",
               "line": 5309
            }
         },
         {
            "type": "const char __user * newname",
            "def": {
               "file": "fs/namei.c",
               "line": 5309
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/namei.c",
               "line": 5309
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/namei.c",
         5309
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
               "line": 2108
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "kernel/seccomp.c",
               "line": 2108
            }
         },
         {
            "type": "void __user * uargs",
            "def": {
               "file": "kernel/seccomp.c",
               "line": 2108
            }
         },
         {
            "type": "",
            "def": {}
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
         2108
      ],
      [
         318,
         "sys_getrandom",
         "not found",
         "0x13e",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "not found",
         ""
      ],
      [
         319,
         "sys_memfd_create",
         "(void)",
         "0x13f",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         248
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
               "line": 363
            }
         },
         {
            "type": "int initrd_fd",
            "def": {
               "file": "kernel/kexec_file.c",
               "line": 363
            }
         },
         {
            "type": "unsigned long cmdline_len",
            "def": {
               "file": "kernel/kexec_file.c",
               "line": 363
            }
         },
         {
            "type": "const char __user * cmdline_ptr",
            "def": {
               "file": "kernel/kexec_file.c",
               "line": 363
            }
         },
         {
            "type": "unsigned long flags",
            "def": {
               "file": "kernel/kexec_file.c",
               "line": 363
            }
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/kexec_file.c",
         363
      ],
      [
         321,
         "sys_bpf",
         "(int cmd, union bpf_attr __user * uattr, unsigned int size)",
         "0x141",
         {
            "type": "int cmd",
            "def": {
               "file": "kernel/bpf/syscall.c",
               "line": 6137
            }
         },
         {
            "type": "union bpf_attr __user * uattr",
            "def": {
               "file": "kernel/bpf/syscall.c",
               "line": 6137
            }
         },
         {
            "type": "unsigned int size",
            "def": {
               "file": "kernel/bpf/syscall.c",
               "line": 6137
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/bpf/syscall.c",
         6137
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
               "line": 2032
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/exec.c",
               "line": 2032
            }
         },
         {
            "type": "const compat_uptr_t __user * argv",
            "def": {
               "file": "fs/exec.c",
               "line": 2032
            }
         },
         {
            "type": "const compat_uptr_t __user * envp",
            "def": {
               "file": "fs/exec.c",
               "line": 2032
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/exec.c",
               "line": 2032
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/exec.c",
         2032
      ],
      [
         323,
         "sys_userfaultfd",
         "(int flags)",
         "0x143",
         {
            "type": "int flags",
            "def": {
               "file": "fs/userfaultfd.c",
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
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "fs/userfaultfd.c",
         2177
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
               "line": 627
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "kernel/sched/membarrier.c",
               "line": 627
            }
         },
         {
            "type": "int cpu_id",
            "def": {
               "file": "kernel/sched/membarrier.c",
               "line": 627
            }
         },
         {
            "type": "",
            "def": {}
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
         627
      ],
      [
         325,
         "sys_mlock2",
         "(void)",
         "0x145",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         261
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
               "line": 1644
            }
         },
         {
            "type": "loff_t __user * off_in",
            "def": {
               "file": "fs/read_write.c",
               "line": 1644
            }
         },
         {
            "type": "int fd_out",
            "def": {
               "file": "fs/read_write.c",
               "line": 1644
            }
         },
         {
            "type": "loff_t __user * off_out",
            "def": {
               "file": "fs/read_write.c",
               "line": 1644
            }
         },
         {
            "type": "size_t len",
            "def": {
               "file": "fs/read_write.c",
               "line": 1644
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/read_write.c",
               "line": 1644
            }
         },
         "fs/read_write.c",
         1644
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
               "line": 1249
            }
         },
         {
            "type": "const struct iovec __user * vec",
            "def": {
               "file": "fs/read_write.c",
               "line": 1249
            }
         },
         {
            "type": "compat_ulong_t vlen",
            "def": {
               "file": "fs/read_write.c",
               "line": 1249
            }
         },
         {
            "type": "u32 pos_low",
            "def": {
               "file": "fs/read_write.c",
               "line": 1249
            }
         },
         {
            "type": "u32 pos_high",
            "def": {
               "file": "fs/read_write.c",
               "line": 1249
            }
         },
         {
            "type": "rwf_t flags",
            "def": {
               "file": "fs/read_write.c",
               "line": 1249
            }
         },
         "fs/read_write.c",
         1249
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
               "line": 1290
            }
         },
         {
            "type": "const struct iovec __user * vec",
            "def": {
               "file": "fs/read_write.c",
               "line": 1290
            }
         },
         {
            "type": "compat_ulong_t vlen",
            "def": {
               "file": "fs/read_write.c",
               "line": 1290
            }
         },
         {
            "type": "u32 pos_low",
            "def": {
               "file": "fs/read_write.c",
               "line": 1290
            }
         },
         {
            "type": "u32 pos_high",
            "def": {
               "file": "fs/read_write.c",
               "line": 1290
            }
         },
         {
            "type": "rwf_t flags",
            "def": {
               "file": "fs/read_write.c",
               "line": 1290
            }
         },
         "fs/read_write.c",
         1290
      ],
      [
         329,
         "sys_pkey_mprotect",
         "(void)",
         "0x149",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         266
      ],
      [
         330,
         "sys_pkey_alloc",
         "(void)",
         "0x14a",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         267
      ],
      [
         331,
         "sys_pkey_free",
         "(void)",
         "0x14b",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         268
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
               "line": 812
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/stat.c",
               "line": 812
            }
         },
         {
            "type": "unsigned flags",
            "def": {
               "file": "fs/stat.c",
               "line": 812
            }
         },
         {
            "type": "unsigned int mask",
            "def": {
               "file": "fs/stat.c",
               "line": 812
            }
         },
         {
            "type": "struct statx __user * buffer",
            "def": {
               "file": "fs/stat.c",
               "line": 812
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/stat.c",
         812
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
               "line": 2378
            }
         },
         {
            "type": "compat_long_t min_nr",
            "def": {
               "file": "fs/aio.c",
               "line": 2378
            }
         },
         {
            "type": "compat_long_t nr",
            "def": {
               "file": "fs/aio.c",
               "line": 2378
            }
         },
         {
            "type": "struct io_event __user * events",
            "def": {
               "file": "fs/aio.c",
               "line": 2378
            }
         },
         {
            "type": "struct old_timespec32 __user * timeout",
            "def": {
               "file": "fs/aio.c",
               "line": 2378
            }
         },
         {
            "type": "const struct __compat_aio_sigset __user * usig",
            "def": {
               "file": "fs/aio.c",
               "line": 2378
            }
         },
         "fs/aio.c",
         2378
      ],
      [
         334,
         "sys_rseq",
         "(struct rseq __user * rseq, u32 rseq_len, int flags, u32 sig)",
         "0x14e",
         {
            "type": "struct rseq __user * rseq",
            "def": {
               "file": "kernel/rseq.c",
               "line": 474
            }
         },
         {
            "type": "u32 rseq_len",
            "def": {
               "file": "kernel/rseq.c",
               "line": 474
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "kernel/rseq.c",
               "line": 474
            }
         },
         {
            "type": "u32 sig",
            "def": {
               "file": "kernel/rseq.c",
               "line": 474
            }
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
         474
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
         365
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
               "line": 4065
            }
         },
         {
            "type": "int sig",
            "def": {
               "file": "kernel/signal.c",
               "line": 4065
            }
         },
         {
            "type": "siginfo_t __user * info",
            "def": {
               "file": "kernel/signal.c",
               "line": 4065
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "kernel/signal.c",
               "line": 4065
            }
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
         4065
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
               "line": 3150
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/namespace.c",
               "line": 3150
            }
         },
         {
            "type": "unsigned flags",
            "def": {
               "file": "fs/namespace.c",
               "line": 3150
            }
         },
         {
            "type": "",
            "def": {}
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
         3150
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
               "line": 4531
            }
         },
         {
            "type": "const char __user * from_pathname",
            "def": {
               "file": "fs/namespace.c",
               "line": 4531
            }
         },
         {
            "type": "int to_dfd",
            "def": {
               "file": "fs/namespace.c",
               "line": 4531
            }
         },
         {
            "type": "const char __user * to_pathname",
            "def": {
               "file": "fs/namespace.c",
               "line": 4531
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/namespace.c",
               "line": 4531
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/namespace.c",
         4531
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
               "line": 114
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/fsopen.c",
               "line": 114
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         114
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
               "line": 344
            }
         },
         {
            "type": "unsigned int cmd",
            "def": {
               "file": "fs/fsopen.c",
               "line": 344
            }
         },
         {
            "type": "const char __user * _key",
            "def": {
               "file": "fs/fsopen.c",
               "line": 344
            }
         },
         {
            "type": "const void __user * _value",
            "def": {
               "file": "fs/fsopen.c",
               "line": 344
            }
         },
         {
            "type": "int aux",
            "def": {
               "file": "fs/fsopen.c",
               "line": 344
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/fsopen.c",
         344
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
               "line": 4392
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/namespace.c",
               "line": 4392
            }
         },
         {
            "type": "unsigned int attr_flags",
            "def": {
               "file": "fs/namespace.c",
               "line": 4392
            }
         },
         {
            "type": "",
            "def": {}
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
         4392
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
               "line": 157
            }
         },
         {
            "type": "const char __user * path",
            "def": {
               "file": "fs/fsopen.c",
               "line": 157
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/fsopen.c",
               "line": 157
            }
         },
         {
            "type": "",
            "def": {}
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
         157
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
               "line": 644
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "kernel/pid.c",
               "line": 644
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         644
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
               "line": 2888
            }
         },
         {
            "type": "size_t size",
            "def": {
               "file": "kernel/fork.c",
               "line": 2888
            }
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         2888
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
               "line": 790
            }
         },
         {
            "type": "unsigned int max_fd",
            "def": {
               "file": "fs/file.c",
               "line": 790
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/file.c",
               "line": 790
            }
         },
         {
            "type": "",
            "def": {}
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
         790
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
               "line": 1469
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/open.c",
               "line": 1469
            }
         },
         {
            "type": "struct open_how __user * how",
            "def": {
               "file": "fs/open.c",
               "line": 1469
            }
         },
         {
            "type": "size_t usize",
            "def": {
               "file": "fs/open.c",
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
         "fs/open.c",
         1469
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
               "line": 903
            }
         },
         {
            "type": "int fd",
            "def": {
               "file": "kernel/pid.c",
               "line": 903
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "kernel/pid.c",
               "line": 903
            }
         },
         {
            "type": "",
            "def": {}
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
         903
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
               "line": 544
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/open.c",
               "line": 544
            }
         },
         {
            "type": "int mode",
            "def": {
               "file": "fs/open.c",
               "line": 544
            }
         },
         {
            "type": "int flags",
            "def": {
               "file": "fs/open.c",
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
         "fs/open.c",
         544
      ],
      [
         440,
         "sys_process_madvise",
         "(void)",
         "0x1b8",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         187
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
               "line": 2662
            }
         },
         {
            "type": "struct epoll_event __user * events",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2662
            }
         },
         {
            "type": "int maxevents",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2662
            }
         },
         {
            "type": "const struct __kernel_timespec __user * timeout",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2662
            }
         },
         {
            "type": "const compat_sigset_t __user * sigmask",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2662
            }
         },
         {
            "type": "compat_size_t sigsetsize",
            "def": {
               "file": "fs/eventpoll.c",
               "line": 2662
            }
         },
         "fs/eventpoll.c",
         2662
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
               "line": 5130
            }
         },
         {
            "type": "const char __user * path",
            "def": {
               "file": "fs/namespace.c",
               "line": 5130
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/namespace.c",
               "line": 5130
            }
         },
         {
            "type": "struct mount_attr __user * uattr",
            "def": {
               "file": "fs/namespace.c",
               "line": 5130
            }
         },
         {
            "type": "size_t usize",
            "def": {
               "file": "fs/namespace.c",
               "line": 5130
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/namespace.c",
         5130
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
         "(void)",
         "0x1bf",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         271
      ],
      [
         448,
         "sys_process_mrelease",
         "(void)",
         "0x1c0",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         188
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
               "line": 290
            }
         },
         {
            "type": "unsigned int nr_futexes",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 290
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 290
            }
         },
         {
            "type": "struct __kernel_timespec __user * timeout",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 290
            }
         },
         {
            "type": "clockid_t clockid",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 290
            }
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/futex/syscalls.c",
         290
      ],
      [
         450,
         "sys_set_mempolicy_home_node",
         "(void)",
         "0x1c2",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         195
      ],
      [
         451,
         "sys_cachestat",
         "(void)",
         "0x1c3",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         196
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
               "line": 707
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/open.c",
               "line": 707
            }
         },
         {
            "type": "umode_t mode",
            "def": {
               "file": "fs/open.c",
               "line": 707
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/open.c",
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
         "fs/open.c",
         707
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
               "line": 505
            }
         },
         {
            "type": "unsigned long size",
            "def": {
               "file": "arch/x86/kernel/shstk.c",
               "line": 505
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "arch/x86/kernel/shstk.c",
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
         "arch/x86/kernel/shstk.c",
         505
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
               "line": 338
            }
         },
         {
            "type": "unsigned long mask",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 338
            }
         },
         {
            "type": "int nr",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 338
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 338
            }
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
         338
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
               "line": 290
            }
         },
         {
            "type": "unsigned int nr_futexes",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 290
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 290
            }
         },
         {
            "type": "struct __kernel_timespec __user * timeout",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 290
            }
         },
         {
            "type": "clockid_t clockid",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 290
            }
         },
         {
            "type": "",
            "def": {}
         },
         "kernel/futex/syscalls.c",
         290
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
               "line": 414
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 414
            }
         },
         {
            "type": "int nr_wake",
            "def": {
               "file": "kernel/futex/syscalls.c",
               "line": 414
            }
         },
         {
            "type": "int nr_requeue",
            "def": {
               "file": "kernel/futex/syscalls.c",
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
         "kernel/futex/syscalls.c",
         414
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
               "line": 5925
            }
         },
         {
            "type": "struct statmount __user * buf",
            "def": {
               "file": "fs/namespace.c",
               "line": 5925
            }
         },
         {
            "type": "size_t bufsize",
            "def": {
               "file": "fs/namespace.c",
               "line": 5925
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/namespace.c",
               "line": 5925
            }
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
         5925
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
               "line": 6032
            }
         },
         {
            "type": "u64 __user * mnt_ids",
            "def": {
               "file": "fs/namespace.c",
               "line": 6032
            }
         },
         {
            "type": "size_t nr_mnt_ids",
            "def": {
               "file": "fs/namespace.c",
               "line": 6032
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/namespace.c",
               "line": 6032
            }
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
         6032
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
         "(void)",
         "0x1ce",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         197
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
               "line": 719
            }
         },
         {
            "type": "const char __user * pathname",
            "def": {
               "file": "fs/xattr.c",
               "line": 719
            }
         },
         {
            "type": "unsigned int at_flags",
            "def": {
               "file": "fs/xattr.c",
               "line": 719
            }
         },
         {
            "type": "const char __user * name",
            "def": {
               "file": "fs/xattr.c",
               "line": 719
            }
         },
         {
            "type": "const struct xattr_args __user * uargs",
            "def": {
               "file": "fs/xattr.c",
               "line": 719
            }
         },
         {
            "type": "size_t usize",
            "def": {
               "file": "fs/xattr.c",
               "line": 719
            }
         },
         "fs/xattr.c",
         719
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
               "line": 863
            }
         },
         {
            "type": "const char __user * pathname",
            "def": {
               "file": "fs/xattr.c",
               "line": 863
            }
         },
         {
            "type": "unsigned int at_flags",
            "def": {
               "file": "fs/xattr.c",
               "line": 863
            }
         },
         {
            "type": "const char __user * name",
            "def": {
               "file": "fs/xattr.c",
               "line": 863
            }
         },
         {
            "type": "struct xattr_args __user * uargs",
            "def": {
               "file": "fs/xattr.c",
               "line": 863
            }
         },
         {
            "type": "size_t usize",
            "def": {
               "file": "fs/xattr.c",
               "line": 863
            }
         },
         "fs/xattr.c",
         863
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
               "line": 991
            }
         },
         {
            "type": "const char __user * pathname",
            "def": {
               "file": "fs/xattr.c",
               "line": 991
            }
         },
         {
            "type": "unsigned int at_flags",
            "def": {
               "file": "fs/xattr.c",
               "line": 991
            }
         },
         {
            "type": "char __user * list",
            "def": {
               "file": "fs/xattr.c",
               "line": 991
            }
         },
         {
            "type": "size_t size",
            "def": {
               "file": "fs/xattr.c",
               "line": 991
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/xattr.c",
         991
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
               "line": 1091
            }
         },
         {
            "type": "const char __user * pathname",
            "def": {
               "file": "fs/xattr.c",
               "line": 1091
            }
         },
         {
            "type": "unsigned int at_flags",
            "def": {
               "file": "fs/xattr.c",
               "line": 1091
            }
         },
         {
            "type": "const char __user * name",
            "def": {
               "file": "fs/xattr.c",
               "line": 1091
            }
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
         1091
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
               "line": 5172
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/namespace.c",
               "line": 5172
            }
         },
         {
            "type": "unsigned flags",
            "def": {
               "file": "fs/namespace.c",
               "line": 5172
            }
         },
         {
            "type": "struct mount_attr __user * uattr",
            "def": {
               "file": "fs/namespace.c",
               "line": 5172
            }
         },
         {
            "type": "size_t usize",
            "def": {
               "file": "fs/namespace.c",
               "line": 5172
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/namespace.c",
         5172
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
               "line": 382
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/file_attr.c",
               "line": 382
            }
         },
         {
            "type": "struct file_attr __user * ufattr",
            "def": {
               "file": "fs/file_attr.c",
               "line": 382
            }
         },
         {
            "type": "size_t usize",
            "def": {
               "file": "fs/file_attr.c",
               "line": 382
            }
         },
         {
            "type": "unsigned int at_flags",
            "def": {
               "file": "fs/file_attr.c",
               "line": 382
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/file_attr.c",
         382
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
               "line": 437
            }
         },
         {
            "type": "const char __user * filename",
            "def": {
               "file": "fs/file_attr.c",
               "line": 437
            }
         },
         {
            "type": "struct file_attr __user * ufattr",
            "def": {
               "file": "fs/file_attr.c",
               "line": 437
            }
         },
         {
            "type": "size_t usize",
            "def": {
               "file": "fs/file_attr.c",
               "line": 437
            }
         },
         {
            "type": "unsigned int at_flags",
            "def": {
               "file": "fs/file_attr.c",
               "line": 437
            }
         },
         {
            "type": "",
            "def": {}
         },
         "fs/file_attr.c",
         437
      ],
      [
         512,
         "compat_sys_rt_sigaction",
         "not found",
         "0x200",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "not found",
         ""
      ],
      [
         513,
         "compat_sys_x32_rt_sigreturn",
         "not found",
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
         "not found",
         ""
      ],
      [
         514,
         "compat_sys_ioctl",
         "not found",
         "0x202",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "not found",
         ""
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
               "line": 1162
            }
         },
         {
            "type": "const struct iovec __user * vec",
            "def": {
               "file": "fs/read_write.c",
               "line": 1162
            }
         },
         {
            "type": "unsigned long vlen",
            "def": {
               "file": "fs/read_write.c",
               "line": 1162
            }
         },
         {
            "type": "",
            "def": {}
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
         1162
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
               "line": 1168
            }
         },
         {
            "type": "const struct iovec __user * vec",
            "def": {
               "file": "fs/read_write.c",
               "line": 1168
            }
         },
         {
            "type": "unsigned long vlen",
            "def": {
               "file": "fs/read_write.c",
               "line": 1168
            }
         },
         {
            "type": "",
            "def": {}
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
         1168
      ],
      [
         517,
         "compat_sys_recvfrom",
         "not found",
         "0x205",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "not found",
         ""
      ],
      [
         518,
         "compat_sys_sendmsg",
         "not found",
         "0x206",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "not found",
         ""
      ],
      [
         519,
         "compat_sys_recvmsg",
         "not found",
         "0x207",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "not found",
         ""
      ],
      [
         520,
         "compat_sys_execve",
         "not found",
         "0x208",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "not found",
         ""
      ],
      [
         521,
         "compat_sys_ptrace",
         "not found",
         "0x209",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "not found",
         ""
      ],
      [
         522,
         "compat_sys_rt_sigpending",
         "not found",
         "0x20a",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "not found",
         ""
      ],
      [
         523,
         "compat_sys_rt_sigtimedwait_time64",
         "not found",
         "0x20b",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "not found",
         ""
      ],
      [
         524,
         "compat_sys_rt_sigqueueinfo",
         "not found",
         "0x20c",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "not found",
         ""
      ],
      [
         525,
         "compat_sys_sigaltstack",
         "not found",
         "0x20d",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "not found",
         ""
      ],
      [
         526,
         "compat_sys_timer_create",
         "not found",
         "0x20e",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "not found",
         ""
      ],
      [
         527,
         "compat_sys_mq_notify",
         "not found",
         "0x20f",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "not found",
         ""
      ],
      [
         528,
         "compat_sys_kexec_load",
         "not found",
         "0x210",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "not found",
         ""
      ],
      [
         529,
         "compat_sys_waitid",
         "not found",
         "0x211",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "not found",
         ""
      ],
      [
         530,
         "compat_sys_set_robust_list",
         "not found",
         "0x212",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "not found",
         ""
      ],
      [
         531,
         "compat_sys_get_robust_list",
         "not found",
         "0x213",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "not found",
         ""
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
               "line": 1580
            }
         },
         {
            "type": "const struct iovec __user * uiov",
            "def": {
               "file": "fs/splice.c",
               "line": 1580
            }
         },
         {
            "type": "unsigned long nr_segs",
            "def": {
               "file": "fs/splice.c",
               "line": 1580
            }
         },
         {
            "type": "unsigned int flags",
            "def": {
               "file": "fs/splice.c",
               "line": 1580
            }
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
         1580
      ],
      [
         533,
         "sys_move_pages",
         "(void)",
         "0x215",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         194
      ],
      [
         534,
         "compat_sys_preadv64",
         "not found",
         "0x216",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "not found",
         ""
      ],
      [
         535,
         "compat_sys_pwritev64",
         "not found",
         "0x217",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "not found",
         ""
      ],
      [
         536,
         "compat_sys_rt_tgsigqueueinfo",
         "not found",
         "0x218",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "not found",
         ""
      ],
      [
         537,
         "compat_sys_recvmmsg_time64",
         "not found",
         "0x219",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "not found",
         ""
      ],
      [
         538,
         "compat_sys_sendmmsg",
         "not found",
         "0x21a",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "not found",
         ""
      ],
      [
         539,
         "sys_process_vm_readv",
         "(void)",
         "0x21b",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         235
      ],
      [
         540,
         "sys_process_vm_writev",
         "(void)",
         "0x21c",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         237
      ],
      [
         541,
         "sys_setsockopt",
         "(void)",
         "0x21d",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         150
      ],
      [
         542,
         "sys_getsockopt",
         "(void)",
         "0x21e",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
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
         152
      ],
      [
         543,
         "compat_sys_io_setup",
         "not found",
         "0x21f",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "not found",
         ""
      ],
      [
         544,
         "compat_sys_io_submit",
         "not found",
         "0x220",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "not found",
         ""
      ],
      [
         545,
         "compat_sys_execveat",
         "not found",
         "0x221",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "not found",
         ""
      ],
      [
         546,
         "compat_sys_preadv64v2",
         "not found",
         "0x222",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "not found",
         ""
      ],
      [
         547,
         "compat_sys_pwritev64v2",
         "not found",
         "0x223",
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         {
            "type": "",
            "def": {}
         },
         "not found",
         ""
      ]
   ]
};
