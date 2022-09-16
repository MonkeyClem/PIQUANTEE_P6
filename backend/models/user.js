// Les imports 

const express = require('express');
const mongoose = require('mongoose');
const router = express.Router()
var cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json())


const userSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});

module.exports = mongoose.model('user', userSchema);
