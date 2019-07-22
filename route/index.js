const router = require('express').Router();
const handler = require('./handlers');
const { validateReqBody } = require('../middleware/user');

router.post('/register', validateReqBody, handler.register);

module.exports = router;
