const Sequelize = require("sequelize");
const db = require("../db");

const UserDetails = db.define("userDetails", {
  age: {
    type: Sequelize.BIGINT
  },
  inches: {
    type: Sequelize.BIGINT
  },
  feet: {
    type: Sequelize.BIGINT
  },
  weight: {
    type: Sequelize.BIGINT
  },
  calories: {
    type: Sequelize.BIGINT
  },
  protein: {
    type: Sequelize.BIGINT
  },
  fats: {
    type: Sequelize.BIGINT
  },
  carbs: {
    type: Sequelize.BIGINT
  },
  gender: {
    type: Sequelize.STRING
  }
});

module.exports = UserDetails;
