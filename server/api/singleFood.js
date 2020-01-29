const router = require("express").Router();
const { SingleFood } = require("../db/models");
module.exports = router;

router.get("/:barcodeId/:mealType/:date", async (req, res, next) => {
  try {
    if (req.user) {
      let item = await SingleFood.findOne({
        where: {
          barcodeId: req.params.barcodeId,
          date: req.params.date,
          mealType: req.params.mealType,
          userId: req.user.id
        }
      });
      if (!item) res.sendStatus(204);
      else res.json(item);
    }
  } catch (error) {
    next(error);
  }
});
