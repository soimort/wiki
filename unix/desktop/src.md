% Desktop Tricks
% Mort Yao
% 2017-03-19

# X.Org

## Desired screen resolution not detected

Related bug: <https://bugzilla.redhat.com/show_bug.cgi?id=1339930>

Manually add a resolution:

    $ cvt [1366 768]
    # 1368x768 59.88 Hz (CVT) hsync: 47.79 kHz; pclk: 85.25 MHz
    Modeline "1368x768_60.00"   85.25  1368 1440 1576 1784  768 771 781 798 -hsync +vsync
    $ xrandr --newmode ["1368x768_60.00"   85.25  1368 1440 1576 1784  768 771 781 798 -hsync +vsync]
    $ xrandr --addmode [eDP-1 1368x768_60.00]
    $ xrandr --output [eDP-1] --mode [1368x768_60.00]

To add an undetected resolution permanently, create a configuration file `/etc/X11/xorg.conf.d/10-monitor.conf`:

```
Section "Monitor"
    Identifier "eDP-1"
    Modeline "1368x768_60.00"   85.25  1368 1440 1576 1784  768 771 781 798 -hsync +vsync
    Option "PreferredMode" "1368x768_60.00"
EndSection

Section "Screen"
    Identifier "Primary Screen"
    Monitor "eDP-1"
    DefaultDepth 24
    SubSection "Display"
        Modes "1368x768_60.00"
    EndSubSection
EndSection

Section "Device"
    Identifier "Primary Device"
    Driver "intel"
EndSection
```

References:

* <https://wiki.archlinux.org/index.php/xrandr>
* <https://wiki.ubuntu.com/X/Config/Resolution#Setting_xrandr_changes_persistently>

# Wayland

## tint2 not working for Wayland windows

Related bugs:

* <https://gitlab.com/o9000/tint2/issues/609>
* <https://gitlab.com/o9000/tint2/issues/627>

Workaround: Don't run GNOME on Wayland yet.

# GNOME

## Tracker is a CPU (and disk) hog

Terminate all running Tracker processes:

    $ tracker daemon -t

Disable Tracker processes on startup and clean its cache:

```sh
$ cd ~/.config/autostart
$ cp -v /etc/xdg/autostart/tracker-* ./
$ for FILE in tracker-*.desktop ; do echo Hidden=true >> $FILE; done
$ rm -rf ~/.cache/tracker ~/.local/share/tracker
```

Furthermore, change all relevant lines in `tracker-*.desktop` to something like

    X-GNOME-Autostart-enabled=false

However, `tracker-store` seems tenacious and will start on next boot anyway.

References:

* <https://gist.github.com/vancluever/d34b41eb77e6d077887c>
* <http://askubuntu.com/questions/346211/tracker-store-and-tracker-miner-fs-eating-up-my-cpu-on-every-startup>

## Tracker freezes Nautilus (on "Properties")

(Bad) Workaround:

    $ sudo rm /usr/lib/nautilus/extensions-3.0/libnautilus-tracker-tags.so

Reference: <https://bbs.archlinux.org/viewtopic.php?id=119307>

## Nautilus freezes on typing (filter search)

Related bug: <https://bugzilla.gnome.org/show_bug.cgi?id=728608>

Workaround: Don't use Nautilus.

## GNOME freezes

Send `SIGQUIT` to the `gnome-shell` process:

    $ killall -3 gnome-shell

Reference: <http://askubuntu.com/a/496999/227503>
