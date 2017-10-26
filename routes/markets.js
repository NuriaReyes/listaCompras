var express = require('express');
var router = express.Router();
const marketsController = require('../controllers/markets/markets');

/* GET users listing. */
router.get('/', marketsController.index);

router.get('/create', marketsController.create);

module.exports = router;
