const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
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
      senha: {
        type: DataTypes.STRING,
        allowNull: false
      },
    }, {
      hooks: {
        beforeCreate: (user) => {
          const salt = bcrypt.genSaltSync();
          user.senha = bcrypt.hashSync(user.senha, salt);
        }
      },
      instanceMethods: {
        validPassword: function(senha) {
          return bcrypt.compareSync(senha, this.senha);
        }
      },    
      sequelize,
    })
  }

  static associate(models) {
    this.hasMany(models.Local, { foreignKey: 'user_id', as: 'locals'});
  }
}



module.exports = User;