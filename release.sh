#!/bin/bash

mkdir release
cp source/* release/
cp package.json release/
cd release
node_modules/.bin/json -I -f release/package.json -e 'this.scripts = undefined'
node_modules/.bin/json -I -f release/package.json -e 'this.devDependencies = undefined'
