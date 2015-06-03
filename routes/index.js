var express = require('express');
var router = express.Router();

// frontend route
router.get('/', function(req, res){
  // res.sendfile('./index.html');
  res.send('hi');
});

module.exports = router;