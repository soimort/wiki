% Text Processing
% Mort Yao
% 2017-02-26

# Common Usage

**Read a certain line of a file**

    $ sed -n '[10]p' [foo]

**HTML escaping**

    $ cat [foo.html] | perl -MHTML::Entities -e 'while(<>) {print encode_entities($_);}'

**HTML unescaping**

    $ cat [foo.html] | perl -MHTML::Entities -e 'while(<>) {print decode_entities($_);}'

**Replace patterns in all files**

`find` & `sed` approach:

    $ find . -type f -print0 | xargs -0 sed -i 's/old/new/g'

The above approach will descend into hidden paths like `.git/`, that is usually not desirable. Use this one instead:

    $ find . -name .git -prune -o -type f -print0 | xargs -0 -n 1 sed -i -e 's/old/new/g'

A better approach using `ack` & `perl`: (which will leave hidden paths, binary files and files without target patterns untouched)

    $ ack --print0 -l 'old' | xargs -0 perl -p -i -e 's/old/new/g'



# Web Scraping

**Check unread Gmail**

Replace "`abcdefghijklmnop`" with your [16-digit app password](https://security.google.com/settings/security/apppasswords) (not your login password!):

```console
$ curl -u foo.bar@gmail.com:abcdefghijklmnop \
-s "https://mail.google.com/mail/feed/atom" | tr -d '\n' | \
awk -F '<entry>' '{for (i=2; i<=NF; i++) {print $i}}' | \
sed -n "s/<title>\(.*\)<\/title.*name>\(.*\)<\/name>.*/\2 - \1/p"
```

Source: <http://www.commandlinefu.com/commands/view/3386/check-your-unread-gmail-from-the-command-line>

**Check an Atom feed for the newest entry**

```console
$ curl -s https://www.soimort.org/feed.atom | sed -e "s/xmlns/ignore/" - | \
xmllint --xpath "/feed/entry[1]/title/text()" -
```

**Harvest email addresses from a web page**

```console
$ curl -s 'https://pgp.mit.edu/pks/lookup?search=0x07DA00CB78203251' | \
grep -o '[[:alnum:].]*@[[:alnum:].]*'
```
