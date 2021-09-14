"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoLists",
      [
        {
          name: "list1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "list2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "list3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
