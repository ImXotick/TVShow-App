const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const showSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    likedShows: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Show", showSchema);
