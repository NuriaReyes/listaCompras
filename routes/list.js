var express = require('express');
var router = express.Router();
const listController = require('../controllers/list/list');

/* GET users listing. */
router.get('/', listController.index);

router.get('/create', listController.create);

module.exports = router;
