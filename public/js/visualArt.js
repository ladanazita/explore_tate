// // views
// var artistMenu = d3.select("#artists"),
//   artworks = d3.select("#artworks");

// // intro
//  // d3.select('#intro')
//  //  .on('click', function(){
//  //    intro.classed({'active':false});
//  //    artistMenu.classed({'active':true});
//  //    artworks.classed({'active':false})
//  //  });

//   queue()
//     .defer(d3.json, '/api/v1/arts/artists')
//     .await(init)

// function init(error, data){
//   d3.select("#explore")
//     .on('click',function(){
//       intro.classed({'active':false});
//       artistMenu.classed({'active':true});
//       list(data);
//     })
//   }
// // artistMenu
// function list(data){
//   d3.json('/api/v1/arts/artists', function(err, data) {
//     var select = d3.select('body')
//       .append('div')
//       .append('select')

//     select
//       .on("change", function(d){
//         var value = d3.select(this).property('value');
//         alert(value);
//       });

//     select.selectAll('option')
//     .data(data)
//     .enter()
//       .append('option')
//       .attr("value", function(d){return d;})
//       .text(function(d){return d;})
//   });
// }


// artworks




