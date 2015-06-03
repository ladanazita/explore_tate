var express = require('express');
var router = express.Router();
var Artworks = require('../../../models/Artworks');

// api routes
// returns one artist
router.get('/api/v1/artworks/artists/:id', function (req, res, next){
  Artworks.findById(req.params.id,function(err, name){
    if (err) return res.send(err);
    res.json(name.artist);
  });
});

// list all the artists
router.get('/api/v1/artworks/artists', function (req, res, next){
  Artworks.find({}, {"artist": 1}, function (err,art){
    if(err) return res.send(err);
    res.json(art);
  }).limit(50);
});



module.exports = router;