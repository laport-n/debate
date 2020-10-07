var express = require('express');
var router = express.Router();
const UserController = require('./../controller/UserController');

router.post('/', function(req, res, next){
  try {
    const userController = new UserController(
      res.app.locals.mongooseClient,
      res.app.locals.mongooseSchemas.usersModel
    );
    userController.createUser(req.body).then(user => {
      res.json(user);
    });
  } catch (err){
    next(err);
  }
});

router.get('/', function(req, res, next){
  res.json({success: 'you get topic'});
});

router.post('/delete', function(req, res, next){
  res.json({success: 'delete success'});
});

router.post('/update', function(req, res, next){
  res.json({success: 'update'});
});


module.exports = router;
