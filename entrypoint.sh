#!/bin/sh
set -e

echo "Running database migrations..."
node node_modules/prisma/bin/prisma.js migrate deploy

echo "Starting application..."
exec node .output/server/index.mjs
