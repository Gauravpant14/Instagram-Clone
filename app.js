const express = require("express");
const app = express();
const PORT = 5000;

const customMiddleWare = (req, res, next) => {
  console.log("Middleware executed");
  next();
};

// app.use(customMiddleWare);   ---- here using middleware for all the requested path
//middleware will execute before any other things

app.get("/", (req, res) => {
  console.log("home");
  res.send("hello world");
});

app.get("/about", customMiddleWare, (req, res) => {
  // here using middleware for only about route
  console.log("about page");
  res.send("hello world this is about page");
});

app.listen(PORT, () => {
  console.log("server is running on", PORT);
});
