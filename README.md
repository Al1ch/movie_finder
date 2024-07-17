# README

## Description
Ce projet est une application Next.js. Ce fichier README vous guidera à travers les étapes nécessaires pour cloner le projet, installer les dépendances, configurer les variables d'environnement et lancer l'application en local.

## Prérequis
Avant de commencer, assurez-vous d'avoir les logiciels suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) (Version 14.x ou supérieure)
- [Git](https://git-scm.com/)

## Étapes pour cloner le projet

1. **Ouvrez votre terminal** : Vous pouvez utiliser un terminal intégré dans votre éditeur de code ou un terminal séparé.

2. **Naviguez jusqu'au répertoire où vous souhaitez cloner le projet** : Utilisez la commande `cd` pour naviguer jusqu'au répertoire de votre choix.

    ```bash
    cd /chemin/vers/votre/repertoire
    ```

3. **Clonez le projet** : Utilisez la commande `git clone` suivie de l'URL du dépôt. Remplacez `https://github.com/Al1ch/movie_finder.git` par l'URL de votre dépôt Git.

    ```bash
    git clone URL_DU_DEPOT
    ```

4. **Accédez au répertoire du projet cloné** :

    ```bash
    cd nom-du-projet
    ```

## Installation des dépendances

1. **Assurez-vous d'être dans le répertoire du projet** :

    ```bash
    cd nom-du-projet
    ```

2. **Installez les dépendances** : Utilisez npm ou yarn pour installer toutes les dépendances nécessaires.

    - Avec npm :

        ```bash
        npm install
        ```

    - Avec yarn :

        ```bash
        yarn install
        ```

## Configuration des variables d'environnement

1. **Créez un fichier `.env.local`** à la racine du projet.

2. **Ajoutez la variable d'environnement suivante** dans ce fichier :

    ```
    NEXT_PUBLIC_MOVIE_API_KEY=VotreCleAPI
    ```

    Remplacez `VotreCleAPI` par la clé API fournie.

## Lancer l'application

1. **Démarrez le serveur de développement** : Utilisez npm ou yarn pour démarrer le serveur de développement.

    - Avec npm :

        ```bash
        npm run dev
        ```

    - Avec yarn :

        ```bash
        yarn dev
        ```

2. **Accédez à l'application dans votre navigateur** : Ouvrez votre navigateur et allez à l'adresse suivante :

    ```
    http://localhost:3000
    ```

    Vous devriez voir votre application Next.js en cours d'exécution.
