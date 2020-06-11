const Tool = require('../database/model/Tool');

module.exports = {
  async index(req, res) {
    const { tag } = req.query;
    try {
      const tools = await Tool.find({
        tags: tag
      });
    
      return res.json(tools);

    } catch (error) {
      return res.status(400).json({ error: 'Search tool tag failed' })
    }

  }
};