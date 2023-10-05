# JSDoc

JSDoc est un système de documentation pour le code JavaScript, qui utilise des commentaires spéciaux directement dans le code pour générer une documentation technique.

## 1. Commentaires JSDoc

Les commentaires JSDoc commencent par `/**` et se terminent par `*/`. Ils utilisent des tags (mots-clés précédés d'un @) pour décrire les différentes parties du code. Par exemple :

```javascript
/**
 * Cette fonction additionne deux nombres.
 * @param {number} a - Le premier nombre.
 * @param {number} b - Le deuxième nombre.
 * @returns {number} La somme des deux nombres.
 */
function addition(a, b) {
  return a + b;
}
```

## 2. les tags courants

Voici quelques tags couramment utilisés dans JSDoc :

- `@param` : décrit un paramètre de la fonction
- `@returns` ou `@return` : décrit la valeur de retour de la fonction
- `@type` : indique le type d'une variable
- `@typedef` : définit un type personnalisé
- `@class` : décrit une classe
- `@constructor` : indique une fonction constructeur
- `@extends` : décrit l'héritage d'une classe
- `@property` ou `@prop` : décrit une propriété d'un objet ou d'une classe
- `@method` : décrit une méthode d'un objet ou d'une classe
- `@example` : fournit un exemple d'utilisation
- `@module` : décrit un module
- `@exports` : décrit les éléments exportés par un module

## 3. Types

Les types peuvent être indiqués entre accolades {}. Les types courants sont `number`, `string`, `boolean`, `object`, `Array`, `Function`, et `null`. Vous pouvez également définir des types personnalisés avec `@typedef`.

```javascript
/**
 * @typedef {Object} Point
 * @property {number} x - Coordonnée X.
 * @property {number} y - Coordonnée Y.
 */

/**
 * Calcule la distance entre deux points.
 * @param {Point} pointA - Le premier point.
 * @param {Point} pointB - Le deuxième point.
 * @returns {number} La distance entre les points.
 */
function distance(pointA, pointB) {
  // ...
}
```
