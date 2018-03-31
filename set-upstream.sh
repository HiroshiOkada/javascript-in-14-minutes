#!/bin/bash

UPSTREM=git@github.com:jgthms/javascript-in-14-minutes.git

git checkout master
git remote add upstream "$UPSTREM"
git fetch upstream
git merge upstream/master
