"use strict";

const db = require("../server/db");
const { User } = require("../server/db/models");
const { SingleFood } = require("../server/db/models");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  const users = await Promise.all([
    User.create({ email: "cody@email.com", password: "123" }),
    User.create({ email: "murphy@email.com", password: "123" })
  ]);
  const foodentries = await Promise.all([
    SingleFood.create({
      foodName: "Organic Egg",
      mealType: "Breakfast",
      date: "4,0,23",
      brand: "Costco Organic Eggs",
      calories: 70,
      carbs: 10,
      fats: 5,
      protein: 12,
      servingSize: 80,
      cholesterol: 5,
      sodium: 10,
      fiber: 0,
      sugar: 0,
      potassium: 2,
      barcodeId: 4567891234567,
      servings: 2
    }),
    SingleFood.create({
      foodName: "Organic Bread",
      mealType: "Breakfast",
      date: "4,0,23",
      brand: "Costco Organic Bread",
      calories: 100,
      carbs: 20,
      fats: 3,
      protein: 3,
      servingSize: 100,
      cholesterol: 5,
      sodium: 10,
      fiber: 0,
      sugar: 0,
      potassium: 2,
      barcodeId: 3456789123456,
      servings: 2
    }),
    SingleFood.create({
      foodName: "Steak",
      mealType: "Lunch",
      date: "4,0,23",
      brand: "Costco Steak",
      calories: 300,
      carbs: 1,
      fats: 10,
      protein: 18,
      servingSize: 100,
      cholesterol: 5,
      sodium: 10,
      fiber: 0,
      sugar: 0,
      potassium: 2,
      barcodeId: 2345678912345,
      servings: 1
    }),
    SingleFood.create({
      foodName: "Broccoli",
      mealType: "Lunch",
      date: "4,0,23",
      brand: "Costco Broccoli",
      calories: 50,
      carbs: 4,
      fats: 0,
      protein: 0,
      servingSize: 80,
      cholesterol: 2,
      sodium: 8,
      fiber: 2,
      sugar: 0,
      potassium: 2,
      barcodeId: 1234567891234,
      servings: 1
    })
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${foodentries.length} entries`);
  console.log(`seeded successfully`);
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
