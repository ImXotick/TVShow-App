const express = require("express");
const { getShows } = require("../controllers/showsController.js");
const shows = require("../utils/shows.js");

const router = express.Router();

//Gets shows
router.get("/shows", getShows);

//TODO:FIX FOR USERS
//Toggles favorite
router.patch("/api/shows/:id", (req, res) => {
  let { showId } = req.params.id;
  let foundShow = shows.find((item) => item.id === showId);
  if (foundShow) {
    foundShow.liked = req.body.liked;
    let msg = `Show with id ${showId} is now`;
    msg += foundShow.liked ? " favorite. " : " not favorite.";
    return res.status(200).json({ msg: msg });
  }
  return res.status(400).json({ msg: `Show with id: ${showId} not found!` });
});

//Adds comment
router.post("/api/shows/comment", (req, res) => {
  let { show, comment } = req.body;
  try {
    shows.find((item) => {
      if (item.id === show.id) {
        item.comments.push(comment);
      }
    });
    return res.status(200).json({ msg: `Successfully added comment!` });
  } catch (error) {
    return res.status(400).json({ msg: `Show with id: ${show.id} not found!` });
  }
});

module.exports = router;
