'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const demoPriorities = [
      {
        priority_name: "high"
      },
      {
        priority_name: "medium"
      },
      {
        priority_name: "low"
      }
    ]
    return queryInterface.bulkInsert('priorities', demoPriorities, {});

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
