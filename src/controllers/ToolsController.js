module.exports = {
  async index(req, res) {
    const tools = await connection('tools').select('*');
    return res.json(tools);
  },
  async create(req, res) {
    const { title, link, description } = req.body;

    const id = generateUniqueId();

    await connection('tools').insert({
      id,
      title,
      link,
      description
    })
    return res.json({ id })
  }
};