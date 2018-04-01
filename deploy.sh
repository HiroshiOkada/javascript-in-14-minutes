#!/bin/bash

git checkout gh-pages
git merge master -m "Merge branch 'master' into gh-pages"
git push origin gh-pages
