const cors = require("cors");
const express = require("express");
const serverless = require("serverless-http");


const app = express();

const router = express.Router();

let facebookcounter = 5;
let twittercounter = 5;
let googlecounter = 5;
let symbaloocounter = 5;
let pinterestcounter = 5;
let emailcounter = 5;

router.get("/", (req, res) => {
    res.json({
        facebookcounter,
        twittercounter,
        googlecounter,
        symbaloocounter,
        pinterestcounter,
        emailcounter,
    });
});

router.put("/twitter", (req, res) => {
    twittercounter++;
    res.json({
        twittercounter,
    });
});
router.put("/facebook", (req, res) => {
    facebookcounter++;
    res.json({
        facebookcounter,
    });
});
router.put("/google", (req, res) => {
    googlecounter++;
    res.json({
        googlecounter,
    });
});
router.put("/symbaloo", (req, res) => {
    symbaloocounter++;
    res.json({
        symbaloocounter,
    });
});
router.put("/pinterest", (req, res) => {
    pinterestcounter++;
    res.json({
        pinterestcounter,
    });
});
router.put("/email", (req, res) => {
    emailcounter++;
    res.json({
        emailcounter,
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
