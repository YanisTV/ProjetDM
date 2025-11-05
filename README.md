# Feedbacks

Bonne réalisation des algos. Attention aux paramètres des fonctions cf. détails ci-dessous

Voici quelques points d'amélioration :
- Attention, prendre l'habitude de positionner des paramètres (variables extérieures que recevra ta fonction pour son exécution) dans tes fonctions au lieu de saisir les données en dur dans le corps de ta fonction.
- Revoir les chemins relatifs pour charger le css, les 2 liens css que tu charges ne sont pas bons dans ton html, j'ai corrigé
- Prendre l'habitude de tout coder en Anglais, t'es dans la bonne direction pour ça.
- Pour le nommage des fichiers et dossiers, jamais d'accent, d'espace ou majuscules, idéalement tout en minuscule avec une séparation des mots par les tirets 6 ou 8
- Créer des dossiers pour ranger le css, js, images, etc. dans des dossiers dédiés. Généralement on utilise un dossier racine */public/* ou */assets/* ou */src/* tels que :
.
├── css
│   ├── main.css
│   └── contact.css
├── img
│   ├── profile.jpg
│   └── logo.svg
├── js
├── index.html
└── README.md

## Résultats tests automatisés

- Algorithmes : **136/155**
  - algo 3 : attention l'utilisateur peut donner 20 au lieu de 0.20, le résultat ne sera pas le même alors qu'on parle de la même chose.
  - algo 4 : à revoir, les frontières des heures n'étaient pas précises, elles le sont maintenant, attention aux valeurs limite par exemple avec 24 ou 0 à traiter
  - algo 5 : attention à ne pas oublier de déclarer ses variables avec un mot-clé, j'ai corrigé en rajoutant un *let* avec *i*
  - algo 8 : corriger pour retourner faux lorsque l'email est *test@gmail.10*
  - algo 9 : revoir la permutation entre 2 nombres en utilisant une variable temporaire
  - algo10 : fibonacci traiter le cas ou max vaut 1 et revoir pour les valeurs qui sont égales aux valeurs de la suite par exemple 21, 34, etc. qui se retrouvent exclues des résultats lorsque respectivement max vaut 21 et 34, etc.
  - algo 14 : gérer le cas où il y a 2 mots qui ont la même taille