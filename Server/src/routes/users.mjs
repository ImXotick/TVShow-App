import { Router } from "express";
import jwt from "jsonwebtoken";
import users from "../utils/users.mjs";

const router = Router();

//Handles login
router.post("/login", (req, res) => {
  var user = req.body;
  let foundUser = users.find(
    (item) => item.username === user.username && item.password === user.password
  );
  if (foundUser) {
    res.json({
      msg: "Successfully logged in",
      token: jwt.sign({ user: user.username }, "SECRET"),
      username: foundUser.username,
    });
  } else {
    res.status(400).json({ msg: "Invalid username or password" });
  }
});

//Handles register
router.post("/register", (req, res) => {
  var user = req.body;
  let foundUser = users.find((item) => item.username === user.username);
  if (foundUser)
    res.status(400).json({ msg: "User already exists, please login." });
  else {
    users.push(user);
    res.json({
      msg: "Successfully created user, please login",
    });
  }
});

export default router;
