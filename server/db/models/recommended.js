const Sequelize = require("sequelize");
const db = require("../db");

const Recommended = db.define("recommended", {
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
  }
});

module.exports = Recommended;
