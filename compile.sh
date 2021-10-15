#!/usr/bin/env bash
set -e

export PATH="$PATH:node_modules/.bin"

npm install
# npm run compile:sass
npm run build:css
rm -rf web/css/style.prefix.css
rm -rf web/css/style.css
