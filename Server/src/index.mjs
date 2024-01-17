import express from "express";
import cors from "cors";
import showRouter from "./routes/shows.mjs";

const app = express();

app.use(cors());
app.use(express.json());
app.use(showRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

app.get("/api/fail", (req, res) =>
  res.status(403).json({ msg: "You are not allowed to access this api!" })
);
