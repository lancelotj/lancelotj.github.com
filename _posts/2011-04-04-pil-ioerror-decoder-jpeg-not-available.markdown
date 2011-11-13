---
layout: post
category: pil
tumblr_id: 9810456800
date: 2011-04-04 23:46:00 UTC
title: PIL IOError: decoder jpeg not available
---

PIL IOError: decoder jpeg not available

Today I got this error when I try to resize a JPEG image in python using the Python Imaging Library (PIL):

    File "/usr/local/lib/python2.6/dist-packages/PIL/Image.py", line 1290, in resize
       self.load()
    File "/usr/local/lib/python2.6/dist-packages/PIL/ImageFile.py", line 189, in load
       d = Image._getdecoder(self.mode, d, a, self.decoderconfig)
    File "/usr/local/lib/python2.6/dist-packages/PIL/Image.py", line 385, in _getdecoder
       raise IOError("decoder %s not available" % decoder_name)
    IOError: decoder jpeg not available

This is because when PIL was being compiled and installed, it did not find the JPEG library. To fix this problem, run:

    sudo aptitude install libjpeg-dev

Then run the following commands to re-install the PIL library:

    sudo rm -rf /usr/local/lib/python2.6/dist-packages/PIL
    sudo easy_install pil

Check the PIL setup summary which is inside the output messages. It shows that it supports JPEG now:

    PIL 1.1.7 SETUP SUMMARY
    -------------------------------
    ...
    --- JPEG support available
    ...

All the commands here works under Ubuntu 10.04.
