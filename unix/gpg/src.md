% GnuPG by Example
% Mort Yao
% 2016-04-07

# Exchanging keys

Check for your own keys:

    $ gpg --list-secret-keys

List all keys on your public keyring: (`~/.gnupg/pubring.kbx`)

    $ gpg --list-keys

Print your public key: (in ASCII-armored format)

    $ gpg --armor --export [alice@example.com]

Export your public key: (in binary format)

    $ gpg --output [alice.gpg] --export [alice@example.com]

Import a public key:

    $ gpg --import [bob.gpg]



# Encrypting and decrypting documents

Encrypt a document with a public key:

    $ gpg --output [doc.gpg] --encrypt --recipient [bob@example.com] [doc]

Encrypt a document with a symmetric cipher:

    $ gpg --output [doc.gpg] --symmetric [doc]

Decrypt a document:

    $ gpg --output [doc] --decrypt [doc.gpg]



# Making and verifying signatures

Sign a document:

    $ gpg --output [doc.sig] --sign [doc]

Verify a signature and recover the encrypted document:

    $ gpg --output [doc] --decrypt [doc.sig]

Sign a document, but create an ASCII-armored signature:

    $ gpg --clearsign [doc]

Sign a document, but create a detached signature:

    $ gpg --output [doc.sig] --detach-sig [doc]

Verify a detached signature with respect to the original document:

    $ gpg --verify [doc.sig] [doc]



# gpg-agent

The following line should be added to your `.bashrc` or `.zshrc, etc.`:

```sh
export GPG_TTY=$(tty)
```

Reload `gpg-agent`:

    $ gpg-connect-agent reloadagent /bye

---

**References**

* The Free Software Foundation. “The GNU Privacy Handbook.”
Accessed April 7, 2016.
<https://www.gnupg.org/gph/en/manual/book1.html>
* “Using the GNU Privacy Guard: Invoking GPG-AGENT.”
Accessed April 7, 2016.
<https://www.gnupg.org/documentation/manuals/gnupg/Invoking-GPG_002dAGENT.html>
