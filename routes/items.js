var express = require('express');
var router = express.Router();
var Item = require('../models/item')


/* GET home page. */
router.get('/', function(req, res, next) {
  // res.send(Item.all);
  res.render('index', {todos: Item.all});

});

/* GET new item to do list */

router.post('/', function(req, res, next){
  new Item(req.body);
  res.redirect('/items');
});



module.exports = router;
