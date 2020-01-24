const router = require("express").Router();
const { SingleFood } = require("../db/models");
module.exports = router;

router.get("/:barcodeId", async (req, res, next) => {
  try {
    let item = await SingleFood.findOne({
      where: {
        barcodeId: req.params.barcodeId
      }
    });
    if (!item) res.sendStatus(204);
    else res.json(item);
  } catch (error) {
    next(error);
  }
});
