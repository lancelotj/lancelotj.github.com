---
layout: post
categories: [kvm, ubuntu]
tumblr_id: 9818120415
date: 2011-04-09 02:48:00 UTC
title: Clone a Ubuntu Virtual Machine Image
---

I recently created a Ubuntu server virtual machine image and wanted to clone it so that I don't need to install everything from scratch again. It turned out this is fairly easy.



First,  copy the image file and create a new virtual machine from it. Next, start and log in the "new" machine.

Now, remove `70-persistent-net.rules`, otherwise the network will not work:

    sudo rm /etc/udev/rules.d/70-persistent-net.rules

This file will be re-generated after a reboot.

Next, change the hostname in `/etc/hostname` and /`etc/hosts` according to your preference. 

Finally, reboot and enjoy the new machine.

See also: [Cloning Ubuntu 10.04 Server KVM guests efficiently](http://koo.fi/tech/2010/11/28/cloning-ubuntu-1004-server-kvm-guests-efficiently/)
