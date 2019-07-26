const router = require('express').Router();
const Model = require('../model');
const { protectPage } = require('../middleware/user');

router.get('/users', protectPage, async (req, res) => {
  try {
    const users = await Model.get();

    res.status(200).json({
      status: 200,
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Cannot get users at the moment',
    });
  }
});

module.exports = router;
