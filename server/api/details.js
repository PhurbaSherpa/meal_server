const router = require("express").Router();
const { UserDetails } = require("../db/models");
const { calculateBMR } = require("../functions");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    if (req.user) {
      const userDetails = await UserDetails.findOne({
        where: {
          userId: +req.user.id
        }
      });
      if (userDetails) res.json(userDetails);
      else res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  const { gender, age, weight, feet, inches, activityType } = req.body;
  const activityMultiplier = {
    1: 1.2,
    2: 1.375,
    3: 1.55,
    4: 1.725,
    5: 1.9
  };
  try {
    const BMR = calculateBMR(gender, age, weight, feet, inches);
    const calories = Math.floor(BMR * activityMultiplier[activityType] - 500);
    const protein = +weight;
    const fats = Math.min(30, Math.floor(calories * 0.3 / 9));
    const carbs = Math.floor((calories - protein * 4 - fats * 9) / 4);
    if (req.user) {
      const userDetails = await UserDetails.create({
        gender: gender,
        age: +age,
        weight: +weight,
        feet: +feet,
        inches: +inches,
        userId: +req.user.id,
        calories,
        protein,
        fats,
        carbs
      });
      if (userDetails) res.json(userDetails);
      else res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
});

router.put("/", async (req, res, next) => {
  const { gender, age, weight, feet, inches, activityType } = req.body;
  const activityMultiplier = {
    1: 1.2,
    2: 1.375,
    3: 1.55,
    4: 1.725,
    5: 1.9
  };
  try {
    const BMR = calculateBMR(gender, age, weight, feet, inches);
    const calories = Math.floor(BMR * activityMultiplier[activityType] - 500);
    const protein = +weight;
    const fats = Math.min(30, Math.floor(calories * 0.3 / 9));
    const carbs = Math.floor((calories - protein * 4 - fats * 9) / 4);
    let item = {
      gender: gender,
      age: +age,
      weight: +weight,
      feet: +feet,
      inches: +inches,
      userId: +req.user.id,
      calories,
      protein,
      fats,
      carbs
    };
    if (req.user) {
      const userDetails = await UserDetails.findOne({
        where: {
          userId: +req.user.id
        }
      });
      if (!userDetails) res.sendStatus(204);
      else {
        let updated = userDetails.update(item);
        if (!updated) res.sendStatus(204);
        else res.json(updated);
      }
    } else res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
