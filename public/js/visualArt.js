var artists = d3.json('/api/v1/arts/artists', function(err, data) {
  if (err){
    console.log(err);
  }
  else{
    console.log ('Success');
  }
  d3.select('body').selectAll('p')
    .data(artists)
    .enter()
    .append("p")
    .text(data);
});



