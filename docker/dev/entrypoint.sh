#!/bin/bash

NODE_MODULES="/app/node_modules"

if [ -d $NODE_MODULES ]; then
    echo "[INFO] NPM dependencies already installed"
else
    echo "[INFO] Installing NPM dependencies"
    npm install
fi

echo "[INFO] Running development sever"
npm run dev
