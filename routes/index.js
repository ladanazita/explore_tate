var express = require('express');
var router = express.Router();

// frontend route
app.get('*', function(req, res){
  res.sendfile('./index.html');
});

module.exports = router;