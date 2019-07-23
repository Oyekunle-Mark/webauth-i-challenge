const bcrypt = require('bcrypt');
const Model = require('../model');

const register = async (req, res) => {
  const { username } = req.body;

  const password = await bcrypt.hash(req.body.password, 12);

  try {
    const user = await Model.add({ username, password });

    res.status(201).json({
      status: 201,
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Cannot register user at the moment',
    });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Model.findBy(username);

    if (!user)
      return res.status(401).json({
        status: 401,
        message: 'Thou shall not pass',
      });

    if (bcrypt.compareSync(password, user.password)) {
      req.session.user = user;

      res.status(200).json({
        status: 200,
        message: 'Logged in.',
      });
    } else {
      res.status(401).json({
        status: 401,
        message: 'Thou shall not pass',
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Cannot login at the moment',
    });
  }
};

module.exports = {
  register,
  login,
};
