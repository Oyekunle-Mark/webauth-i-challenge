const validateReqBody = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).json({
      status: 400,
      message: 'The username and password field must be provided.',
    });

  if (username.length < 4 || password.length < 4)
    return res.status(400).json({
      status: 400,
      message: 'The username and password field must be 4 characters or more.',
    });

  next();
};

module.exports = {
  validateReqBody,
};
