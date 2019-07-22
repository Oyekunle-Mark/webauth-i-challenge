const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');

const server = express();
const router = require('./route');

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(logger('dev'));

server.get('/', (req, res) =>
  res.status(200).json({
    status: 200,
    message: 'Welcome, thou loyal developer!',
  }),
);

server.use('/api', router);

module.exports = server;
