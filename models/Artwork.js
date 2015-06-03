var mongoose = require('mongoose');

var artworkSchema ={
    id:
    {
      type: Number
    },
    artist:
    {
      type: String
    },
    title:
    {
      type: String
    },
    thumbnailUrl:
    {
      type: String
    }
  }

module.exports = mongoose.model('Artwork', artworkSchema);