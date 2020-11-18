const { Model, DataTypes } = require('sequelize');

class Talhaos extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: DataTypes.STRING,
      },
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Local, { foreignKey: 'local_id', as: 'local'});
    this.hasMany(models.Analises, { foreignKey: 'talhao_id', as: 'analises'});
  }
}

module.exports = Talhaos;