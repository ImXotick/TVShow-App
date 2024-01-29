const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const showRouter = require("./routes/shows.js");
const userRouter = require("./routes/users.js");

require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(showRouter);
app.use(userRouter);

const PORT = process.env.PORT || 3000;

app.get("/api/fail", (req, res) =>
  res.status(403).json({ msg: "You are not allowed to access this api!" })
);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to DB & Running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
