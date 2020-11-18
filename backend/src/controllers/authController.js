const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth.json');

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

module.exports = {
  async index(req, res) {
    const user = await User.findAll();
    return res.json(user);
  },

  async create(req, res) {
    const { nome, email, senha } = req.body; 

    try {
      const user = await User.create({ nome, email, senha });

      user.senha = undefined;

      res.json({
        user, 
        token : generateToken({ id: user.id })
      });

    } catch(err) {
      res.status(400).send({ error:'Erro ao efetuar o cadastro.'});
      console.log(err)
    }
  },

  async authentication(req, res) {
    const user = await User.findOne({ 
      where: { 
        email: req.body.email 
        } 
    });
    if (user === null || user == false ) {
      res.status(400).send({ error:'Usuário não encontrado.'});
    } else {
      bcrypt.compare(req.body.senha, user.senha, function (err, result) {
        if (result == true) {
          user.senha= undefined;
          res.json({
            user, 
            token : generateToken({ id: user.id })
          });
        } else {
          res.status(400).send({ error:'Senha inválida.'});
        }
      })
    }
  }
}