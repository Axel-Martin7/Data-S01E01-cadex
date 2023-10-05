# Joi

Joi est un puissant validateur d'objets JavaScript qui permet de valider des données en fonction de schémas définis. Il est couramment utilisé avec Node.js et des frameworks tels qu'Express pour valider les données du côté serveur. Dans ce cours, nous aborderons les bases de l'utilisation de Joi et quelques fonctionnalités avancées.

## 1. Installation et importation

Pour commencer, installez Joi via npm

```bash
npm install joi
```

Ensuite, importez Joi dans votre fichier JavaScript :

```javascript
const Joi = require('joi');
```

## 2. Création d'un schéma de validation

Un schéma est un objet qui définit les règles de validation pour les données. Pour créer un schéma, utilisez la méthode Joi.object() :

```javascript
const schema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  email: Joi.string().email().required(),
});
```

Dans cet exemple, le schéma définit des règles pour les champs `username`, `password` et `email`. Les méthodes en chaîne comme `min()`,` max()`, `pattern()` et `required()` sont utilisées pour spécifier les contraintes sur chaque champ.

## 3. validation des données

Pour valider des données en fonction d'un schéma, utilisez la méthode validate() :

```javascript
const data = {
  username: 'JohnDoe',
  password: 'myp@ssword123',
  email: 'john.doe@example.com',
};

const validationResult = schema.validate(data);

if (validationResult.error) {
  console.log('Validation error:', validationResult.error.details[0].message);
} else {
  console.log('Validation successful');
}
```

La méthode validate() renvoie un objet contenant une propriété error si la validation échoue. Vous pouvez accéder aux détails de l'erreur pour afficher un message d'erreur spécifique.

## 4. Validation conditionnelle et références

Joi permet également la validation conditionnelle et les références à d'autres champs. Par exemple, vous pouvez exiger une confirmation de mot de passe :

```javascript
const schema = Joi.object({
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
});
```

Dans cet exemple, le champ confirmPassword doit être égal au champ password.

## 5. Utilisation avec Express

Vous pouvez intégrer Joi avec Express pour valider les données entrantes dans les routes :

```javascript
const express = require('express');
const app = express();
app.use(express.json());

const userSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  email: Joi.string().email().required(),
});

app.post('/register', (req, res) => {
  const validationResult = userSchema.validate(req.body);

  if (validationResult.error) {
    res.status(400).send(validationResult.error.details[0].message);
  } else {
    // Traiter les données valides et enregistrer l'utilisateur, par exemple
    res.send('Utilisateur enregistré avec succès');
  }
});

app.listen(3000, () => {
  console.log('Serveur en écoute sur le port 3000');
});
```

## 6. Création d'un middleware de validation

Pour réutiliser la logique de validation dans plusieurs routes, vous pouvez créer un middleware de validation :

```javascript
function validate(schema) {
  return (req, res, next) => {
    const validationResult = schema.validate(req.body);

    if (validationResult.error) {
      res.status(400).send(validationResult.error.details[0].message);
    } else {
      next();
    }
  };
}

app.post('/register', validate(userSchema), (req, res) => {
  // Traiter les données valides et enregistrer l'utilisateur, par exemple
  res.send('Utilisateur enregistré avec succès');
});
```

Dans cet exemple, la fonction `validate()` prend un schéma Joi et renvoie un middleware Express qui valide les données du corps de la requête en fonction du schéma. Vous pouvez appliquer ce middleware à différentes routes pour valider les données entrantes.

En résumé, Joi est un framework de validation d'objets JavaScript flexible et puissant qui facilite la validation des données côté serveur. Grâce à ses nombreuses fonctionnalités et options de personnalisation, vous pouvez facilement créer des schémas de validation robustes pour vos applications Node.js et Express.
