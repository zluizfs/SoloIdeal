const { Model, DataTypes } = require('sequelize');

class SoilTest extends Model {
  static init(sequelize) {
    super.init({
     ph: DataTypes.DECIMAL,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'});
    this.belongsTo(models.Macronutrients, { foreignKey: 'soiltest_id', through: 'user_techs', as: 'techs' });
  }
}

module.exports = SoilTest;