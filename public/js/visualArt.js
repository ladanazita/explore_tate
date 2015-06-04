var artists = d3.json('/api/v1/arts/artists', function(err, data) {
  if (err){
    console.log(err);
  }
  else{
    console.log ('Success');
  }
  // selects <body>
  d3.select('body')
  // add an <svg> html element
    .append('svg')
      .attr('width', 250)
      .attr('height', 50)
    .append('text')
      .data(artists)
      .text(d.artists)
      .attr('x', "150")
      .attr('y', "20")
});



