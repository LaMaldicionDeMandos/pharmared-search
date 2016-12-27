config = require('./services/config');
var es = require('elasticsearch');
var esClient = new es.Client({host: config.elastic_host, log:'info'});
var db = new (require('./services/storage'))(esClient);

//PRUEBA
var Entity = require('./model/model');
db.addEntity(new Entity('saraza', 'Marcelo Pasut', 'Lavalleja 1745', Entity.EntityType.PHARMACIST));

/* Routers */


var bodyParser = require('body-parser');
var express = require('express');


var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

/* ENDPOINTS */


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


