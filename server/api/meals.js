const router = require("express").Router();
const { SingleFood } = require("../db/models");
module.exports = router;

// router.get("/:mealType/:date", async (req, res, next) => {
//   try {
//     const foods = await SingleFood.findAll({
//       where: { mealType: req.params.mealType, date: req.params.date }
//     });
//     if (!foods) res.sendStatus(204);
//     else res.json(foods);
//   } catch (err) {
//     next(err);
//   }
// });

router.get("/:date", async (req, res, next) => {
  try {
    const allfoods = await SingleFood.findAll({
      where: { date: req.params.date }
    });
    if (!allfoods) res.sendStatus(204);
    else res.json(allfoods);
  } catch (error) {
    next(error);
  }
});

router.delete("/:barcodeId/:date/:mealType", async (req, res, next) => {
  try {
    const toBeDestroyed = await SingleFood.findOne({
      where: {
        barcodeId: req.params.barcodeId,
        date: req.params.date,
        mealType: req.params.mealType
      }
    });
    console.log(toBeDestroyed);

    if (!toBeDestroyed) res.sendStatus(204);
    else {
      console.log(toBeDestroyed);
      await toBeDestroyed.destroy();
      res.json(toBeDestroyed);
    }
  } catch (error) {
    console.log("delete error", error);
  }
});

router.post("/addItem", async (req, res, next) => {
  try {
    let item = await SingleFood.findOne({
      where: { barcodeId: req.body.barcodeId }
    });
    if (!item) {
      item = await SingleFood.create(req.body);
    }
    res.send(item);
  } catch (error) {}
});
