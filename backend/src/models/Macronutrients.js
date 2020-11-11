const { Model, DataTypes } = require('sequelize');

class Macronutrients extends Model {
  static init(sequelize) {
    super.init({
     nitrogenio: DataTypes.DECIMAL,
     fosforo:    DataTypes.DECIMAL,
     potassio:   DataTypes.DECIMAL,
     calcio:     DataTypes.DECIMAL,
     magnesio:   DataTypes.DECIMAL,
     enxofre:    DataTypes.DECIMAL
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.SoilTest, { foreignKey: 'soiltest_id', as: 'Soil_Tests'});
  }
}

module.exports = Macronutrients;