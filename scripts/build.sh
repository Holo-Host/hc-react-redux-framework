#!/bin/bash
# Build frontend app and copy code to /build

# Delete build if exist - start fresh :-)
if [ -d "build" ]; then
  rm -fR build/
fi

# Create build folder
mkdir -p build/

# copy hc backend to build folder
cp -Rf backend/* build/

# Buid frontend from React
(cd frontend && npm run build)

# Move frontend to /build
cp -Rf frontend/build/* build/ui

# clean up
rm -R frontend/build/
