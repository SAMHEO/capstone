require("dotenv").config();
const express = require("express");
const router = express.Router();
const db = require("../dbconnection");
("use strict");
const crypto = require("crypto");

function hash(password) {
  return crypto
    .createHmac("sha256", process.env.SECRET_KEY)
    .update(password)
    .digest("hex");
}

router.post("/login", function (req, res) {
  var email = req.body.email;
  var password = hash(req.body.password);
  if (email && password) {
    db.query(
      `SELECT * from clients where email = "${email}" and password = "${password}"`,
      (err, rows) => {
        if (err) throw err;
        if (rows.length > 0) {
          res.json({
            email: email,
            success: true,
          });
        } else {
          res.json({
            success: false,
          });
        }
      }
    );
  }
});

router.post("/signup", function (req, res) {
  // Check username format
  // Username has to be alphabets and numbers
  //   let emailRegex = /^[a-z0-9]+$/;

  //   if (!emailRegex.test(req.body.email)) {
  if (!req.body.email) {
    return res.status(400).json({
      error: "BAD USERNAME",
      code: 1,
    });
  }

  if (req.body.password.length < 4 || typeof req.body.password !== "string") {
    return res.status(400).json({
      error: "BAD PASSWORD",
      code: 2,
    });
  }

  db.query(
    `SELECT * FROM clients where email = "${req.body.email}"`,
    (err, rows) => {
      if (err) throw err;
      if (rows.length == 0) {
        var today = new Date();
        hashed_pw = hash(req.body.password);

        var users = {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: hashed_pw,
          created: today,
          modified: today,
        };

        db.query("INSERT INTO clients SET ?", users, function (error, results) {
          if (error) {
            console.log("error occurred: ", error);
            res.status(400).json({
              error: "Error occured",
              code: 4,
            });
          } else {
            // console.log(results);
            res.json({
              success: true,
            });
          }
        });
      } else {
        return res.status(409).json({
          error: "EMAIL EXISTS",
          code: 3,
        });
      }
    }
  );
});

//getting information of user for profile page
router.post("/user", (req, res) => {
  db.query(
    `select * from clients where email = "${req.body.email}"`,
    (err, rows) => {
      if (!err) {
        (firstname = rows[0].firstName),
          (lastname = rows[0].lastName),
          (email = rows[0].email),
          (age = rows[0].birthday);
        sex = rows[0].sex;
        phone = rows[0].phone;
        rent = rows[0].ideal_rent;
        occupation = rows[0].occupation;
        image = rows[0].image ? "user.jpg" : "avatar.png";
        res.json({
          firstname: firstname,
          lastname: lastname,
          email: email,
          age: age,
          sex: sex,
          phone: phone,
          rent: rent,
          image: image,
          occupation: occupation,
        });
      } else {
        console.log(`query error: ${err}`);
        res.send(err);
      }
    }
  );
});

module.exports = router;
