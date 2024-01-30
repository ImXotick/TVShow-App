const express = require("express");
const {
  getShows,
  updateLiked,
  updateComments,
} = require("../controllers/showsController.js");

const router = express.Router();

//Gets shows
router.post("/shows", getShows);

//Updates user liked shows
router.patch("/shows/:id", updateLiked);

//Adds comment
router.post("/shows/comment", updateComments);

module.exports = router;
