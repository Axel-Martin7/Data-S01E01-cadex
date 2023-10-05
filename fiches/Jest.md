# Jest

Jest est un framework de test JavaScript open-source développé et maintenu par Facebook. Il a été conçu pour offrir un environnement de test simple et intuitif pour les projets JavaScript.

Voici quelques caractéristiques clés de Jest :

- Facilité d'utilisation : Jest offre une configuration minimale et une API simple pour écrire et exécuter des tests.
- Test basé sur les snapshots : Jest permet de capturer des instantanés (snapshots) de l'état de l'application et de les comparer aux résultats attendus. Cela facilite la détection des changements inattendus.
- Tests parallèles : Jest exécute les tests en parallèle, ce qui permet d'obtenir des temps d'exécution plus rapides et une meilleure performance.
- Mocking : Jest offre des fonctionnalités de mocking pour les fonctions et les modules, permettant d'isoler les dépendances et de contrôler les comportements pendant les tests.
- Couverture de code : Jest intègre Istanbul pour générer des rapports de couverture de code, afin de mesurer la quantité de code testé et d'identifier les parties non couvertes par les tests.

## Mise en place

Tout comme ESlint, pour une utilisation confortable, le plus simple est d'installer Jest en global et en local sur votre projet

```bash
npm i -g jest
```

puis pour le projet

```bash
npm i --save-dev jest
```

il suffit ensuiote d'initilaiser jest en se plaçant dans le dossier du projet et en tapant

```bash
jest --init
```

Puis de répondre aux questions, ce qui permettra la génération du fichier de configuration 'jest.config.js'.

## Fichiers de tests

Il est possible de rendre nos fichiers de tests reconnaissables par jest de 2 façons :

- les fichiers se trouvent dans un ou des dossiers nommés `__test__`
- les fichiers ont leur nom qui se termine par .test.js ou .specs.js, comme par exemple `cadex.test.js` ou `cadex.specs.js`

## Ecriture des tests

Pour écrire nos test on utilise les fonctions `describe`, `test` et `expect`

exemple :

```javascript
const sum = require('./myFunction');

describe('sum', () => {
  it('adds two numbers', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });
});
```

## Execution des tests

Pour executer l'ensemble des tests contenus ds le dossier du projet, il suffit de taper la commande dans le terminal

```bash
jest
```

Plus d'infos :

Bien démarrer : https://jestjs.io/fr/docs/getting-started
la liste des comparateurs : https://jestjs.io/fr/docs/expect
