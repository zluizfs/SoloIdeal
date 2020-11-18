const Talhaos = require('../models/Talhaos');
const Local = require('../models/Local')

module.exports = {
  async listByLocation(req, res) {
    const { local_id } = req.params;
        
    const local = await Local.findByPk(local_id, {
      include: { association: 'talhaos' }
    });
    return res.json(local.talhaos);
  },

  async listById(req, res) {
    const { id } = req.params;
    
    const talhao = await Talhaos.findByPk(id, {
      include: { association: 'local' }
    });

    return res.json(talhao);
  },

  async create(req, res) {
    const { local_id } = req.params;
    const { nome } = req.body;

    const local = await Local.findByPk(local_id);

    if(!local) {
      return res.status(400).json({ error: 'Propriedade não encontrada'});
    }

    const talhaos = await Talhaos.create({
      nome,
      local_id
    });
    
    return res.json(talhaos);
  }
};