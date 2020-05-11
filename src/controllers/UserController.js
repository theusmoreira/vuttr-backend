const User = require('../database/model/User');


module.exports = {
  async index(req, res) {
    const users = await User.find();

    return res.json(users);
  },

  async create(req, res) {
    const { name, email, password } = req.body;
    try {
      const user = await User.create({
        name,
        email,
        password
      });
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ error: 'Registration failed' })
    }
  }
};