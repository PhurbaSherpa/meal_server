const Sequelize = require("sequelize");
const db = require("../db");

const SingleFood = db.define("singleFood", {
  foodName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  mealType: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.STRING
  },
  brand: {
    type: Sequelize.STRING
  },
  calories: {
    type: Sequelize.BIGINT,
    allowNull: false
  },
  carbs: {
    type: Sequelize.BIGINT,
    allowNull: false
  },
  fats: {
    type: Sequelize.BIGINT,
    allowNull: false
  },
  protein: {
    type: Sequelize.BIGINT,
    allowNull: false
  },
  servingSize: {
    type: Sequelize.BIGINT,
    allowNull: false
  },
  cholesterol: {
    type: Sequelize.BIGINT
  },
  sodium: {
    type: Sequelize.BIGINT
  },
  fiber: {
    type: Sequelize.BIGINT
  },
  sugar: {
    type: Sequelize.BIGINT
  },
  potassium: {
    type: Sequelize.BIGINT
  },
  barcodeId: {
    type: Sequelize.BIGINT
  },
  servings: {
    type: Sequelize.BIGINT
  }
});

module.exports = SingleFood;
