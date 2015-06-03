d3.json('http://exploretate.herokuapp.com/api/v1/arts/artists', function(err, art){
  if (err){
    console.log(err);
  }else{
    console.log(art).limit(10);
  }
});

module.exports = art;