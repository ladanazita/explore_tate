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

var mongoDB = mongoose.connect(process.env.MONGOLAB_URI).connection;
mongoDB.on('error', function(err){
    console.log('Wuh Oh! Connection error', err);
  });
mongoDB.once('open', function(){
  console.log('Its magical here at ' + port);
});

// function handleCors(req, res, callback) {

//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Authorization');

//     // CORS OPTIONS request, simply return 200
//     if (req.method == 'OPTIONS') {
//         res.statusCode = 200;
//         res.end();
//         callback.onOptions();
//         return;
//     };
//     callback.onContinue();
//   };

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

