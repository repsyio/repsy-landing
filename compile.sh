#!/usr/bin/env bash
set -e

export PATH="$PATH:node_modules/.bin"

npm install
mkdir -p web/css
npm run build:css
rm -rf web/css/style.prefix.css
rm -rf web/css/style.css
