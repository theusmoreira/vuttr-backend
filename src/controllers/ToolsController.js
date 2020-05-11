const Tool = require('../database/model/Tool');

const ArrayToString = require('../utils/ArrayToString');

module.exports = {
  async index(req, res) {
    const tools = await Tool.find();
    return res.json(tools);
  },

  async create(req, res) {
    const { title, link, description, tags } = req.body;
    const TagsArray = ArrayToString(tags);
    
    const ToolResponse = await Tool.create({
      title,
      link,
      description,
      tags: TagsArray
    })
    return res.status(201).json(ToolResponse);
  },

  async show(req, res) {
    const { tag } = req.query;
    const ToolTag = await Tool.find({
      tags: tag});
      return res.json(ToolTag);
  },

  async destroy(req, res) {
    const { id } = req.params;
    await Tool.findOneAndDelete({_id: id})
    res.send();
  }
};