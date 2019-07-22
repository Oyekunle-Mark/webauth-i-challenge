const express = require('express');

const server = express();
const router = require('./route');

server.use(express.json());

server.get('/', (req, res) =>
  res.status(200).json({
    status: 200,
    message: 'Welcome, thou loyal developer!',
  }),
);

server.use('/api', router);

module.exports = server;
