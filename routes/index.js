var express = require('express');
var router = express.Router();
var {insertItem, getItems} = require('../db/db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/employee', function(req, res, next) {
  getItems()
    .then((items) => {
      items = items.map((item) => {
        return {
          id: item._id,
          name: item.name,
          role: item.role
        };
      });
      res.json(items);
    })
    .catch((err) => {
      res.status(500).end();
    })
});

router.post('/employee', (req,res,next) => {
  const item = req.body;
  insertItem(item)
    .then(() => {
      res.status(200).end();
    })
    .catch((err) => {
      res.status(500).end();
    });
});

module.exports = router;
