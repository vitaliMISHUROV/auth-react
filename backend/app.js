// server.js (server)
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const requestIp = require('request-ip');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Використайте middleware для витягування IP-адреси з заголовків
app.use(requestIp.mw());

// Налаштування CORS
app.use(cors());

app.get('/', (req, res) => {
  res.send('Home Route');
});

io.on('connection', (socket) => {
  console.log('User connected');

  // Отримайте IP-адресу з middleware
  const userIP =
    req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;

  // Listen for login events
  socket.on('userLoggedIn', (data) => {
    const { username } = data;
    console.log(`User ${username} logged in from IP: ${userIP}`);
    io.emit('notification', `User ${username} logged in from IP: ${userIP}`);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
