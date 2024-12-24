const express = require('express');
const { verifyToken } = require('../middleware/auth');
const { getAllNews } = require('../controllers/userController');

const router = express.Router();

router.get('/news', verifyToken, getAllNews);

module.exports = router;
