const express = require('express');
const { verifyToken, verifyAdmin } = require('../middleware/auth');
const { getAllNews, createNews, updateNews, deleteNews } = require('../controllers/adminController');

const router = express.Router();

router.get('/news', verifyToken, verifyAdmin, getAllNews);
router.post('/news', verifyToken, verifyAdmin, createNews);
router.put('/news/:id', verifyToken, verifyAdmin, updateNews);
router.delete('/news/:id', verifyToken, verifyAdmin, deleteNews);

module.exports = router;
