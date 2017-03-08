% Command-line Tricks
% Mort Yao
% 2016-11-11

(***Note:** This page contains tips and tricks of most commonly used command-line utilities on Unix-like OSes. For usages related to the shell itself, see [Shell tricks](/unix/shell) instead.*)

# Common usage

**See how a Unicode string is encoded internally**

    $ echo [hello] | hexdump -C

See how it is encoded in UTF-16: (Assume UTF-8 is the default encoding)

    $ echo [hello] | iconv -f utf-8 -t utf-16 | hexdump -C

**Show Unix epoch time**

    $ date +%s

**Show timestamp in [RFC 3339](https://tools.ietf.org/html/rfc3339) format**

    $ date --iso-8601=seconds

**Show the MIME type of a file**

    $ file -0 --mime-type '[filename]' | cut -d $'\0' -f2 | cut -d' ' -f2

**List files recursively, etc.**

    $ find .

List files by extension:

    $ find . -name "[*.py]"

To calculate the total number of lines of code, use:

    $ find . -name "[*.py]" | xargs grep -v "^$" | wc -l

To delete all files with some extension, use:

    $ find . -name "[*.o]" -delete

**Get the size of a directory**

In terms of kilobytes:

    $ du -s [foo/bar] | cut -f1

Or: (in human-readable format)

    $ du -hs [foo/bar] | cut -f1

**List sub-directories in descending order of size**

    $ du -hs * | sort -hr

**Archive (and compress) a directory**

As ZIP format:

    $ zip -r [src.zip] [src]

As gzip format:

    $ tar -czf [src.tar.gz] [src]

To archive some files under a certain directory without including the pathname in the resulting archive, change the directory with `-C`:

    $ tar -czf [files.tar.gz] -C [src] [files]



**Login to a remote host**

e.g., login to `127.0.0.1` as user `root`, via port `22`:

    $ ssh -p [22] [root]@[127.0.0.1]

**Copy files to a remote host**

e.g., copy some `files` to `127.0.0.1` as user `root`, via port `22`:

    $ scp -P [22] [files] [root]@[127.0.0.1]:[/home/root/bak]



# System maintenance

**View ACPI information (battery status, etc.)**

    $ acpi -i

**View SMART information**

    # smartctl -a /dev/sda

**Wipe out a disk**

Data removed by `rm -rf` can be easily recovered by a software tool like [TestDisk](http://www.cgsecurity.org/wiki/TestDisk). To wipe out all data on a device (e.g., `/dev/sda`) reliably, use:

    # dd if=/dev/urandom of=/dev/sda bs=4k

(**Warning:** Do NOT try the above command until you need it!)



# Networking

**Show all active Internet connections**

Show only TCP connections:

    $ netstat -ntlp

To include UDP connections:

    $ netstat -ntulp

**Port scanning**

Check for a port number (e.g., `8000`):

    $ netcat -v -w 3 -z [scanme.nmap.org] [8000]

Check for a range of ports (e.g., `20` - `80`):

    $ netcat -v -w 3 -z [scanme.nmap.org] [20-80]

Scan all open ports with [Nmap](https://nmap.org/):

    $ nmap -v -A [scanme.nmap.org]

**Query a specific DNS server (e.g., Google Public DNS)**

    $ dig @[8.8.8.8] [www.example.com]

**Find out your IP address on the public Internet**

    $ dig +short myip.opendns.com @resolver1.opendns.com

**Look for the geolocation of a host**

    $ geoiplookup [google.com]

Or: (IPv6)

    $ geoiplookup6 [google.com]

**Start an HTTP server for development**

    $ python3 -m http.server [4000]



# Multimedia

**Record an M3U stream**

    $ ffmpeg -i [http://foo.bar/hls.m3u8] -c copy -bsf:a aac_adtstoasc [output.mp4]
