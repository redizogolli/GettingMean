const express = require('express');
const router = express.Router();
const homeController = require('../controllers/main');
const locationController = require('../controllers/location');
const aboutController = require('../controllers/about');

/* GET home page. */
router.get('/',homeController.index);

/* locations */
router.get('/home',locationController.home);
router.get('/reviews',locationController.reviews);
router.get('/details',locationController.details);

/* About. */
router.get('/about',aboutController.about);

module.exports = router;
