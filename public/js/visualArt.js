var d3 = require('d3');

var art;

d3.json('/routes/api/v1/artists', function(err, art){
  if (err){
    console.log(err);
  }else{
    console.log(art).limit(10);
  }
});

// module.exports = art;