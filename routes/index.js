var express = require('express');
var router = express.Router();


// frontend route
router.get('/', function(req, res){
  res.render('./index.html');
});

module.exports = router;