---
layout: post
title: Install node.js in Ubuntu 10.04
date: 2012-03-12
---

Ubuntu 10.04 does not have a default node.js package. So if you want to use it, you need to install it manually:

    sudo aptitude install git-core curl build-essential openssl libssl-dev
    git clone https://github.com/joyent/node.git && cd node && git checkout v0.6.11
    ./configure
    make
    sudo make install
    node -v

"v0.6.11" is the current release version of node.js. If you are not sure, run `git tag` to check which versions are available.

Up to this point, you are able to use the `node` command. You can then install `npm` which is a package manager of node.js its own:

    curl http://npmjs.org/install.sh | sudo sh 

After that, it's easy to install other node.js libraries. For example to install `uglifyjs`, simply run:

    sudo npm install uglify-js -g 
