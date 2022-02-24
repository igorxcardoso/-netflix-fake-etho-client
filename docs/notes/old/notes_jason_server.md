Crie uma pasta e dentro dela digite o seguinte comando
```
npm install -g json-server
```
Após isso crie um arquivo chamado db.json. Por fim, copie a seguinte linha em scrips no *package.json*
```
"start": "json-server --watch db.json --port 3000"
```