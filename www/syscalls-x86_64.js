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
         586
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
         607
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
         1195
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
            "def": {
               "line": 5,
               "file": "arch/alpha/include/uapi/asm/stat.h"
            }
         },
         "",
         "",
         "",
         "",
         "fs/stat.c",
         333
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
            "def": {
               "line": 5,
               "file": "arch/alpha/include/uapi/asm/stat.h"
            }
         },
         "",
         "",
         "",
         "",
         "fs/stat.c",
         371
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
            "def": {
               "line": 5,
               "file": "arch/alpha/include/uapi/asm/stat.h"
            }
         },
         "",
         "",
         "",
         "",
         "fs/stat.c",
         344
      ],
      [
         7,
         "sys_poll",
         "(struct pollfd __user *ufds, unsigned int nfds, int timeout)",
         "0x07",
         {
            "type": "struct pollfd __user *ufds",
            "def": {
               "line": 36,
               "file": "include/uapi/asm-generic/poll.h"
            }
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
         1013
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
         "arch/microblaze/kernel/sys_microblaze.c",
         36
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
         577
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
         2806
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
         191
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
            "def": {
               "line": 100,
               "file": "arch/alpha/include/uapi/asm/signal.h"
            }
         },
         {
            "type": "struct sigaction __user *",
            "def": {
               "line": 100,
               "file": "arch/alpha/include/uapi/asm/signal.h"
            }
         },
         {
            "type": "size_t",
            "def": null
         },
         "",
         "",
         "kernel/signal.c",
         3648
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
         2703
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
         706
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
         633
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
         659
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
         1103
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
         1109
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
         439
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
         871
      ],
      [
         23,
         "sys_select",
         "(int n, fd_set __user *inp, fd_set __user *outp, fd_set __user *exp, struct timeval __user *tvp)",
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
            "type": "struct timeval __user *tvp",
            "def": {
               "line": 16,
               "file": "include/uapi/linux/time.h"
            }
         },
         "",
         "fs/select.c",
         697
      ],
      [
         24,
         "sys_sched_yield",
         "(void)",
         "0x18",
         "",
         "",
         "",
         "",
         "",
         "",
         "kernel/sched/core.c",
         4981
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
         519
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
         224
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
         791
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
         725
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
         1539
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
            "def": {
               "line": 28,
               "file": "include/uapi/linux/shm.h"
            }
         },
         "",
         "",
         "",
         "ipc/shm.c",
         1166
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
         943
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
         913
      ],
      [
         34,
         "sys_pause",
         "(void)",
         "0x22",
         "",
         "",
         "",
         "",
         "",
         "",
         "kernel/signal.c",
         3843
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
         1764
      ],
      [
         36,
         "sys_getitimer",
         "(int which, struct itimerval __user *value)",
         "0x24",
         {
            "type": "int which",
            "def": null
         },
         {
            "type": "struct itimerval __user *value",
            "def": {
               "line": 40,
               "file": "include/uapi/linux/time.h"
            }
         },
         "",
         "",
         "",
         "",
         "kernel/time/itimer.c",
         107
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
         285
      ],
      [
         38,
         "sys_setitimer",
         "(int which, struct itimerval __user *value, struct itimerval __user *ovalue)",
         "0x26",
         {
            "type": "int which",
            "def": null
         },
         {
            "type": "struct itimerval __user *value",
            "def": {
               "line": 40,
               "file": "include/uapi/linux/time.h"
            }
         },
         {
            "type": "struct itimerval __user *ovalue",
            "def": {
               "line": 40,
               "file": "include/uapi/linux/time.h"
            }
         },
         "",
         "",
         "",
         "kernel/time/itimer.c",
         292
      ],
      [
         39,
         "sys_getpid",
         "(void)",
         "0x27",
         "",
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         891
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
         1487
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
         1364
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
         1682
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
         1638
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
         1806
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
         1869
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
            "def": {
               "line": 58,
               "file": "include/linux/socket.h"
            }
         },
         {
            "type": "unsigned flags",
            "def": null
         },
         "",
         "",
         "",
         "net/socket.c",
         2171
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
            "def": {
               "line": 58,
               "file": "include/linux/socket.h"
            }
         },
         {
            "type": "unsigned flags",
            "def": null
         },
         "",
         "",
         "",
         "net/socket.c",
         2344
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
         1982
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
         1502
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
         1534
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
         1720
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
         1756
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
         1465
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
         1920
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
         1957
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
         935
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
            "def": {
               "line": 24,
               "file": "include/uapi/linux/resource.h"
            }
         },
         "",
         "",
         "kernel/exit.c",
         1673
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
         3167
      ],
      [
         63,
         "sys_newuname",
         "(struct new_utsname __user *name)",
         "0x3f",
         {
            "type": "struct new_utsname __user *name",
            "def": {
               "line": 25,
               "file": "include/uapi/linux/utsname.h"
            }
         },
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         1238
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
         608
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
            "def": {
               "line": 40,
               "file": "include/uapi/linux/sem.h"
            }
         },
         {
            "type": "unsigned nsops",
            "def": null
         },
         "",
         "",
         "",
         "ipc/sem.c",
         2229
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
         1685
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
         1681
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
         292
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
         904
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
         1195
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
            "def": {
               "line": 18,
               "file": "include/uapi/linux/msg.h"
            }
         },
         "",
         "",
         "",
         "ipc/msg.c",
         604
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
         448
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
         1994
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
         227
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
         232
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
         153
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
         213
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
            "def": {
               "line": 151,
               "file": "fs/readdir.c"
            }
         },
         {
            "type": "unsigned int count",
            "def": null
         },
         "",
         "",
         "",
         "fs/readdir.c",
         212
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
         424
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
         470
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
         475
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
         4681
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
         3864
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
         3967
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
         1157
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
         4346
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
         4118
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
         4181
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
         424
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
         606
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
         577
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
         691
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
         722
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
         696
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
         1814
      ],
      [
         96,
         "sys_gettimeofday",
         "(struct timeval __user *tv, struct timezone __user *tz)",
         "0x60",
         {
            "type": "struct timeval __user *tv",
            "def": {
               "line": 16,
               "file": "include/uapi/linux/time.h"
            }
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
         145
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
         1382
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
            "def": {
               "line": 24,
               "file": "include/uapi/linux/resource.h"
            }
         },
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         1788
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
         2568
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
         956
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
         1110
      ],
      [
         102,
         "sys_getuid",
         "(void)",
         "0x66",
         "",
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         919
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
         1545
      ],
      [
         104,
         "sys_getgid",
         "(void)",
         "0x68",
         "",
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         931
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
         611
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
         444
      ],
      [
         107,
         "sys_geteuid",
         "(void)",
         "0x6b",
         "",
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         925
      ],
      [
         108,
         "sys_getegid",
         "(void)",
         "0x6c",
         "",
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         937
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
         1006
      ],
      [
         110,
         "sys_getppid",
         "(void)",
         "0x6e",
         "",
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         908
      ],
      [
         111,
         "sys_getpgrp",
         "(void)",
         "0x6f",
         "",
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         1112
      ],
      [
         112,
         "sys_setsid",
         "(void)",
         "0x70",
         "",
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         1191
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
         553
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
         402
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
         153
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
         190
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
         686
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
         691
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
         765
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
         770
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
         1105
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
         833
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
         876
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
         1119
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
         150
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
         224
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
         2776
      ],
      [
         128,
         "sys_rt_sigtimedwait",
         "(const sigset_t __user *uthese, siginfo_t __user *uinfo, const struct timespec __user *uts, size_t sigsetsize)",
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
            "type": "const struct timespec __user *uts",
            "def": null
         },
         {
            "type": "size_t sigsetsize",
            "def": null
         },
         "",
         "",
         "kernel/signal.c",
         3099
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
         3281
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
         3873
      ],
      [
         131,
         "sys_sigaltstack",
         "(const struct sigaltstack __user *uss, struct sigaltstack __user *uoss)",
         "0x83",
         {
            "type": "const struct sigaltstack __user *uss",
            "def": {
               "line": 114,
               "file": "arch/alpha/include/uapi/asm/signal.h"
            }
         },
         {
            "type": "struct sigaltstack __user *uoss",
            "def": {
               "line": 114,
               "file": "arch/alpha/include/uapi/asm/signal.h"
            }
         },
         "",
         "",
         "",
         "",
         "kernel/signal.c",
         3461
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
            "def": {
               "line": 7,
               "file": "include/uapi/linux/utime.h"
            }
         },
         "",
         "",
         "",
         "",
         "fs/utimes.c",
         24
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
         3803
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
            "def": {
               "line": 198,
               "file": "include/linux/types.h"
            }
         },
         "",
         "",
         "",
         "",
         "fs/statfs.c",
         232
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
            "def": {
               "line": 23,
               "file": "arch/mips/include/uapi/asm/statfs.h"
            }
         },
         "",
         "",
         "",
         "",
         "fs/statfs.c",
         176
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
            "def": {
               "line": 23,
               "file": "arch/mips/include/uapi/asm/statfs.h"
            }
         },
         "",
         "",
         "",
         "",
         "fs/statfs.c",
         197
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
         186
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
         266
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
         196
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
            "def": {
               "line": 7,
               "file": "include/uapi/linux/sched/types.h"
            }
         },
         "",
         "",
         "",
         "",
         "kernel/sched/core.c",
         4567
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
            "def": {
               "line": 7,
               "file": "include/uapi/linux/sched/types.h"
            }
         },
         "",
         "",
         "",
         "",
         "kernel/sched/core.c",
         4641
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
            "def": {
               "line": 7,
               "file": "include/uapi/linux/sched/types.h"
            }
         },
         "",
         "",
         "",
         "kernel/sched/core.c",
         4552
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
         4612
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
         5181
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
         5208
      ],
      [
         148,
         "sys_sched_rr_get_interval",
         "(pid_t pid, struct timespec __user *interval)",
         "0x94",
         {
            "type": "pid_t pid",
            "def": null
         },
         {
            "type": "struct timespec __user *interval",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/sched/core.c",
         5273
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
         715
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
         733
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
         794
      ],
      [
         152,
         "sys_munlockall",
         "(void)",
         "0x98",
         "",
         "",
         "",
         "",
         "",
         "",
         "mm/mlock.c",
         822
      ],
      [
         153,
         "sys_vhangup",
         "(void)",
         "0x99",
         "",
         "",
         "",
         "",
         "",
         "",
         "fs/open.c",
         1213
      ],
      [
         154,
         "sys_modify_ldt",
         "(int, void __user *, unsigned long)",
         "0x9a",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "void __user *",
            "def": null
         },
         {
            "type": "unsigned long",
            "def": null
         },
         "",
         "",
         "",
         "arch/x86/kernel/ldt.c",
         449
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
         3155
      ],
      [
         156,
         "sys_sysctl",
         "(struct __sysctl_args __user *args)",
         "0x9c",
         {
            "type": "struct __sysctl_args __user *args",
            "def": {
               "line": 35,
               "file": "include/uapi/linux/sysctl.h"
            }
         },
         "",
         "",
         "",
         "",
         "",
         "kernel/sysctl_binary.c",
         1401
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
         2264
      ],
      [
         159,
         "sys_adjtimex",
         "(struct timex __user *txc_p)",
         "0x9f",
         {
            "type": "struct timex __user *txc_p",
            "def": {
               "line": 64,
               "file": "include/uapi/linux/timex.h"
            }
         },
         "",
         "",
         "",
         "",
         "",
         "kernel/time/time.c",
         268
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
         1662
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
         530
      ],
      [
         162,
         "sys_sync",
         "(void)",
         "0xa2",
         "",
         "",
         "",
         "",
         "",
         "",
         "fs/sync.c",
         122
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
         273
      ],
      [
         164,
         "sys_settimeofday",
         "(struct timeval __user *tv, struct timezone __user *tz)",
         "0xa4",
         {
            "type": "struct timeval __user *tv",
            "def": {
               "line": 16,
               "file": "include/uapi/linux/time.h"
            }
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
         202
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
         3099
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
         1748
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
         3112
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
         2533
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
         307
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
         1304
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
         1357
      ],
      [
         173,
         "sys_ioperm",
         "(unsigned long, unsigned long, int)",
         "0xad",
         {
            "type": "unsigned long",
            "def": null
         },
         {
            "type": "unsigned long",
            "def": null
         },
         {
            "type": "int",
            "def": null
         },
         "",
         "",
         "",
         "arch/x86/kernel/ioport.c",
         99
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
         "kernel/module.c",
         3835
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
         "kernel/module.c",
         960
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
         891
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
         "",
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         897
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
         609
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
         481
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
         488
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
         495
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
         575
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
         581
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
         587
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
         651
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
         657
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
         663
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
         716
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
         722
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
         728
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
         3251
      ],
      [
         201,
         "sys_time",
         "(time_t __user *tloc)",
         "0xc9",
         {
            "type": "time_t __user *tloc",
            "def": null
         },
         "",
         "",
         "",
         "",
         "",
         "kernel/sys.c",
         956
      ],
      [
         202,
         "sys_futex",
         "(u32 __user *uaddr, int op, u32 val, struct timespec __user *utime, u32 __user *uaddr2, u32 val3)",
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
            "type": "struct timespec __user *utime",
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
         "kernel/futex.c",
         3555
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
         4870
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
         4922
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
         1280
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
         1349
      ],
      [
         208,
         "sys_io_getevents",
         "(aio_context_t ctx_id, long min_nr, long nr, struct io_event __user *events, struct timespec __user *timeout)",
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
            "def": {
               "line": 60,
               "file": "include/uapi/linux/aio_abi.h"
            }
         },
         {
            "type": "struct timespec __user *timeout",
            "def": null
         },
         "",
         "fs/aio.c",
         1881
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
         1703
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
            "def": {
               "line": 60,
               "file": "include/uapi/linux/aio_abi.h"
            }
         },
         "",
         "",
         "",
         "fs/aio.c",
         1811
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
         "fs/dcookies.c",
         206
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
         1986
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
         2816
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
            "def": {
               "line": 5,
               "file": "include/linux/dirent.h"
            }
         },
         {
            "type": "unsigned int count",
            "def": null
         },
         "",
         "",
         "",
         "fs/readdir.c",
         330
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
         1542
      ],
      [
         219,
         "sys_restart_syscall",
         "(void)",
         "0xdb",
         "",
         "",
         "",
         "",
         "",
         "",
         "kernel/signal.c",
         2609
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
            "def": {
               "line": 40,
               "file": "include/uapi/linux/sem.h"
            }
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
         2201
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
         "arch/nds32/kernel/sys_nds32.c",
         21
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
            "def": {
               "line": 313,
               "file": "include/uapi/asm-generic/siginfo.h"
            }
         },
         {
            "type": "timer_t __user * created_timer_id",
            "def": null
         },
         "",
         "",
         "",
         "kernel/time/posix-timers.c",
         578
      ],
      [
         223,
         "sys_timer_settime",
         "(timer_t timer_id, int flags, const struct itimerspec __user *new_setting, struct itimerspec __user *old_setting)",
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
            "type": "const struct itimerspec __user *new_setting",
            "def": {
               "line": 35,
               "file": "include/uapi/linux/time.h"
            }
         },
         {
            "type": "struct itimerspec __user *old_setting",
            "def": {
               "line": 35,
               "file": "include/uapi/linux/time.h"
            }
         },
         "",
         "",
         "kernel/time/posix-timers.c",
         908
      ],
      [
         224,
         "sys_timer_gettime",
         "(timer_t timer_id, struct itimerspec __user *setting)",
         "0xe0",
         {
            "type": "timer_t timer_id",
            "def": null
         },
         {
            "type": "struct itimerspec __user *setting",
            "def": {
               "line": 35,
               "file": "include/uapi/linux/time.h"
            }
         },
         "",
         "",
         "",
         "",
         "kernel/time/posix-timers.c",
         745
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
         782
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
         974
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
         61
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
         92
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
         107
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
         126
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
         977
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
            "def": {
               "line": 77,
               "file": "include/uapi/linux/eventpoll.h"
            }
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
         2197
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
            "def": {
               "line": 77,
               "file": "include/uapi/linux/eventpoll.h"
            }
         },
         "",
         "",
         "fs/eventpoll.c",
         1999
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
         3235
      ],
      [
         235,
         "sys_utimes",
         "(char __user *filename, struct timeval __user *utimes)",
         "0xeb",
         {
            "type": "char __user *filename",
            "def": null
         },
         {
            "type": "struct timeval __user *utimes",
            "def": {
               "line": 16,
               "file": "include/uapi/linux/time.h"
            }
         },
         "",
         "",
         "",
         "",
         "fs/utimes.c",
         222
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
         1336
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
         1363
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
         1497
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
            "def": {
               "line": 28,
               "file": "include/uapi/linux/mqueue.h"
            }
         },
         "",
         "",
         "ipc/mqueue.c",
         793
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
         803
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
         1129
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
         1143
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
            "def": {
               "line": 313,
               "file": "include/uapi/asm-generic/siginfo.h"
            }
         },
         "",
         "",
         "",
         "",
         "ipc/mqueue.c",
         1288
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
            "def": {
               "line": 28,
               "file": "include/uapi/linux/mqueue.h"
            }
         },
         {
            "type": "struct mq_attr __user *omqstat",
            "def": {
               "line": 28,
               "file": "include/uapi/linux/mqueue.h"
            }
         },
         "",
         "",
         "",
         "ipc/mqueue.c",
         1344
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
            "def": {
               "line": 73,
               "file": "include/linux/kexec.h"
            }
         },
         {
            "type": "unsigned long flags",
            "def": null
         },
         "",
         "",
         "kernel/kexec.c",
         218
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
            "def": {
               "line": 24,
               "file": "include/uapi/linux/resource.h"
            }
         },
         "",
         "kernel/exit.c",
         1596
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
         62
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
         158
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
         1637
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
         93
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
         185
      ],
      [
         253,
         "sys_inotify_init",
         "(void)",
         "0xfd",
         "",
         "",
         "",
         "",
         "",
         "",
         "fs/notify/inotify/inotify_user.c",
         686
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
         691
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
         748
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
         1461
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
         1122
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
         3859
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
         3797
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
         685
      ],
      [
         261,
         "sys_futimesat",
         "(int dfd, const char __user *filename, struct timeval __user *utimes)",
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
            "type": "struct timeval __user *utimes",
            "def": {
               "line": 16,
               "file": "include/uapi/linux/time.h"
            }
         },
         "",
         "",
         "",
         "fs/utimes.c",
         216
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
            "def": {
               "line": 5,
               "file": "arch/alpha/include/uapi/asm/stat.h"
            }
         },
         {
            "type": "int flag",
            "def": null
         },
         "",
         "",
         "fs/stat.c",
         358
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
         4107
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
         4675
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
         4340
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
         4175
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
         418
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
         600
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
         434
      ],
      [
         270,
         "sys_pselect6",
         "(int n, fd_set __user *inp, fd_set __user *outp, fd_set __user *exp, struct timespec __user *tsp, void __user *sig)",
         "0x10e",
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
            "type": "struct timespec __user *tsp",
            "def": null
         },
         {
            "type": "void __user *sig",
            "def": null
         },
         "fs/select.c",
         757
      ],
      [
         271,
         "sys_ppoll",
         "(struct pollfd __user *ufds, unsigned int nfds, struct timespec __user *tsp, const sigset_t __user *sigmask, size_t sigsetsize)",
         "0x10f",
         {
            "type": "struct pollfd __user *ufds",
            "def": {
               "line": 36,
               "file": "include/uapi/asm-generic/poll.h"
            }
         },
         {
            "type": "unsigned int nfds",
            "def": null
         },
         {
            "type": "struct timespec __user *tsp",
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
         "",
         "fs/select.c",
         1047
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
         2509
      ],
      [
         273,
         "sys_set_robust_list",
         "(struct robust_list_head __user *head, size_t len)",
         "0x111",
         {
            "type": "struct robust_list_head __user *head",
            "def": {
               "line": 70,
               "file": "include/uapi/linux/futex.h"
            }
         },
         {
            "type": "size_t len",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/futex.c",
         3298
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
            "def": {
               "line": 70,
               "file": "include/uapi/linux/futex.h"
            }
         },
         {
            "type": "size_t __user *len_ptr",
            "def": null
         },
         "",
         "",
         "",
         "kernel/futex.c",
         3320
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
         1395
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
         1731
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
         363
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
         1343
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
         1787
      ],
      [
         280,
         "sys_utimensat",
         "(int dfd, const char __user *filename, struct timespec __user *utimes, int flags)",
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
            "type": "struct timespec __user *utimes",
            "def": null
         },
         {
            "type": "int flags",
            "def": null
         },
         "",
         "",
         "fs/utimes.c",
         168
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
            "def": {
               "line": 77,
               "file": "include/uapi/linux/eventpoll.h"
            }
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
         2207
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
         322
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
         387
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
         417
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
         348
      ],
      [
         286,
         "sys_timerfd_settime",
         "(int ufd, int flags, const struct itimerspec __user *utmr, struct itimerspec __user *otmr)",
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
            "type": "const struct itimerspec __user *utmr",
            "def": {
               "line": 35,
               "file": "include/uapi/linux/time.h"
            }
         },
         {
            "type": "struct itimerspec __user *otmr",
            "def": {
               "line": 35,
               "file": "include/uapi/linux/time.h"
            }
         },
         "",
         "",
         "fs/timerfd.c",
         535
      ],
      [
         287,
         "sys_timerfd_gettime",
         "(int ufd, struct itimerspec __user *otmr)",
         "0x11f",
         {
            "type": "int ufd",
            "def": null
         },
         {
            "type": "struct itimerspec __user *otmr",
            "def": {
               "line": 35,
               "file": "include/uapi/linux/time.h"
            }
         },
         "",
         "",
         "",
         "",
         "fs/timerfd.c",
         553
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
         1632
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
         311
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
         412
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
         1981
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
         908
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
         866
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
         681
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
         1115
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
         1135
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
         3322
      ],
      [
         298,
         "sys_perf_event_open",
         "( struct perf_event_attr __user *attr_uptr, pid_t pid, int cpu, int group_fd, unsigned long flags)",
         "0x12a",
         {
            "type": "struct perf_event_attr __user *attr_uptr",
            "def": {
               "line": 310,
               "file": "include/uapi/linux/perf_event.h"
            }
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
         10389
      ],
      [
         299,
         "sys_recvmmsg",
         "(int fd, struct mmsghdr __user *msg, unsigned int vlen, unsigned flags, struct timespec __user *timeout)",
         "0x12b",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "struct mmsghdr __user *msg",
            "def": {
               "line": 69,
               "file": "include/linux/socket.h"
            }
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
            "type": "struct timespec __user *timeout",
            "def": null
         },
         "",
         "net/socket.c",
         2490
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
         706
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
         930
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
            "def": {
               "line": 50,
               "file": "include/uapi/linux/resource.h"
            }
         },
         {
            "type": "struct rlimit64 __user *old_rlim",
            "def": {
               "line": 50,
               "file": "include/uapi/linux/resource.h"
            }
         },
         "",
         "",
         "kernel/sys.c",
         1615
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
            "def": {
               "line": 900,
               "file": "include/linux/fs.h"
            }
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
            "def": {
               "line": 900,
               "file": "include/linux/fs.h"
            }
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
         "(clockid_t which_clock, struct timex __user *tx)",
         "0x131",
         {
            "type": "clockid_t which_clock",
            "def": null
         },
         {
            "type": "struct timex __user *tx",
            "def": {
               "line": 64,
               "file": "include/uapi/linux/timex.h"
            }
         },
         "",
         "",
         "",
         "",
         "kernel/time/posix-timers.c",
         1075
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
         160
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
            "def": {
               "line": 69,
               "file": "include/linux/socket.h"
            }
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
         2247
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
         237
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
            "def": {
               "line": 15,
               "file": "include/linux/getcpu.h"
            }
         },
         "",
         "",
         "",
         "kernel/sys.c",
         2489
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
         298
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
         305
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
         152
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
         "kernel/module.c",
         3855
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
         4578
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
         4719
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
         4669
      ],
      [
         317,
         "sys_seccomp",
         "(unsigned int op, unsigned int flags, const char __user *uargs)",
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
            "type": "const char __user *uargs",
            "def": null
         },
         "",
         "",
         "",
         "kernel/seccomp.c",
         946
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
         2015
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
         320
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
         2269
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
         1901
      ],
      [
         324,
         "sys_membarrier",
         "(int cmd, int flags)",
         "0x144",
         {
            "type": "int cmd",
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
         "kernel/sched/membarrier.c",
         283
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
         720
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
         1627
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
         1123
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
         1143
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
         585
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
         591
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
         621
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
            "def": {
               "line": 99,
               "file": "include/uapi/linux/stat.h"
            }
         },
         "",
         "fs/stat.c",
         566
      ],
      [
         333,
         "sys_io_pgetevents",
         "(aio_context_t ctx_id, long min_nr, long nr, struct io_event __user *events, struct timespec __user *timeout, const struct __aio_sigset *sig)",
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
            "def": {
               "line": 60,
               "file": "include/uapi/linux/aio_abi.h"
            }
         },
         {
            "type": "struct timespec __user *timeout",
            "def": null
         },
         {
            "type": "const struct __aio_sigset *sig",
            "def": {
               "line": 1899,
               "file": "fs/aio.c"
            }
         },
         "fs/aio.c",
         1904
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
         308
      ],
      [
         335,
         "not implemented",
         "",
         "0x14f",
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
         336,
         "sys_rt_sigaction",
         "(int, const struct sigaction __user *, struct sigaction __user *, size_t)",
         "0x150",
         {
            "type": "int",
            "def": null
         },
         {
            "type": "const struct sigaction __user *",
            "def": {
               "line": 100,
               "file": "arch/alpha/include/uapi/asm/signal.h"
            }
         },
         {
            "type": "struct sigaction __user *",
            "def": {
               "line": 100,
               "file": "arch/alpha/include/uapi/asm/signal.h"
            }
         },
         {
            "type": "size_t",
            "def": null
         },
         "",
         "",
         "kernel/signal.c",
         3648
      ],
      [
         337,
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
         338,
         "sys_ioctl",
         "(unsigned int fd, unsigned int cmd, unsigned long arg)",
         "0x152",
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
         706
      ],
      [
         339,
         "sys_readv",
         "(unsigned long fd, const struct iovec __user *vec, unsigned long vlen)",
         "0x153",
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
         1103
      ],
      [
         340,
         "sys_writev",
         "(unsigned long fd, const struct iovec __user *vec, unsigned long vlen)",
         "0x154",
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
         1109
      ],
      [
         341,
         "sys_recvfrom",
         "(int, void __user *, size_t, unsigned, struct sockaddr __user *, int __user *)",
         "0x155",
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
         1869
      ],
      [
         342,
         "sys_sendmsg",
         "(int fd, struct user_msghdr __user *msg, unsigned flags)",
         "0x156",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "struct user_msghdr __user *msg",
            "def": {
               "line": 58,
               "file": "include/linux/socket.h"
            }
         },
         {
            "type": "unsigned flags",
            "def": null
         },
         "",
         "",
         "",
         "net/socket.c",
         2171
      ],
      [
         343,
         "sys_recvmsg",
         "(int fd, struct user_msghdr __user *msg, unsigned flags)",
         "0x157",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "struct user_msghdr __user *msg",
            "def": {
               "line": 58,
               "file": "include/linux/socket.h"
            }
         },
         {
            "type": "unsigned flags",
            "def": null
         },
         "",
         "",
         "",
         "net/socket.c",
         2344
      ],
      [
         345,
         "sys_ptrace",
         "(long request, long pid, unsigned long addr, unsigned long data)",
         "0x159",
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
         1110
      ],
      [
         346,
         "sys_rt_sigpending",
         "(sigset_t __user *set, size_t sigsetsize)",
         "0x15a",
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
         2776
      ],
      [
         347,
         "sys_rt_sigtimedwait",
         "(const sigset_t __user *uthese, siginfo_t __user *uinfo, const struct timespec __user *uts, size_t sigsetsize)",
         "0x15b",
         {
            "type": "const sigset_t __user *uthese",
            "def": null
         },
         {
            "type": "siginfo_t __user *uinfo",
            "def": null
         },
         {
            "type": "const struct timespec __user *uts",
            "def": null
         },
         {
            "type": "size_t sigsetsize",
            "def": null
         },
         "",
         "",
         "kernel/signal.c",
         3099
      ],
      [
         348,
         "sys_rt_sigqueueinfo",
         "(pid_t pid, int sig, siginfo_t __user *uinfo)",
         "0x15c",
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
         3281
      ],
      [
         349,
         "sys_sigaltstack",
         "(const struct sigaltstack __user *uss, struct sigaltstack __user *uoss)",
         "0x15d",
         {
            "type": "const struct sigaltstack __user *uss",
            "def": {
               "line": 114,
               "file": "arch/alpha/include/uapi/asm/signal.h"
            }
         },
         {
            "type": "struct sigaltstack __user *uoss",
            "def": {
               "line": 114,
               "file": "arch/alpha/include/uapi/asm/signal.h"
            }
         },
         "",
         "",
         "",
         "",
         "kernel/signal.c",
         3461
      ],
      [
         350,
         "sys_timer_create",
         "(clockid_t which_clock, struct sigevent __user *timer_event_spec, timer_t __user * created_timer_id)",
         "0x15e",
         {
            "type": "clockid_t which_clock",
            "def": null
         },
         {
            "type": "struct sigevent __user *timer_event_spec",
            "def": {
               "line": 313,
               "file": "include/uapi/asm-generic/siginfo.h"
            }
         },
         {
            "type": "timer_t __user * created_timer_id",
            "def": null
         },
         "",
         "",
         "",
         "kernel/time/posix-timers.c",
         578
      ],
      [
         351,
         "sys_mq_notify",
         "(mqd_t mqdes, const struct sigevent __user *notification)",
         "0x15f",
         {
            "type": "mqd_t mqdes",
            "def": null
         },
         {
            "type": "const struct sigevent __user *notification",
            "def": {
               "line": 313,
               "file": "include/uapi/asm-generic/siginfo.h"
            }
         },
         "",
         "",
         "",
         "",
         "ipc/mqueue.c",
         1288
      ],
      [
         352,
         "sys_kexec_load",
         "(unsigned long entry, unsigned long nr_segments, struct kexec_segment __user *segments, unsigned long flags)",
         "0x160",
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
            "def": {
               "line": 73,
               "file": "include/linux/kexec.h"
            }
         },
         {
            "type": "unsigned long flags",
            "def": null
         },
         "",
         "",
         "kernel/kexec.c",
         218
      ],
      [
         353,
         "sys_waitid",
         "(int which, pid_t pid, struct siginfo __user *infop, int options, struct rusage __user *ru)",
         "0x161",
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
            "def": {
               "line": 24,
               "file": "include/uapi/linux/resource.h"
            }
         },
         "",
         "kernel/exit.c",
         1596
      ],
      [
         354,
         "sys_set_robust_list",
         "(struct robust_list_head __user *head, size_t len)",
         "0x162",
         {
            "type": "struct robust_list_head __user *head",
            "def": {
               "line": 70,
               "file": "include/uapi/linux/futex.h"
            }
         },
         {
            "type": "size_t len",
            "def": null
         },
         "",
         "",
         "",
         "",
         "kernel/futex.c",
         3298
      ],
      [
         355,
         "sys_get_robust_list",
         "(int pid, struct robust_list_head __user * __user *head_ptr, size_t __user *len_ptr)",
         "0x163",
         {
            "type": "int pid",
            "def": null
         },
         {
            "type": "struct robust_list_head __user * __user *head_ptr",
            "def": {
               "line": 70,
               "file": "include/uapi/linux/futex.h"
            }
         },
         {
            "type": "size_t __user *len_ptr",
            "def": null
         },
         "",
         "",
         "",
         "kernel/futex.c",
         3320
      ],
      [
         356,
         "sys_vmsplice",
         "(int fd, const struct iovec __user *iov, unsigned long nr_segs, unsigned int flags)",
         "0x164",
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
         1343
      ],
      [
         357,
         "sys_move_pages",
         "(pid_t pid, unsigned long nr_pages, const void __user * __user *pages, const int __user *nodes, int __user *status, int flags)",
         "0x165",
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
         1787
      ],
      [
         360,
         "sys_rt_tgsigqueueinfo",
         "(pid_t tgid, pid_t pid, int sig, siginfo_t __user *uinfo)",
         "0x168",
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
         3322
      ],
      [
         361,
         "sys_recvmmsg",
         "(int fd, struct mmsghdr __user *msg, unsigned int vlen, unsigned flags, struct timespec __user *timeout)",
         "0x169",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "struct mmsghdr __user *msg",
            "def": {
               "line": 69,
               "file": "include/linux/socket.h"
            }
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
            "type": "struct timespec __user *timeout",
            "def": null
         },
         "",
         "net/socket.c",
         2490
      ],
      [
         362,
         "sys_sendmmsg",
         "(int fd, struct mmsghdr __user *msg, unsigned int vlen, unsigned flags)",
         "0x16a",
         {
            "type": "int fd",
            "def": null
         },
         {
            "type": "struct mmsghdr __user *msg",
            "def": {
               "line": 69,
               "file": "include/linux/socket.h"
            }
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
         2247
      ],
      [
         363,
         "sys_process_vm_readv",
         "(pid_t pid, const struct iovec __user *lvec, unsigned long liovcnt, const struct iovec __user *rvec, unsigned long riovcnt, unsigned long flags)",
         "0x16b",
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
         364,
         "sys_process_vm_writev",
         "(pid_t pid, const struct iovec __user *lvec, unsigned long liovcnt, const struct iovec __user *rvec, unsigned long riovcnt, unsigned long flags)",
         "0x16c",
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
         305
      ],
      [
         365,
         "sys_setsockopt",
         "(int fd, int level, int optname, char __user *optval, int optlen)",
         "0x16d",
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
         1920
      ],
      [
         366,
         "sys_getsockopt",
         "(int fd, int level, int optname, char __user *optval, int __user *optlen)",
         "0x16e",
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
         1957
      ],
      [
         367,
         "sys_io_setup",
         "(unsigned nr_reqs, aio_context_t __user *ctx)",
         "0x16f",
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
         1280
      ],
      [
         368,
         "sys_io_submit",
         "(aio_context_t, long, struct iocb __user * __user *)",
         "0x170",
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
         1703
      ]
   ]
}
