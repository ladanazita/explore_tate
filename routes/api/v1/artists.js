var express = require('express');
var router = express.Router();
var Artwork = require('../../../models/Artwork');

// api routes
// returns one artist
router.get('/api/v1/artworks/artists/:id', function (req, res, next){
  Artwork.findById(req.params.id,function(err, name){
    if (err) return res.send(err);
    res.json(name.artist);
  });
});

// list all the artists
router.get('/api/v1/artworks/artists', function (req, res, next){
  Artwork.find({}, {"artist": 1}, function (err,art){
    if(err) return res.send(err);
    res.json(art);
  }).limit(10);
});

router.post('/api/v1/artworks/artists', function (req, res, next){
  Artwork.save({
    artist: req.params.artist,
    title: req.params.title,
    thumbnailUrl: req.param.thumbnailUrl
  }, function(error){
    if(error){
      return res.json({
        success: false,
        message: error
      });
    }

  })
});



module.exports = router;