var express = require('express');
var router = express.Router();
const articlesController = require('../controllers/articles/articles');

/* GET users listing. */
router.get('/', articlesController.index);

router.get('/create', articlesController.create);

module.exports = router;
