const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello this is get");
});

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  if (!email || !password || !name) {
    res.status(422).json({ error: "Fill all values" });
  }
  res.status(200).json({ message: "successfully connected" });
});

module.exports = router;
