# ESLint

ESLint est un outil open-source de linting pour JavaScript qui permet de détecter et de corriger les erreurs de syntaxe, les pratiques de codage incorrectes et les problèmes de style dans votre code JavaScript.

Un linter est un outil d'analyse statique qui permet de vérifier la qualité du code source en détectant les erreurs de syntaxe, les problèmes de sécurité et les pratiques de codage incorrectes. Un linter vérifie votre code en fonction de règles spécifiques et vous indique les problèmes potentiels que vous pouvez corriger.

Un formatter est un outil qui permet de formater le code source en respectant des conventions spécifiques. Il peut être utilisé pour uniformiser le style de codage d'une équipe, améliorer la lisibilité du code ou pour se conformer à des règles de codage spécifiques. Contrairement à un linter, un formatter ne détecte pas les erreurs de syntaxe ou les pratiques de codage incorrectes, il se concentre uniquement sur la mise en forme du code source.

En résumé, un linter est utilisé pour détecter les erreurs de syntaxe et les pratiques de codage incorrectes, tandis qu'un formatter est utilisé pour formater le code source conformément à des conventions spécifiques. ESLint est à la fois un linter et un formatter pour JavaScript.

## Mise en place

Le plus simple pour utiliser ESLint est de l'installer en global

```bash
npm i -g eslint
```

Pour s'en servir ensuite sur un projet, il faut se rendre à la racine du projet et l'initialiser :

```bash
eslint --init
```

Il suffit ensuite de répondre aux questions pour générer un fichier de configuration 'eslintrc' qui sera pris en compte par VSC.

Il est également possible d'utiliser ESlint comme formatter pour Javascript. Pour ça :

- dans les préférences de VSC, cocher la case 'Enable ESLint as a formatter'
- éditer le fichier de configuration utilisateur et définir ESLint comme formatter par défaut pour Javacript
  - CTRL-SHIFT-P -> Preferences: Open user settings
  - ajouter ou remplacer le formatter par defaut pour Javascript

```json
"[javascript]": {
  "editor.defaultFormatter": "dbaeumer.vscode-eslint"
}
```
