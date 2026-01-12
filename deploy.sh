#!/bin/bash
npm run build
cd dist
git init
git add -A
git commit -m "Deploy"
git push -f https://github.com/Evan-Boodoosingh/lost-dog.git HEAD:gh-pages
cd ..
rm -rf dist/.git
echo "Deployment successful!"
