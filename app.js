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

  //get POST params
  app.use(bodyParser.json());


  var artworkSchema ={
    id:
    {
      type: Number,
      select: true
    },
    artist:
    {
      type: String,
      select: true
    },
    title:
    {
      type: String,
      select: true
    },
    thumbnailUrl:
    {
      type: String,
      select: true
    }
  }

var Artwork = mongoose.model('Artwork', artworkSchema, 'artworks')



// api routes
// returns one artist
app.get('/api/artworks/artists/:id', function (req, res, next){
  Artwork.findById(req.params.id,function(err, name){
    if (err) return res.send(err);
    res.json(name.artist);
  });
});

// var artists = [];
// // lists all artists
// for(var i = 0; i< Artwork.length; i ++){
//   app.get('/api/artworks/artists', function (req,res,next){
//     res.push(res.artists);
//   });
//   return artists;
// }

// app.forEach(function(err,art){
//   if (err) return res.send(err);
//   var artists = [];
//   app.get(art, function (req, res, next) {
//     Artwork.find(for i = 0; i<art.length; i ++){
//     res.json(art[i].artist)
//   });
//   });
// });

app.get('/api/artworks/artists', function (req, res, next){
  Artwork.find({}, {"artist": 1},function (err,art){
    if(err) return res.send(err);
    res.json(art);
  }).limit(10)
});
//   Artwork.find(function(err, art){
//     if (err) return res.send(err);
//     (for (i = 0; i < art.length; i++){
//       res.json(art[i].artist)}).limit(10)};
// });

// frontend route
app.get('*', function(req, res){
  res.sendfile('./index.html');
});

var server = http.createServer(app);
server.listen(port);