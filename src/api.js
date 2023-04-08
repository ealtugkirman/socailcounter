const cors = require("cors");
const express = require("express");
const serverless = require("serverless-http");
const redis = require("redis");
const client = redis.createClient();

const app = express();

const router = express.Router();

client.set("facebookcounter", 5);
client.set("twittercounter", 5);
client.set("googlecounter", 5);
client.set("symbaloocounter", 5);
client.set("pinterestcounter", 5);
client.set("emailcounter", 5);

router.get("/", (req, res) => {
  client.mget([
    "facebookcounter",
    "twittercounter",
    "googlecounter",
    "symbaloocounter",
    "pinterestcounter",
    "emailcounter",
  ], function(err, results) {
    if (err) throw err;
    res.json({
        facebookcounter: results[0],
        twittercounter: results[1],
        googlecounter: results[2],
        symbaloocounter: results[3],
        pinterestcounter: results[4],
        emailcounter: results[5],
    });
  });
});

router.put("/twitter", (req, res) => {
  client.incr("twittercounter", function(err, reply) {
    if (err) throw err;
    res.json({
        twittercounter: reply,
    });
  });
});

router.put("/facebook", (req, res) => {
  client.incr("facebookcounter", function(err, reply) {
    if (err) throw err;
    res.json({
        facebookcounter: reply,
    });
  });
});

router.put("/google", (req, res) => {
  client.incr("googlecounter", function(err, reply) {
    if (err) throw err;
    res.json({
        googlecounter: reply,
    });
  });
});

router.put("/symbaloo", (req, res) => {
  client.incr("symbaloocounter", function(err, reply) {
    if (err) throw err;
    res.json({
        symbaloocounter: reply,
    });
  });
});

router.put("/pinterest", (req, res) => {
  client.incr("pinterestcounter", function(err, reply) {
    if (err) throw err;
    res.json({
        pinterestcounter: reply,
    });
  });
});

router.put("/email", (req, res) => {
  client.incr("emailcounter", function(err, reply) {
    if (err) throw err;
    res.json({
        emailcounter: reply,
    });
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
