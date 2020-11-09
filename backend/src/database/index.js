var Sequelize = require('sequelize');

var sequelize = new Sequelize('soloideal', 'root', 'root', {
  host: "localhost",
  dialect: 'mysql'

})

sequelize.authenticate().then(function(){
  console.log("Conectado com sucesso!")
}).catch(function(err){
  console.log("Falha ao se conectar: " +err)
})

