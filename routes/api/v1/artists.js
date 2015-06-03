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
  var artwork = new Artwork({
    title: req.params.title,
    artist: req.params.artist,
    thumbnailUrl: req.params.thumbnailUrl
  });

  artwork.save(function(error){
    if(error){
      res.json({
        success: false,
        message: error
      });
    }
    res.json({
      success: true,
      message: 'Posted artwork!'
    });
  });

});



module.exports = router;