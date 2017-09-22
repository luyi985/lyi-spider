#!/bin/sh

cd /app
echo '--------List files in /app'
ls
echo '--------List files in /app/app'
ls ./app
echo '--------Instal packages'
npm install -g yarn
yarn
echo '--------Run the code'
npm start
