% Text Processing
% Mort Yao
% 2016-11-04

## Common usage

### Read a certain line of a file

    $ sed -n '[10]p' [foo]

### HTML escaping

    $ cat [foo.html] | perl -MHTML::Entities -e 'while(<>) {print encode_entities($_);}'

### HTML unescaping

    $ cat [foo.html] | perl -MHTML::Entities -e 'while(<>) {print decode_entities($_);}'



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
$ curl -s https://www.soimort.org/atom.xml | sed -e "s/xmlns/ignore/" - | \
xmllint --xpath "/feed/entry[1]/title/text()" -
```

### Harvest email addresses from a web page

```console
$ curl -s 'https://pgp.mit.edu/pks/lookup?search=0x07DA00CB78203251' | \
grep -o '[[:alnum:].]*@[[:alnum:].]*'
```
