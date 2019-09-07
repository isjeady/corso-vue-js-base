## Deploy di un applicazione Vue Js su Heroku

##### 1. Crea l'applicazione su Heroku come nel video oppure lancia il seguente comando:

```
heroku create <YOUR-PROJECT-NAME-HERE>
```

Per evitare che Heroku installi inutili dipendenze di sviluppo nella distribuzione successiva, impostiamo NODE_ENV su production

```
heroku config:set NODE_ENV=production --app <YOUR-PROJECT-NAME-HERE>
```

###### 2. Crea server.js per Buildare su Heroku:

```
npm install express --save
```

Crea un file come nel video,server.js nella root del progetto:


```
// server.js
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
```

Effettua la build del progetto:

```
npm run build
```

Testa se funziona tutto correttamente lanciando il seguente comando e visitando http://localhost:5000

```
node server.js
```
La tua app dovrebbe essere raggiungibile all'indirizzo riportato.

Modifica il file package.json così:

```
// package.json
{
  "name": "<YOUR-PROJECT-NAME-HERE>",
  "version": "1.0.0",
  "description": "A Vue.js project",
  "author": "",
  "private": true,
  "scripts": {
    "dev": "node build/dev-server.js",
    "build": "node build/build.js",
    "start": "node server.js",   <--- AGGIUNGI QUESTA LINEA
...
...
```

##### 2- Deploy su Heroku:

Lancia git init:

```
git init
```

e il seguente comando:

```
heroku git:remote --app <YOUR-PROJECT-NAME-HERE>
```

Modifica il file .gitignore rimuovendo la linea con dist/

```
.DS_Store
node_modules/
dist/  <--- RIMUOVI QUESTA LINEA
npm-debug.log*
yarn-debug.log*
yarn-error.log*
test/unit/coverage
test/e2e/reports
selenium-debug.log
```

Lancia git add:

```
git add . && git commit -a -m "Adding files."
```

Effettua il deploy:

```
git push heroku master
```

Alla fine del deploy dovresti rangiure la tua app andando sul pulsante in alto a destra oppure al seguente indirizzo:

```
https://<YOUR-PROJECT-NAME-HERE>.herokuapp.com
```

### Buon Lavoro!!! :-) 