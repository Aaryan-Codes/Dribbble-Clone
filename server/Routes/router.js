const express = require('express');
const router = express.Router();
const controller = require('../Controllers/controller');

router.route('/').get(controller.home);
router.route('/signup').post(controller.signup);

// router.route('/sendEmail').get(controller)

module.exports = router;