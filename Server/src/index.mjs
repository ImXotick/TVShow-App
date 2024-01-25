import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import showRouter from "./routes/shows.mjs";
import userRouter from "./routes/users.mjs";
import dotenv from "dotenv";

dotenv.config();
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
