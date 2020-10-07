var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next){
  res.json({success: 'new vote create'});
});

router.get('/', function(req, res, next){
  res.json({success: 'get vote result'});
});


module.exports = router;
