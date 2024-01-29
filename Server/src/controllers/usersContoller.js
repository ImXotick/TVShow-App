const User = require("../models/userModel.js");
const jwt = require("jsonwebtoken");

//Login user
const loginUser = async (req, res) => {
  const { user } = req.body;

  const foundUser = await User.find({
    username: user.username,
    password: user.password,
  });

  if (foundUser.length === 0)
    return res.status(400).json({ error: "User does not exist!" });

  res.json({
    msg: "Successfully logged in",
    token: jwt.sign({ user: user.username }, "SECRET"),
    username: foundUser.username,
    likedShows: foundUser.likedShows,
  });
};

//Register user
const registerUser = async (req, res) => {
  const { user } = req.body;

  const foundUser = await User.find({ username: user.username });

  if (foundUser.length > 0)
    return res.status(400).json({ error: "Username taken!" });

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
