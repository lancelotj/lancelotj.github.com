---
title: Can't Draw with Mouse in Inkscape 0.48
layout: post
---
Today I found I can't draw anything with mouse in [Inkscape](http://inkscape.org) 0.48. I reinstalled Inkscape several times, including re-compiling from source code but no luck. Finally it turned out that I didn't set the options correctly: In `File->input devices->Configuration`, I have `pen`, `cursor` and `eraser` selected:

![inkscape setting](/static/img/blog/inkscapemouse.jpg)

I need to uncheck those three options, then everything goes normally.

