const Tool = require('../database/model/Tool');

const ArrayToString = require('../utils/ArrayToString');

module.exports = {
  async index(req, res) {
    const tools = await Tool.find({user: req.userId});
    return res.json(tools);
  },

  async create(req, res) {
    const { title, link, description, tags } = req.body;
    const TagsArray = ArrayToString(tags);

   try {
    const ToolResponse = await Tool.create({
      title,
      link,
      description,
      tags: TagsArray,
      user: req.userId,
    })
    return res.status(201).json(ToolResponse);
   } catch (error) {
     return res.status(400).json({error: 'Create tool failed'});
   }
  },

  async show(req, res) {
    const { tag } = req.query;

    try {
      const ToolTag = await Tool.find({
        user: req.userId,
        tags: tag
      });
      return res.json(ToolTag);
    } catch (error) {
      return res.status(400).json({error: 'Tag fetch failed'})
    }
    
  },

  async destroy(req, res) {
    const { id } = req.params;
    try {
      const ToolFind = await Tool.findOne({ 
        user: req.userId,
        _id: id 
      });
      if (!ToolFind) {
        res.status(400).json({ error: 'Tool not exits' });
      }
      await Tool.findOneAndDelete({ 
        user: req.userId,
        _id: id
      });
      return res.send(204);
    } catch (error) {
      res.status(400).json({ error: 'Error in delete' })
    }I
  }
};