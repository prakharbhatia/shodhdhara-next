#!/bin/bash
# Reads GITHUB_TOKEN from .env and pushes to origin

if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

if [ -z "$GITHUB_TOKEN" ]; then
  echo "❌ GITHUB_TOKEN is not set in .env"
  exit 1
fi

git remote set-url origin https://prakharbhatia:${GITHUB_TOKEN}@github.com/prakharbhatia/shodhdhara-next.git
git push
git remote set-url origin https://github.com/prakharbhatia/shodhdhara-next.git
echo "✅ Pushed and remote URL cleaned up"
