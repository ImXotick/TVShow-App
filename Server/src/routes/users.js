const express = require("express");
const { registerUser, loginUser } = require("../controllers/usersContoller");

const router = express.Router();

//Handles login
router.post("/login", loginUser);

//Handles register
router.post("/register", registerUser);

module.exports = router;
