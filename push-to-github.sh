#!/bin/bash
# Chasing Homestays — Push to GitHub
cd ~/Desktop/chasing-homestays

echo ""
echo "Paste your GitHub Personal Access Token (it won't be saved):"
read -s TOKEN
echo ""

echo "Cleaning git state..."
rm -rf .git

echo "Initializing fresh repo..."
git init
git config user.email "simplejov041990@gmail.com"
git config user.name "Jovie"
git add -A
git commit -m "Gold/black brand update — logo, color theme, real photos, contact form"
git branch -M main
git remote add origin https://$TOKEN@github.com/simplejov041990-art/chasing-homestays.git
git push -u origin main --force

echo ""
echo "Done! Your code is on GitHub."
echo "Vercel will auto-deploy in ~1 minute."
