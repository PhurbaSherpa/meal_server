"use strict";

const db = require("../server/db");
const { User } = require("../server/db/models");
const { SingleFood } = require("../server/db/models");
const { UserDetails } = require("../server/db/models");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  const users = await Promise.all([
    User.create({
      email: "cody@email.com",
      password: "123",
      firstName: "Cody",
      lastName: "Sun"
    }),
    User.create({
      email: "murphy@email.com",
      password: "123",
      firstName: "Murphy",
      lastName: "Moon"
    })
  ]);

  const userDetails = await Promise.all([
    UserDetails.create({
      age: 22,
      inches: 7,
      feet: 5,
      weight: 185,
      calories: 2000,
      protein: 185,
      fats: 40,
      carbs: 225,
      userId: 1,
      gender: "Male"
    }),
    UserDetails.create({
      age: 21,
      inches: 9,
      feet: 5,
      weight: 165,
      calories: 2400,
      protein: 185,
      fats: 40,
      carbs: 325,
      userId: 2,
      gender: "Female"
    })
  ]);

  const foodentries = await Promise.all([
    SingleFood.create({
      foodName: "Organic Egg",
      mealType: "Breakfast",
      date: "4,0,23",
      brand: "Costco Organic Eggs",
      calories: 70,
      carbs: 0,
      fats: 2,
      protein: 13,
      servingSize: 80,
      cholesterol: 5,
      sodium: 10,
      fiber: 0,
      sugar: 0,
      potassium: 2,
      foodId: "456789123456",
      servings: 2,
      userId: 1
    }),
    SingleFood.create({
      foodName: "Organic Bread",
      mealType: "Breakfast",
      date: "4,0,23",
      brand: "Costco Organic Bread",
      calories: 110,
      carbs: 20,
      fats: 2,
      protein: 3,
      servingSize: 100,
      cholesterol: 5,
      sodium: 10,
      fiber: 0,
      sugar: 0,
      potassium: 2,
      foodId: "345678912345",
      servings: 2,
      userId: 1
    }),
    SingleFood.create({
      foodName: "Steak",
      mealType: "Lunch",
      date: "4,0,23",
      brand: "Costco Steak",
      calories: 320,
      carbs: 12,
      fats: 16,
      protein: 32,
      servingSize: 100,
      cholesterol: 5,
      sodium: 10,
      fiber: 0,
      sugar: 0,
      potassium: 2,
      foodId: "234567891234",
      servings: 1,
      userId: 1
    }),
    SingleFood.create({
      foodName: "Broccoli",
      mealType: "Lunch",
      date: "4,0,23",
      brand: "Costco Broccoli",
      calories: 40,
      carbs: 8,
      fats: 0,
      protein: 2,
      servingSize: 80,
      cholesterol: 2,
      sodium: 8,
      fiber: 2,
      sugar: 0,
      potassium: 2,
      foodId: "123456789123",
      servings: 1,
      userId: 1
    }),
    SingleFood.create({
      foodName: "Organic Egg",
      mealType: "Breakfast",
      date: "2,0,28",
      brand: "Costco Organic Eggs",
      calories: 70,
      carbs: 0,
      fats: 2,
      protein: 13,
      servingSize: 80,
      cholesterol: 5,
      sodium: 10,
      fiber: 0,
      sugar: 0,
      potassium: 2,
      foodId: "456789123456",
      servings: 2,
      userId: 1
    }),
    SingleFood.create({
      foodName: "Organic Bread",
      mealType: "Breakfast",
      date: "2,0,28",
      brand: "Costco Organic Bread",
      calories: 110,
      carbs: 20,
      fats: 2,
      protein: 3,
      servingSize: 100,
      cholesterol: 5,
      sodium: 10,
      fiber: 0,
      sugar: 0,
      potassium: 2,
      foodId: "345678912345",
      servings: 2,
      userId: 1
    }),
    SingleFood.create({
      foodName: "Steak",
      mealType: "Lunch",
      date: "2,0,28",
      brand: "Costco Steak",
      calories: 320,
      carbs: 12,
      fats: 16,
      protein: 32,
      servingSize: 100,
      cholesterol: 5,
      sodium: 10,
      fiber: 0,
      sugar: 0,
      potassium: 2,
      foodId: "234567891234",
      servings: 1,
      userId: 1
    }),
    SingleFood.create({
      foodName: "Broccoli",
      mealType: "Lunch",
      date: "2,0,28",
      brand: "Costco Broccoli",
      calories: 40,
      carbs: 8,
      fats: 0,
      protein: 2,
      servingSize: 80,
      cholesterol: 2,
      sodium: 8,
      fiber: 2,
      sugar: 0,
      potassium: 2,
      foodId: "123456789123",
      servings: 1,
      userId: 1
    })
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${userDetails.length} user details`);
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
