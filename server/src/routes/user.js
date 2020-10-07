var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next){
  res.json({success: 'new-top create'});
});

router.get('/', function(req, res, next){
  res.json({success: 'you get topic'});
});


module.exports = router;
