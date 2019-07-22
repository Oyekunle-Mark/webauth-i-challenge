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

module.exports = {
  register,
};
