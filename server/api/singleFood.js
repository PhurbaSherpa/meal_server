const router = require("express").Router();
const { SingleFood } = require("../db/models");
module.exports = router;

router.get("/:barcodeId", async (req, res, next) => {
  try {
    const singleFood = await SingleFood.findOne({
      where: { barcodeId: req.params.barcodeId }
    });
    if (!singleFood) res.sendStatus(204);
    else res.json(singleFood);
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
