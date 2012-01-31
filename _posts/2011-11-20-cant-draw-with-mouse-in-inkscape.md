---
title: Can't Draw in Inkscape 0.48
layout: post
date: 2012-01-29
---

Sometimes big problems come from small mistakes. One day I found I can't draw
anything in [Inkscape](http://inkscape.org)(version 0.48) with my mouse(I'm
using it under Mac OS). 

To solve this problem, I reinstalled Inkscape several times, even re-compiled
it from source code, but nothing happened. Finally I recalled that I had
connected a graphics tablet to the machine several days ago. So I checked the
device settings. It turned out that I didn't set it correctly: In `File->input
devices->Configuration`, I have `pen`, `cursor` and `eraser` selected. Once I
unchecked those three options, everything went fine.

