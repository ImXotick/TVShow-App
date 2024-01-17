import express from "express";
import userRouter from "./routes/users.mjs";

const app = express();

app.use(express.json());
app.use(userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
