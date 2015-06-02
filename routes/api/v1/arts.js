var express = require('express');
var router = express.Router();
var Art = require('../../../models/Art');

// api routes
// returns one artist
router.get('/api/artworks/artists/:id', function (req, res, next){
  Artwork.findById(req.params.id,function(err, name){
    if (err) return res.send(err);
    res.json(name.artist);
  });
});

// list all the artists
router.get('/api/artworks/artists', function (req, res, next){
  Artwork.find({}, {"artist": 1}, function (err,art){
    if(err) return res.send(err);
    res.json(art);
  }).limit(50);
});



module.exports = router;