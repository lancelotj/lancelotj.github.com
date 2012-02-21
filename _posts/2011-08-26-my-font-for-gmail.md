---
layout: post
date: 2012-08-26 22:19:00 UTC
title: My Font for Gmail
---

I have lots of plain text emails in Gmail. The format of those emails is always a problem: code and other nicely formated text are not aligned well because Gmail uses "arial,sans-serif" as the default font. I couldn't find a good solution to change it to a [monospaced](http://en.wikipedia.org/wiki/Monospaced_font) one, so I decided to write my own Google Chrome extension: [My Font for Gmail](https://chrome.google.com/webstore/detail/olhcogoioikcdeceiakjbandbaifohik). 

This extension changes the default font of Gmail to any font you like. To use it: 

1. Click the "wrench" icon on upper-right corner of Chrome, 
2. Select tools->Extensions->My Font for Gmail™->options.
3. Choose a pre-defined font from the drop-down menu or enter any font in your system.
4. Click "Save".
5. *Refresh* the Gmail page or re-open it.

Please note that this extension works best for plain-text emails. Rich-text(HTML) emails will possibly remain its original font because those emails can set their own font for each element. Usually this doesn't bother me since they are already well-formatted.

Source code is published at [my git repository](https://github.com/lancelotj/myfont4gmail) under MIT license.
 
