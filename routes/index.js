const express = require('express');
const router = express.Router();
const indexController = require('../controller/indexController'); 

router.get('/',indexController.homePage);

router.post('/sign-up', indexController.signUp);

module.exports = router;