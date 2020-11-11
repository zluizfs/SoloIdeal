const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {
  async index(req, res) {
    const user = await User.findAll();
    
    return res.json(user);
  },

  async store(req, res){
    const { frist_name, last_name, email, password, activity } = req.body; 

    try {
      const user = await User.create({ frist_name, last_name, email, password, activity });

      res.status(201).send({ success: 'Usuário cadastrado com sucesso.'});
    } catch(e) {
      res.status(400).send({ error:'Erro ao efetuar o cadastro.'});
    }
  }
};