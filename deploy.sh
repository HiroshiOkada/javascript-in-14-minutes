#!/bin/bash

git checkout gh-pages
git merge master -m "Merge branch 'master' into gh-pages [ci skip]"
git push origin gh-pages
