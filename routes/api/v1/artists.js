var express = require('express');
var router = express.Router();
var art = require('../../../models/Artworks');

// api routes
// returns one artist
router.get('/api/v1/art/artists/:id', function (req, res, next){
  art.findById(req.params.id,function(err, name){
    if (err) return res.send(err);
    res.json(name.artist);
  });
});

// list all the artists
router.get('/api/v1/art/artists', function (req, res, next){
  art.find({}, {"artist": 1}, function (err,art){
    if(err) return res.send(err);
    res.json(art);
  }).limit(10);
});



module.exports = router;