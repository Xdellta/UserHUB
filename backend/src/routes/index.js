const express = require('express');
const router = express.Router();
const accesVerify = require('../middleware/auth.middleware.js');
const { login } = require('../controllers/login.controller.js');

router.post('/login', login);
// router.post('/endpointName',accesVerify(['user', 'administrator']) , endpointName);

module.exports = router;