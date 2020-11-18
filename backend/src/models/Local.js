const { Model, DataTypes } = require('sequelize');

class Local extends Model {
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
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'});
    this.hasMany(models.Talhaos, { foreignKey: 'local_id', as: 'talhaos'});
  }
}

module.exports = Local;