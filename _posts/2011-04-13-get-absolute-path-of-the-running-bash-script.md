---
layout: post
tumblr_id: 9817706219
date: 2011-04-13 04:00:00 UTC
title: Get Absolute Path of the Running Bash Script
---

Sometimes we need to know where the running Bash script is started from and get its absolute path if we run this script from a different directory.

First we need to get the relative directory:

If the script is executed directly:

    relative_path=`dirname $0`
    
If the script is `source`-ed:

    relative_path=`dirname $BASH_SOURCE`

To get the absolute path, we can do this:

    abspath=`cd $relpath; pwd`

This method is compatible with both Linux and Mac OS. In addition, there is another command only works under Linux:

    abspath=`readlink -m $relpath`

Now $abspath is the absolute path of the file being executed.
