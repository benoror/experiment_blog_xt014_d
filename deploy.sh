#!/bin/bash
rm -rf dist
ember build --environment=production
cd dist
cp index.html 200.html
surge --domain caring-eggs.surge.sh
