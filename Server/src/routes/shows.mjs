import { Router } from "express";
import shows from "../utils/constansts.mjs";

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
  return res.status(200).json(shows);
});

//Creates new show
router.post("/api/shows", (req, res) => {
  let show = req.body;
  let foundShow = shows.find((item) => item.id === show.id);
  if (foundShow) {
    return res
      .status(400)
      .json({ msg: `Show with id: ${show.id} already exists!` });
  }
  shows.push(show);
  return res
    .status(200)
    .json({ msg: `Show with id: ${show.id} successfully created!` });
});

//Toggles favorite
router.patch("/api/shows/:id", (req, res) => {
  console.log("ran");
  let showId = req.params.id;
  let foundShow = shows.find((item) => item.id === showId);
  if (foundShow) {
    foundShow.liked = req.body.liked;
    let msg = `Show with id ${showId} is now`;
    msg += foundShow.liked ? " favorite. " : " not favorite.";
    return res.status(200).json({ msg: msg });
  }
  return res.status(400).json({ msg: `Show with id: ${showId} not found! ` });
});

export default router;
