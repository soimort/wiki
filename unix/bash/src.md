% Bash Tricks
% Mort Yao
% 2016-12-13

**Use a variable, abort if it has an empty value**

```sh
${str?-WTF!}
```

**Get the substring**

```sh
${str:0:1}
```

**Test if a string starts with some string**

```sh
if [[ $str == /* ]]; then
  ...
fi
```

**Test if a string matches some regular expression**

```sh
if [[ $str =~ ^/ ]]; then
  ...
fi
```

**Combining expressions in `if`-statements**

```sh
if [[ expr1 && expr2 || expr3 ]]; then
  ...
fi
```

**Read a file line by line**

```sh
while IFS= read -r line; do
  echo $line
  ...
done
```

To strip preceding spaces (indentation), use:

```sh
while read -r line; do
  echo $line
  ...
done
```
