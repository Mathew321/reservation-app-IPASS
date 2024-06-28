#!/bin/bash

# Navigate to the app's directory
cd "$HOME/site/wwwroot"

# Run your commands
npm run format
npm run build
npm install
npm run serve
