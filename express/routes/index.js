var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const DB = require('../db/connection');
const { body, validationResult } = require('express-validator');

router.get('/test', function(req, res, next) {

  DB('select * from task', function(err, req) {
    res.send({
      state: 200,
      res: req
    })
  })
  
})

module.exports = router;
