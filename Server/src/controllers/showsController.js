const Show = require("../models/showModel.js");

//Gets all shows
const getShows = async (req, res) => {
  const foundShows = await Show.find({});

  if (foundShows.length > 0) return res.status(200).json(foundShows);
  else return res.status(400).json({ error: "Error occurred!" });
};

module.exports = { getShows };
