// modules
var express = require('express'),
  http = require('http'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser');

var app = express()
// set port
var port = process.env.PORT || 3000;



// connect to mongoDB
mongoose.connect('mongodb://localhost/tate', function(err){
  if(err){
    console.log('Wuh Oh! Connectin erro', err);
  } else{
    console.log('Its magical here at ' + port);
  }
});

// require routes
var art = require('routes/api/v1/arts');
var home = require('routes/index');


  //get POST params
  app.use(bodyParser.json());
  app.use('/', home);
  app.use('/', art);

var server = http.createServer(app);
server.listen(port);