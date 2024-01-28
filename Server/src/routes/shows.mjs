import { Router } from "express";
import shows from "../utils/shows.mjs";
import users from "../utils/users.mjs";

const router = Router();

//Gets shows
router.get("/api/shows", (req, res) => {
  var query = (req.query["q"] || "").toLowerCase();
  if (query) {
    const foundShows = shows.filter((show) => {
      show.title.toLowerCase().indexOf(query) != -1;
    });
    return res.status(200).json(foundShows);
  }
  //console.log(shows);
  return res.status(200).json(shows);
});

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

export default router;
