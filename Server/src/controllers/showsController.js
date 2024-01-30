const mongoose = require("mongoose");
const Show = require("../models/showModel.js");
const User = require("../models/userModel.js");

//Gets all shows in DB
const getShows = async (req, res) => {
  const { username } = req.body;

  const foundShows = await Show.find({});

  if (username) {
    const userLikedShows = await User.findOne({ username: username });

    foundShows.map((show) => {
      if (userLikedShows.likedShows.includes(show.id)) {
        show.liked = true;
        return show;
      }
    });
  }

  if (foundShows.length > 0) return res.status(200).json(foundShows);
  else return res.status(400).json({ error: "Error occurred!" });
};

//Updates liked value in DB
const updateLiked = async (req, res) => {
  const showId = req.params.id;
  const { username, liked } = req.body;

  try {
    if (liked) {
      await User.updateOne(
        { username: username },
        { $push: { likedShows: showId } }
      );
    } else {
      await User.updateOne(
        { username: username },
        { $pull: { likedShows: showId } }
      );
    }

    return res.status(200).json({ msg: `Successfully changed liked!` });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ error: error.message });
  }
};

//Adds comment to DB
const updateComments = async (req, res) => {
  const { show, comment } = req.body;

  try {
    if (show && comment) {
      await Show.updateOne({ id: show.id }, { $push: { comments: comment } });
    }

    return res.status(200).json({ msg: `Successfully added comment!` });
  } catch (error) {
    return res
      .status(400)
      .json({ error: `Show with id: ${show.id} not found!` });
  }
};

module.exports = { getShows, updateLiked, updateComments };
