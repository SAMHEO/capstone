const mysql = require("mysql");
const connection = mysql.createPool({
  host: "database-1.crymp8h5hlhr.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "12345678",
  database: "roommate_finder",
});

module.exports = connection;
