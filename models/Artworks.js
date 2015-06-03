var mongoose = require('mongoose');

var artworksSchema ={
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

module.exports = mongoose.model('Artworks', artworksSchema);