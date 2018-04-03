#!/bin/bash

git checkout gh-pages
git merge master -m "Merge branch 'master' into gh-pages [ci skip]"
git checkout master -- index.html _data _includes _javascript _layouts _sass
npm i
npm run deploy
if ! git diff --exit-code --quiet; then
  git add .
  git commit -m "Build for deploy [ci skip]"
fi
git push origin gh-pages
