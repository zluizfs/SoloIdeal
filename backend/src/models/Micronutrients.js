const { Model, DataTypes } = require('sequelize');

class Micronutrients extends Model {
  static init(sequelize) {
    super.init({
     boro:         DataTypes.DECIMAL,
     cobre:        DataTypes.DECIMAL,
     cloro:        DataTypes.DECIMAL,
     ferro:        DataTypes.DECIMAL,
     molibdenio:   DataTypes.DECIMAL,
     zinco:        DataTypes.DECIMAL
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.SoilTest, { foreignKey: 'soiltest_id', as: 'soil_tests'});
  }
}

module.exports = Micronutrients;