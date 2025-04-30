const express = require('express');
const app = express();

let port = 5000;

app.listen(process.env.port || port, () =>{
  console.log('Servidor em execução na porta '+ port);
});

const bodyParser = require('body-parser')
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.send('ENDEREÇO INVÁLIDO!');
});

const routes = require('./routes/api');
app.use('/api', routes);