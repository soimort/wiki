% Command-line Tricks
% Mort Yao
% 2016-07-21

(***Note:** This page contains tips and tricks of most commonly used command-line utilities on Unix-like OSes. For usages related to the shell itself, see [Shell tricks](/unix/shell) instead.*)

## Common usage

### Show Unix epoch time

    $ date +%s

### Show the MIME type of a file

    $ file -0 --mime-type '[filename]' | cut -d $'\0' -f2 | cut -d' ' -f2

### List files recursively, etc.

    $ find .

List files by extension:

    $ find . -name "[*.py]"

To calculate the total number of lines of code, use:

    $ find . -name "[*.py]" | xargs grep -v "^$" | wc -l

To delete all files with some extension, use:

    $ find . -name "[*.o]" -delete

### List sub-directories in descending order of size

    $ du -hs * | sort -hr

### Archive (and compress) a directory

As ZIP format:

    $ zip -r [src.zip] [src]

As gzip format:

    $ tar -czf [src.tar.gz] [src]

To archive some files under a certain directory without including the pathname in the resulting archive, change the directory with `-C`:

    $ tar -czf [files.tar.gz] -C [src] [files]



### Login to a remote host

e.g., login to `127.0.0.1` as user `root`, via port `22`:

    $ ssh -p [22] [root]@[127.0.0.1]

### Copy files to a remote host

e.g., copy some `files` to `127.0.0.1` as user `root`, via port `22`:

    $ scp -P [22] [files] [root]@[127.0.0.1]:[/home/root/bak]



## System maintenance

### View ACPI information (battery status, etc.)

    $ acpi -i

### View SMART information

    # smartctl -a /dev/sda

### Wipe out a disk

Data removed by `rm -rf` can be easily recovered by a software tool like [TestDisk](http://www.cgsecurity.org/wiki/TestDisk). To wipe out all data on a device (e.g., `/dev/sda`) reliably, use:

    # dd if=/dev/urandom of=/dev/sda bs=4k

(**Warning:** Do NOT try the above command until you need it!)



## Networking

### Show all active Internet connections

Show only TCP connections:

    $ netstat -ntlp

To include UDP connections:

    $ netstat -ntulp

### Port scanning

Check for a port number (e.g., `8000`):

    $ netcat -v -w 3 -z [scanme.nmap.org] [8000]

Check for a range of ports (e.g., `20` - `80`):

    $ netcat -v -w 3 -z [scanme.nmap.org] [20-80]

Scan all open ports with [Nmap](https://nmap.org/):

    $ nmap -v -A [scanme.nmap.org]

### Query a specific DNS server (e.g., Google Public DNS)

    $ dig @[8.8.8.8] [www.example.com]

### Find out your IP address on the public Internet

    $ dig +short myip.opendns.com @resolver1.opendns.com

### Look for the geolocation of a host

    $ geoiplookup [google.com]

Or: (IPv6)

    $ geoiplookup6 [google.com]

### Start an HTTP server for development

    $ python3 -m http.server [4000]



## Web scraping

### Check unread Gmail

Replace "`abcdefghijklmnop`" with your [16-digit app password](https://security.google.com/settings/security/apppasswords) (not your login password!):

```console
$ curl -u foo.bar@gmail.com:abcdefghijklmnop \
-s "https://mail.google.com/mail/feed/atom" | tr -d '\n' | \
awk -F '<entry>' '{for (i=2; i<=NF; i++) {print $i}}' | \
sed -n "s/<title>\(.*\)<\/title.*name>\(.*\)<\/name>.*/\2 - \1/p"
```

Source: <http://www.commandlinefu.com/commands/view/3386/check-your-unread-gmail-from-the-command-line>

### Check an Atom feed for the newest entry

```console
$ curl -s https://github.com/blog.atom | sed -e "s/xmlns/ignore/" - | \
xmllint --xpath "/feed/entry[1]/title/text()" -
```

### Harvest email addresses from a web page

```console
$ curl -s 'https://pgp.mit.edu/pks/lookup?search=0x07DA00CB78203251' | \
grep -o '[[:alnum:].]*@[[:alnum:].]*'
```



```sh
```