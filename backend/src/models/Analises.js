const { Model, DataTypes } = require('sequelize');

class Analises extends Model {
  static init(sequelize) {
    super.init({
      numero:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      data:{
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      ph:{
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      nitrogenio: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      fosforo: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      potassio: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      calcio: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      magnesio: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      enxofre: {
        type: DataTypes.DECIMAL,
        allowNull: true
      },
      boro: {
        type:DataTypes.DECIMAL, 
        allowNull: true
      },
      cobre: {
        type:DataTypes.DECIMAL, 
        allowNull: true
      },
      cloro: {
        type:DataTypes.DECIMAL, 
        allowNull: true
      },
      ferro: {
        type:DataTypes.DECIMAL, 
        allowNull: true
      },
      molibdenio: {
        type:DataTypes.DECIMAL, 
        allowNull: true
      },
      zinco: {
        type:DataTypes.DECIMAL, 
        allowNull: true
      },
    }, {
      sequelize,
    })
  }

  static associate(models) {
    this.belongsTo(models.Talhaos, { foreignKey: 'talhao_id', as: 'talhao'});

  }
}

module.exports = Analises;