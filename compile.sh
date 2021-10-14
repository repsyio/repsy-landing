#!/usr/bin/env bash
set -e

export PATH="$PATH:node_modules/.bin"

BASE_DIR=$(dirname "$0")

cd "$BASE_DIR"
npm install
npm run build:css
rm -rf web/css/style.prefix.css
rm -rf web/css/style.css
