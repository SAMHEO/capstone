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

router.post("/login", function (req, res) {
  var email = req.body.email;
  var password = req.body.password;

  if (email == "admin@vt.edu" && password == "1") {
    // res.send("success");
    res.json({
      id: 1,
      email: email,
      isLogin: true,
      success: true,
    });
  } else {
    res.json({
      success: false,
    });
  }
});

// Signup api example
router.get("/signup", (req, res) => res.json({ example: "example" }));
router.post("/signup", function (req, res) {
  var userID = req.body.id;
  var userPW = req.body.pw;

  res.send("id: " + userID + "pw :" + userPW);
});

module.exports = router;
