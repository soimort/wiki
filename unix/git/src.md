% Git Tricks
% Mort Yao
% 2017-03-10

# Working with branches

## Clone a single branch from a remote repository

    $ git clone -b [develop] --single-branch [git@github.com:soimort/example.git]

Or: (if there's already an existing remote, just `checkout` the branch)

    $ git checkout -b [develop] [origin/develop]

Source: <http://stackoverflow.com/a/8142070/1114972>

## Force update of a repository brutally (and throw away any uncommitted local changes / commits)

This operation does not require configuration of git user name / email. (Thus could be useful on an app server.)

    $ git fetch
    $ git reset --hard [origin/master]

Source: <http://stackoverflow.com/a/17713604/1114972>

## Create a new, unrelated branch to work on (e.g., `gh-pages` for GitHub Pages)

Personally I would prefer to put an orphaned branch in a separated directory so that it can never mess up with the major codebase.

    $ mkdir [gh-pages] && cd [gh-pages]
    $ git init
    $ git remote add origin [git@github.com:soimort/example.git]
    $ git checkout -b [gh-pages]
    ...
    $ git push origin [gh-pages]

## Delete a remote branch

    $ git push origin :[branch-to-be-deleted]

## Clean obsolete references

Show all stale branches:

    $ git branch -r

Update local references to the remote repository: (and delete obsolete references that are removed in the remote repository)

    $ git fetch --prune



# Working with submodules

## Update all submodules

    $ git submodule update --recursive --remote



# Staging

## Revert (uncommitted change of) a single file

    $ git checkout [file]

To avoid confusion with a branch name, use:

    $ git checkout -- [file]

## Unstage any staged changes for a file

    $ git reset [file]

## Stage the removal of a file (but leave it untracked in the working tree)

    $ git rm --cached [file]



# GitHub tricks

## Get a Pull Request (and create a feature branch for the PR)

    $ git fetch origin [pull/123/head]
    $ git checkout -b [feature-branch] FETCH_HEAD

Or:

    $ git fetch origin [pull/123/head:feature-branch]
    $ git checkout [feature-branch]

## Push an empty commit to trigger a GitHub Pages rebuild

    $ git commit -m 'rebuild pages' --allow-empty

## Download a specific folder in a GitHub repo

    $ svn export [https://github.com/user/repo.git/trunk/path/to/something]



# Miscellaneous

## Compare two arbitrary files

    $ git diff --no-index [file_a] [file_b]

## Create the archive of a tag

    $ git archive --format=tar.gz --prefix=[foobar-1.2.3/] [v1.2.3] > [v1.2.3.tar.gz]

## Remove untracked files and directories from the working tree

    $ git clean -fd

To remove ignored files as well:

    $ git clean -fdx
