const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) =>
  res.status(200).json({
    status: 200,
    message: 'Welcome, thou loyal developer!',
  }),
);

module.exports = server;
