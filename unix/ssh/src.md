% SSH by Example
% Mort Yao
% 2016-10-13

# Setting up an SSH server (the right way)

In `/etc/ssh/sshd_config`, enable public key authentication and disable password authentication: (perhaps change the default port also)

```ini
RSAAuthentication yes
PubkeyAuthentication yes

PasswordAuthentication no
```

Copy the client's _public key_ (e.g., `id_rsa.pub`) to the server's `authorized_keys`:

    $ ssh-copy-id [username@remote_host]

Or:

    $ cat ~/.ssh/id_rsa.pub |\
      ssh [username@remote_host] "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"

Make sure about permissions:

    $ chmod 700 ~/.ssh
    $ chmod 600 ~/.ssh/*
    $ chown -R $USER ~/.ssh

Start (or restart) the SSH daemon: (using systemd)

    # systemctl start sshd
