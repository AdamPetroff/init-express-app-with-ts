#!/usr/bin/env bash
./node_modules/.bin/prettier --write $1;
./node_modules/.bin/eslint --fix $1;