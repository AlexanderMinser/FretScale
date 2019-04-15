
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post("/addname", (req, res) => {
    console.log('I was sent ' + req);
});

app.listen(8000, () => {
    console.log('Listening on port 8000');
});