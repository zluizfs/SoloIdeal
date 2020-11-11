const SoilTest = require('../models/SoilTest');
const Micronutrients = require('../models/Micronutrients');

module.exports = {
  async index(req, res) {
    const { soiltest_id } = req.params;

    const soiltest = await SoilTest.findByPk(soiltest_id, {
      include: { association: 'Soil_Tests' }
    });

    return res.json(soiltest);
  },

  async store(req, res) {
    const { soiltest_id } = req.params;
    const { nitrogenio, fosforo, potassio, calcio, magnesio, enxofre } = req.body;

    const user = await User.findByPk(soiltest_id);

    if(!user) {
      return res.status(400).json({ error: 'Análise não encontrado'});
    }

    const micronutrients = await Micronutrients.create({
      nitrogenio,
      fosforo,
      potassio,
      calcio,
      magnesio,
      enxofre,
      soiltest_id,
    });

    return res.json(micronutrients);
  }
};