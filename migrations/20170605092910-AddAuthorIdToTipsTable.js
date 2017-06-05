'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.addColumn(
            'Tips',
            'UserId',
            {type: Sequelize.INTEGER}
        );
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColum('Tips', 'UserId');
  }
};
