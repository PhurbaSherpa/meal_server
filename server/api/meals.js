const router = require("express").Router();
const { SingleFood } = require("../db/models");
module.exports = router;

router.get("/:mealType/:date", async (req, res, next) => {
  try {
    const foods = await SingleFood.findAll({
      where: { mealType: req.params.mealType, date: req.params.date }
    });
    if (!foods) res.sendStatus(204);
    else res.json(foods);
  } catch (err) {
    next(err);
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
