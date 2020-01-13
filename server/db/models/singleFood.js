const Sequelize = require("sequelize");
const db = require("../db");

const SingleFood = db.define("singleFood", {
  foodName: {
    type: Sequelize.STRING,
    allowNull: false
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
  iron: {
    type: Sequelize.NUMBER
  },
  potassium: {
    type: Sequelize.NUMBER
  },
  vitaminA: {
    type: Sequelize.NUMBER
  },
  vitaminC: {
    type: Sequelize.NUMBER
  },
  vitaminD: {
    type: Sequelize.NUMBER
  },
  barcodeId: {
    type: Sequelize.NUMBER
  }
});

module.exports = SingleFood;
