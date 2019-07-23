const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex');

const server = express();
const router = require('../route');

server.use(express.json());
server.use(
  session({
    name: 'access-key',
    secret: 'secret-key-to-protect-session',
    cookie: {
      maxAge: 1000 * 60 * 60,
      secure: false,
      httpOnly: true,
    },
    resave: false,
    saveUninitialized: true,
    store: new KnexSessionStore({
      knex: require('../data/dbConfig'),
      tablename: 'sessions',
      sidfieldname: 'sid',
      createtable: true,
      clearInterval: 1000 * 60 * 60,
    }),
  }),
);
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
