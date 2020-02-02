const router = require("express").Router();
const { User } = require("../db/models");
module.exports = router;

router.use("/details", require("./details"));

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["id", "email"]
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.put("/", async (req, res, next) => {
  try {
    const { email, firstName, lastName } = req.body;
    if (req.user) {
      const user = await User.findOne({ where: { id: req.user.id } });
      if (!user) res.sendStatus(204);
      else {
        const changedUser = await user.update({ email, firstName, lastName });
        if (!changedUser) res.sendStatus(204);
        else res.json(changedUser);
      }
    } else res.sendStatus(204);
  } catch (error) {
    console.log(error);
  }
});
