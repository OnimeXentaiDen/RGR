const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your_secret_key';

// Перевірка токена
exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Токен не надано' });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // Декодовані дані токена
    next();
  } catch (err) {
    res.status(403).json({ message: 'Недійсний токен' });
  }
};

// Перевірка ролі адміністратора
exports.verifyAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Доступ заборонено. Тільки для адміністратора.' });
  }
  next();
};
