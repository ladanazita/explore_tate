// modules
var express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override');

var app = express()
  // set port
  var port = process.env.PORT || 3000;

  // connect to mongoDB
  mongoose.connect('mongodb://localhost/tate');

  //get POST params
  app.use(bodyParser.json());


  var artworkSchema ={
    artist: String,
    title: String,
    thumbnailUrl: String
  }

var Artwork = mongoose.model('Artwork', artworkSchema, 'artworks')



// api route
app.get('/api/artworks', function (req, res){
  Artwork.findOne(function(err,art){
    if (err)
      res.send(err);

    res.json(art);
  });
});

// frontend route
app.get('*', function(req, res){
  res.sendfile('index.html');
});

app.listen(port);

console.log('Its magical here at ' + port);