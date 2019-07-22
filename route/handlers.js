const Model = require('../model');

const register = async (req, res) => {
  const { username, password } = req.body;

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