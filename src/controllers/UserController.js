const User = require('../database/model/User');

const generateToken = require('../utils/generateToken');

module.exports = {
  async index(req, res) {
    const users = await User.find();

    return res.json(users);
  },

  async create(req, res) {
    const { name, email, password } = req.body;

    try {
      if (await User.findOne({ email })) {
        return res.status(400).json({ error: 'User already exists' });
      }
      const user = await User.create({
        name,
        email,
        password
      });

      user.password = undefined;

      return res.status(201).json({
        user,
        token: generateToken({ id: user.id })
      });
    } catch (error) {
      return res.status(400).json({ error: 'Registration failed' })
    }
  }
};