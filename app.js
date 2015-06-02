// modules
var express = require('express'),
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

  //get POST params
  app.use(bodyParser.json());


  var artworkSchema ={
    id: Number,
    artist: String,
    title: String,
    thumbnailUrl: String
  }

var Artwork = mongoose.model('Artwork', artworkSchema, 'artworks')



// api route
app.get('/api/artworks/:id', function (req, res, next){
  Artwork.findById(req.params.id,function(err,art){
    if (err)
      res.send(err);
    res.json(art.artist);
  });
});

// frontend route
app.get('*', function(req, res){
  res.sendfile('./index.html');
});

app.listen(port);