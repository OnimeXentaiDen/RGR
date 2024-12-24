const { readDB, writeDB } = require('../utils/db');
const NEWS_FILE = './models/news.json';

// Отримати всі новини
exports.getAllNews = (req, res) => {
  const news = readDB(NEWS_FILE);
  res.json(news);
};

// Створити новину
exports.createNews = (req, res) => {
  const news = readDB(NEWS_FILE);
  const newNews = { id: Date.now(), ...req.body, createdAt: new Date().toISOString() };
  news.push(newNews);
  writeDB(NEWS_FILE, news);
  res.status(201).json(newNews);
};

// Оновити новину
exports.updateNews = (req, res) => {
  const news = readDB(NEWS_FILE);
  const index = news.findIndex((item) => item.id === parseInt(req.params.id));

  if (index === -1) return res.status(404).json({ message: 'Новина не знайдена' });

  news[index] = { ...news[index], ...req.body };
  writeDB(NEWS_FILE, news);
  res.json(news[index]);
};

// Видалити новину
exports.deleteNews = (req, res) => {
  const news = readDB(NEWS_FILE);
  const updatedNews = news.filter((item) => item.id !== parseInt(req.params.id));
  writeDB(NEWS_FILE, updatedNews);
  res.status(204).send();
};
