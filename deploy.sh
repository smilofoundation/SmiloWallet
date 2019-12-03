#!/bin/sh

#if [ "`git status -s`" ]
#then
#    echo "The working directory is dirty. Please commit any pending changes."
#    exit 1;
#fi

#echo "Deleting old publication"
#rm -rf publicweb
#mkdir publicweb
#git worktree prune
#rm -rf .git/worktrees/public/
#
#echo "Checking out gh-pages branch into public"
#git worktree add -B gh-pages publicweb origin/gh-pages
#
#echo "Removing existing files"
#rm -rf publicweb/*
#

mkdir -p publicweb

echo "Generating site"
#npm run build:hash && cp -r dist/* publicweb

cp CNAME public/CNAME
#cp 404.html public


echo "Updating gh-pages branch"
cd publicweb && git pull && git add --all && git commit -m "Publishing to gh-pages (publish.sh)"


#echo "Pushing to github"
git push --all
