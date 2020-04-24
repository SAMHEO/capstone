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

//getting apartment from db
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

//getting apartment address from db
router.get("/getAddress", function (req, res) {
  db.query("SELECT name, address FROM apartments", (err, rows) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(`query error: ${err}`);
      res.send(err);
    }
  });
});

//getting apartment list for home page
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
//getting three random users for home page
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
  var numRate = req.body.numRate;
  var numBath = req.body.numBath;
  // const fs = require("fs");

  console.log(maxPrice);
  db.query(
    `SELECT name, rent, rate,bath, num_room,address from roommate_finder.apartments where rent <= ${maxPrice} AND num_room = ${numBed} AND rate = ${numRate} And bath => ${numBath}`,
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
