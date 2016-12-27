config = require('./services/config');
var es = require('elasticsearch');
var esClient = new es.Client({host: config.elastic_host, log:'info'});
var db = new (require('./services/storage'))(esClient);

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


