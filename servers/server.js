const express = require('express');
const app = express();
const bodyParser = require('boßdy-parser');
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', (req, res) => res.json({username: 'eunohcho'}));

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})