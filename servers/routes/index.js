const express = require("express");
const router = express.Router();
const db = require("../dbconnection");
("use strict");

router.get("/", (req, res) => res.json({ username: "bryan~~~" }));
router.get("/group", (req, res) => res.json({ username: "dev group. bryan" }));

// DB query example
router.get("/getData", (req, res) => {
  db.query("select * from apartments", (err, rows) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(`query error: ${err}`);
      res.send(err);
    }
  });
});

router.post("/user", (req, res) => {
  db.query(
    `select * from clients where name = "${req.body.name}"`,
    (err, rows) => {
      if (!err) {
        console.log(rows[0].ideal_rent);
        res.send({ rent: rows[0].ideal_rent });
      } else {
        console.log(`query error: ${err}`);
        res.send(err);
      }
    }
  );
});

router.get("/getApts", function (req, res) {
  db.query("SELECT * FROM apartments", (err, rows) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(`query error: ${err}`);
      res.send(err);
    }
  });
});

router.post("/search", function (req, res) {
  var sort = req.body.sort;
  var maxPrice = req.body.maxPrice;
  var numBed = req.body.numBeds;
  const fs = require("fs");

  console.log(maxPrice);
  console.log(numBed);
  fs.readFile("servers/apt.json", (err, data) => {
    if (err) throw err;
    let apt = JSON.parse(data);
    //console.log(apt);
    for (var i = 0; i < apt.length; i++) {
      var apartment = apt[i];

      if ((maxPrice >= apartment.price) & (numBed == apartment.beds)) {
        //res.send(apartment);
        res.json({
          success: true,
        });
      } else {
        res.json({
          success: false,
        });
      }
      //console.log(apartment.name);
    }
  });
});

router.post("/signup", function (req, res) {
  var email = req.body.email;
  var password = req.body.password;
  var repassword = req.body.repassword;
  if (email == "euno@vt.edu") {
    res.json({
      id: 2,
      email: email,
      password: password,
      success: true,
    });
  } else {
    res.json({
      success: false,
    });
  }
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
