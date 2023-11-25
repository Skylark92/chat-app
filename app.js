const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

require('dotenv').config();

app.use(cors());

// mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => console.log('connected to database'));

module.exports = app;
