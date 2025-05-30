#!/bin/bash

# Nom du dépôt GitHub
REPO_NAME="portfolio_keita_mahamadou"
GITHUB_USERNAME="KeitaMahamadou01"
REMOTE_URL="https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"

# Initialiser le dépôt Git
echo "🛠️ Initialisation du dépôt Git..."
git init
git branch -M main
git remote add origin $REMOTE_URL

# Installer les dépendances et build
echo "📦 Installation des dépendances..."
npm install

echo "🏗️ Construction du projet pour GitHub Pages..."
npm run build

# Déplacer le build dans une branche dédiée
echo "🚀 Déploiement sur GitHub Pages..."
git add .
git commit -m "Déploiement initial du portfolio"
git push -u origin main

# Déployer le dossier build avec gh-pages
npm install gh-pages --save-dev

# Ajouter les scripts dans package.json (instructions à faire manuellement si non modifiable ici)
echo "📝 Ajouter ces scripts dans ton package.json :"
echo '
"homepage": "https://KeitaMahamadou01.github.io/portfolio_keita_mahamadou",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
'

echo "✅ Ensuite exécute : npm run deploy"
