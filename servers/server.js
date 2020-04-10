const fs = require("fs");
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();
// const cors = require('cors');
const port = process.env.PORT || 3001;
const route = require("./routes/index");

const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);
const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});
connection.connect();

// app.use(cors());

app.use(bodyParser.json());
app.use("/api", route); // app.use('/api', (req, res)=> res.json({username:'bryan'}));

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
