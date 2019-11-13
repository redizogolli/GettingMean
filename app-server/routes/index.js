const express = require('express');
const router = express.Router();
const homeController = require('../controllers/main');

/* GET home page. */
router.get('/',homeController.index);

module.exports = router;
