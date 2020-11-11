'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('micronutrients', { 
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
      boro: {
        type: Sequelize.DECIMAL(3,1),
        allowNull: false,
      },
      cobre: {
        type: Sequelize.DECIMAL(3,1),
        allowNull: false,
      },
      cloro: {
        type: Sequelize.DECIMAL(3,1),
        allowNull: false,
      },
      ferro: {
        type: Sequelize.DECIMAL(3,1),
        allowNull: false,
      },
      molibdenio: {
        type: Sequelize.DECIMAL(3,1),
        allowNull: false,
      },
      zinco: {
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
    return queryInterface.dropTable('micronutrients');
  }
};
