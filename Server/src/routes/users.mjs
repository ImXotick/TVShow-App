import { Router } from "express";
import { jwt } from "jsonwebtoken";

const router = Router();

var users = {};

router.post("/login", (req, res) => {
  console.log("/Login");
  /*
  var user = req.body;
  if (users[user.username] && users[user.username] === user.password) {
    res.json({
      msg: "Successfully logged in",
      token: jwt.sign({ user: user.username }, "SECRET"),
    });
  } else {
    res.status(400).json({ msg: "Invalid username or password" });
  }
  */
});

router.post("/register", (req, res) => {
  var user = req.body;
  if (users[user.username]) {
    res.status(400).json({ msg: "User already exists, please login." });
  } else {
    users[user.username] = user.password;
    res.json({
      msg: "Successfully created user, please login",
    });
  }
});

export default router;
