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

const protectPage = (req, res, next) => {
  if (req.session && req.session.user) next();
  else
    res.status(401).json({
      status: 401,
      message: 'Thou shall not pass!',
    });
};

module.exports = {
  validateReqBody,
  protectPage,
};
