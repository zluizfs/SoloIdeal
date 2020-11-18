const User = require('../models/User');
const Local = require('../models/Local')

module.exports = {
  async listByUser(req, res) {
    const { user_id } = req.params;
        
    const user = await User.findByPk(user_id, {
      include: { association: 'locals' }
    });
    return res.json(user.locals);
  },

  async listById(req, res) {
    const { id } = req.params;
    
    const local = await Local.findByPk(id, {
      include: { association: 'user' }
    });

    return res.json(local);
  },

  async create(req, res) {
    const { user_id } = req.params;
    const { nome } = req.body;

    const user = await User.findByPk(user_id);

    if(!user) {
      return res.status(400).json({ error: 'Usuário não encontrado.'});
    }

    const locals = await Local.create({
      nome,
      user_id
    });
    
    return res.json(locals);
  }
};