const router = require("express").Router();
const { UserDetails } = require("../db/models");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    if (req.user) {
      const userDetails = await UserDetails.findOne({
        where: {
          userId: req.user.id
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
  const multiplierOffsets = {
    Male: {
      offset: 66,
      weightMultiplier: 6.3,
      heightMultiplier: 12.9,
      ageMultiplier: 6.8
    },
    Female: {
      offset: 655,
      weightMultiplier: 4.3,
      heightMultiplier: 4.7,
      ageMultiplier: 4.7
    }
  };
  const activityMultiplier = {
    1: 1.2,
    2: 1.375,
    3: 1.55,
    4: 1.725,
    5: 1.9
  };
  try {
    const height = +feet * 12 + +inches;

    const BMR =
      multiplierOffsets[gender].offset +
      multiplierOffsets[gender].weightMultiplier * +weight +
      multiplierOffsets[gender].heightMultiplier * height -
      multiplierOffsets[gender].ageMultiplier * +age;
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
        userId: req.user.id,
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
