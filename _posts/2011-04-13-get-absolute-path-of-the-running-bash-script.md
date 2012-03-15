---
layout: post
date: 2011-04-13 04:00:00 UTC
title: Get Absolute Path of the Running Bash Script
---

Sometimes you want to run a bash script from any directory, especially when this
script is placed or linked in a common `$PATH` directory. So the script should
know where itself is running so it can get the path of other files in the same
folder.

First, get the relative directory. There are two situations:

1. If the script is supposed to be executed directly like `./script.sh`, get
   it with this code:

        relative_path=`dirname $0`
    
2. If the script is supposed to be "sourced" like `source script.sh`, get it
   with this:

        relative_path=`dirname $BASH_SOURCE`

Once you have the relative path, it's easy to get the absolute path:

    absolute_path=`cd $relative_path;pwd`

This method is compatible with both Linux and Mac OS. However, it's not perfect.
It won't work if you have changed the `cd` command to something else using alias
or function. Although not usually happen, in this case, you can use the
following way:

    absolute_path=`readlink -m $relative_path`

This command only works in Linux, so you have to pick the way suits you
best. Now `$absolute_path` is the absolute path of the file being executed. You
can then use this variable to get other files which will be correct no matter
the current working directory is.

