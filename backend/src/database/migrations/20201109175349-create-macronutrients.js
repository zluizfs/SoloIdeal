'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('macronutrients', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      soiltest_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'soil_tests', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      nitrogenio: {
        type: Sequelize.DECIMAL(3,1),
        allowNull: false,
      },
      fosforo: {
        type: Sequelize.DECIMAL(3,1),
        allowNull: false,
      },
      potassio: {
        type: Sequelize.DECIMAL(3,1),
        allowNull: false,
      },
      calcio: {
        type: Sequelize.DECIMAL(3,1),
        allowNull: false,
      },
      magnesio: {
        type: Sequelize.DECIMAL(3,1),
        allowNull: false,
      },
      enxofre: {
        type: Sequelize.DECIMAL(3,1),
        allowNull: false,
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
    return queryInterface.dropTable('macronutrients');
  }
};