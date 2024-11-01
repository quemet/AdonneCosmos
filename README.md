# AdonneCosmos

## 1. Titre du projet

Cosmos Language Server

## 2. Description

Créer un addon pour vscode qui supporte la syntaxe du langage cosmos.

## 3. Table des matières

- [Requirements](#4-requirements)
- [Installation](#5-installation)
- [Utilisation](#6-utilisation)
    - [Execution de l'extension en mode Debug](#61-execution-de-lextension-en-mode-debug)
    - [Utilisation de l'extension installé](#62-utilisation-de-lextension-installé)
- [Journal de travail](#7-journal-de-travail)
- [Technologie Utilisé](#8-technologie-utilisé)
- [Tache qui reste à faire](#9-taches-qui-reste-à-faire)
- [Auteur(s)](#10-auteurs)
- [Licences](#11-licence)

## 4. Requirements

- Node
- Visual Studio Code
- Le language [cosmos](https://github.com/jonathanMelly/cosmos) 

## 5. Installation

- Si vous n'avez pas Visual Studio Code, installez-le à cette [adresse](https://code.visualstudio.com/Download)
- `git clone https://github.com/quemet/AdonneCosmos.git` -> Clone le projet 

## 6. Utilisation

### 6.1. Execution de l'extension en mode Debug

- `cd AdonneCosmos/cosmos-exttension` -> Ce dépalce dans le répertoire de l'extension
- `code .` -> Permet d'ouvrir VS Code avec comme espace de travail le dossier courant
- Appuyer sur la touche `F5` -> Permet d'éxecuter localement l'extension

### 6.2. Utilisation de l'extension installé

- `cd AdonneCosmos/cosmos-exttension` -> Ce déplace dans le répertoire
- `code --install-extension cosmos-extension-0.0.1.vsix` -> Installe l'extension dans VS Code

## 7. Journal de travail

Pour voir le journal de travail, veuillez vous rendre dans le dossier racine de ce projet et ouvrez le fichier nommé **JNLTRAV-QueMetroz.xlsm**, puis allez dans l'onglet **Journal de Travail**

<br>
<br>
<br>

## 8. Technologie Utilisé

![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)

<br>

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

<br>

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

## 9. Taches qui reste à faire

- Adapter l'extension pour les erreurs de syntaxes et les warnings
- Test de l'extension avec Tests unitaire
- Publier l'extension (Avec le marketplace pour l'installer depuis le marketplce de vscode)

## 10. Auteur(s)

**Auteur** : [Quentin Métroz](https://github.com/quemet)

## 11. Licence

Ce projet est sous licence [MIT](https://github.com/quemet/AdonneCosmos/blob/main/LICENSE).
