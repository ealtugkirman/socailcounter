const cors = require("cors");
const express = require("express");
const serverless = require("serverless-http");

const app = express();

const router = express.Router();

let counter = 5;

router.get("/", (req, res) => {
  res.json({
    counter,
  });
});

router.put("/", (req, res) => {
  counter++;
  res.json({
    counter,
    
  });
});

const corsOptions = {
  origin: "*",
  methods: "GET,PUT",
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
