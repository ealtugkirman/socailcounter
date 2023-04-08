const express = require("express");
const serverless = require("serverless-http");

const app = express();

const router = express.Router();

let counter = 5;

router.get("/", (req, res) => {
  counter++;

  res.json({
    counter,
  });
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
