#Explore Tate

Exploring the Tate Museum's [meta data](https://github.com/tategallery/collection).

Technology used:

*  <strong> MongoDB </strong> handles the roughly 70,000 objects well
*  <strong> Express</strong> makes life easier
*  <strong>Node js</strong> loves express
*  <strong> d3 </strong> talks to my data client-side

	[explore the tate](https://exploretate.herokuapp.com)
	
	API end points: 
	http://exploretate.herokuapp.com/api/v1/arts/artists
	
	returns JSON list of artist and unique ID
	
	example:
	
```	
	router.get('/api/v1/arts/artists', function (req, res, next){
  art.find('artist', function (err,data){
    if(err) return res.send(err);
    res.json(data).limit(10);
  });
});
```

[returns](http://i.imgur.com/8OK98bmm.png) the first ten artists in the collection

