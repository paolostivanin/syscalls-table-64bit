# syscall-table (64-bit)
Generate JSON system call table from Linux source. Hosted at https://syscalls64.paolostivanin.com.

## Generating JSON
* Install universal-ctags
* `chmod +x prepare-files.sh && ./prepare-files.sh`
* :coffee: or :beer:

## Web
* uses [jQuery DataTables](http://datatables.net/) to pull JSON file and format table
* links to https://elixir.bootlin.com for source cross-reference and http://www.kernel.org for manpages
* `www` dir checked into gh-pages branch w/ JSON file using `deploy.sh`

## Kernel version
Generated from Linux kernel 6.17.3.

## Contributors
* Paolo Stivanin (https://github.com/paolostivanin)
