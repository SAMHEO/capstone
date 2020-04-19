const express = require("express");
const router = express.Router();
const db = require("../dbconnection");
const account = require("./account");
("use strict");

router.use("/account", account);

router.get("/users", (req, res) => {
  db.query(`Select * from clients`, (err, rows) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(`Query error: ${err}`);
      res.send(err);
    }
  });
});
router.post("/user", (req, res) => {
  db.query(
    `select * from clients where name = "${req.body.name}"`,
    (err, rows) => {
      if (!err) {
        age = rows[0].birthday;
        sex = rows[0].sex;
        phone = rows[0].phone;
        rent = rows[0].ideal_rent;
        image = rows[0].image ? "user.jpg" : "avatar.png";
        res.json({
          age: age,
          sex: sex,
          phone: phone,
          rent: rent,
          image: image,
        });
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
      //console.log(rows)
    } else {
      console.log(`query error: ${err}`);
      res.send(err);
    }
  });
});

router.get("/homeApt", function (req, res) {
  db.query(
    `SELECT * FROM roommate_finder.apartments ORDER BY rate DESC LIMIT 3`,
    (err, rows) => {
      if (!err) {
        res.send(rows);
        //console.log(rows);
      } else {
        console.log(`query error: ${err}`);
        res.send(err);
      }
    }
  );
});
router.get("/homeUser", function (req, res) {
  db.query(
    `SELECT * FROM roommate_finder.clients ORDER BY RAND() LIMIT 3`,
    (err, rows) => {
      if (!err) {
        res.send(rows);
        //console.log(rows);
      } else {
        console.log(`query error: ${err}`);
        res.send(err);
      }
    }
  );
});

//getting apartment data from database according to the preferences
router.post("/search", function (req, res) {
  var sort = req.body.sort;
  var maxPrice = req.body.maxPrice;
  var numBed = req.body.numBeds;
  // const fs = require("fs");

  console.log(maxPrice);
  db.query(
    `SELECT name, rent, rate, num_room,address from roommate_finder.apartments where rent <= ${maxPrice} AND num_room = ${numBed}`,
    (err, rows) => {
      if (rows != 0) {
        //console.log(rows[0]);
        res.json({
          aptList: rows,
          // nameOfAPT: rows[0].name,
          // price: rows[0].average_rent,
          success: true,
        });
      } else {
        console.log(`query error: ${err}`);
        res.json({
          success: false,
        });
      }
    }
  );
});

module.exports = router;
