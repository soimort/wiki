% Git Tricks
% Mort Yao
% 2016-07-06

## Working with Branches

### Clone a single branch from a remote repository

    $ git clone -b [develop] --single-branch [git@github.com:soimort/example.git]

Or: (if there's already an existing remote, just `checkout` the branch)

    $ git checkout -b [develop] [origin/develop]

Source: <http://stackoverflow.com/a/8142070/1114972>

### Force update of a repository brutally (and throw away any uncommitted local changes / commits)

This operation does not require configuration of git user name / email. (Thus could be useful on an app server.)

    $ git fetch
    $ git reset --hard [origin/master]

Source: <http://stackoverflow.com/a/17713604/1114972>

### Create a new, unrelated branch to work on (e.g., `gh-pages` for GitHub Pages)

Personally I would prefer to put an orphaned branch in a separated directory so that it can never mess up with the major codebase.

    $ mkdir [gh-pages] && cd [gh-pages]
    $ git init
    $ git remote add origin [git@github.com:soimort/example.git]
    $ git checkout -b [gh-pages]
    ...
    $ git push origin [gh-pages]



## Staging

### Unstage any staged changes for a file

    $ git reset [file]

### Stage the removal of a file (but leave it untracked in the working tree)

    $ git rm --cached [file]



## Miscellaneous

### Compare two arbitrary files

    $ git diff --no-index [file_a] [file_b]



```sh
```
