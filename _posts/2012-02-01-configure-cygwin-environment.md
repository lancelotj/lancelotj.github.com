---
layout: post
title: Configure Cygwin Environment
---

[Cygwin](http://www.cygwin.com) is a windows program that simulates a Linux environment. The default installation uses `cmd.exe` as the terminal program which is not very convenient. For example,  it can only be resized up to 80 characters in width. Fortunately, there is an `rxvt` package in the Cygwin distribution. You only need to tweak some options to make it look like the terminal in Unix system.

Right click "Start > Cygwin > rxvt-native" menu item, and select "Properties...", edit the "Target" field to:

    C:\path-to-cygwin\bin\rxvt.exe -display :0 -geometry 80x43 +sb -bg black -fg gray -fn "DejaVu Sans Mono-16" -tn rxvt-cygwin-native -e /bin/bash --login

You can change "[DejaVu Sans Mono](http://dejavu-fonts.org)" font to the font name you prefer.

