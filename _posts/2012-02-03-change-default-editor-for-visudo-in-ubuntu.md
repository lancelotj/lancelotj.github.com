---
layout: post
title: Change Default Editor for visudo in Ubuntu
---
Ubuntu and Debian use the alternatives system to maintain the symbolic links for programs. When you first run `visudo`, it will prompt a list of editors for you to choose from. Unfortunately, it doesn't tell you how to change that setting again. The mostly happend situation is: you set it to "nano" at first, and can't change it to "vi" at a later time.

Here is the command to bring up that list again:

    sudo update-alternatives --config editor

Some people suggest using command `EDITOR=vi visudo`, or `export EDITOR=vi; visudo`, but it's really annoying if you have to remember and type so many letters everytime you run this command.

