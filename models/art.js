var mongoose = require('mongoose');

var artSchema ={
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

module.exports = mongoose.model('art', artSchema);