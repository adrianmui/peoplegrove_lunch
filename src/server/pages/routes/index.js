const router = require("express").Router();

const { loginRequired } = require("./../../auth/auth");

/* GET home page. */
router.get("/", (req, res) => {
  res.sendFile("./../../../../public/index.html");
});

router.get("/landing", (req, res, next) => {
  console.log(`current user is: ${req.user}`);
  res.render("index", { user: req.user });
});

router.get("/profile", loginRequired, (req, res, next) => {
  res.render("user/profile", { user: req.user });
});

module.exports = router;
