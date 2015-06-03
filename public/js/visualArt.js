d3.json('/api/v1/arts/artists', function(err, data){
  if (err){
    console.log(data);
  }else{
    console.log(art).limit(10);
  }
});
