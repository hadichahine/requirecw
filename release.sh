#!/bin/bash

mkdir release
cp source/* release/
cp package.json release/
node_modules/.bin/json -I -f release/package.json -e 'this.scripts = undefined'
node_modules/.bin/json -I -f release/package.json -e 'this.devDependencies = undefined'
node_modules/.bin/json -I -f release/package.json -e "this.main = 'requirecw.js'"
