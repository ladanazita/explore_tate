var w = 500;
var h = 100;
var padding = 2;

d3.json('/api/v1/arts/artists', function(err, data) {
  var select = d3.select('body')
    .append('div')
    .append('select')

  select
    .on("change", function(d){
      var value = d3.select(this).property('value');
      alert(value);
    });

  select.selectAll('option')
  .data(data)
  .enter()
    .append('option')
    .attr("value", function(d){return d;})
    .text(function(d){return d;})
});
// var dropDown = d3.select("#table_container").append("select").attr("name", "artists");
// var options = dropDown.selectAll('option').data(artists).append('option');

// options.text(function(d){return d.value}).attr('value', function(d) {return d.value; });

// dropDown.on("change", menuChanged);

// function menuChanged(){
//   var selectedValue = d3.event.target.value;
//   jsonOutside.features.forEach(function(d){
//     if (selectedValue === d.properties.name){
//       alert(selectedValue)
//       click(d);
//     };
//   })
// }
// var svg =  d3.select('body')
//             .append('svg')
//               .attr('width', w)
//               .attr('height', h);

// svg.selectAll('rect')
//   .data(artists)
//   .enter()
//   .append('rect')
//     .attr('x', 40)
//     .attr('y', function(d,i){
//       return (i* (w / artists.length));
//     })
//     .attr('y', function(d){
//       return h - d;
//     })
//     .attr('width', w / artists.length - padding)
//     .attr('height', function(d){
//       return (d * 4);
//     });



