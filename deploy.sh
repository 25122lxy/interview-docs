#!/usr/bin/env sh
 
# 确保脚本抛出遇到的错误
set -e
 
# 生成静态文件
npm run docs:build
 
# 进入生成的文件夹
cd docs/.vuepress/dist
 
git init
git add -A
git commit -m 'deploy'
 
# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:25122lxy/interview-docs.git master:gh-pages
#git push -u origin main
 
cd -
#cd ..
# rmdir /Q /S dist