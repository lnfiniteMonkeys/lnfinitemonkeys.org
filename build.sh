#!/bin/bash

# Build the ClojureScript code in advanced mode
clojure -M:release

# Copy the static assets from resources/public to docs
cp -r resources/public/* docs/

echo "Build complete! Files are ready in docs/ for GitHub Pages"