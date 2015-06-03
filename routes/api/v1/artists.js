var express = require('express');
var router = express.Router();
var art = require('../../../models/art');

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
  art.find({}, {"artist": 1}, function (err,data){
    if(err) return res.send(err);
    res.json(data);
  }).limit(10);
});

// create method for testing db
router.post('/api/v1/art/artists', function (req, res, next){
  var newArt = new art({
    title: req.params.title,
    artist: req.params.artist,
    thumbnailUrl: req.params.thumbnailUrl
  });

  newArt.save(function(error){
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