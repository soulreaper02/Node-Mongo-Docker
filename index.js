const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


// Connect to MongoDB - Replace mongo with localhost when spinning up docker.
require('./config/db');

const port = 3000;
app.listen(port, () => console.log('Server running...'));

require('./routes/poll')(app);