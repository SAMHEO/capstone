<<<<<<< HEAD
const express = require('express');
const app = express();
const bodyParser = require('boßdy-parser');
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', (req, res) => res.json({username: 'eunohcho'}));

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})
=======
const express = require("express");
const app = express();
// const cors = require('cors');
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;
const route = require("./routes/index");

// app.use(cors());

app.use(bodyParser.json());
app.use("/api", route); // app.use('/api', (req, res)=> res.json({username:'bryan'}));

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
>>>>>>> 7d71d211639bdd703a0f47084aa6019b0f60fd4a
