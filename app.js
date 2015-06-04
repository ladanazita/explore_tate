// modules
require('dotenv').load();
var express = require('express'),
  http = require('http'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  path = require('path'),
  app = express();

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,  Authorization');
  next();
});

// set port
var port = process.env.PORT || 3000;

// connect to mongoDB

var mongoDB = mongoose.connect(process.env.MONGOLAB_URI).connection;
mongoDB.on('error', function(err){
    console.log('【・ヘ・?】 Connection error', err);
  });
mongoDB.once('open', function(){
  console.log(' ＼（＾▽＾）／ Its magical here at ' + port);
});

// SPA
var index = require('./routes/index');
// API Routes
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

