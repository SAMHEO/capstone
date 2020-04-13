const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
// const cors = require('cors');
const port = process.env.PORT || 3001;
const route = require("./routes/index");

// app.use(cors());

app.use("/api", route); // app.use('/api', (req, res)=> res.json({username:'bryan'}));

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
