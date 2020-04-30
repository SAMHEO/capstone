const express = require("express");
const router = express.Router();
const db = require("../dbconnection");
const account = require("./account");
("use strict");

router.use("/account", account);

router.get("/matchedusers", (req, res) => {
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
      console.log("this is user list " + rows[0].created);
      // console.log("this is user list" + rows[1].firstName);
      // console.log("this is user list" + rows[2].firstName);
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
  console.log(numBed);
  console.log(numRate);
  console.log(numBath);

  db.query(
    `SELECT name, rent, rate,bath, num_room,address,shortName, lat, long from roommate_finder.apartments where rent <= ${maxPrice} AND num_room = ${numBed} AND rate >= ${numRate} And bath = ${numBath}`,
    (err, rows) => {
      if (rows != 0) {
        //console.log(rows);
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

//getting apartment detail
router.post("/aptdetail", function (req, res) {
  // console.log("hello apt detail");
  var shortN = req.body.aptshortname;
  // console.log("ddd"+ shortN);
  db.query(
    `SELECT * FROM roommate_finder.apartments where name = "${shortN}"`,
    (err, rows) => {
      if (!err) {
        console.log(rows[0]);
        res.json({
          aptName: rows[0].name,
          aptRent: rows[0].rent,
          aptRoom: rows[0].num_room,
          aptAddress: rows[0].address,
          aptRate: rows[0].rate,
          aptWebsite: rows[0].website,
          aptDescription: rows[0].description,
          aptLong: rows[0].long,
          aptLat: rows[0].lat,
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

router.get("/criticaltags", function (req, res) {
  db.query(`SELECT * FROM critical_tags`, (err, rows) => {
    if (!err) {
      const result = [];
      for (r in rows) {
        tag = {
          id: rows[r].tag_id,
          name: rows[r].name,
          checked: false,
          image: "tag.png",
        };
        result.push(tag);
      }
      res.json(result);
    } else {
      console.log(`query error: ${err}`);
      res.send(err);
    }
  });
});
router.get("/secondarytags", function (req, res) {
  db.query(`SELECT * FROM secondary_tags`, (err, rows) => {
    if (!err) {
      const result = [];
      for (r in rows) {
        tag = {
          id: rows[r].tag_id,
          name: rows[r].name,
          checked: false,
          image: "tag.png",
        };
        result.push(tag);
      }
      res.json(result);
    } else {
      console.log(`query error: ${err}`);
      res.send(err);
    }
  });
});
router.get("/hobbies", function (req, res) {
  db.query(`SELECT * FROM hobbies`, (err, rows) => {
    if (!err) {
      const result = [];
      for (r in rows) {
        tag = { id: rows[r].tag_id, name: rows[r].name, checked: false };
        result.push(tag);
      }
      res.json(result);
    } else {
      console.log(`query error: ${err}`);
      res.send(err);
    }
  });
});

router.post("/temp", function (req, res) {
  var critical = req.body.critical;
  var secondary = req.body.secondary;
  var hobbies = req.body.hobbies;
  var query = `UPDATE clients SET description= "${req.body.description}", birthday = "${req.body.birthdate}", sex= "${req.body.gender}" WHERE (client_id = "${req.body.id}");`;
  db.query(query, (err) => {
    if (err) {
      console.log(`query error: ${err}`);
      res.send(err);
    }
  });

  for (i in critical) {
    if (critical[i].checked == true) {
      db.query(
        `
      INSERT IGNORE INTO requests_for_critical (client_id, tag_id) VALUES (${req.body.id}, ${critical[i].id});`,
        (err, rows) => {
          if (err) {
            console.log(`query error: ${err}`);
            res.send(err);
          }
        }
      );
    } else {
      var query = `DELETE FROM requests_for_critical where client_id = "${req.body.id}" and tag_id = "${critical[i].id}";`;
      db.query(query, (err) => {
        if (err) {
          console.log(`query error: ${err}`);
          res.send(err);
        }
      });
    }
  }
  for (i in secondary) {
    if (secondary[i].checked == true) {
      db.query(
        `
      INSERT IGNORE INTO requests_for_secondary (client_id, tag_id) VALUES (${req.body.id}, ${secondary[i].id});`,
        (err, rows) => {
          if (err) {
            console.log(`query error: ${err}`);
            res.send(err);
          }
        }
      );
    } else {
      var query = `DELETE FROM requests_for_secondary where client_id = "${req.body.id}" and tag_id = "${secondary[i].id}";`;
      db.query(query, (err) => {
        if (err) {
          console.log(`query error: ${err}`);
          res.send(err);
        }
      });
    }
  }
  for (i in hobbies) {
    if (hobbies[i].checked == true) {
      db.query(
        `
      INSERT IGNORE INTO requests_for_hobby (client_id, tag_id) VALUES (${req.body.id}, ${hobbies[i].id});`,
        (err, rows) => {
          if (err) {
            console.log(`query error: ${err}`);
            res.send(err);
          }
        }
      );
    } else {
      var query = `
      DELETE FROM requests_for_hobby where client_id = "${req.body.id}" and tag_id = "${hobbies[i].id}";`;
      db.query(query, (err) => {
        if (err) {
          console.log(`query error: ${err}`);
          res.send(err);
        }
      });
    }
  }

  var query2 = `UPDATE clients SET selected_tags = "1" WHERE client_id = "${req.body.id}";`;
  db.query(query2);
  res.json({ selected_tags: true, response: "OK" });
});
module.exports = router;
