'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('analises', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      talhao_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'talhaos', key: 'id'},
        
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      data: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      ph: {
        type: Sequelize.DECIMAL(4,2),
        allowNull: false,
      },
      nitrogenio: {
        type: Sequelize.DECIMAL(4,2),
        allowNull: true,
      },
      fosforo: {
        type: Sequelize.DECIMAL(4,2),
        allowNull: true,
      },
      potassio: {
        type: Sequelize.DECIMAL(4,2),
        allowNull: true,
      },
      calcio: {
        type: Sequelize.DECIMAL(4,2),
        allowNull: true,
      },
      magnesio: {
        type: Sequelize.DECIMAL(4,2),
        allowNull: true,
      },
      enxofre: {
        type: Sequelize.DECIMAL(4,2),
        allowNull: true,
      },
      boro: {
        type: Sequelize.DECIMAL(4,2),
        allowNull: true,
      },
      cobre: {
        type: Sequelize.DECIMAL(4,2),
        allowNull: true,
      },
      cloro: {
        type: Sequelize.DECIMAL(4,2),
        allowNull: true,
      },
      ferro: {
        type: Sequelize.DECIMAL(4,2),
        allowNull: true,
      },
      molibdenio: {
        type: Sequelize.DECIMAL(4,2),
        allowNull: true,
      },
      zinco: {
        type: Sequelize.DECIMAL(4,2),
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('analises');
  }
};
