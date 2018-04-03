#!/bin/bash

git checkout gh-pages
git merge master -m "Merge branch 'master' into gh-pages [ci skip]"
npm run deploy
git add .
git commit -m "Build for deploy [ci skip]"
git push origin gh-pages
