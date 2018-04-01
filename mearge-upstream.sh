#!/bin/bash

UPSTREM=git@github.com:jgthms/javascript-in-14-minutes.git

git checkout jgthms/master
git fetch upstream
git merge upstream/master

