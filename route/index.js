const router = require('express').Router();
const handler = require('./handlers');

router.post('/register', handler.register);

module.exports = router;
