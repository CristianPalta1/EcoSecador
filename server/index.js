const express = require('express');
const bodyParser = require('body-parser');
const mongo = require('./db/dbconnection');
const app = express();



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use((req,res,next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', express.static(__dirname + '/public'));

const routeEcosecador = require('./routes/ecosecador')(app);


mongo.conectar(app);


/* 
segcauca
Segcauca2580
*/