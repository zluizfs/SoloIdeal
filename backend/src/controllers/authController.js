const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {
  async store(req, res) {
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(function (user) {
        if (!user) {
          res.status(400).send({ error:'E-mail ou senha inválidos'});
        } else {
          bcrypt.compare(req.body.password, user.password, function (err, result) {
            if (result == true) {
              user.password = undefined;
              return res.json({user});
            } else {
              res.status(400).send({ error:'E-mail ou senha inválidos'});
            }
        });
      }
    });
  }
}