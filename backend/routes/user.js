// Les imports 
const express = require('express');

//Le controller user.js
const userController = require("../controllers/user")

//La fonction Router()
const router = express.Router()
var cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json())

//la route (endpoint) signup
router.post('/signup', userController.signup)

//la route login


//exportation du module
module.exports = router;