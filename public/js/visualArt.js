d3.json('http://exploretate.herokuapp.com/api/v1/arts/artists', function(err, data){
  if (err){
    console.log(data);
  }else{
    console.log(art).limit(10);
  }
});
