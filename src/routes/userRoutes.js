import express from "express";

const router = express.Router();

router.get("/user", (req, res) => {
  res.send("User route is working");
});

router.post("/user", (req, res) => {
  const params = req.body;
  res.json(params);
});

export default router;
