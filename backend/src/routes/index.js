const express = require('express');
const router = express.Router();
const authorization = require('../middleware/auth.middleware');
const { login } = require('../controllers/login.controller')
const { logout } = require('../controllers/logout.controller')


router.post('/login', login);
router.post('/logout', logout);

// router.post('/endpointName', authorization(['user', 'administrator']) , endpointName);

module.exports = router;