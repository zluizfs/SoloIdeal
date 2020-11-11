const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

class User extends Model {
  static init(sequelize) {
    super.init({
      frist_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      last_name:  DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        lowercase: true,
        validate: {
          isEmail: true,
          notEmpty: true
        },
        unique: {
          args: 'email',
          msg: 'E-mail cadastrado.'
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      activity: {
        type: DataTypes.STRING,
        allowNull: false
      },
    }, {
      hooks: {
        beforeCreate: (user) => {
          const salt = bcrypt.genSaltSync();
          user.password = bcrypt.hashSync(user.password, salt);
        }
      },
      instanceMethods: {
        validPassword: function(password) {
          return bcrypt.compareSync(password, this.password);
        }
      },    
      sequelize,
      modelName: 'users'
    })
  }

  static associate(models) {
    this.hasMany(models.SoilTest, { foreignKey: 'user_id', as: 'Soil_Tests'})
  }
}



module.exports = User;