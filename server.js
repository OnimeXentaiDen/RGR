const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Імпортуємо маршрути
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

// Ініціалізуємо сервер
const app = express();

// Налаштування middleware
app.use(bodyParser.json());
app.use(cors());

// Базовий маршрут
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the News API!',
    routes: {
      admin: '/api/admin',
      user: '/api/user',
      auth: '/api/auth'
    }
  });
});

// Підключення маршрутів
app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
