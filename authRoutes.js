const express = require('express');
const { login } = require('../controllers/authController');

const router = express.Router();

// Вхід в систему
router.post('/login', login);

module.exports = router;
