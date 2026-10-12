# syscall-table (64-bit)
Generate JSON system call table from Linux source. Hosted at https://syscalls64.paolostivanin.com.

## Generating JSON
* Install universal-ctags
* `chmod +x prepare-files.sh && ./prepare-files.sh [kernel-version]` (defaults to 7.2.10)
* :coffee: or :beer:

## Web
* dependency-free static page (vanilla JS): search, sortable columns, dark/light theme, `/` to focus search, `#query` deep links
* links to https://elixir.bootlin.com for source cross-reference and http://www.kernel.org for manpages
* `www` dir checked into gh-pages branch w/ JSON file using `deploy.sh`

## Kernel version
Generated from Linux kernel 7.2.10.

## Contributors
* Paolo Stivanin (https://github.com/paolostivanin)
