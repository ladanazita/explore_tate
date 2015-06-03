var express = require('express');
var cors = require('cors');
var router = express.Router();

router.use(cors());

// frontend route
router.get('/', function(req, res){
  res.render('./index.html');
});

module.exports = router;