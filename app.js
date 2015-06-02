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



// static route
app.get('/api/artworks', function (req, res){
  Artwork.findOne(function(err,art){
    res.send(art);
  })
})

app.listen(port);

console.log('Its magical here at ' + port);