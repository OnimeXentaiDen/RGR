const { readDB } = require('../utils/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'your_secret_key';
const USERS_FILE = './models/users.json';

exports.login = (req, res) => {
  const { username, password } = req.body;
  const users = readDB(USERS_FILE);

  const user = users.find((u) => u.username === username);
  if (!user) return res.status(404).json({ message: 'Користувача не знайдено' });

  // Перевірка пароля
  const isPasswordValid = bcrypt.compareSync(password, user.password);
  if (!isPasswordValid) return res.status(401).json({ message: 'Невірний пароль' });

  // Генерація токена
  const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
};
