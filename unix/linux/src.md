% Linux Tricks
% Mort Yao
% 2016-07-21

(***Note:** This page contains tips and tricks which are specific to the Linux kernel or a certain Linux distribution. For cross-platform utilities that may run on Linux, e.g., GNU, see [CLI tricks](/unix/cli) instead.*)

# Kernel

## Useful information

Show the parameters passed to the kernel at the time it was started:

    $ cat /proc/cmdline

Show the config options of the current running kernel:

    $ cat /proc/config.gz | gunzip

Or:

    $ zcat /proc/config.gz



# Kernel modules

## Disable the touchpad

`psmouse` seems to be the module designated for the touchpad on many laptops. If it annoys when typing, simply remove the module with:

    # rmmod psmouse

To bring it back:

    # modprobe psmouse



# util-linux

(Wikipedia: <https://en.wikipedia.org/wiki/Util-linux>)

## Display system shutdown entries and run level changes

    $ last -x | less

## Show bad login attempts

    # lastb | less

## View kernel message buffer (and follow it)

In human-readable timestamp: (may be inaccurate!)

    $ dmesg -Tw

## Force releasing the swap space

Swapping generally downgrades the overall performance; it is sometimes good to manually release everything back into the RAM.

(**Warning:** To run this command safely, freely available RAM is assumed to be sufficient; otherwise, the system may kill some processes to make room.)

    # swapoff -a && swapon -a

## Synchronize hardware clock with an NTP server

    # ntpd -qg
    # hwclock --systohc



# SysV init

(Wikipedia: <https://en.wikipedia.org/wiki/Init>)

## Start a system service (e.g., httpd)

    # /etc/rc.d/httpd start

Or:

    # rc.d start httpd



# systemd

(Wikipedia: <https://en.wikipedia.org/wiki/Systemd>)

## Start a system service (e.g., httpd)

    # systemctl start httpd

## View systemd journal (reverse chronologically)

    $ journalctl -r

## View kernel message log from current boot (and follow it)

    $ journalctl -kf

## Write a simple service

Create a file `foobar.service`:

```ini
[Unit]
Description=My dumb daemon

[Service]
ExecStart=/bin/sh -c "foo bar"

[Install]
WantedBy=multi-user.target
```

Copy the file to systemd's designated place and enable the service:

    # cp -v foobar.service /etc/systemd/system/
    # systemctl enable foobar



# Distro-specific

## Arch Linux

Find out which package owns the program:

    $ which [cpp] | pacman -Qo -

List all installed packages, in descending order of size:

    $ expac -s -H M "%-30n %m" | sort -rhk 2
