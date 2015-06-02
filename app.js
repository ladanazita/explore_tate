var express = require('express'),
  mongoose = require('mongoose'),
  bodyparser = require('body-parser'),
  methodOverride = require('method-override');

  mongoose.connect('mongodb://localhost/tate')

  var artworkSchema ={
    artist: String,
    title: String,
    thumbnailUrl: String
  }

var Artwork = mongoose.model('Artwork', artworkSchema, 'artworks')

var app = express()

app.get('/', function (req, res){
  Artwork.findOne(function(err,art){
    res.send(art);
  })
})

app.listen(3000);