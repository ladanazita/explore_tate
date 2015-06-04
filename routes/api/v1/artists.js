var express = require('express');
var router = express.Router();
var art = require('../../../models/art');


  ///////////////
 // api routes//
///////////////

// returns everything
router.get('/api/v1/arts', function (req,res,next){
  art.find(function (err,data){
    if(err) return res.send(err);
    res.json(data);
  });
});

// list all the artists
router.get('/api/v1/arts/artists', function (req, res, next){
  art.find().distinct('artist', function (err,data){
    if(err) return res.send(err);
    res.json(data);
  });
});

// returns one artist
router.get('/api/v1/arts/artists/:artistId', function (req, res, next){
  art.findById(req.params.artistId,function(err, name){
    if (err) return res.send(err);
    res.json(name);
  });
});


// create method for testing db
// router.post('/api/v1/arts/artists', function (req, res, next){
//   var newArt = new art({
//     title: req.params.title,
//     artist: req.params.artist,
//     thumbnailUrl: req.params.thumbnailUrl
//   });

//   newArt.save(function(error){
//     if(error){
//       res.json({
//         success: false,
//         message: error
//       });
//     }
//     res.json({
//       success: true,
//       message: 'Posted artwork!'
//     });
//   });

// });



module.exports = router;