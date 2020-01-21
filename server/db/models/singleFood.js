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
    type: Sequelize.DATE
  },
  brand: {
    type: Sequelize.STRING,
    allowNull: false
  },
  calories: {
    type: Sequelize.NUMBER,
    allowNull: false
  },
  carbs: {
    type: Sequelize.NUMBER,
    allowNull: false
  },
  fats: {
    type: Sequelize.NUMBER,
    allowNull: false
  },
  protein: {
    type: Sequelize.NUMBER,
    allowNull: false
  },
  servingSize: {
    type: Sequelize.NUMBER,
    allowNull: false
  },
  cholesterol: {
    type: Sequelize.NUMBER,
    allowNull: false
  },
  sodium: {
    type: Sequelize.NUMBER
  },
  fiber: {
    type: Sequelize.NUMBER
  },
  sugar: {
    type: Sequelize.NUMBER
  },
  potassium: {
    type: Sequelize.NUMBER
  },
  barcodeId: {
    type: Sequelize.NUMBER
  },
  servings: {
    type: Sequelize.NUMBER
  }
});

module.exports = SingleFood;
