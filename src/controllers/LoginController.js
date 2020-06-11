const User = require('../database/model/User');

const bcrypt = require('bcryptjs');

const generateToken = require('../utils/generateToken');

module.exports = {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return res.status(400).json({ error: 'User not exits' });
    }
    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ error: 'Password Invalid' });
    }
    user.password = undefined

    return res.status(200).json({
      user,
      token: generateToken({ id: user.id })
    })
  }
};
