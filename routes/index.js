var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node Game' });
});

/* GET Daniel page. */
router.get('/daniel', function(req, res, next) {
  res.render('index', { title: 'Node Game Daniel' });
});


module.exports = router;
