---
layout: post
date: 2012-02-05 23:46:00 UTC
title: "Convert Mercurial Repository into Git"
---

I have some old mercurial repositories, and recently I want to convert them into
git repositories. It turns out that converting them is pretty easy. First, you
need to get [hg-fast-export](http://repo.or.cz/w/fast-export.git):

    git clone git://repo.or.cz/fast-export.git

Next, create a new git repository:

    mkdir new_git_repo
    cd new_git_repo
    git init

Finally, use the `hg-fast-export.sh` script from the directory you just checked
out in the first step:

    /path/to/hg-fast-export.sh -r /path/to/hg_repo
    git-repack -a -d -f
    git checkout BRANCH_NAME
    
`BRANCH_NAME` is the name of mercurial branch, the "default" branch in mercurial
will be called "master".

`hg-fast-export.sh` supports `--force` parameter, you can use it if you get
validation errors.

