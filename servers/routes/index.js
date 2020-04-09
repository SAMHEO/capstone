const express = require("express");
const router = express.Router();
const db = require("../dbconnection");

router.get("/", (req, res) => res.json({ username: "bryan~~~" }));
router.get("/group", (req, res) => res.json({ username: "dev group. bryan" }));

// DB query example
router.get("/getData", (req, res) => {
  db.query("select * from table", (err, rows) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(`query error: ${err}`);
      res.send(err);
    }
  });
});

// Signup api example
router.get("/signup", (req, res) => res.json({ example: "example" }));
router.post("/signup", function(req, res) {
  var userID = req.body.id;
  var userPW = req.body.pw;

  res.send("id: " + userID + "pw :" + userPW);
});

module.exports = router;
