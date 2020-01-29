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
      res.json(userDetails);
    }
  } catch (err) {
    next(err);
  }
});
