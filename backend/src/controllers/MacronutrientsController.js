const SoilTest = require('../models/SoilTest');
const Macronutrients = require('../models/Macronutrients');

module.exports = {
  async index(req, res) {
    const { soiltest_id } = req.params;

    const soiltest = await SoilTest.findByPk(soiltest_id, {
      include: { association: 'macronutrients' }
    });

    return res.json(soiltest.macronutrients);
  },

  async store(req, res) {
    const { soiltest_id } = req.params;
    const { nitrogenio, fosforo, potassio, calcio, magnesio, enxofre } = req.body;

    const soil_test = await SoilTest.findByPk(soiltest_id);

    if(!soil_test) {
      return res.status(400).json({ error: 'Análise não encontrada'});
    }

    const macronutrients = await Macronutrients.create({
      nitrogenio,
      fosforo,
      potassio,
      calcio,
      magnesio,
      enxofre,
      soiltest_id,
    });

    return res.json(macronutrients);
  }
};