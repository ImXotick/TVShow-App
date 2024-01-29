const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const showSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
    },
    description: {
      type: String,
    },
    img: {
      type: String,
    },
    liked: {
      type: Boolean,
    },
    genre: {
      type: Array,
    },
    comments: {
      type: Array,
    },
    stars: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Show", showSchema);
