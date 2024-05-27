const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/posts-list', (req, res) => {
    const obj = JSON.parse(fs.readFileSync('./public/db.json', 'utf8'));
    res.send(obj);
});