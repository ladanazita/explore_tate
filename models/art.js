var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

var artSchema = {
    id:
    {
      type: Number
    },
    artist:
    {
      type: String
    },
    artistId:
    {
      type: Number
    },
    title:
    {
      type: String
    },
    thumbnailUrl:
    {
      type: String
    }
  };

// var Art = mongoose.model('art', artSchema);

// var query = Art.find({},{artist:1});

// query.exec(function(err,art){
//   if (err) return res.send(err);
//   console.log(art.artist)
// })
// create a method to alphabetize
// change the string, take out comma, first name last name

module.exports = mongoose.model('art', artSchema);