const { readDB } = require('../utils/db');
const NEWS_FILE = './models/news.json';

// Отримати всі новини
exports.getAllNews = (req, res) => {
  const news = readDB(NEWS_FILE);
  res.json(news);
};
