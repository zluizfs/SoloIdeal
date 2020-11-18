const Talhaos = require('../models/Talhaos');
const Analises = require('../models/Analises');

module.exports = {
  async listByPlot(req, res) {
    const { talhao_id } = req.params;
    
    const talhao = await Talhaos.findByPk(talhao_id, {
      include: { association: 'analises' }

    });
    
    return res.json(talhao.analises);
  },

  async listById(req, res) {
    const { id } = req.params;
    
    const analise = await Analises.findByPk(id, {
      include: { association: 'talhao' }
    });

    return res.json(analise);
  },

  async create(req, res) {
    const { talhao_id } = req.params;
    const { numero, data, ph, nitrogenio, fosforo, potassio, calcio, magnesio, enxofre, boro, cobre, cloro, ferro, molibdenio, zinco } = req.body;

    const talhao = await Talhaos.findByPk(talhao_id);

    if(!talhao) {
      return res.status(400).json({ error: 'Talhão não encontrado.'});
    }

    const analise = await Analises.create({
      numero,
      data,
      ph,
      nitrogenio,
      fosforo,
      potassio,
      calcio,
      magnesio,
      enxofre,
      boro,
      cobre,
      cloro,
      ferro,
      molibdenio,
      zinco,
      talhao_id,
    });
    
    return res.json(analise);
  }
};