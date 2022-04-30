#!/bin/sh

echo "Hello there! Let's start this..."

yarn build

rm -rf ../docs/*

cp -r build/* ../docs/

echo "Bye!"
echo "Made with <3 by Carlos Santos <c42759@gmail.com>"

sleep 3