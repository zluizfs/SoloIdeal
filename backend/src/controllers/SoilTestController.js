const User = require('../models/User');
const SoilTest = require('../models/SoilTest');

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;
    
    const user = await User.findByPk(user_id, {
      include: { association: 'soil_tests' }
    });

    return res.json(user.soil_tests);
  },

  async store(req, res) {
    const { user_id } = req.params;
    const { ph } = req.body;

    const user = await User.findByPk(user_id);

    if(!user) {
      return res.status(400).json({ error: 'Usuário não encontrado'});
    }

    const soil_test = await SoilTest.create({
      ph,
      user_id,
    });

    const soiltest_id = console.log(soil_test.dataValue.id);
    
    return res.json(soil_test);
  }
};