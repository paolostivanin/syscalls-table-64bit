{
   "aaData": [
      [
         0,
         "sys_read",
         "(unsigned int fd, char __user *buf, size_t count)",
         "0x00",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "char __user *buf",
            "def": null
         },
         {
            "type": "size_t count",
            "def": null
         },
         "",
         "",
         "",
         "fs/read_write.c",
         628
      ],
      [
         1,
         "sys_write",
         "(unsigned int fd, const char __user *buf, size_t count)",
         "0x01",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "const char __user *buf",
            "def": null
         },
         {
            "type": "size_t count",
            "def": null
         },
         "",
         "",
         "",
         "fs/read_write.c",
         653
      ],
      [
         2,
         "sys_open",
         "(const char __user *filename, int flags, umode_t mode)",
         "0x02",
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         {
            "type": "umode_t mode",
            "def": null
         },
         "",
         "",
         "",
         "fs/fhandle.c",
         256
      ],
      [
         3,
         "sys_close",
         "(unsigned int fd)",
         "0x03",
         {
            "type": "unsigned int fd",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "fs/open.c",
         1405
      ],
      [
         4,
         "sys_newstat",
         "(const char __user *filename, struct stat __user *statbuf)",
         "0x04",
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "struct stat __user *statbuf",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/stat.c",
         394
      ],
      [
         5,
         "sys_newfstat",
         "(unsigned int fd, struct stat __user *statbuf)",
         "0x05",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "struct stat __user *statbuf",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/stat.c",
         432
      ],
      [
         6,
         "sys_newlstat",
         "(const char __user *filename, struct stat __user *statbuf)",
         "0x06",
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "struct stat __user *statbuf",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/stat.c",
         405
      ],
      [
         7,
         "sys_poll",
         "(struct pollfd __user *ufds, unsigned int nfds, int timeout)",
         "0x07",
         {
            "type": "struct pollfd __user *ufds",
            "def": null
         },
         {
            "type": "unsigned int nfds",
            "def": null
         },
         {
            "type": "int timeout",
            "def": null
         },
         "",
         "",
         "",
         "fs/select.c",
         1068
      ],
      [
         8,
         "sys_lseek",
         "(unsigned int fd, off_t offset, unsigned int whence)",
         "0x08",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "off_t offset",
            "def": null
         },
         {
            "type": "unsigned int whence",
            "def": null
         },
         "",
         "",
         "",
         "fs/read_write.c",
         322
      ],
      [
         9,
         "sys_mmap",
         "( unsigned long addr, unsigned long len, int prot, int flags, int fd, long off)",
         "0x09",
         {
            "type": "unsigned long addr",
            "def": null
         },
         {
            "type": "unsigned long len",
            "def": null
         },
         {
            "type": "int prot",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "long off",
            "def": null
         },
         "arch/arm64/kernel/sys.c",
         21
      ],
      [
         10,
         "sys_mprotect",
         "(unsigned long start, size_t len, unsigned long prot)",
         "0x0a",
         {
            "type": "unsigned long start",
            "def": null
         },
         {
            "type": "size_t len",
            "def": null
         },
         {
            "type": "unsigned long prot",
            "def": null
         },
         "",
         "",
         "",
         "mm/mprotect.c",
         757
      ],
      [
         11,
         "sys_munmap",
         "(unsigned long addr, size_t len)",
         "0x0b",
         {
            "type": "unsigned long addr",
            "def": null
         },
         {
            "type": "size_t len",
            "def": null
         },
         "",
         "",
         "",
         "",
         "mm/mmap.c",
         2927
      ],
      [
         12,
         "sys_brk",
         "(unsigned long brk)",
         "0x0c",
         {
            "type": "unsigned long brk",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "mm/mmap.c",
         200
      ],
      [
         13,
         "sys_rt_sigaction",
         "(int, const struct sigaction __user *, struct sigaction __user *, size_t)",
         "0x0d",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "const struct sigaction __user *",
            "def": null
         },
         {
            "type": "struct sigaction __user *",
            "def": null
         },
         {
            "type": "size_t",
            "def": null
         },
         "",
         "",
         "kernel/signal.c",
         4409
      ],
      [
         14,
         "sys_rt_sigprocmask",
         "(int how, sigset_t __user *set, sigset_t __user *oset, size_t sigsetsize)",
         "0x0e",
         {
            "type": "int how",
            "def": null
         },
         {
            "type": "sigset_t __user *set",
            "def": null
         },
         {
            "type": "sigset_t __user *oset",
            "def": null
         },
         {
            "type": "size_t sigsetsize",
            "def": null
         },
         "",
         "",
         "kernel/signal.c",
         3140
      ],
      [
         15,
         "sys_rt_sigreturn",
         "(void)",
         "0x0f",
         {
            "type": "void",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         16,
         "sys_ioctl",
         "(unsigned int fd, unsigned int cmd, unsigned long arg)",
         "0x10",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "unsigned int cmd",
            "def": null
         },
         {
            "type": "unsigned long arg",
            "def": null
         },
         "",
         "",
         "",
         "fs/ioctl.c",
         856
      ],
      [
         17,
         "sys_pread64",
         "(unsigned int fd, char __user *buf, size_t count, loff_t pos)",
         "0x11",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "char __user *buf",
            "def": null
         },
         {
            "type": "size_t count",
            "def": null
         },
         {
            "type": "loff_t pos",
            "def": null
         },
         "",
         "",
         "fs/read_write.c",
         679
      ],
      [
         18,
         "sys_pwrite64",
         "(unsigned int fd, const char __user *buf, size_t count, loff_t pos)",
         "0x12",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "const char __user *buf",
            "def": null
         },
         {
            "type": "size_t count",
            "def": null
         },
         {
            "type": "loff_t pos",
            "def": null
         },
         "",
         "",
         "fs/read_write.c",
         713
      ],
      [
         19,
         "sys_readv",
         "(unsigned long fd, const struct iovec __user *vec, unsigned long vlen)",
         "0x13",
         {
            "type": "unsigned long fd",
            "def": null
         },
         {
            "type": "const struct iovec __user *vec",
            "def": null
         },
         {
            "type": "unsigned long vlen",
            "def": null
         },
         "",
         "",
         "",
         "fs/read_write.c",
         1048
      ],
      [
         20,
         "sys_writev",
         "(unsigned long fd, const struct iovec __user *vec, unsigned long vlen)",
         "0x14",
         {
            "type": "unsigned long fd",
            "def": null
         },
         {
            "type": "const struct iovec __user *vec",
            "def": null
         },
         {
            "type": "unsigned long vlen",
            "def": null
         },
         "",
         "",
         "",
         "fs/read_write.c",
         1054
      ],
      [
         21,
         "sys_access",
         "(const char __user *filename, int mode)",
         "0x15",
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "int mode",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/open.c",
         503
      ],
      [
         22,
         "sys_pipe",
         "(int __user *fildes)",
         "0x16",
         {
            "type": "int __user *fildes",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "fs/pipe.c",
         1031
      ],
      [
         23,
         "sys_select",
         "(int n, fd_set __user *inp, fd_set __user *outp, fd_set __user *exp, struct __kernel_old_timeval __user *tvp)",
         "0x17",
         {
            "type": "int n",
            "def": null
         },
         {
            "type": "fd_set __user *inp",
            "def": null
         },
         {
            "type": "fd_set __user *outp",
            "def": null
         },
         {
            "type": "fd_set __user *exp",
            "def": null
         },
         {
            "type": "struct __kernel_old_timeval __user *tvp",
            "def": null
         },
         "",
         "fs/select.c",
         726
      ],
      [
         24,
         "sys_sched_yield",
         "(void)",
         "0x18",
         {
            "type": "void",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         25,
         "sys_mremap",
         "(unsigned long addr, unsigned long old_len, unsigned long new_len, unsigned long flags, unsigned long new_addr)",
         "0x19",
         {
            "type": "unsigned long addr",
            "def": null
         },
         {
            "type": "unsigned long old_len",
            "def": null
         },
         {
            "type": "unsigned long new_len",
            "def": null
         },
         {
            "type": "unsigned long flags",
            "def": null
         },
         {
            "type": "unsigned long new_addr",
            "def": null
         },
         "",
         "mm/mremap.c",
         886
      ],
      [
         26,
         "sys_msync",
         "(unsigned long start, size_t len, int flags)",
         "0x1a",
         {
            "type": "unsigned long start",
            "def": null
         },
         {
            "type": "size_t len",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "",
         "",
         "",
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
            "def": null
         },
         {
            "type": "size_t len",
            "def": null
         },
         {
            "type": "unsigned char __user * vec",
            "def": null
         },
         "",
         "",
         "",
         "mm/mincore.c",
         232
      ],
      [
         28,
         "sys_madvise",
         "(unsigned long start, size_t len, int behavior)",
         "0x1c",
         {
            "type": "unsigned long start",
            "def": null
         },
         {
            "type": "size_t len",
            "def": null
         },
         {
            "type": "int behavior",
            "def": null
         },
         "",
         "",
         "",
         "mm/madvise.c",
         1421
      ],
      [
         29,
         "sys_shmget",
         "(key_t key, size_t size, int flag)",
         "0x1d",
         {
            "type": "key_t key",
            "def": null
         },
         {
            "type": "size_t size",
            "def": null
         },
         {
            "type": "int flag",
            "def": null
         },
         "",
         "",
         "",
         "ipc/shm.c",
         834
      ],
      [
         30,
         "sys_shmat",
         "(int shmid, char __user *shmaddr, int shmflg)",
         "0x1e",
         {
            "type": "int shmid",
            "def": null
         },
         {
            "type": "char __user *shmaddr",
            "def": null
         },
         {
            "type": "int shmflg",
            "def": null
         },
         "",
         "",
         "",
         "ipc/shm.c",
         1680
      ],
      [
         31,
         "sys_shmctl",
         "(int shmid, int cmd, struct shmid_ds __user *buf)",
         "0x1f",
         {
            "type": "int shmid",
            "def": null
         },
         {
            "type": "int cmd",
            "def": null
         },
         {
            "type": "struct shmid_ds __user *buf",
            "def": null
         },
         "",
         "",
         "",
         "ipc/shm.c",
         1283
      ],
      [
         32,
         "sys_dup",
         "(unsigned int fildes)",
         "0x20",
         {
            "type": "unsigned int fildes",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "fs/file.c",
         1259
      ],
      [
         33,
         "sys_dup2",
         "(unsigned int oldfd, unsigned int newfd)",
         "0x21",
         {
            "type": "unsigned int oldfd",
            "def": null
         },
         {
            "type": "unsigned int newfd",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/file.c",
         1244
      ],
      [
         34,
         "sys_pause",
         "(void)",
         "0x22",
         {
            "type": "void",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         35,
         "sys_nanosleep",
         "(struct __kernel_timespec __user *rqtp, struct __kernel_timespec __user *rmtp)",
         "0x23",
         {
            "type": "struct __kernel_timespec __user *rqtp",
            "def": null
         },
         {
            "type": "struct __kernel_timespec __user *rmtp",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/time/hrtimer.c",
         2118
      ],
      [
         36,
         "sys_getitimer",
         "(int which, struct __kernel_old_itimerval __user *value)",
         "0x24",
         {
            "type": "int which",
            "def": null
         },
         {
            "type": "struct __kernel_old_itimerval __user *value",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/time/itimer.c",
         113
      ],
      [
         37,
         "sys_alarm",
         "(unsigned int seconds)",
         "0x25",
         {
            "type": "unsigned int seconds",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "kernel/time/itimer.c",
         306
      ],
      [
         38,
         "sys_setitimer",
         "(int which, struct __kernel_old_itimerval __user *value, struct __kernel_old_itimerval __user *ovalue)",
         "0x26",
         {
            "type": "int which",
            "def": null
         },
         {
            "type": "struct __kernel_old_itimerval __user *value",
            "def": null
         },
         {
            "type": "struct __kernel_old_itimerval __user *ovalue",
            "def": null
         },
         "",
         "",
         "",
         "kernel/time/itimer.c",
         332
      ],
      [
         39,
         "sys_getpid",
         "(void)",
         "0x27",
         {
            "type": "void",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         40,
         "sys_sendfile64",
         "(int out_fd, int in_fd, loff_t __user *offset, size_t count)",
         "0x28",
         {
            "type": "int out_fd",
            "def": null
         },
         {
            "type": "int in_fd",
            "def": null
         },
         {
            "type": "loff_t __user *offset",
            "def": null
         },
         {
            "type": "size_t count",
            "def": null
         },
         "",
         "",
         "fs/read_write.c",
         1316
      ],
      [
         41,
         "sys_socket",
         "(int, int, int)",
         "0x29",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "int",
            "def": null
         },
         {
            "type": "int",
            "def": null
         },
         "",
         "",
         "",
         "net/socket.c",
         1647
      ],
      [
         42,
         "sys_connect",
         "(int, struct sockaddr __user *, int)",
         "0x2a",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "struct sockaddr __user *",
            "def": null
         },
         {
            "type": "int",
            "def": null
         },
         "",
         "",
         "",
         "net/socket.c",
         2003
      ],
      [
         43,
         "sys_accept",
         "(int, struct sockaddr __user *, int __user *)",
         "0x2b",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "struct sockaddr __user *",
            "def": null
         },
         {
            "type": "int __user *",
            "def": null
         },
         "",
         "",
         "",
         "net/socket.c",
         1944
      ],
      [
         44,
         "sys_sendto",
         "(int, void __user *, size_t, unsigned, struct sockaddr __user *, int)",
         "0x2c",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "void __user *",
            "def": null
         },
         {
            "type": "size_t",
            "def": null
         },
         {
            "type": "unsigned",
            "def": null
         },
         {
            "type": "struct sockaddr __user *",
            "def": null
         },
         {
            "type": "int",
            "def": null
         },
         "net/socket.c",
         2127
      ],
      [
         45,
         "sys_recvfrom",
         "(int, void __user *, size_t, unsigned, struct sockaddr __user *, int __user *)",
         "0x2d",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "void __user *",
            "def": null
         },
         {
            "type": "size_t",
            "def": null
         },
         {
            "type": "unsigned",
            "def": null
         },
         {
            "type": "struct sockaddr __user *",
            "def": null
         },
         {
            "type": "int __user *",
            "def": null
         },
         "net/socket.c",
         2185
      ],
      [
         46,
         "sys_sendmsg",
         "(int fd, struct user_msghdr __user *msg, unsigned flags)",
         "0x2e",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "struct user_msghdr __user *msg",
            "def": null
         },
         {
            "type": "unsigned flags",
            "def": null
         },
         "",
         "",
         "",
         "net/socket.c",
         2578
      ],
      [
         47,
         "sys_recvmsg",
         "(int fd, struct user_msghdr __user *msg, unsigned flags)",
         "0x2f",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "struct user_msghdr __user *msg",
            "def": null
         },
         {
            "type": "unsigned flags",
            "def": null
         },
         "",
         "",
         "",
         "net/socket.c",
         2786
      ],
      [
         48,
         "sys_shutdown",
         "(int, int)",
         "0x30",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "int",
            "def": null
         },
         "",
         "",
         "",
         "",
         "net/socket.c",
         2344
      ],
      [
         49,
         "sys_bind",
         "(int, struct sockaddr __user *, int)",
         "0x31",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "struct sockaddr __user *",
            "def": null
         },
         {
            "type": "int",
            "def": null
         },
         "",
         "",
         "",
         "net/socket.c",
         1785
      ],
      [
         50,
         "sys_listen",
         "(int, int)",
         "0x32",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "int",
            "def": null
         },
         "",
         "",
         "",
         "",
         "net/socket.c",
         1817
      ],
      [
         51,
         "sys_getsockname",
         "(int, struct sockaddr __user *, int __user *)",
         "0x33",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "struct sockaddr __user *",
            "def": null
         },
         {
            "type": "int __user *",
            "def": null
         },
         "",
         "",
         "",
         "net/socket.c",
         2041
      ],
      [
         52,
         "sys_getpeername",
         "(int, struct sockaddr __user *, int __user *)",
         "0x34",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "struct sockaddr __user *",
            "def": null
         },
         {
            "type": "int __user *",
            "def": null
         },
         "",
         "",
         "",
         "net/socket.c",
         2077
      ],
      [
         53,
         "sys_socketpair",
         "(int, int, int, int __user *)",
         "0x35",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "int",
            "def": null
         },
         {
            "type": "int",
            "def": null
         },
         {
            "type": "int __user *",
            "def": null
         },
         "",
         "",
         "net/socket.c",
         1748
      ],
      [
         54,
         "sys_setsockopt",
         "(int fd, int level, int optname, char __user *optval, int optlen)",
         "0x36",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "int level",
            "def": null
         },
         {
            "type": "int optname",
            "def": null
         },
         {
            "type": "char __user *optval",
            "def": null
         },
         {
            "type": "int optlen",
            "def": null
         },
         "",
         "net/socket.c",
         2262
      ],
      [
         55,
         "sys_getsockopt",
         "(int fd, int level, int optname, char __user *optval, int __user *optlen)",
         "0x37",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "int level",
            "def": null
         },
         {
            "type": "int optname",
            "def": null
         },
         {
            "type": "char __user *optval",
            "def": null
         },
         {
            "type": "int __user *optlen",
            "def": null
         },
         "",
         "net/socket.c",
         2310
      ],
      [
         56,
         "sys_clone",
         "(unsigned long, unsigned long, int __user *, unsigned long, int __user *)",
         "0x38",
         {
            "type": "unsigned long",
            "def": null
         },
         {
            "type": "unsigned long",
            "def": null
         },
         {
            "type": "int __user *",
            "def": null
         },
         {
            "type": "unsigned long",
            "def": null
         },
         {
            "type": "int __user *",
            "def": null
         },
         "",
         "kernel/fork.c",
         2757
      ],
      [
         57,
         "sys_fork",
         "(void)",
         "0x39",
         {
            "type": "void",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         58,
         "sys_vfork",
         "(void)",
         "0x3a",
         {
            "type": "void",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         59,
         "sys_execve",
         "(const char __user *filename, const char __user *const __user *argv, const char __user *const __user *envp)",
         "0x3b",
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "const char __user *const __user *argv",
            "def": null
         },
         {
            "type": "const char __user *const __user *envp",
            "def": null
         },
         "",
         "",
         "",
         "fs/exec.c",
         2088
      ],
      [
         60,
         "sys_exit",
         "(int error_code)",
         "0x3c",
         {
            "type": "int error_code",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "kernel/exit.c",
         890
      ],
      [
         61,
         "sys_wait4",
         "(pid_t pid, int __user *stat_addr, int options, struct rusage __user *ru)",
         "0x3d",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "int __user *stat_addr",
            "def": null
         },
         {
            "type": "int options",
            "def": null
         },
         {
            "type": "struct rusage __user *ru",
            "def": null
         },
         "",
         "",
         "kernel/exit.c",
         1705
      ],
      [
         62,
         "sys_kill",
         "(pid_t pid, int sig)",
         "0x3e",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "int sig",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/signal.c",
         3770
      ],
      [
         63,
         "sys_newuname",
         "(struct new_utsname __user *name)",
         "0x3f",
         {
            "type": "struct new_utsname __user *name",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         1287
      ],
      [
         64,
         "sys_semget",
         "(key_t key, int nsems, int semflg)",
         "0x40",
         {
            "type": "key_t key",
            "def": null
         },
         {
            "type": "int nsems",
            "def": null
         },
         {
            "type": "int semflg",
            "def": null
         },
         "",
         "",
         "",
         "ipc/sem.c",
         624
      ],
      [
         65,
         "sys_semop",
         "(int semid, struct sembuf __user *sops, unsigned nsops)",
         "0x41",
         {
            "type": "int semid",
            "def": null
         },
         {
            "type": "struct sembuf __user *sops",
            "def": null
         },
         {
            "type": "unsigned nsops",
            "def": null
         },
         "",
         "",
         "",
         "ipc/sem.c",
         2297
      ],
      [
         66,
         "sys_semctl",
         "(int semid, int semnum, int cmd, unsigned long arg)",
         "0x42",
         {
            "type": "int semid",
            "def": null
         },
         {
            "type": "int semnum",
            "def": null
         },
         {
            "type": "int cmd",
            "def": null
         },
         {
            "type": "unsigned long arg",
            "def": null
         },
         "",
         "",
         "ipc/sem.c",
         1705
      ],
      [
         67,
         "sys_shmdt",
         "(char __user *shmaddr)",
         "0x43",
         {
            "type": "char __user *shmaddr",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "ipc/shm.c",
         1822
      ],
      [
         68,
         "sys_msgget",
         "(key_t key, int msgflg)",
         "0x44",
         {
            "type": "key_t key",
            "def": null
         },
         {
            "type": "int msgflg",
            "def": null
         },
         "",
         "",
         "",
         "",
         "ipc/msg.c",
         314
      ],
      [
         69,
         "sys_msgsnd",
         "(int msqid, struct msgbuf __user *msgp, size_t msgsz, int msgflg)",
         "0x45",
         {
            "type": "int msqid",
            "def": null
         },
         {
            "type": "struct msgbuf __user *msgp",
            "def": null
         },
         {
            "type": "size_t msgsz",
            "def": null
         },
         {
            "type": "int msgflg",
            "def": null
         },
         "",
         "",
         "ipc/msg.c",
         965
      ],
      [
         70,
         "sys_msgrcv",
         "(int msqid, struct msgbuf __user *msgp, size_t msgsz, long msgtyp, int msgflg)",
         "0x46",
         {
            "type": "int msqid",
            "def": null
         },
         {
            "type": "struct msgbuf __user *msgp",
            "def": null
         },
         {
            "type": "size_t msgsz",
            "def": null
         },
         {
            "type": "long msgtyp",
            "def": null
         },
         {
            "type": "int msgflg",
            "def": null
         },
         "",
         "ipc/msg.c",
         1264
      ],
      [
         71,
         "sys_msgctl",
         "(int msqid, int cmd, struct msqid_ds __user *buf)",
         "0x47",
         {
            "type": "int msqid",
            "def": null
         },
         {
            "type": "int cmd",
            "def": null
         },
         {
            "type": "struct msqid_ds __user *buf",
            "def": null
         },
         "",
         "",
         "",
         "ipc/msg.c",
         634
      ],
      [
         72,
         "sys_fcntl",
         "(unsigned int fd, unsigned int cmd, unsigned long arg)",
         "0x48",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "unsigned int cmd",
            "def": null
         },
         {
            "type": "unsigned long arg",
            "def": null
         },
         "",
         "",
         "",
         "fs/fcntl.c",
         438
      ],
      [
         73,
         "sys_flock",
         "(unsigned int fd, unsigned int cmd)",
         "0x49",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "unsigned int cmd",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/locks.c",
         2098
      ],
      [
         74,
         "sys_fsync",
         "(unsigned int fd)",
         "0x4a",
         {
            "type": "unsigned int fd",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "fs/sync.c",
         218
      ],
      [
         75,
         "sys_fdatasync",
         "(unsigned int fd)",
         "0x4b",
         {
            "type": "unsigned int fd",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "fs/sync.c",
         223
      ],
      [
         76,
         "sys_truncate",
         "(const char __user *path, long length)",
         "0x4c",
         {
            "type": "const char __user *path",
            "def": null
         },
         {
            "type": "long length",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/open.c",
         144
      ],
      [
         77,
         "sys_ftruncate",
         "(unsigned int fd, unsigned long length)",
         "0x4d",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "unsigned long length",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/open.c",
         202
      ],
      [
         78,
         "sys_getdents",
         "(unsigned int fd, struct linux_dirent __user *dirent, unsigned int count)",
         "0x4e",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "struct linux_dirent __user *dirent",
            "def": null
         },
         {
            "type": "unsigned int count",
            "def": null
         },
         "",
         "",
         "",
         "fs/readdir.c",
         271
      ],
      [
         79,
         "sys_getcwd",
         "(char __user *buf, unsigned long size)",
         "0x4f",
         {
            "type": "char __user *buf",
            "def": null
         },
         {
            "type": "unsigned long size",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/d_path.c",
         412
      ],
      [
         80,
         "sys_chdir",
         "(const char __user *filename)",
         "0x50",
         {
            "type": "const char __user *filename",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "fs/open.c",
         508
      ],
      [
         81,
         "sys_fchdir",
         "(unsigned int fd)",
         "0x51",
         {
            "type": "unsigned int fd",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "fs/open.c",
         534
      ],
      [
         82,
         "sys_rename",
         "(const char __user *oldname, const char __user *newname)",
         "0x52",
         {
            "type": "const char __user *oldname",
            "def": null
         },
         {
            "type": "const char __user *newname",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/namei.c",
         4914
      ],
      [
         83,
         "sys_mkdir",
         "(const char __user *pathname, umode_t mode)",
         "0x53",
         {
            "type": "const char __user *pathname",
            "def": null
         },
         {
            "type": "umode_t mode",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/namei.c",
         4019
      ],
      [
         84,
         "sys_rmdir",
         "(const char __user *pathname)",
         "0x54",
         {
            "type": "const char __user *pathname",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "fs/namei.c",
         4139
      ],
      [
         85,
         "sys_creat",
         "(const char __user *pathname, umode_t mode)",
         "0x55",
         {
            "type": "const char __user *pathname",
            "def": null
         },
         {
            "type": "umode_t mode",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/open.c",
         1364
      ],
      [
         86,
         "sys_link",
         "(const char __user *oldname, const char __user *newname)",
         "0x56",
         {
            "type": "const char __user *oldname",
            "def": null
         },
         {
            "type": "const char __user *newname",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/namei.c",
         4572
      ],
      [
         87,
         "sys_unlink",
         "(const char __user *pathname)",
         "0x57",
         {
            "type": "const char __user *pathname",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "fs/namei.c",
         4306
      ],
      [
         88,
         "sys_symlink",
         "(const char __user *old, const char __user *new)",
         "0x58",
         {
            "type": "const char __user *old",
            "def": null
         },
         {
            "type": "const char __user *new",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/namei.c",
         4390
      ],
      [
         89,
         "sys_readlink",
         "(const char __user *path, char __user *buf, int bufsiz)",
         "0x59",
         {
            "type": "const char __user *path",
            "def": null
         },
         {
            "type": "char __user *buf",
            "def": null
         },
         {
            "type": "int bufsiz",
            "def": null
         },
         "",
         "",
         "",
         "fs/stat.c",
         486
      ],
      [
         90,
         "sys_chmod",
         "(const char __user *filename, umode_t mode)",
         "0x5a",
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "umode_t mode",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/open.c",
         661
      ],
      [
         91,
         "sys_fchmod",
         "(unsigned int fd, umode_t mode)",
         "0x5b",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "umode_t mode",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/open.c",
         625
      ],
      [
         92,
         "sys_chown",
         "(const char __user *filename, uid_t user, gid_t group)",
         "0x5c",
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "uid_t user",
            "def": null
         },
         {
            "type": "gid_t group",
            "def": null
         },
         "",
         "",
         "",
         "fs/open.c",
         753
      ],
      [
         93,
         "sys_fchown",
         "(unsigned int fd, uid_t user, gid_t group)",
         "0x5d",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "uid_t user",
            "def": null
         },
         {
            "type": "gid_t group",
            "def": null
         },
         "",
         "",
         "",
         "fs/open.c",
         789
      ],
      [
         94,
         "sys_lchown",
         "(const char __user *filename, uid_t user, gid_t group)",
         "0x5e",
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "uid_t user",
            "def": null
         },
         {
            "type": "gid_t group",
            "def": null
         },
         "",
         "",
         "",
         "fs/open.c",
         758
      ],
      [
         95,
         "sys_umask",
         "(int mask)",
         "0x5f",
         {
            "type": "int mask",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         1861
      ],
      [
         96,
         "sys_gettimeofday",
         "(struct __kernel_old_timeval __user *tv, struct timezone __user *tz)",
         "0x60",
         {
            "type": "struct __kernel_old_timeval __user *tv",
            "def": null
         },
         {
            "type": "struct timezone __user *tz",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/time/time.c",
         140
      ],
      [
         97,
         "sys_getrlimit",
         "(unsigned int resource, struct rlimit __user *rlim)",
         "0x61",
         {
            "type": "unsigned int resource",
            "def": null
         },
         {
            "type": "struct rlimit __user *rlim",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         1495
      ],
      [
         98,
         "sys_getrusage",
         "(int who, struct rusage __user *ru)",
         "0x62",
         {
            "type": "int who",
            "def": null
         },
         {
            "type": "struct rusage __user *ru",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         1835
      ],
      [
         99,
         "sys_sysinfo",
         "(struct sysinfo __user *info)",
         "0x63",
         {
            "type": "struct sysinfo __user *info",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         2713
      ],
      [
         100,
         "sys_times",
         "(struct tms __user *tbuf)",
         "0x64",
         {
            "type": "struct tms __user *tbuf",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         1004
      ],
      [
         101,
         "sys_ptrace",
         "(long request, long pid, unsigned long addr, unsigned long data)",
         "0x65",
         {
            "type": "long request",
            "def": null
         },
         {
            "type": "long pid",
            "def": null
         },
         {
            "type": "unsigned long addr",
            "def": null
         },
         {
            "type": "unsigned long data",
            "def": null
         },
         "",
         "",
         "kernel/ptrace.c",
         1269
      ],
      [
         102,
         "sys_getuid",
         "(void)",
         "0x66",
         {
            "type": "void",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         103,
         "sys_syslog",
         "(int type, char __user *buf, int len)",
         "0x67",
         {
            "type": "int type",
            "def": null
         },
         {
            "type": "char __user *buf",
            "def": null
         },
         {
            "type": "int len",
            "def": null
         },
         "",
         "",
         "",
         "kernel/printk/printk.c",
         1772
      ],
      [
         104,
         "sys_getgid",
         "(void)",
         "0x68",
         {
            "type": "void",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         105,
         "sys_setuid",
         "(uid_t uid)",
         "0x69",
         {
            "type": "uid_t uid",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         649
      ],
      [
         106,
         "sys_setgid",
         "(gid_t gid)",
         "0x6a",
         {
            "type": "gid_t gid",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         466
      ],
      [
         107,
         "sys_geteuid",
         "(void)",
         "0x6b",
         {
            "type": "void",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         108,
         "sys_getegid",
         "(void)",
         "0x6c",
         {
            "type": "void",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         109,
         "sys_setpgid",
         "(pid_t pid, pid_t pgid)",
         "0x6d",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "pid_t pgid",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         1054
      ],
      [
         110,
         "sys_getppid",
         "(void)",
         "0x6e",
         {
            "type": "void",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         111,
         "sys_getpgrp",
         "(void)",
         "0x6f",
         {
            "type": "void",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         112,
         "sys_setsid",
         "(void)",
         "0x70",
         {
            "type": "void",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         113,
         "sys_setreuid",
         "(uid_t ruid, uid_t euid)",
         "0x71",
         {
            "type": "uid_t ruid",
            "def": null
         },
         {
            "type": "uid_t euid",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         586
      ],
      [
         114,
         "sys_setregid",
         "(gid_t rgid, gid_t egid)",
         "0x72",
         {
            "type": "gid_t rgid",
            "def": null
         },
         {
            "type": "gid_t egid",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         420
      ],
      [
         115,
         "sys_getgroups",
         "(int gidsetsize, gid_t __user *grouplist)",
         "0x73",
         {
            "type": "int gidsetsize",
            "def": null
         },
         {
            "type": "gid_t __user *grouplist",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/groups.c",
         148
      ],
      [
         116,
         "sys_setgroups",
         "(int gidsetsize, gid_t __user *grouplist)",
         "0x74",
         {
            "type": "int gidsetsize",
            "def": null
         },
         {
            "type": "gid_t __user *grouplist",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/groups.c",
         185
      ],
      [
         117,
         "sys_setresuid",
         "(uid_t ruid, uid_t euid, uid_t suid)",
         "0x75",
         {
            "type": "uid_t ruid",
            "def": null
         },
         {
            "type": "uid_t euid",
            "def": null
         },
         {
            "type": "uid_t suid",
            "def": null
         },
         "",
         "",
         "",
         "kernel/sys.c",
         729
      ],
      [
         118,
         "sys_getresuid",
         "(uid_t __user *ruid, uid_t __user *euid, uid_t __user *suid)",
         "0x76",
         {
            "type": "uid_t __user *ruid",
            "def": null
         },
         {
            "type": "uid_t __user *euid",
            "def": null
         },
         {
            "type": "uid_t __user *suid",
            "def": null
         },
         "",
         "",
         "",
         "kernel/sys.c",
         734
      ],
      [
         119,
         "sys_setresgid",
         "(gid_t rgid, gid_t egid, gid_t sgid)",
         "0x77",
         {
            "type": "gid_t rgid",
            "def": null
         },
         {
            "type": "gid_t egid",
            "def": null
         },
         {
            "type": "gid_t sgid",
            "def": null
         },
         "",
         "",
         "",
         "kernel/sys.c",
         812
      ],
      [
         120,
         "sys_getresgid",
         "(gid_t __user *rgid, gid_t __user *egid, gid_t __user *sgid)",
         "0x78",
         {
            "type": "gid_t __user *rgid",
            "def": null
         },
         {
            "type": "gid_t __user *egid",
            "def": null
         },
         {
            "type": "gid_t __user *sgid",
            "def": null
         },
         "",
         "",
         "",
         "kernel/sys.c",
         817
      ],
      [
         121,
         "sys_getpgid",
         "(pid_t pid)",
         "0x79",
         {
            "type": "pid_t pid",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         1153
      ],
      [
         122,
         "sys_setfsuid",
         "(uid_t uid)",
         "0x7a",
         {
            "type": "uid_t uid",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         880
      ],
      [
         123,
         "sys_setfsgid",
         "(gid_t gid)",
         "0x7b",
         {
            "type": "gid_t gid",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         924
      ],
      [
         124,
         "sys_getsid",
         "(pid_t pid)",
         "0x7c",
         {
            "type": "pid_t pid",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         1167
      ],
      [
         125,
         "sys_capget",
         "(cap_user_header_t header, cap_user_data_t dataptr)",
         "0x7d",
         {
            "type": "cap_user_header_t header",
            "def": null
         },
         {
            "type": "cap_user_data_t dataptr",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/capability.c",
         148
      ],
      [
         126,
         "sys_capset",
         "(cap_user_header_t header, const cap_user_data_t data)",
         "0x7e",
         {
            "type": "cap_user_header_t header",
            "def": null
         },
         {
            "type": "const cap_user_data_t data",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/capability.c",
         222
      ],
      [
         127,
         "sys_rt_sigpending",
         "(sigset_t __user *set, size_t sigsetsize)",
         "0x7f",
         {
            "type": "sigset_t __user *set",
            "def": null
         },
         {
            "type": "size_t sigsetsize",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/signal.c",
         3212
      ],
      [
         128,
         "sys_rt_sigtimedwait",
         "(const sigset_t __user *uthese, siginfo_t __user *uinfo, const struct __kernel_timespec __user *uts, size_t sigsetsize)",
         "0x80",
         {
            "type": "const sigset_t __user *uthese",
            "def": null
         },
         {
            "type": "siginfo_t __user *uinfo",
            "def": null
         },
         {
            "type": "const struct __kernel_timespec __user *uts",
            "def": null
         },
         {
            "type": "size_t sigsetsize",
            "def": null
         },
         "",
         "",
         "kernel/signal.c",
         3626
      ],
      [
         129,
         "sys_rt_sigqueueinfo",
         "(pid_t pid, int sig, siginfo_t __user *uinfo)",
         "0x81",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "int sig",
            "def": null
         },
         {
            "type": "siginfo_t __user *uinfo",
            "def": null
         },
         "",
         "",
         "",
         "kernel/signal.c",
         3995
      ],
      [
         130,
         "sys_rt_sigsuspend",
         "(sigset_t __user *unewset, size_t sigsetsize)",
         "0x82",
         {
            "type": "sigset_t __user *unewset",
            "def": null
         },
         {
            "type": "size_t sigsetsize",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/signal.c",
         4632
      ],
      [
         131,
         "sys_sigaltstack",
         "(const struct sigaltstack __user *uss, struct sigaltstack __user *uoss)",
         "0x83",
         {
            "type": "const struct sigaltstack __user *uss",
            "def": null
         },
         {
            "type": "struct sigaltstack __user *uoss",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/signal.c",
         4226
      ],
      [
         132,
         "sys_utime",
         "(char __user *filename, struct utimbuf __user *times)",
         "0x84",
         {
            "type": "char __user *filename",
            "def": null
         },
         {
            "type": "struct utimbuf __user *times",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/utimes.c",
         214
      ],
      [
         133,
         "sys_mknod",
         "(const char __user *filename, umode_t mode, unsigned dev)",
         "0x85",
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "umode_t mode",
            "def": null
         },
         {
            "type": "unsigned dev",
            "def": null
         },
         "",
         "",
         "",
         "fs/namei.c",
         3935
      ],
      [
         134,
         "not implemented",
         "",
         "0x86",
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         135,
         "sys_personality",
         "(unsigned int personality)",
         "0x87",
         {
            "type": "unsigned int personality",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "kernel/exec_domain.c",
         38
      ],
      [
         136,
         "sys_ustat",
         "(unsigned dev, struct ustat __user *ubuf)",
         "0x88",
         {
            "type": "unsigned dev",
            "def": null
         },
         {
            "type": "struct ustat __user *ubuf",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/statfs.c",
         248
      ],
      [
         137,
         "sys_statfs",
         "(const char __user * path, struct statfs __user *buf)",
         "0x89",
         {
            "type": "const char __user * path",
            "def": null
         },
         {
            "type": "struct statfs __user *buf",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/statfs.c",
         192
      ],
      [
         138,
         "sys_fstatfs",
         "(unsigned int fd, struct statfs __user *buf)",
         "0x8a",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "struct statfs __user *buf",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/statfs.c",
         213
      ],
      [
         139,
         "sys_sysfs",
         "(int option, unsigned long arg1, unsigned long arg2)",
         "0x8b",
         {
            "type": "int option",
            "def": null
         },
         {
            "type": "unsigned long arg1",
            "def": null
         },
         {
            "type": "unsigned long arg2",
            "def": null
         },
         "",
         "",
         "",
         "fs/filesystems.c",
         191
      ],
      [
         140,
         "sys_getpriority",
         "(int which, int who)",
         "0x8c",
         {
            "type": "int which",
            "def": null
         },
         {
            "type": "int who",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         280
      ],
      [
         141,
         "sys_setpriority",
         "(int which, int who, int niceval)",
         "0x8d",
         {
            "type": "int which",
            "def": null
         },
         {
            "type": "int who",
            "def": null
         },
         {
            "type": "int niceval",
            "def": null
         },
         "",
         "",
         "",
         "kernel/sys.c",
         210
      ],
      [
         142,
         "sys_sched_setparam",
         "(pid_t pid, struct sched_param __user *param)",
         "0x8e",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "struct sched_param __user *param",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sched/core.c",
         7776
      ],
      [
         143,
         "sys_sched_getparam",
         "(pid_t pid, struct sched_param __user *param)",
         "0x8f",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "struct sched_param __user *param",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sched/core.c",
         7859
      ],
      [
         144,
         "sys_sched_setscheduler",
         "(pid_t pid, int policy, struct sched_param __user *param)",
         "0x90",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "int policy",
            "def": null
         },
         {
            "type": "struct sched_param __user *param",
            "def": null
         },
         "",
         "",
         "",
         "kernel/sched/core.c",
         7761
      ],
      [
         145,
         "sys_sched_getscheduler",
         "(pid_t pid)",
         "0x91",
         {
            "type": "pid_t pid",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "kernel/sched/core.c",
         7830
      ],
      [
         146,
         "sys_sched_get_priority_max",
         "(int policy)",
         "0x92",
         {
            "type": "int policy",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "kernel/sched/core.c",
         8658
      ],
      [
         147,
         "sys_sched_get_priority_min",
         "(int policy)",
         "0x93",
         {
            "type": "int policy",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "kernel/sched/core.c",
         8685
      ],
      [
         148,
         "sys_sched_rr_get_interval",
         "(pid_t pid, struct __kernel_timespec __user *interval)",
         "0x94",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "struct __kernel_timespec __user *interval",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sched/core.c",
         8750
      ],
      [
         149,
         "sys_mlock",
         "(unsigned long start, size_t len)",
         "0x95",
         {
            "type": "unsigned long start",
            "def": null
         },
         {
            "type": "size_t len",
            "def": null
         },
         "",
         "",
         "",
         "",
         "mm/mlock.c",
         615
      ],
      [
         150,
         "sys_munlock",
         "(unsigned long start, size_t len)",
         "0x96",
         {
            "type": "unsigned long start",
            "def": null
         },
         {
            "type": "size_t len",
            "def": null
         },
         "",
         "",
         "",
         "",
         "mm/mlock.c",
         633
      ],
      [
         151,
         "sys_mlockall",
         "(int flags)",
         "0x97",
         {
            "type": "int flags",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "mm/mlock.c",
         696
      ],
      [
         152,
         "sys_munlockall",
         "(void)",
         "0x98",
         {
            "type": "void",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         153,
         "sys_vhangup",
         "(void)",
         "0x99",
         {
            "type": "void",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         155,
         "sys_pivot_root",
         "(const char __user *new_root, const char __user *put_old)",
         "0x9b",
         {
            "type": "const char __user *new_root",
            "def": null
         },
         {
            "type": "const char __user *put_old",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/namespace.c",
         3868
      ],
      [
         156,
         "sys_ni_syscall",
         "(void)",
         "0x9c",
         {
            "type": "void",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         157,
         "sys_prctl",
         "(int option, unsigned long arg2, unsigned long arg3, unsigned long arg4, unsigned long arg5)",
         "0x9d",
         {
            "type": "int option",
            "def": null
         },
         {
            "type": "unsigned long arg2",
            "def": null
         },
         {
            "type": "unsigned long arg3",
            "def": null
         },
         {
            "type": "unsigned long arg4",
            "def": null
         },
         {
            "type": "unsigned long arg5",
            "def": null
         },
         "",
         "kernel/sys.c",
         2348
      ],
      [
         159,
         "sys_adjtimex",
         "(struct __kernel_timex __user *txc_p)",
         "0x9f",
         {
            "type": "struct __kernel_timex __user *txc_p",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "kernel/time/time.c",
         269
      ],
      [
         160,
         "sys_setrlimit",
         "(unsigned int resource, struct rlimit __user *rlim)",
         "0xa0",
         {
            "type": "unsigned int resource",
            "def": null
         },
         {
            "type": "struct rlimit __user *rlim",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         1708
      ],
      [
         161,
         "sys_chroot",
         "(const char __user *filename)",
         "0xa1",
         {
            "type": "const char __user *filename",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "fs/open.c",
         556
      ],
      [
         162,
         "sys_sync",
         "(void)",
         "0xa2",
         {
            "type": "void",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "fs/sync.c",
         149
      ],
      [
         163,
         "sys_acct",
         "(const char __user *name)",
         "0xa3",
         {
            "type": "const char __user *name",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "kernel/acct.c",
         292
      ],
      [
         164,
         "sys_settimeofday",
         "(struct __kernel_old_timeval __user *tv, struct timezone __user *tz)",
         "0xa4",
         {
            "type": "struct __kernel_old_timeval __user *tv",
            "def": null
         },
         {
            "type": "struct timezone __user *tz",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/time/time.c",
         199
      ],
      [
         165,
         "sys_mount",
         "(char __user *dev_name, char __user *dir_name, char __user *type, unsigned long flags, void __user *data)",
         "0xa5",
         {
            "type": "char __user *dev_name",
            "def": null
         },
         {
            "type": "char __user *dir_name",
            "def": null
         },
         {
            "type": "char __user *type",
            "def": null
         },
         {
            "type": "unsigned long flags",
            "def": null
         },
         {
            "type": "void __user *data",
            "def": null
         },
         "",
         "fs/namespace.c",
         3568
      ],
      [
         166,
         "sys_umount",
         "(char __user *name, int flags)",
         "0xa6",
         {
            "type": "char __user *name",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/namespace.c",
         1828
      ],
      [
         167,
         "sys_swapon",
         "(const char __user *specialfile, int swap_flags)",
         "0xa7",
         {
            "type": "const char __user *specialfile",
            "def": null
         },
         {
            "type": "int swap_flags",
            "def": null
         },
         "",
         "",
         "",
         "",
         "mm/swapfile.c",
         2982
      ],
      [
         168,
         "sys_swapoff",
         "(const char __user *specialfile)",
         "0xa8",
         {
            "type": "const char __user *specialfile",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "mm/swapfile.c",
         2387
      ],
      [
         169,
         "sys_reboot",
         "(int magic1, int magic2, unsigned int cmd, void __user *arg)",
         "0xa9",
         {
            "type": "int magic1",
            "def": null
         },
         {
            "type": "int magic2",
            "def": null
         },
         {
            "type": "unsigned int cmd",
            "def": null
         },
         {
            "type": "void __user *arg",
            "def": null
         },
         "",
         "",
         "kernel/reboot.c",
         683
      ],
      [
         170,
         "sys_sethostname",
         "(char __user *name, int len)",
         "0xaa",
         {
            "type": "char __user *name",
            "def": null
         },
         {
            "type": "int len",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         1355
      ],
      [
         171,
         "sys_setdomainname",
         "(char __user *name, int len)",
         "0xab",
         {
            "type": "char __user *name",
            "def": null
         },
         {
            "type": "int len",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         1408
      ],
      [
         172,
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         173,
         "sys_ioperm",
         "(unsigned long from, unsigned long num, int on)",
         "0xad",
         {
            "type": "unsigned long from",
            "def": null
         },
         {
            "type": "unsigned long num",
            "def": null
         },
         {
            "type": "int on",
            "def": null
         },
         "",
         "",
         "",
         "arch/x86/kernel/ioport.c",
         152
      ],
      [
         174,
         "not implemented",
         "",
         "0xae",
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         175,
         "sys_init_module",
         "(void __user *umod, unsigned long len, const char __user *uargs)",
         "0xaf",
         {
            "type": "void __user *umod",
            "def": null
         },
         {
            "type": "unsigned long len",
            "def": null
         },
         {
            "type": "const char __user *uargs",
            "def": null
         },
         "",
         "",
         "",
         "kernel/module/main.c",
         2877
      ],
      [
         176,
         "sys_delete_module",
         "(const char __user *name_user, unsigned int flags)",
         "0xb0",
         {
            "type": "const char __user *name_user",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/module/main.c",
         692
      ],
      [
         177,
         "not implemented",
         "",
         "0xb1",
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         178,
         "not implemented",
         "",
         "0xb2",
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         179,
         "sys_quotactl",
         "(unsigned int cmd, const char __user *special, qid_t id, void __user *addr)",
         "0xb3",
         {
            "type": "unsigned int cmd",
            "def": null
         },
         {
            "type": "const char __user *special",
            "def": null
         },
         {
            "type": "qid_t id",
            "def": null
         },
         {
            "type": "void __user *addr",
            "def": null
         },
         "",
         "",
         "fs/quota/quota.c",
         916
      ],
      [
         180,
         "not implemented",
         "",
         "0xb4",
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         181,
         "not implemented",
         "",
         "0xb5",
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         182,
         "not implemented",
         "",
         "0xb6",
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         183,
         "not implemented",
         "",
         "0xb7",
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         184,
         "not implemented",
         "",
         "0xb8",
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         185,
         "not implemented",
         "",
         "0xb9",
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         186,
         "sys_gettid",
         "(void)",
         "0xba",
         {
            "type": "void",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         187,
         "sys_readahead",
         "(int fd, loff_t offset, size_t count)",
         "0xbb",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "loff_t offset",
            "def": null
         },
         {
            "type": "size_t count",
            "def": null
         },
         "",
         "",
         "",
         "mm/readahead.c",
         751
      ],
      [
         188,
         "sys_setxattr",
         "(const char __user *path, const char __user *name, const void __user *value, size_t size, int flags)",
         "0xbc",
         {
            "type": "const char __user *path",
            "def": null
         },
         {
            "type": "const char __user *name",
            "def": null
         },
         {
            "type": "const void __user *value",
            "def": null
         },
         {
            "type": "size_t size",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "",
         "fs/xattr.c",
         642
      ],
      [
         189,
         "sys_lsetxattr",
         "(const char __user *path, const char __user *name, const void __user *value, size_t size, int flags)",
         "0xbd",
         {
            "type": "const char __user *path",
            "def": null
         },
         {
            "type": "const char __user *name",
            "def": null
         },
         {
            "type": "const void __user *value",
            "def": null
         },
         {
            "type": "size_t size",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "",
         "fs/xattr.c",
         649
      ],
      [
         190,
         "sys_fsetxattr",
         "(int fd, const char __user *name, const void __user *value, size_t size, int flags)",
         "0xbe",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "const char __user *name",
            "def": null
         },
         {
            "type": "const void __user *value",
            "def": null
         },
         {
            "type": "size_t size",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "",
         "fs/xattr.c",
         656
      ],
      [
         191,
         "sys_getxattr",
         "(const char __user *path, const char __user *name, void __user *value, size_t size)",
         "0xbf",
         {
            "type": "const char __user *path",
            "def": null
         },
         {
            "type": "const char __user *name",
            "def": null
         },
         {
            "type": "void __user *value",
            "def": null
         },
         {
            "type": "size_t size",
            "def": null
         },
         "",
         "",
         "fs/xattr.c",
         756
      ],
      [
         192,
         "sys_lgetxattr",
         "(const char __user *path, const char __user *name, void __user *value, size_t size)",
         "0xc0",
         {
            "type": "const char __user *path",
            "def": null
         },
         {
            "type": "const char __user *name",
            "def": null
         },
         {
            "type": "void __user *value",
            "def": null
         },
         {
            "type": "size_t size",
            "def": null
         },
         "",
         "",
         "fs/xattr.c",
         762
      ],
      [
         193,
         "sys_fgetxattr",
         "(int fd, const char __user *name, void __user *value, size_t size)",
         "0xc1",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "const char __user *name",
            "def": null
         },
         {
            "type": "void __user *value",
            "def": null
         },
         {
            "type": "size_t size",
            "def": null
         },
         "",
         "",
         "fs/xattr.c",
         768
      ],
      [
         194,
         "sys_listxattr",
         "(const char __user *path, char __user *list, size_t size)",
         "0xc2",
         {
            "type": "const char __user *path",
            "def": null
         },
         {
            "type": "char __user *list",
            "def": null
         },
         {
            "type": "size_t size",
            "def": null
         },
         "",
         "",
         "",
         "fs/xattr.c",
         833
      ],
      [
         195,
         "sys_llistxattr",
         "(const char __user *path, char __user *list, size_t size)",
         "0xc3",
         {
            "type": "const char __user *path",
            "def": null
         },
         {
            "type": "char __user *list",
            "def": null
         },
         {
            "type": "size_t size",
            "def": null
         },
         "",
         "",
         "",
         "fs/xattr.c",
         839
      ],
      [
         196,
         "sys_flistxattr",
         "(int fd, char __user *list, size_t size)",
         "0xc4",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "char __user *list",
            "def": null
         },
         {
            "type": "size_t size",
            "def": null
         },
         "",
         "",
         "",
         "fs/xattr.c",
         845
      ],
      [
         197,
         "sys_removexattr",
         "(const char __user *path, const char __user *name)",
         "0xc5",
         {
            "type": "const char __user *path",
            "def": null
         },
         {
            "type": "const char __user *name",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/xattr.c",
         899
      ],
      [
         198,
         "sys_lremovexattr",
         "(const char __user *path, const char __user *name)",
         "0xc6",
         {
            "type": "const char __user *path",
            "def": null
         },
         {
            "type": "const char __user *name",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/xattr.c",
         905
      ],
      [
         199,
         "sys_fremovexattr",
         "(int fd, const char __user *name)",
         "0xc7",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "const char __user *name",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/xattr.c",
         911
      ],
      [
         200,
         "sys_tkill",
         "(pid_t pid, int sig)",
         "0xc8",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "int sig",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/signal.c",
         3967
      ],
      [
         201,
         "sys_time",
         "(__kernel_old_time_t __user *tloc)",
         "0xc9",
         {
            "type": "__kernel_old_time_t __user *tloc",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         1004
      ],
      [
         202,
         "sys_futex",
         "(u32 __user *uaddr, int op, u32 val, const struct __kernel_timespec __user *utime, u32 __user *uaddr2, u32 val3)",
         "0xca",
         {
            "type": "u32 __user *uaddr",
            "def": null
         },
         {
            "type": "int op",
            "def": null
         },
         {
            "type": "u32 val",
            "def": null
         },
         {
            "type": "const struct __kernel_timespec __user *utime",
            "def": null
         },
         {
            "type": "u32 __user *uaddr2",
            "def": null
         },
         {
            "type": "u32 val3",
            "def": null
         },
         "kernel/futex/syscalls.c",
         164
      ],
      [
         203,
         "sys_sched_setaffinity",
         "(pid_t pid, unsigned int len, unsigned long __user *user_mask_ptr)",
         "0xcb",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "unsigned int len",
            "def": null
         },
         {
            "type": "unsigned long __user *user_mask_ptr",
            "def": null
         },
         "",
         "",
         "",
         "kernel/sched/core.c",
         8115
      ],
      [
         204,
         "sys_sched_getaffinity",
         "(pid_t pid, unsigned int len, unsigned long __user *user_mask_ptr)",
         "0xcc",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "unsigned int len",
            "def": null
         },
         {
            "type": "unsigned long __user *user_mask_ptr",
            "def": null
         },
         "",
         "",
         "",
         "kernel/sched/core.c",
         8167
      ],
      [
         205,
         "not implemented",
         "",
         "0xcd",
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         206,
         "sys_io_setup",
         "(unsigned nr_reqs, aio_context_t __user *ctx)",
         "0xce",
         {
            "type": "unsigned nr_reqs",
            "def": null
         },
         {
            "type": "aio_context_t __user *ctx",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/aio.c",
         1338
      ],
      [
         207,
         "sys_io_destroy",
         "(aio_context_t ctx)",
         "0xcf",
         {
            "type": "aio_context_t ctx",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "fs/aio.c",
         1407
      ],
      [
         208,
         "sys_io_getevents",
         "(aio_context_t ctx_id, long min_nr, long nr, struct io_event __user *events, struct __kernel_timespec __user *timeout)",
         "0xd0",
         {
            "type": "aio_context_t ctx_id",
            "def": null
         },
         {
            "type": "long min_nr",
            "def": null
         },
         {
            "type": "long nr",
            "def": null
         },
         {
            "type": "struct io_event __user *events",
            "def": null
         },
         {
            "type": "struct __kernel_timespec __user *timeout",
            "def": null
         },
         "",
         "fs/aio.c",
         2221
      ],
      [
         209,
         "sys_io_submit",
         "(aio_context_t, long, struct iocb __user * __user *)",
         "0xd1",
         {
            "type": "aio_context_t",
            "def": null
         },
         {
            "type": "long",
            "def": null
         },
         {
            "type": "struct iocb __user * __user *",
            "def": null
         },
         "",
         "",
         "",
         "fs/aio.c",
         2051
      ],
      [
         210,
         "sys_io_cancel",
         "(aio_context_t ctx_id, struct iocb __user *iocb, struct io_event __user *result)",
         "0xd2",
         {
            "type": "aio_context_t ctx_id",
            "def": null
         },
         {
            "type": "struct iocb __user *iocb",
            "def": null
         },
         {
            "type": "struct io_event __user *result",
            "def": null
         },
         "",
         "",
         "",
         "fs/aio.c",
         2145
      ],
      [
         211,
         "not implemented",
         "",
         "0xd3",
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         212,
         "sys_lookup_dcookie",
         "(u64 cookie64, char __user *buf, size_t len)",
         "0xd4",
         {
            "type": "u64 cookie64",
            "def": null
         },
         {
            "type": "char __user *buf",
            "def": null
         },
         {
            "type": "size_t len",
            "def": null
         },
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         213,
         "sys_epoll_create",
         "(int size)",
         "0xd5",
         {
            "type": "int size",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "fs/eventpoll.c",
         2013
      ],
      [
         214,
         "not implemented",
         "",
         "0xd6",
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         215,
         "not implemented",
         "",
         "0xd7",
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         216,
         "sys_remap_file_pages",
         "(unsigned long start, unsigned long size, unsigned long prot, unsigned long pgoff, unsigned long flags)",
         "0xd8",
         {
            "type": "unsigned long start",
            "def": null
         },
         {
            "type": "unsigned long size",
            "def": null
         },
         {
            "type": "unsigned long prot",
            "def": null
         },
         {
            "type": "unsigned long pgoff",
            "def": null
         },
         {
            "type": "unsigned long flags",
            "def": null
         },
         "",
         "mm/mmap.c",
         2937
      ],
      [
         217,
         "sys_getdents64",
         "(unsigned int fd, struct linux_dirent64 __user *dirent, unsigned int count)",
         "0xd9",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "struct linux_dirent64 __user *dirent",
            "def": null
         },
         {
            "type": "unsigned int count",
            "def": null
         },
         "",
         "",
         "",
         "fs/readdir.c",
         354
      ],
      [
         218,
         "sys_set_tid_address",
         "(int __user *tidptr)",
         "0xda",
         {
            "type": "int __user *tidptr",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "kernel/fork.c",
         1766
      ],
      [
         219,
         "sys_restart_syscall",
         "(void)",
         "0xdb",
         {
            "type": "void",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         220,
         "sys_semtimedop",
         "(int semid, struct sembuf __user *sops, unsigned nsops, const struct __kernel_timespec __user *timeout)",
         "0xdc",
         {
            "type": "int semid",
            "def": null
         },
         {
            "type": "struct sembuf __user *sops",
            "def": null
         },
         {
            "type": "unsigned nsops",
            "def": null
         },
         {
            "type": "const struct __kernel_timespec __user *timeout",
            "def": null
         },
         "",
         "",
         "ipc/sem.c",
         2269
      ],
      [
         221,
         "sys_fadvise64",
         "(int fd, loff_t offset, size_t len, int advice)",
         "0xdd",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "loff_t offset",
            "def": null
         },
         {
            "type": "size_t len",
            "def": null
         },
         {
            "type": "int advice",
            "def": null
         },
         "",
         "",
         "mm/fadvise.c",
         212
      ],
      [
         222,
         "sys_timer_create",
         "(clockid_t which_clock, struct sigevent __user *timer_event_spec, timer_t __user * created_timer_id)",
         "0xde",
         {
            "type": "clockid_t which_clock",
            "def": null
         },
         {
            "type": "struct sigevent __user *timer_event_spec",
            "def": null
         },
         {
            "type": "timer_t __user * created_timer_id",
            "def": null
         },
         "",
         "",
         "",
         "kernel/time/posix-timers.c",
         577
      ],
      [
         223,
         "sys_timer_settime",
         "(timer_t timer_id, int flags, const struct __kernel_itimerspec __user *new_setting, struct __kernel_itimerspec __user *old_setting)",
         "0xdf",
         {
            "type": "timer_t timer_id",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         {
            "type": "const struct __kernel_itimerspec __user *new_setting",
            "def": null
         },
         {
            "type": "struct __kernel_itimerspec __user *old_setting",
            "def": null
         },
         "",
         "",
         "kernel/time/posix-timers.c",
         938
      ],
      [
         224,
         "sys_timer_gettime",
         "(timer_t timer_id, struct __kernel_itimerspec __user *setting)",
         "0xe0",
         {
            "type": "timer_t timer_id",
            "def": null
         },
         {
            "type": "struct __kernel_itimerspec __user *setting",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/time/posix-timers.c",
         738
      ],
      [
         225,
         "sys_timer_getoverrun",
         "(timer_t timer_id)",
         "0xe1",
         {
            "type": "timer_t timer_id",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "kernel/time/posix-timers.c",
         777
      ],
      [
         226,
         "sys_timer_delete",
         "(timer_t timer_id)",
         "0xe2",
         {
            "type": "timer_t timer_id",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "kernel/time/posix-timers.c",
         1004
      ],
      [
         227,
         "sys_clock_settime",
         "(clockid_t which_clock, const struct __kernel_timespec __user *tp)",
         "0xe3",
         {
            "type": "clockid_t which_clock",
            "def": null
         },
         {
            "type": "const struct __kernel_timespec __user *tp",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/time/posix-stubs.c",
         60
      ],
      [
         228,
         "sys_clock_gettime",
         "(clockid_t which_clock, struct __kernel_timespec __user *tp)",
         "0xe4",
         {
            "type": "clockid_t which_clock",
            "def": null
         },
         {
            "type": "struct __kernel_timespec __user *tp",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/time/posix-stubs.c",
         93
      ],
      [
         229,
         "sys_clock_getres",
         "(clockid_t which_clock, struct __kernel_timespec __user *tp)",
         "0xe5",
         {
            "type": "clockid_t which_clock",
            "def": null
         },
         {
            "type": "struct __kernel_timespec __user *tp",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/time/posix-stubs.c",
         108
      ],
      [
         230,
         "sys_clock_nanosleep",
         "(clockid_t which_clock, int flags, const struct __kernel_timespec __user *rqtp, struct __kernel_timespec __user *rmtp)",
         "0xe6",
         {
            "type": "clockid_t which_clock",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         {
            "type": "const struct __kernel_timespec __user *rqtp",
            "def": null
         },
         {
            "type": "struct __kernel_timespec __user *rmtp",
            "def": null
         },
         "",
         "",
         "kernel/time/posix-stubs.c",
         127
      ],
      [
         231,
         "sys_exit_group",
         "(int error_code)",
         "0xe7",
         {
            "type": "int error_code",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "kernel/exit.c",
         934
      ],
      [
         232,
         "sys_epoll_wait",
         "(int epfd, struct epoll_event __user *events, int maxevents, int timeout)",
         "0xe8",
         {
            "type": "int epfd",
            "def": null
         },
         {
            "type": "struct epoll_event __user *events",
            "def": null
         },
         {
            "type": "int maxevents",
            "def": null
         },
         {
            "type": "int timeout",
            "def": null
         },
         "",
         "",
         "fs/eventpoll.c",
         2241
      ],
      [
         233,
         "sys_epoll_ctl",
         "(int epfd, int op, int fd, struct epoll_event __user *event)",
         "0xe9",
         {
            "type": "int epfd",
            "def": null
         },
         {
            "type": "int op",
            "def": null
         },
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "struct epoll_event __user *event",
            "def": null
         },
         "",
         "",
         "fs/eventpoll.c",
         2183
      ],
      [
         234,
         "sys_tgkill",
         "(pid_t tgid, pid_t pid, int sig)",
         "0xea",
         {
            "type": "pid_t tgid",
            "def": null
         },
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "int sig",
            "def": null
         },
         "",
         "",
         "",
         "kernel/signal.c",
         3951
      ],
      [
         235,
         "sys_utimes",
         "(char __user *filename, struct __kernel_old_timeval __user *utimes)",
         "0xeb",
         {
            "type": "char __user *filename",
            "def": null
         },
         {
            "type": "struct __kernel_old_timeval __user *utimes",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/utimes.c",
         208
      ],
      [
         236,
         "not implemented",
         "",
         "0xec",
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         237,
         "sys_mbind",
         "(unsigned long start, unsigned long len, unsigned long mode, const unsigned long __user *nmask, unsigned long maxnode, unsigned flags)",
         "0xed",
         {
            "type": "unsigned long start",
            "def": null
         },
         {
            "type": "unsigned long len",
            "def": null
         },
         {
            "type": "unsigned long mode",
            "def": null
         },
         {
            "type": "const unsigned long __user *nmask",
            "def": null
         },
         {
            "type": "unsigned long maxnode",
            "def": null
         },
         {
            "type": "unsigned flags",
            "def": null
         },
         "mm/mempolicy.c",
         1544
      ],
      [
         238,
         "sys_set_mempolicy",
         "(int mode, const unsigned long __user *nmask, unsigned long maxnode)",
         "0xee",
         {
            "type": "int mode",
            "def": null
         },
         {
            "type": "const unsigned long __user *nmask",
            "def": null
         },
         {
            "type": "unsigned long maxnode",
            "def": null
         },
         "",
         "",
         "",
         "mm/mempolicy.c",
         1571
      ],
      [
         239,
         "sys_get_mempolicy",
         "(int __user *policy, unsigned long __user *nmask, unsigned long maxnode, unsigned long addr, unsigned long flags)",
         "0xef",
         {
            "type": "int __user *policy",
            "def": null
         },
         {
            "type": "unsigned long __user *nmask",
            "def": null
         },
         {
            "type": "unsigned long maxnode",
            "def": null
         },
         {
            "type": "unsigned long addr",
            "def": null
         },
         {
            "type": "unsigned long flags",
            "def": null
         },
         "",
         "mm/mempolicy.c",
         1703
      ],
      [
         240,
         "sys_mq_open",
         "(const char __user *name, int oflag, umode_t mode, struct mq_attr __user *attr)",
         "0xf0",
         {
            "type": "const char __user *name",
            "def": null
         },
         {
            "type": "int oflag",
            "def": null
         },
         {
            "type": "umode_t mode",
            "def": null
         },
         {
            "type": "struct mq_attr __user *attr",
            "def": null
         },
         "",
         "",
         "ipc/mqueue.c",
         942
      ],
      [
         241,
         "sys_mq_unlink",
         "(const char __user *name)",
         "0xf1",
         {
            "type": "const char __user *name",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "ipc/mqueue.c",
         952
      ],
      [
         242,
         "sys_mq_timedsend",
         "(mqd_t mqdes, const char __user *msg_ptr, size_t msg_len, unsigned int msg_prio, const struct __kernel_timespec __user *abs_timeout)",
         "0xf2",
         {
            "type": "mqd_t mqdes",
            "def": null
         },
         {
            "type": "const char __user *msg_ptr",
            "def": null
         },
         {
            "type": "size_t msg_len",
            "def": null
         },
         {
            "type": "unsigned int msg_prio",
            "def": null
         },
         {
            "type": "const struct __kernel_timespec __user *abs_timeout",
            "def": null
         },
         "",
         "ipc/mqueue.c",
         1285
      ],
      [
         243,
         "sys_mq_timedreceive",
         "(mqd_t mqdes, char __user *msg_ptr, size_t msg_len, unsigned int __user *msg_prio, const struct __kernel_timespec __user *abs_timeout)",
         "0xf3",
         {
            "type": "mqd_t mqdes",
            "def": null
         },
         {
            "type": "char __user *msg_ptr",
            "def": null
         },
         {
            "type": "size_t msg_len",
            "def": null
         },
         {
            "type": "unsigned int __user *msg_prio",
            "def": null
         },
         {
            "type": "const struct __kernel_timespec __user *abs_timeout",
            "def": null
         },
         "",
         "ipc/mqueue.c",
         1299
      ],
      [
         244,
         "sys_mq_notify",
         "(mqd_t mqdes, const struct sigevent __user *notification)",
         "0xf4",
         {
            "type": "mqd_t mqdes",
            "def": null
         },
         {
            "type": "const struct sigevent __user *notification",
            "def": null
         },
         "",
         "",
         "",
         "",
         "ipc/mqueue.c",
         1441
      ],
      [
         245,
         "sys_mq_getsetattr",
         "(mqd_t mqdes, const struct mq_attr __user *mqstat, struct mq_attr __user *omqstat)",
         "0xf5",
         {
            "type": "mqd_t mqdes",
            "def": null
         },
         {
            "type": "const struct mq_attr __user *mqstat",
            "def": null
         },
         {
            "type": "struct mq_attr __user *omqstat",
            "def": null
         },
         "",
         "",
         "",
         "ipc/mqueue.c",
         1497
      ],
      [
         246,
         "sys_kexec_load",
         "(unsigned long entry, unsigned long nr_segments, struct kexec_segment __user *segments, unsigned long flags)",
         "0xf6",
         {
            "type": "unsigned long entry",
            "def": null
         },
         {
            "type": "unsigned long nr_segments",
            "def": null
         },
         {
            "type": "struct kexec_segment __user *segments",
            "def": null
         },
         {
            "type": "unsigned long flags",
            "def": null
         },
         "",
         "",
         "kernel/kexec.c",
         231
      ],
      [
         247,
         "sys_waitid",
         "(int which, pid_t pid, struct siginfo __user *infop, int options, struct rusage __user *ru)",
         "0xf7",
         {
            "type": "int which",
            "def": null
         },
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "struct siginfo __user *infop",
            "def": null
         },
         {
            "type": "int options",
            "def": null
         },
         {
            "type": "struct rusage __user *ru",
            "def": null
         },
         "",
         "kernel/exit.c",
         1613
      ],
      [
         248,
         "sys_add_key",
         "(const char __user *_type, const char __user *_description, const void __user *_payload, size_t plen, key_serial_t destringid)",
         "0xf8",
         {
            "type": "const char __user *_type",
            "def": null
         },
         {
            "type": "const char __user *_description",
            "def": null
         },
         {
            "type": "const void __user *_payload",
            "def": null
         },
         {
            "type": "size_t plen",
            "def": null
         },
         {
            "type": "key_serial_t destringid",
            "def": null
         },
         "",
         "security/keys/keyctl.c",
         74
      ],
      [
         249,
         "sys_request_key",
         "(const char __user *_type, const char __user *_description, const char __user *_callout_info, key_serial_t destringid)",
         "0xf9",
         {
            "type": "const char __user *_type",
            "def": null
         },
         {
            "type": "const char __user *_description",
            "def": null
         },
         {
            "type": "const char __user *_callout_info",
            "def": null
         },
         {
            "type": "key_serial_t destringid",
            "def": null
         },
         "",
         "",
         "security/keys/keyctl.c",
         167
      ],
      [
         250,
         "sys_keyctl",
         "(int cmd, unsigned long arg2, unsigned long arg3, unsigned long arg4, unsigned long arg5)",
         "0xfa",
         {
            "type": "int cmd",
            "def": null
         },
         {
            "type": "unsigned long arg2",
            "def": null
         },
         {
            "type": "unsigned long arg3",
            "def": null
         },
         {
            "type": "unsigned long arg4",
            "def": null
         },
         {
            "type": "unsigned long arg5",
            "def": null
         },
         "",
         "security/keys/keyctl.c",
         1869
      ],
      [
         251,
         "sys_ioprio_set",
         "(int which, int who, int ioprio)",
         "0xfb",
         {
            "type": "int which",
            "def": null
         },
         {
            "type": "int who",
            "def": null
         },
         {
            "type": "int ioprio",
            "def": null
         },
         "",
         "",
         "",
         "block/ioprio.c",
         68
      ],
      [
         252,
         "sys_ioprio_get",
         "(int which, int who)",
         "0xfc",
         {
            "type": "int which",
            "def": null
         },
         {
            "type": "int who",
            "def": null
         },
         "",
         "",
         "",
         "",
         "block/ioprio.c",
         167
      ],
      [
         253,
         "sys_inotify_init",
         "(void)",
         "0xfd",
         {
            "type": "void",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "fs/notify/inotify/inotify_user.c",
         720
      ],
      [
         254,
         "sys_inotify_add_watch",
         "(int fd, const char __user *path, u32 mask)",
         "0xfe",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "const char __user *path",
            "def": null
         },
         {
            "type": "u32 mask",
            "def": null
         },
         "",
         "",
         "",
         "fs/notify/inotify/inotify_user.c",
         730
      ],
      [
         255,
         "sys_inotify_rm_watch",
         "(int fd, __s32 wd)",
         "0xff",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "__s32 wd",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/notify/inotify/inotify_user.c",
         794
      ],
      [
         256,
         "sys_migrate_pages",
         "(pid_t pid, unsigned long maxnode, const unsigned long __user *from, const unsigned long __user *to)",
         "0x100",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "unsigned long maxnode",
            "def": null
         },
         {
            "type": "const unsigned long __user *from",
            "def": null
         },
         {
            "type": "const unsigned long __user *to",
            "def": null
         },
         "",
         "",
         "mm/mempolicy.c",
         1665
      ],
      [
         257,
         "sys_openat",
         "(int dfd, const char __user *filename, int flags, umode_t mode)",
         "0x101",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         {
            "type": "umode_t mode",
            "def": null
         },
         "",
         "",
         "fs/open.c",
         1305
      ],
      [
         258,
         "sys_mkdirat",
         "(int dfd, const char __user * pathname, umode_t mode)",
         "0x102",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user * pathname",
            "def": null
         },
         {
            "type": "umode_t mode",
            "def": null
         },
         "",
         "",
         "",
         "fs/namei.c",
         4014
      ],
      [
         259,
         "sys_mknodat",
         "(int dfd, const char __user * filename, umode_t mode, unsigned dev)",
         "0x103",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user * filename",
            "def": null
         },
         {
            "type": "umode_t mode",
            "def": null
         },
         {
            "type": "unsigned dev",
            "def": null
         },
         "",
         "",
         "fs/namei.c",
         3929
      ],
      [
         260,
         "sys_fchownat",
         "(int dfd, const char __user *filename, uid_t user, gid_t group, int flag)",
         "0x104",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "uid_t user",
            "def": null
         },
         {
            "type": "gid_t group",
            "def": null
         },
         {
            "type": "int flag",
            "def": null
         },
         "",
         "fs/open.c",
         747
      ],
      [
         261,
         "sys_futimesat",
         "(int dfd, const char __user *filename, struct __kernel_old_timeval __user *utimes)",
         "0x105",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "struct __kernel_old_timeval __user *utimes",
            "def": null
         },
         "",
         "",
         "",
         "fs/utimes.c",
         202
      ],
      [
         262,
         "sys_newfstatat",
         "(int dfd, const char __user *filename, struct stat __user *statbuf, int flag)",
         "0x106",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "struct stat __user *statbuf",
            "def": null
         },
         {
            "type": "int flag",
            "def": null
         },
         "",
         "",
         "fs/stat.c",
         419
      ],
      [
         263,
         "sys_unlinkat",
         "(int dfd, const char __user * pathname, int flag)",
         "0x107",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user * pathname",
            "def": null
         },
         {
            "type": "int flag",
            "def": null
         },
         "",
         "",
         "",
         "fs/namei.c",
         4296
      ],
      [
         264,
         "sys_renameat",
         "(int olddfd, const char __user * oldname, int newdfd, const char __user * newname)",
         "0x108",
         {
            "type": "int olddfd",
            "def": null
         },
         {
            "type": "const char __user * oldname",
            "def": null
         },
         {
            "type": "int newdfd",
            "def": null
         },
         {
            "type": "const char __user * newname",
            "def": null
         },
         "",
         "",
         "fs/namei.c",
         4907
      ],
      [
         265,
         "sys_linkat",
         "(int olddfd, const char __user *oldname, int newdfd, const char __user *newname, int flags)",
         "0x109",
         {
            "type": "int olddfd",
            "def": null
         },
         {
            "type": "const char __user *oldname",
            "def": null
         },
         {
            "type": "int newdfd",
            "def": null
         },
         {
            "type": "const char __user *newname",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "",
         "fs/namei.c",
         4565
      ],
      [
         266,
         "sys_symlinkat",
         "(const char __user * oldname, int newdfd, const char __user * newname)",
         "0x10a",
         {
            "type": "const char __user * oldname",
            "def": null
         },
         {
            "type": "int newdfd",
            "def": null
         },
         {
            "type": "const char __user * newname",
            "def": null
         },
         "",
         "",
         "",
         "fs/namei.c",
         4384
      ],
      [
         267,
         "sys_readlinkat",
         "(int dfd, const char __user *path, char __user *buf, int bufsiz)",
         "0x10b",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user *path",
            "def": null
         },
         {
            "type": "char __user *buf",
            "def": null
         },
         {
            "type": "int bufsiz",
            "def": null
         },
         "",
         "",
         "fs/stat.c",
         480
      ],
      [
         268,
         "sys_fchmodat",
         "(int dfd, const char __user * filename, umode_t mode)",
         "0x10c",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user * filename",
            "def": null
         },
         {
            "type": "umode_t mode",
            "def": null
         },
         "",
         "",
         "",
         "fs/open.c",
         655
      ],
      [
         269,
         "sys_faccessat",
         "(int dfd, const char __user *filename, int mode)",
         "0x10d",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "int mode",
            "def": null
         },
         "",
         "",
         "",
         "fs/open.c",
         492
      ],
      [
         270,
         "sys_pselect6",
         "(int, fd_set __user *, fd_set __user *, fd_set __user *, struct __kernel_timespec __user *, void __user *)",
         "0x10e",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "fd_set __user *",
            "def": null
         },
         {
            "type": "fd_set __user *",
            "def": null
         },
         {
            "type": "fd_set __user *",
            "def": null
         },
         {
            "type": "struct __kernel_timespec __user *",
            "def": null
         },
         {
            "type": "void __user *",
            "def": null
         },
         "fs/select.c",
         795
      ],
      [
         271,
         "sys_ppoll",
         "(struct pollfd __user *, unsigned int, struct __kernel_timespec __user *, const sigset_t __user *, size_t)",
         "0x10f",
         {
            "type": "struct pollfd __user *",
            "def": null
         },
         {
            "type": "unsigned int",
            "def": null
         },
         {
            "type": "struct __kernel_timespec __user *",
            "def": null
         },
         {
            "type": "const sigset_t __user *",
            "def": null
         },
         {
            "type": "size_t",
            "def": null
         },
         "",
         "fs/select.c",
         1101
      ],
      [
         272,
         "sys_unshare",
         "(unsigned long unshare_flags)",
         "0x110",
         {
            "type": "unsigned long unshare_flags",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "kernel/fork.c",
         3234
      ],
      [
         273,
         "sys_set_robust_list",
         "(struct robust_list_head __user *head, size_t len)",
         "0x111",
         {
            "type": "struct robust_list_head __user *head",
            "def": null
         },
         {
            "type": "size_t len",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/futex/syscalls.c",
         29
      ],
      [
         274,
         "sys_get_robust_list",
         "(int pid, struct robust_list_head __user * __user *head_ptr, size_t __user *len_ptr)",
         "0x112",
         {
            "type": "int pid",
            "def": null
         },
         {
            "type": "struct robust_list_head __user * __user *head_ptr",
            "def": null
         },
         {
            "type": "size_t __user *len_ptr",
            "def": null
         },
         "",
         "",
         "",
         "kernel/futex/syscalls.c",
         49
      ],
      [
         275,
         "sys_splice",
         "(int fd_in, loff_t __user *off_in, int fd_out, loff_t __user *off_out, size_t len, unsigned int flags)",
         "0x113",
         {
            "type": "int fd_in",
            "def": null
         },
         {
            "type": "loff_t __user *off_in",
            "def": null
         },
         {
            "type": "int fd_out",
            "def": null
         },
         {
            "type": "loff_t __user *off_out",
            "def": null
         },
         {
            "type": "size_t len",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "fs/splice.c",
         1332
      ],
      [
         276,
         "sys_tee",
         "(int fdin, int fdout, size_t len, unsigned int flags)",
         "0x114",
         {
            "type": "int fdin",
            "def": null
         },
         {
            "type": "int fdout",
            "def": null
         },
         {
            "type": "size_t len",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "",
         "",
         "fs/splice.c",
         1698
      ],
      [
         277,
         "sys_sync_file_range",
         "(int fd, loff_t offset, loff_t nbytes, unsigned int flags)",
         "0x115",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "loff_t offset",
            "def": null
         },
         {
            "type": "loff_t nbytes",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "",
         "",
         "fs/sync.c",
         370
      ],
      [
         278,
         "sys_vmsplice",
         "(int fd, const struct iovec __user *iov, unsigned long nr_segs, unsigned int flags)",
         "0x116",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "const struct iovec __user *iov",
            "def": null
         },
         {
            "type": "unsigned long nr_segs",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "",
         "",
         "fs/splice.c",
         1296
      ],
      [
         279,
         "sys_move_pages",
         "(pid_t pid, unsigned long nr_pages, const void __user * __user *pages, const int __user *nodes, int __user *status, int flags)",
         "0x117",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "unsigned long nr_pages",
            "def": null
         },
         {
            "type": "const void __user * __user *pages",
            "def": null
         },
         {
            "type": "const int __user *nodes",
            "def": null
         },
         {
            "type": "int __user *status",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "mm/migrate.c",
         1964
      ],
      [
         280,
         "sys_utimensat",
         "(int dfd, const char __user *filename, struct __kernel_timespec __user *utimes, int flags)",
         "0x118",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "struct __kernel_timespec __user *utimes",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "",
         "",
         "fs/utimes.c",
         147
      ],
      [
         281,
         "sys_epoll_pwait",
         "(int epfd, struct epoll_event __user *events, int maxevents, int timeout, const sigset_t __user *sigmask, size_t sigsetsize)",
         "0x119",
         {
            "type": "int epfd",
            "def": null
         },
         {
            "type": "struct epoll_event __user *events",
            "def": null
         },
         {
            "type": "int maxevents",
            "def": null
         },
         {
            "type": "int timeout",
            "def": null
         },
         {
            "type": "const sigset_t __user *sigmask",
            "def": null
         },
         {
            "type": "size_t sigsetsize",
            "def": null
         },
         "fs/eventpoll.c",
         2275
      ],
      [
         282,
         "sys_signalfd",
         "(int ufd, sigset_t __user *user_mask, size_t sizemask)",
         "0x11a",
         {
            "type": "int ufd",
            "def": null
         },
         {
            "type": "sigset_t __user *user_mask",
            "def": null
         },
         {
            "type": "size_t sizemask",
            "def": null
         },
         "",
         "",
         "",
         "fs/signalfd.c",
         314
      ],
      [
         283,
         "sys_timerfd_create",
         "(int clockid, int flags)",
         "0x11b",
         {
            "type": "int clockid",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/timerfd.c",
         406
      ],
      [
         284,
         "sys_eventfd",
         "(unsigned int count)",
         "0x11c",
         {
            "type": "unsigned int count",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "fs/eventfd.c",
         454
      ],
      [
         285,
         "sys_fallocate",
         "(int fd, int mode, loff_t offset, loff_t len)",
         "0x11d",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "int mode",
            "def": null
         },
         {
            "type": "loff_t offset",
            "def": null
         },
         {
            "type": "loff_t len",
            "def": null
         },
         "",
         "",
         "fs/open.c",
         352
      ],
      [
         286,
         "sys_timerfd_settime",
         "(int ufd, int flags, const struct __kernel_itimerspec __user *utmr, struct __kernel_itimerspec __user *otmr)",
         "0x11e",
         {
            "type": "int ufd",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         {
            "type": "const struct __kernel_itimerspec __user *utmr",
            "def": null
         },
         {
            "type": "struct __kernel_itimerspec __user *otmr",
            "def": null
         },
         "",
         "",
         "fs/timerfd.c",
         558
      ],
      [
         287,
         "sys_timerfd_gettime",
         "(int ufd, struct __kernel_itimerspec __user *otmr)",
         "0x11f",
         {
            "type": "int ufd",
            "def": null
         },
         {
            "type": "struct __kernel_itimerspec __user *otmr",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/timerfd.c",
         576
      ],
      [
         288,
         "sys_accept4",
         "(int, struct sockaddr __user *, int __user *, int)",
         "0x120",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "struct sockaddr __user *",
            "def": null
         },
         {
            "type": "int __user *",
            "def": null
         },
         {
            "type": "int",
            "def": null
         },
         "",
         "",
         "net/socket.c",
         1938
      ],
      [
         289,
         "sys_signalfd4",
         "(int ufd, sigset_t __user *user_mask, size_t sizemask, int flags)",
         "0x121",
         {
            "type": "int ufd",
            "def": null
         },
         {
            "type": "sigset_t __user *user_mask",
            "def": null
         },
         {
            "type": "size_t sizemask",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "",
         "",
         "fs/signalfd.c",
         302
      ],
      [
         290,
         "sys_eventfd2",
         "(unsigned int count, int flags)",
         "0x122",
         {
            "type": "unsigned int count",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/eventfd.c",
         449
      ],
      [
         291,
         "sys_epoll_create1",
         "(int flags)",
         "0x123",
         {
            "type": "int flags",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "fs/eventpoll.c",
         2008
      ],
      [
         292,
         "sys_dup3",
         "(unsigned int oldfd, unsigned int newfd, int flags)",
         "0x124",
         {
            "type": "unsigned int oldfd",
            "def": null
         },
         {
            "type": "unsigned int newfd",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "",
         "",
         "",
         "fs/file.c",
         1239
      ],
      [
         293,
         "sys_pipe2",
         "(int __user *fildes, int flags)",
         "0x125",
         {
            "type": "int __user *fildes",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/pipe.c",
         1026
      ],
      [
         294,
         "sys_inotify_init1",
         "(int flags)",
         "0x126",
         {
            "type": "int flags",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "fs/notify/inotify/inotify_user.c",
         720
      ],
      [
         295,
         "sys_preadv",
         "(unsigned long fd, const struct iovec __user *vec, unsigned long vlen, unsigned long pos_l, unsigned long pos_h)",
         "0x127",
         {
            "type": "unsigned long fd",
            "def": null
         },
         {
            "type": "const struct iovec __user *vec",
            "def": null
         },
         {
            "type": "unsigned long vlen",
            "def": null
         },
         {
            "type": "unsigned long pos_l",
            "def": null
         },
         {
            "type": "unsigned long pos_h",
            "def": null
         },
         "",
         "fs/read_write.c",
         1060
      ],
      [
         296,
         "sys_pwritev",
         "(unsigned long fd, const struct iovec __user *vec, unsigned long vlen, unsigned long pos_l, unsigned long pos_h)",
         "0x128",
         {
            "type": "unsigned long fd",
            "def": null
         },
         {
            "type": "const struct iovec __user *vec",
            "def": null
         },
         {
            "type": "unsigned long vlen",
            "def": null
         },
         {
            "type": "unsigned long pos_l",
            "def": null
         },
         {
            "type": "unsigned long pos_h",
            "def": null
         },
         "",
         "fs/read_write.c",
         1080
      ],
      [
         297,
         "sys_rt_tgsigqueueinfo",
         "(pid_t tgid, pid_t pid, int sig, siginfo_t __user *uinfo)",
         "0x129",
         {
            "type": "pid_t tgid",
            "def": null
         },
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "int sig",
            "def": null
         },
         {
            "type": "siginfo_t __user *uinfo",
            "def": null
         },
         "",
         "",
         "kernel/signal.c",
         4035
      ],
      [
         298,
         "sys_perf_event_open",
         "( struct perf_event_attr __user *attr_uptr, pid_t pid, int cpu, int group_fd, unsigned long flags)",
         "0x12a",
         {
            "type": "struct perf_event_attr __user *attr_uptr",
            "def": null
         },
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "int cpu",
            "def": null
         },
         {
            "type": "int group_fd",
            "def": null
         },
         {
            "type": "unsigned long flags",
            "def": null
         },
         "",
         "kernel/events/core.c",
         12030
      ],
      [
         299,
         "sys_recvmmsg",
         "(int fd, struct mmsghdr __user *msg, unsigned int vlen, unsigned flags, struct __kernel_timespec __user *timeout)",
         "0x12b",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "struct mmsghdr __user *msg",
            "def": null
         },
         {
            "type": "unsigned int vlen",
            "def": null
         },
         {
            "type": "unsigned flags",
            "def": null
         },
         {
            "type": "struct __kernel_timespec __user *timeout",
            "def": null
         },
         "",
         "net/socket.c",
         2938
      ],
      [
         300,
         "sys_fanotify_init",
         "(unsigned int flags, unsigned int event_f_flags)",
         "0x12c",
         {
            "type": "unsigned int flags",
            "def": null
         },
         {
            "type": "unsigned int event_f_flags",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/notify/fanotify/fanotify_user.c",
         1305
      ],
      [
         301,
         "sys_fanotify_mark",
         "(int fanotify_fd, unsigned int flags, u64 mask, int fd, const char __user *pathname)",
         "0x12d",
         {
            "type": "int fanotify_fd",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         {
            "type": "u64 mask",
            "def": null
         },
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "const char __user *pathname",
            "def": null
         },
         "",
         "fs/notify/fanotify/fanotify_user.c",
         1764
      ],
      [
         302,
         "sys_prlimit64",
         "(pid_t pid, unsigned int resource, const struct rlimit64 __user *new_rlim, struct rlimit64 __user *old_rlim)",
         "0x12e",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "unsigned int resource",
            "def": null
         },
         {
            "type": "const struct rlimit64 __user *new_rlim",
            "def": null
         },
         {
            "type": "struct rlimit64 __user *old_rlim",
            "def": null
         },
         "",
         "",
         "kernel/sys.c",
         1661
      ],
      [
         303,
         "sys_name_to_handle_at",
         "(int dfd, const char __user *name, struct file_handle __user *handle, int __user *mnt_id, int flag)",
         "0x12f",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user *name",
            "def": null
         },
         {
            "type": "struct file_handle __user *handle",
            "def": null
         },
         {
            "type": "int __user *mnt_id",
            "def": null
         },
         {
            "type": "int flag",
            "def": null
         },
         "",
         "fs/fhandle.c",
         93
      ],
      [
         304,
         "sys_open_by_handle_at",
         "(int mountdirfd, struct file_handle __user *handle, int flags)",
         "0x130",
         {
            "type": "int mountdirfd",
            "def": null
         },
         {
            "type": "struct file_handle __user *handle",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "",
         "",
         "",
         "fs/fhandle.c",
         256
      ],
      [
         305,
         "sys_clock_adjtime",
         "(clockid_t which_clock, struct __kernel_timex __user *tx)",
         "0x131",
         {
            "type": "clockid_t which_clock",
            "def": null
         },
         {
            "type": "struct __kernel_timex __user *tx",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/time/posix-timers.c",
         1121
      ],
      [
         306,
         "sys_syncfs",
         "(int fd)",
         "0x132",
         {
            "type": "int fd",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "fs/sync.c",
         149
      ],
      [
         307,
         "sys_sendmmsg",
         "(int fd, struct mmsghdr __user *msg, unsigned int vlen, unsigned flags)",
         "0x133",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "struct mmsghdr __user *msg",
            "def": null
         },
         {
            "type": "unsigned int vlen",
            "def": null
         },
         {
            "type": "unsigned flags",
            "def": null
         },
         "",
         "",
         "net/socket.c",
         2654
      ],
      [
         308,
         "sys_setns",
         "(int fd, int nstype)",
         "0x134",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "int nstype",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/nsproxy.c",
         527
      ],
      [
         309,
         "sys_getcpu",
         "(unsigned __user *cpu, unsigned __user *node, struct getcpu_cache __user *cache)",
         "0x135",
         {
            "type": "unsigned __user *cpu",
            "def": null
         },
         {
            "type": "unsigned __user *node",
            "def": null
         },
         {
            "type": "struct getcpu_cache __user *cache",
            "def": null
         },
         "",
         "",
         "",
         "kernel/sys.c",
         2633
      ],
      [
         310,
         "sys_process_vm_readv",
         "(pid_t pid, const struct iovec __user *lvec, unsigned long liovcnt, const struct iovec __user *rvec, unsigned long riovcnt, unsigned long flags)",
         "0x136",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "const struct iovec __user *lvec",
            "def": null
         },
         {
            "type": "unsigned long liovcnt",
            "def": null
         },
         {
            "type": "const struct iovec __user *rvec",
            "def": null
         },
         {
            "type": "unsigned long riovcnt",
            "def": null
         },
         {
            "type": "unsigned long flags",
            "def": null
         },
         "mm/process_vm_access.c",
         291
      ],
      [
         311,
         "sys_process_vm_writev",
         "(pid_t pid, const struct iovec __user *lvec, unsigned long liovcnt, const struct iovec __user *rvec, unsigned long riovcnt, unsigned long flags)",
         "0x137",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "const struct iovec __user *lvec",
            "def": null
         },
         {
            "type": "unsigned long liovcnt",
            "def": null
         },
         {
            "type": "const struct iovec __user *rvec",
            "def": null
         },
         {
            "type": "unsigned long riovcnt",
            "def": null
         },
         {
            "type": "unsigned long flags",
            "def": null
         },
         "mm/process_vm_access.c",
         298
      ],
      [
         312,
         "sys_kcmp",
         "(pid_t pid1, pid_t pid2, int type, unsigned long idx1, unsigned long idx2)",
         "0x138",
         {
            "type": "pid_t pid1",
            "def": null
         },
         {
            "type": "pid_t pid2",
            "def": null
         },
         {
            "type": "int type",
            "def": null
         },
         {
            "type": "unsigned long idx1",
            "def": null
         },
         {
            "type": "unsigned long idx2",
            "def": null
         },
         "",
         "kernel/kcmp.c",
         135
      ],
      [
         313,
         "sys_finit_module",
         "(int fd, const char __user *uargs, int flags)",
         "0x139",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "const char __user *uargs",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "",
         "",
         "",
         "kernel/module/main.c",
         2897
      ],
      [
         314,
         "sys_sched_setattr",
         "(pid_t pid, struct sched_attr __user *attr, unsigned int flags)",
         "0x13a",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "struct sched_attr __user *attr",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "",
         "",
         "",
         "kernel/sched/core.c",
         7787
      ],
      [
         315,
         "sys_sched_getattr",
         "(pid_t pid, struct sched_attr __user *attr, unsigned int size, unsigned int flags)",
         "0x13b",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "struct sched_attr __user *attr",
            "def": null
         },
         {
            "type": "unsigned int size",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "",
         "",
         "kernel/sched/core.c",
         7940
      ],
      [
         316,
         "sys_renameat2",
         "(int olddfd, const char __user *oldname, int newdfd, const char __user *newname, unsigned int flags)",
         "0x13c",
         {
            "type": "int olddfd",
            "def": null
         },
         {
            "type": "const char __user *oldname",
            "def": null
         },
         {
            "type": "int newdfd",
            "def": null
         },
         {
            "type": "const char __user *newname",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "",
         "fs/namei.c",
         4900
      ],
      [
         317,
         "sys_seccomp",
         "(unsigned int op, unsigned int flags, void __user *uargs)",
         "0x13d",
         {
            "type": "unsigned int op",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         {
            "type": "void __user *uargs",
            "def": null
         },
         "",
         "",
         "",
         "kernel/seccomp.c",
         2007
      ],
      [
         318,
         "sys_getrandom",
         "(char __user *buf, size_t count, unsigned int flags)",
         "0x13e",
         {
            "type": "char __user *buf",
            "def": null
         },
         {
            "type": "size_t count",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "",
         "",
         "",
         "drivers/char/random.c",
         1236
      ],
      [
         319,
         "sys_memfd_create",
         "(const char __user *uname_ptr, unsigned int flags)",
         "0x13f",
         {
            "type": "const char __user *uname_ptr",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "",
         "",
         "",
         "",
         "mm/memfd.c",
         266
      ],
      [
         320,
         "sys_kexec_file_load",
         "(int kernel_fd, int initrd_fd, unsigned long cmdline_len, const char __user *cmdline_ptr, unsigned long flags)",
         "0x140",
         {
            "type": "int kernel_fd",
            "def": null
         },
         {
            "type": "int initrd_fd",
            "def": null
         },
         {
            "type": "unsigned long cmdline_len",
            "def": null
         },
         {
            "type": "const char __user *cmdline_ptr",
            "def": null
         },
         {
            "type": "unsigned long flags",
            "def": null
         },
         "",
         "kernel/kexec_file.c",
         329
      ],
      [
         321,
         "sys_bpf",
         "(int cmd, union bpf_attr *attr, unsigned int size)",
         "0x141",
         {
            "type": "int cmd",
            "def": null
         },
         {
            "type": "union bpf_attr *attr",
            "def": null
         },
         {
            "type": "unsigned int size",
            "def": null
         },
         "",
         "",
         "",
         "kernel/bpf/syscall.c",
         5019
      ],
      [
         322,
         "sys_execveat",
         "(int dfd, const char __user *filename, const char __user *const __user *argv, const char __user *const __user *envp, int flags)",
         "0x142",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "const char __user *const __user *argv",
            "def": null
         },
         {
            "type": "const char __user *const __user *envp",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "",
         "fs/exec.c",
         2096
      ],
      [
         323,
         "sys_userfaultfd",
         "(int flags)",
         "0x143",
         {
            "type": "int flags",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "fs/userfaultfd.c",
         2057
      ],
      [
         324,
         "sys_membarrier",
         "(int cmd, unsigned int flags, int cpu_id)",
         "0x144",
         {
            "type": "int cmd",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         {
            "type": "int cpu_id",
            "def": null
         },
         "",
         "",
         "",
         "kernel/sched/membarrier.c",
         579
      ],
      [
         325,
         "sys_mlock2",
         "(unsigned long start, size_t len, int flags)",
         "0x145",
         {
            "type": "unsigned long start",
            "def": null
         },
         {
            "type": "size_t len",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "",
         "",
         "",
         "mm/mlock.c",
         620
      ],
      [
         326,
         "sys_copy_file_range",
         "(int fd_in, loff_t __user *off_in, int fd_out, loff_t __user *off_out, size_t len, unsigned int flags)",
         "0x146",
         {
            "type": "int fd_in",
            "def": null
         },
         {
            "type": "loff_t __user *off_in",
            "def": null
         },
         {
            "type": "int fd_out",
            "def": null
         },
         {
            "type": "loff_t __user *off_out",
            "def": null
         },
         {
            "type": "size_t len",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "fs/read_write.c",
         1559
      ],
      [
         327,
         "sys_preadv2",
         "(unsigned long fd, const struct iovec __user *vec, unsigned long vlen, unsigned long pos_l, unsigned long pos_h, rwf_t flags)",
         "0x147",
         {
            "type": "unsigned long fd",
            "def": null
         },
         {
            "type": "const struct iovec __user *vec",
            "def": null
         },
         {
            "type": "unsigned long vlen",
            "def": null
         },
         {
            "type": "unsigned long pos_l",
            "def": null
         },
         {
            "type": "unsigned long pos_h",
            "def": null
         },
         {
            "type": "rwf_t flags",
            "def": null
         },
         "fs/read_write.c",
         1068
      ],
      [
         328,
         "sys_pwritev2",
         "(unsigned long fd, const struct iovec __user *vec, unsigned long vlen, unsigned long pos_l, unsigned long pos_h, rwf_t flags)",
         "0x148",
         {
            "type": "unsigned long fd",
            "def": null
         },
         {
            "type": "const struct iovec __user *vec",
            "def": null
         },
         {
            "type": "unsigned long vlen",
            "def": null
         },
         {
            "type": "unsigned long pos_l",
            "def": null
         },
         {
            "type": "unsigned long pos_h",
            "def": null
         },
         {
            "type": "rwf_t flags",
            "def": null
         },
         "fs/read_write.c",
         1088
      ],
      [
         329,
         "sys_pkey_mprotect",
         "(unsigned long start, size_t len, unsigned long prot, int pkey)",
         "0x149",
         {
            "type": "unsigned long start",
            "def": null
         },
         {
            "type": "size_t len",
            "def": null
         },
         {
            "type": "unsigned long prot",
            "def": null
         },
         {
            "type": "int pkey",
            "def": null
         },
         "",
         "",
         "mm/mprotect.c",
         765
      ],
      [
         330,
         "sys_pkey_alloc",
         "(unsigned long flags, unsigned long init_val)",
         "0x14a",
         {
            "type": "unsigned long flags",
            "def": null
         },
         {
            "type": "unsigned long init_val",
            "def": null
         },
         "",
         "",
         "",
         "",
         "mm/mprotect.c",
         771
      ],
      [
         331,
         "sys_pkey_free",
         "(int pkey)",
         "0x14b",
         {
            "type": "int pkey",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "mm/mprotect.c",
         801
      ],
      [
         332,
         "sys_statx",
         "(int dfd, const char __user *path, unsigned flags, unsigned mask, struct statx __user *buffer)",
         "0x14c",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user *path",
            "def": null
         },
         {
            "type": "unsigned flags",
            "def": null
         },
         {
            "type": "unsigned mask",
            "def": null
         },
         {
            "type": "struct statx __user *buffer",
            "def": null
         },
         "",
         "fs/stat.c",
         647
      ],
      [
         333,
         "sys_io_pgetevents",
         "(aio_context_t ctx_id, long min_nr, long nr, struct io_event __user *events, struct __kernel_timespec __user *timeout, const struct __aio_sigset *sig)",
         "0x14d",
         {
            "type": "aio_context_t ctx_id",
            "def": null
         },
         {
            "type": "long min_nr",
            "def": null
         },
         {
            "type": "long nr",
            "def": null
         },
         {
            "type": "struct io_event __user *events",
            "def": null
         },
         {
            "type": "struct __kernel_timespec __user *timeout",
            "def": null
         },
         {
            "type": "const struct __aio_sigset *sig",
            "def": null
         },
         "fs/aio.c",
         2246
      ],
      [
         334,
         "sys_rseq",
         "(struct rseq __user *rseq, uint32_t rseq_len, int flags, uint32_t sig)",
         "0x14e",
         {
            "type": "struct rseq __user *rseq",
            "def": null
         },
         {
            "type": "uint32_t rseq_len",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         {
            "type": "uint32_t sig",
            "def": null
         },
         "",
         "",
         "kernel/rseq.c",
         328
      ],
      [
         335,
         "sys_pidfd_send_signal",
         "(int pidfd, int sig, siginfo_t __user *info, unsigned int flags)",
         "0x14f",
         {
            "type": "int pidfd",
            "def": null
         },
         {
            "type": "int sig",
            "def": null
         },
         {
            "type": "siginfo_t __user *info",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "",
         "",
         "kernel/signal.c",
         3845
      ],
      [
         336,
         "sys_io_uring_setup",
         "(u32 entries, struct io_uring_params __user *p)",
         "0x150",
         {
            "type": "u32 entries",
            "def": null
         },
         {
            "type": "struct io_uring_params __user *p",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/io_uring.c",
         12580
      ],
      [
         337,
         "sys_io_uring_enter",
         "(unsigned int fd, u32 to_submit, u32 min_complete, u32 flags, const void __user *argp, size_t argsz)",
         "0x151",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "u32 to_submit",
            "def": null
         },
         {
            "type": "u32 min_complete",
            "def": null
         },
         {
            "type": "u32 flags",
            "def": null
         },
         {
            "type": "const void __user *argp",
            "def": null
         },
         {
            "type": "size_t argsz",
            "def": null
         },
         "fs/io_uring.c",
         11977
      ],
      [
         338,
         "sys_io_uring_register",
         "(unsigned int fd, unsigned int op, void __user *arg, unsigned int nr_args)",
         "0x152",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "unsigned int op",
            "def": null
         },
         {
            "type": "void __user *arg",
            "def": null
         },
         {
            "type": "unsigned int nr_args",
            "def": null
         },
         "",
         "",
         "fs/io_uring.c",
         13175
      ],
      [
         339,
         "sys_open_tree",
         "(int dfd, const char __user *path, unsigned flags)",
         "0x153",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user *path",
            "def": null
         },
         {
            "type": "unsigned flags",
            "def": null
         },
         "",
         "",
         "",
         "fs/namespace.c",
         2504
      ],
      [
         340,
         "sys_move_mount",
         "(int from_dfd, const char __user *from_path, int to_dfd, const char __user *to_path, unsigned int ms_flags)",
         "0x154",
         {
            "type": "int from_dfd",
            "def": null
         },
         {
            "type": "const char __user *from_path",
            "def": null
         },
         {
            "type": "int to_dfd",
            "def": null
         },
         {
            "type": "const char __user *to_path",
            "def": null
         },
         {
            "type": "unsigned int ms_flags",
            "def": null
         },
         "",
         "fs/namespace.c",
         3765
      ],
      [
         341,
         "sys_fsopen",
         "(const char __user *fs_name, unsigned int flags)",
         "0x155",
         {
            "type": "const char __user *fs_name",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "",
         "",
         "",
         "",
         "fs/fsopen.c",
         115
      ],
      [
         342,
         "sys_fsconfig",
         "(int fs_fd, unsigned int cmd, const char __user *key, const void __user *value, int aux)",
         "0x156",
         {
            "type": "int fs_fd",
            "def": null
         },
         {
            "type": "unsigned int cmd",
            "def": null
         },
         {
            "type": "const char __user *key",
            "def": null
         },
         {
            "type": "const void __user *value",
            "def": null
         },
         {
            "type": "int aux",
            "def": null
         },
         "",
         "fs/fsopen.c",
         314
      ],
      [
         343,
         "sys_fsmount",
         "(int fs_fd, unsigned int flags, unsigned int ms_flags)",
         "0x157",
         {
            "type": "int fs_fd",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         {
            "type": "unsigned int ms_flags",
            "def": null
         },
         "",
         "",
         "",
         "fs/namespace.c",
         3636
      ],
      [
         344,
         "sys_fspick",
         "(int dfd, const char __user *path, unsigned int flags)",
         "0x158",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user *path",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "",
         "",
         "",
         "fs/fsopen.c",
         158
      ],
      [
         345,
         "sys_pidfd_open",
         "(pid_t pid, unsigned int flags)",
         "0x159",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/pid.c",
         628
      ],
      [
         346,
         "sys_clone3",
         "(struct clone_args __user *uargs, size_t size)",
         "0x15a",
         {
            "type": "struct clone_args __user *uargs",
            "def": null
         },
         {
            "type": "size_t size",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/fork.c",
         2931
      ],
      [
         347,
         "sys_close_range",
         "(unsigned int fd, unsigned int max_fd, unsigned int flags)",
         "0x15b",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "unsigned int max_fd",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "",
         "",
         "",
         "fs/open.c",
         1430
      ],
      [
         348,
         "sys_openat2",
         "(int dfd, const char __user *filename, struct open_how *how, size_t size)",
         "0x15c",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "struct open_how *how",
            "def": null
         },
         {
            "type": "size_t size",
            "def": null
         },
         "",
         "",
         "fs/open.c",
         1313
      ],
      [
         349,
         "sys_pidfd_getfd",
         "(int pidfd, int fd, unsigned int flags)",
         "0x15d",
         {
            "type": "int pidfd",
            "def": null
         },
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "",
         "",
         "",
         "kernel/pid.c",
         723
      ],
      [
         350,
         "sys_faccessat2",
         "(int dfd, const char __user *filename, int mode, int flags)",
         "0x15e",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "int mode",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "",
         "",
         "fs/open.c",
         497
      ],
      [
         351,
         "sys_process_madvise",
         "(int pidfd, const struct iovec __user *vec, size_t vlen, int behavior, unsigned int flags)",
         "0x15f",
         {
            "type": "int pidfd",
            "def": null
         },
         {
            "type": "const struct iovec __user *vec",
            "def": null
         },
         {
            "type": "size_t vlen",
            "def": null
         },
         {
            "type": "int behavior",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "",
         "mm/madvise.c",
         1426
      ],
      [
         352,
         "sys_epoll_pwait2",
         "(int epfd, struct epoll_event __user *events, int maxevents, const struct __kernel_timespec __user *timeout, const sigset_t __user *sigmask, size_t sigsetsize)",
         "0x160",
         {
            "type": "int epfd",
            "def": null
         },
         {
            "type": "struct epoll_event __user *events",
            "def": null
         },
         {
            "type": "int maxevents",
            "def": null
         },
         {
            "type": "const struct __kernel_timespec __user *timeout",
            "def": null
         },
         {
            "type": "const sigset_t __user *sigmask",
            "def": null
         },
         {
            "type": "size_t sigsetsize",
            "def": null
         },
         "fs/eventpoll.c",
         2286
      ],
      [
         353,
         "sys_mount_setattr",
         "(int dfd, const char __user *path, unsigned int flags, struct mount_attr __user *uattr, size_t usize)",
         "0x161",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user *path",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         {
            "type": "struct mount_attr __user *uattr",
            "def": null
         },
         {
            "type": "size_t usize",
            "def": null
         },
         "",
         "fs/namespace.c",
         4321
      ],
      [
         354,
         "sys_quotactl_fd",
         "(unsigned int fd, unsigned int cmd, qid_t id, void __user *addr)",
         "0x162",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "unsigned int cmd",
            "def": null
         },
         {
            "type": "qid_t id",
            "def": null
         },
         {
            "type": "void __user *addr",
            "def": null
         },
         "",
         "",
         "fs/quota/quota.c",
         972
      ],
      [
         355,
         "sys_landlock_create_ruleset",
         "(const struct landlock_ruleset_attr __user *attr, size_t size, __u32 flags)",
         "0x163",
         {
            "type": "const struct landlock_ruleset_attr __user *attr",
            "def": null
         },
         {
            "type": "size_t size",
            "def": null
         },
         {
            "type": "__u32 flags",
            "def": null
         },
         "",
         "",
         "",
         "security/landlock/syscalls.c",
         157
      ],
      [
         356,
         "sys_landlock_add_rule",
         "(int ruleset_fd, enum landlock_rule_type rule_type, const void __user *rule_attr, __u32 flags)",
         "0x164",
         {
            "type": "int ruleset_fd",
            "def": null
         },
         {
            "type": "enum landlock_rule_type rule_type",
            "def": null
         },
         {
            "type": "const void __user *rule_attr",
            "def": null
         },
         {
            "type": "__u32 flags",
            "def": null
         },
         "",
         "",
         "security/landlock/syscalls.c",
         305
      ],
      [
         357,
         "sys_landlock_restrict_self",
         "(int ruleset_fd, __u32 flags)",
         "0x165",
         {
            "type": "int ruleset_fd",
            "def": null
         },
         {
            "type": "__u32 flags",
            "def": null
         },
         "",
         "",
         "",
         "",
         "security/landlock/syscalls.c",
         397
      ],
      [
         358,
         "sys_memfd_secret",
         "(unsigned int flags)",
         "0x166",
         {
            "type": "unsigned int flags",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "mm/secretmem.c",
         229
      ],
      [
         359,
         "sys_process_mrelease",
         "(int pidfd, unsigned int flags)",
         "0x167",
         {
            "type": "int pidfd",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "",
         "",
         "",
         "",
         "mm/oom_kill.c",
         1201
      ],
      [
         360,
         "sys_futex_waitv",
         "(struct futex_waitv *waiters, unsigned int nr_futexes, unsigned int flags, struct __kernel_timespec __user *timeout, clockid_t clockid)",
         "0x168",
         {
            "type": "struct futex_waitv *waiters",
            "def": null
         },
         {
            "type": "unsigned int nr_futexes",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         {
            "type": "struct __kernel_timespec __user *timeout",
            "def": null
         },
         {
            "type": "clockid_t clockid",
            "def": null
         },
         "",
         "kernel/futex/syscalls.c",
         246
      ],
      [
         361,
         "sys_set_mempolicy_home_node",
         "(unsigned long start, unsigned long len, unsigned long home_node, unsigned long flags)",
         "0x169",
         {
            "type": "unsigned long start",
            "def": null
         },
         {
            "type": "unsigned long len",
            "def": null
         },
         {
            "type": "unsigned long home_node",
            "def": null
         },
         {
            "type": "unsigned long flags",
            "def": null
         },
         "",
         "",
         "mm/mempolicy.c",
         1473
      ],
      [
         362,
         "not implemented",
         "",
         "0x16a",
         "",
         "",
         "",
         "",
         "",
         "",
         "",
         ""
      ],
      [
         363,
         "compat_sys_rt_sigaction",
         "(int, const struct compat_sigaction __user *, struct compat_sigaction __user *, compat_size_t)",
         "0x16b",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "const struct compat_sigaction __user *",
            "def": null
         },
         {
            "type": "struct compat_sigaction __user *",
            "def": null
         },
         {
            "type": "compat_size_t",
            "def": null
         },
         "",
         "",
         "not found",
         ""
      ],
      [
         365,
         "compat_sys_ioctl",
         "(unsigned int fd, unsigned int cmd, compat_ulong_t arg)",
         "0x16d",
         {
            "type": "unsigned int fd",
            "def": null
         },
         {
            "type": "unsigned int cmd",
            "def": null
         },
         {
            "type": "compat_ulong_t arg",
            "def": null
         },
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         366,
         "sys_readv",
         "(unsigned long fd, const struct iovec __user *vec, unsigned long vlen)",
         "0x16e",
         {
            "type": "unsigned long fd",
            "def": null
         },
         {
            "type": "const struct iovec __user *vec",
            "def": null
         },
         {
            "type": "unsigned long vlen",
            "def": null
         },
         "",
         "",
         "",
         "fs/read_write.c",
         1048
      ],
      [
         367,
         "sys_writev",
         "(unsigned long fd, const struct iovec __user *vec, unsigned long vlen)",
         "0x16f",
         {
            "type": "unsigned long fd",
            "def": null
         },
         {
            "type": "const struct iovec __user *vec",
            "def": null
         },
         {
            "type": "unsigned long vlen",
            "def": null
         },
         "",
         "",
         "",
         "fs/read_write.c",
         1054
      ],
      [
         368,
         "compat_sys_recvfrom",
         "(int fd, void __user *buf, compat_size_t len, unsigned flags, struct sockaddr __user *addr, int __user *addrlen)",
         "0x170",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "void __user *buf",
            "def": null
         },
         {
            "type": "compat_size_t len",
            "def": null
         },
         {
            "type": "unsigned flags",
            "def": null
         },
         {
            "type": "struct sockaddr __user *addr",
            "def": null
         },
         {
            "type": "int __user *addrlen",
            "def": null
         },
         "not found",
         ""
      ],
      [
         369,
         "compat_sys_sendmsg",
         "(int fd, struct compat_msghdr __user *msg, unsigned flags)",
         "0x171",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "struct compat_msghdr __user *msg",
            "def": null
         },
         {
            "type": "unsigned flags",
            "def": null
         },
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         370,
         "compat_sys_recvmsg",
         "(int fd, struct compat_msghdr __user *msg, unsigned int flags)",
         "0x172",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "struct compat_msghdr __user *msg",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         371,
         "compat_sys_execve",
         "(const char __user *filename, const compat_uptr_t __user *argv, const compat_uptr_t __user *envp)",
         "0x173",
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "const compat_uptr_t __user *argv",
            "def": null
         },
         {
            "type": "const compat_uptr_t __user *envp",
            "def": null
         },
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         372,
         "compat_sys_ptrace",
         "(compat_long_t request, compat_long_t pid, compat_long_t addr, compat_long_t data)",
         "0x174",
         {
            "type": "compat_long_t request",
            "def": null
         },
         {
            "type": "compat_long_t pid",
            "def": null
         },
         {
            "type": "compat_long_t addr",
            "def": null
         },
         {
            "type": "compat_long_t data",
            "def": null
         },
         "",
         "",
         "not found",
         ""
      ],
      [
         373,
         "compat_sys_rt_sigpending",
         "(compat_sigset_t __user *uset, compat_size_t sigsetsize)",
         "0x175",
         {
            "type": "compat_sigset_t __user *uset",
            "def": null
         },
         {
            "type": "compat_size_t sigsetsize",
            "def": null
         },
         "",
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         374,
         "compat_sys_rt_sigtimedwait_time64",
         "(compat_sigset_t __user *uthese, struct compat_siginfo __user *uinfo, struct __kernel_timespec __user *uts, compat_size_t sigsetsize)",
         "0x176",
         {
            "type": "compat_sigset_t __user *uthese",
            "def": null
         },
         {
            "type": "struct compat_siginfo __user *uinfo",
            "def": null
         },
         {
            "type": "struct __kernel_timespec __user *uts",
            "def": null
         },
         {
            "type": "compat_size_t sigsetsize",
            "def": null
         },
         "",
         "",
         "not found",
         ""
      ],
      [
         375,
         "compat_sys_rt_sigqueueinfo",
         "(compat_pid_t pid, int sig, struct compat_siginfo __user *uinfo)",
         "0x177",
         {
            "type": "compat_pid_t pid",
            "def": null
         },
         {
            "type": "int sig",
            "def": null
         },
         {
            "type": "struct compat_siginfo __user *uinfo",
            "def": null
         },
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         376,
         "compat_sys_sigaltstack",
         "(const compat_stack_t __user *uss_ptr, compat_stack_t __user *uoss_ptr)",
         "0x178",
         {
            "type": "const compat_stack_t __user *uss_ptr",
            "def": null
         },
         {
            "type": "compat_stack_t __user *uoss_ptr",
            "def": null
         },
         "",
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         377,
         "compat_sys_timer_create",
         "(clockid_t which_clock, struct compat_sigevent __user *timer_event_spec, timer_t __user *created_timer_id)",
         "0x179",
         {
            "type": "clockid_t which_clock",
            "def": null
         },
         {
            "type": "struct compat_sigevent __user *timer_event_spec",
            "def": null
         },
         {
            "type": "timer_t __user *created_timer_id",
            "def": null
         },
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         378,
         "compat_sys_mq_notify",
         "(mqd_t mqdes, const struct compat_sigevent __user *u_notification)",
         "0x17a",
         {
            "type": "mqd_t mqdes",
            "def": null
         },
         {
            "type": "const struct compat_sigevent __user *u_notification",
            "def": null
         },
         "",
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         379,
         "compat_sys_kexec_load",
         "(compat_ulong_t entry, compat_ulong_t nr_segments, struct compat_kexec_segment __user *, compat_ulong_t flags)",
         "0x17b",
         {
            "type": "compat_ulong_t entry",
            "def": null
         },
         {
            "type": "compat_ulong_t nr_segments",
            "def": null
         },
         {
            "type": "struct compat_kexec_segment __user *",
            "def": null
         },
         {
            "type": "compat_ulong_t flags",
            "def": null
         },
         "",
         "",
         "not found",
         ""
      ],
      [
         380,
         "compat_sys_waitid",
         "(int, compat_pid_t, struct compat_siginfo __user *, int, struct compat_rusage __user *)",
         "0x17c",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "compat_pid_t",
            "def": null
         },
         {
            "type": "struct compat_siginfo __user *",
            "def": null
         },
         {
            "type": "int",
            "def": null
         },
         {
            "type": "struct compat_rusage __user *",
            "def": null
         },
         "",
         "not found",
         ""
      ],
      [
         381,
         "compat_sys_set_robust_list",
         "(struct compat_robust_list_head __user *head, compat_size_t len)",
         "0x17d",
         {
            "type": "struct compat_robust_list_head __user *head",
            "def": null
         },
         {
            "type": "compat_size_t len",
            "def": null
         },
         "",
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         382,
         "compat_sys_get_robust_list",
         "(int pid, compat_uptr_t __user *head_ptr, compat_size_t __user *len_ptr)",
         "0x17e",
         {
            "type": "int pid",
            "def": null
         },
         {
            "type": "compat_uptr_t __user *head_ptr",
            "def": null
         },
         {
            "type": "compat_size_t __user *len_ptr",
            "def": null
         },
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         383,
         "sys_vmsplice",
         "(int fd, const struct iovec __user *iov, unsigned long nr_segs, unsigned int flags)",
         "0x17f",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "const struct iovec __user *iov",
            "def": null
         },
         {
            "type": "unsigned long nr_segs",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "",
         "",
         "fs/splice.c",
         1296
      ],
      [
         384,
         "sys_move_pages",
         "(pid_t pid, unsigned long nr_pages, const void __user * __user *pages, const int __user *nodes, int __user *status, int flags)",
         "0x180",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "unsigned long nr_pages",
            "def": null
         },
         {
            "type": "const void __user * __user *pages",
            "def": null
         },
         {
            "type": "const int __user *nodes",
            "def": null
         },
         {
            "type": "int __user *status",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "mm/migrate.c",
         1964
      ],
      [
         385,
         "compat_sys_preadv64",
         "(unsigned long fd, const struct iovec __user *vec, unsigned long vlen, loff_t pos)",
         "0x181",
         {
            "type": "unsigned long fd",
            "def": null
         },
         {
            "type": "const struct iovec __user *vec",
            "def": null
         },
         {
            "type": "unsigned long vlen",
            "def": null
         },
         {
            "type": "loff_t pos",
            "def": null
         },
         "",
         "",
         "not found",
         ""
      ],
      [
         386,
         "compat_sys_pwritev64",
         "(unsigned long fd, const struct iovec __user *vec, unsigned long vlen, loff_t pos)",
         "0x182",
         {
            "type": "unsigned long fd",
            "def": null
         },
         {
            "type": "const struct iovec __user *vec",
            "def": null
         },
         {
            "type": "unsigned long vlen",
            "def": null
         },
         {
            "type": "loff_t pos",
            "def": null
         },
         "",
         "",
         "not found",
         ""
      ],
      [
         387,
         "compat_sys_rt_tgsigqueueinfo",
         "(compat_pid_t tgid, compat_pid_t pid, int sig, struct compat_siginfo __user *uinfo)",
         "0x183",
         {
            "type": "compat_pid_t tgid",
            "def": null
         },
         {
            "type": "compat_pid_t pid",
            "def": null
         },
         {
            "type": "int sig",
            "def": null
         },
         {
            "type": "struct compat_siginfo __user *uinfo",
            "def": null
         },
         "",
         "",
         "not found",
         ""
      ],
      [
         388,
         "compat_sys_recvmmsg_time64",
         "(int fd, struct compat_mmsghdr __user *mmsg, unsigned vlen, unsigned int flags, struct __kernel_timespec __user *timeout)",
         "0x184",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "struct compat_mmsghdr __user *mmsg",
            "def": null
         },
         {
            "type": "unsigned vlen",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         {
            "type": "struct __kernel_timespec __user *timeout",
            "def": null
         },
         "",
         "not found",
         ""
      ],
      [
         389,
         "compat_sys_sendmmsg",
         "(int fd, struct compat_mmsghdr __user *mmsg, unsigned vlen, unsigned int flags)",
         "0x185",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "struct compat_mmsghdr __user *mmsg",
            "def": null
         },
         {
            "type": "unsigned vlen",
            "def": null
         },
         {
            "type": "unsigned int flags",
            "def": null
         },
         "",
         "",
         "not found",
         ""
      ],
      [
         390,
         "sys_process_vm_readv",
         "(pid_t pid, const struct iovec __user *lvec, unsigned long liovcnt, const struct iovec __user *rvec, unsigned long riovcnt, unsigned long flags)",
         "0x186",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "const struct iovec __user *lvec",
            "def": null
         },
         {
            "type": "unsigned long liovcnt",
            "def": null
         },
         {
            "type": "const struct iovec __user *rvec",
            "def": null
         },
         {
            "type": "unsigned long riovcnt",
            "def": null
         },
         {
            "type": "unsigned long flags",
            "def": null
         },
         "mm/process_vm_access.c",
         291
      ],
      [
         391,
         "sys_process_vm_writev",
         "(pid_t pid, const struct iovec __user *lvec, unsigned long liovcnt, const struct iovec __user *rvec, unsigned long riovcnt, unsigned long flags)",
         "0x187",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "const struct iovec __user *lvec",
            "def": null
         },
         {
            "type": "unsigned long liovcnt",
            "def": null
         },
         {
            "type": "const struct iovec __user *rvec",
            "def": null
         },
         {
            "type": "unsigned long riovcnt",
            "def": null
         },
         {
            "type": "unsigned long flags",
            "def": null
         },
         "mm/process_vm_access.c",
         298
      ],
      [
         392,
         "sys_setsockopt",
         "(int fd, int level, int optname, char __user *optval, int optlen)",
         "0x188",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "int level",
            "def": null
         },
         {
            "type": "int optname",
            "def": null
         },
         {
            "type": "char __user *optval",
            "def": null
         },
         {
            "type": "int optlen",
            "def": null
         },
         "",
         "net/socket.c",
         2262
      ],
      [
         393,
         "sys_getsockopt",
         "(int fd, int level, int optname, char __user *optval, int __user *optlen)",
         "0x189",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "int level",
            "def": null
         },
         {
            "type": "int optname",
            "def": null
         },
         {
            "type": "char __user *optval",
            "def": null
         },
         {
            "type": "int __user *optlen",
            "def": null
         },
         "",
         "net/socket.c",
         2310
      ],
      [
         394,
         "compat_sys_io_setup",
         "(unsigned nr_reqs, u32 __user *ctx32p)",
         "0x18a",
         {
            "type": "unsigned nr_reqs",
            "def": null
         },
         {
            "type": "u32 __user *ctx32p",
            "def": null
         },
         "",
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         395,
         "compat_sys_io_submit",
         "(compat_aio_context_t ctx_id, int nr, u32 __user *iocb)",
         "0x18b",
         {
            "type": "compat_aio_context_t ctx_id",
            "def": null
         },
         {
            "type": "int nr",
            "def": null
         },
         {
            "type": "u32 __user *iocb",
            "def": null
         },
         "",
         "",
         "",
         "not found",
         ""
      ],
      [
         396,
         "compat_sys_execveat",
         "(int dfd, const char __user *filename, const compat_uptr_t __user *argv, const compat_uptr_t __user *envp, int flags)",
         "0x18c",
         {
            "type": "int dfd",
            "def": null
         },
         {
            "type": "const char __user *filename",
            "def": null
         },
         {
            "type": "const compat_uptr_t __user *argv",
            "def": null
         },
         {
            "type": "const compat_uptr_t __user *envp",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "",
         "not found",
         ""
      ],
      [
         397,
         "compat_sys_preadv64v2",
         "(unsigned long fd, const struct iovec __user *vec, unsigned long vlen, loff_t pos, rwf_t flags)",
         "0x18d",
         {
            "type": "unsigned long fd",
            "def": null
         },
         {
            "type": "const struct iovec __user *vec",
            "def": null
         },
         {
            "type": "unsigned long vlen",
            "def": null
         },
         {
            "type": "loff_t pos",
            "def": null
         },
         {
            "type": "rwf_t flags",
            "def": null
         },
         "",
         "not found",
         ""
      ],
      [
         398,
         "compat_sys_pwritev64v2",
         "(unsigned long fd, const struct iovec __user *vec, unsigned long vlen, loff_t pos, rwf_t flags)",
         "0x18e",
         {
            "type": "unsigned long fd",
            "def": null
         },
         {
            "type": "const struct iovec __user *vec",
            "def": null
         },
         {
            "type": "unsigned long vlen",
            "def": null
         },
         {
            "type": "loff_t pos",
            "def": null
         },
         {
            "type": "rwf_t flags",
            "def": null
         },
         "",
         "not found",
         ""
      ]
   ]
}
