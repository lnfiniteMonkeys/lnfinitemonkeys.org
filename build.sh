#!/bin/bash

# Build the ClojureScript code in advanced mode
clojure -M:release

rm -rf docs/*

# Create the 'docs' directory if it does not exist and copy the static assets from resources/public to docs
mkdir -p docs && cp -r resources/public/* docs/

echo "Build complete! Files are ready in docs/ for GitHub Pages"