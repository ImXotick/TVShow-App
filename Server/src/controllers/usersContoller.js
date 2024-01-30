const User = require("../models/userModel.js");
const jwt = require("jsonwebtoken");

//Login user
const loginUser = async (req, res) => {
  const { user } = req.body;

  const foundUser = await User.findOne({
    username: user.username,
    password: "test",
  });

  if (!foundUser)
    return res.status(400).json({ error: "User does not exist!" });

  res.json({
    msg: "Successfully logged in",
    token: jwt.sign({ user: user.username }, "SECRET"),
    username: foundUser.username,
  });
};

//Register user
const registerUser = async (req, res) => {
  const { user } = req.body;

  const foundUser = await User.findOne({ username: user.username });

  if (foundUser) return res.status(400).json({ error: "User already exists!" });

  try {
    await User.create({
      username: user.username,
      password: user.password,
      likedShows: [],
    });
    res.status(200).json({ msg: "Successfully created user!" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
