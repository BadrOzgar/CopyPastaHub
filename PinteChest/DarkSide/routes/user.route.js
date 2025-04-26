import express from "express";
const router = express.Router();

router.get("/useee", (req, res) => {
  res.json("Hello World!");
});

export default router;
