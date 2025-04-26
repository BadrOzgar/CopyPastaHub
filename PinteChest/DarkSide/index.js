import express from "express";
const app = express();

import userRouter from "./routes/user.route.js";

app.use("/users", userRouter);

app.listen(9999, () => {
  const frames = ["●○○", "○●○", "○○●"];
  let i = 0;

  setInterval(() => {
    process.stdout.write(
      `\r------->Im Running ${frames[i++ % frames.length]} `
    );
  }, 300);
});
