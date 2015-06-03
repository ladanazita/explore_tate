// modules
var express = require('express'),
  http = require('http'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  d3 = require('d3'),
  path = require('path'),
  browserify = require('browserify'),
  app = express();
// set port
var port = process.env.PORT || 3000;
// connect to mongoDB
var mongoURI = 'mongodb://localhost:27017/tate';
mongoose.connect( mongoURI|| process.env.MONGODB_URI, function(err){
  if(err){
    console.log('Wuh Oh! Connectin error', err);
  } else{
    console.log('Its magical here at ' + port);
  }
});

// require routes
var index = require('./routes/index');
var artists = require('./routes/api/v1/artists');


  //get POST params
  app.use(bodyParser.json());
  app.use('/', index);
  app.use('/', artists);


  app.use(express.static(__dirname + '/public'));

  app.engine('.html', require('ejs').__express);
  app.set('view engine', 'html');

var server = http.createServer(app);
server.listen(port);