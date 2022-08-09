const express = require('express');
const mongoose = require("mongoose");
var cors = require('cors');
mongoose.connect('mongodb://localhost:27017/cloudbook')

const app = express()
app.use(express.json())
app.use(cors());

//creating endpoints
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(5000);

