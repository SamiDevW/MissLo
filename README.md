# MissLo

API de gestion des missions locales

# Base de données

L'api est basé sur une base de données relationnelle sql (mariadb).Les bases de données relationnelles sont utilisées pour les applications qui requiert une interraction entre les données.
`=> = est lié`
L'utilisateur => mission.
La candidature => mission & à => l'utilisateur.
Les deux types de base données (sql,nosql) peuvent etre utilisées dans ce cas (application simple).

# Quickstart

Pour demarrer l'application il faut :

- installer les dépendences :
  `npm install`
- creer un fichier .env en se basant sur exemple ENV
- creer la base de données a partir du fichier prisma
  `npx prisma db push`
- update the prisma client
  `npx prisma generate`
- lancer le serveur
  `npm run dev`

# Using the api

La documentation est disponible en ligne : https://documenter.getpostman.com/view/39337832/2sAYdeNCQU

- Note: la variable raw dans les exemples de requetes bug et s'affiche en string, mais c'est bien un json qui est attendu.
