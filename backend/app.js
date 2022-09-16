const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
const userRoutes = require('./routes/user');
const mongoose = require('mongoose');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

mongoose.connect('mongodb+srv://clement:clem@piquantee.nl0h7sg.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((error) => console.log(error + 'Connexion à MongoDB échouée !'));

app.use(express.json());
app.use(cors());

//Création de la route d'authentification
app.use('/api/auth', userRoutes )






//   app.post('/api/auth/login', (req, res, next) => {
//     console.log(req.body)
//     res.status(200).json(req.body); 
//     console.log("LOGIN EFFECTUE AVEC SUCCES")       
//     next()
//   });

app.get('/api/sauces', (req, res, next) => {
  console.log(req.body)
  const sauces = [];
  res.status(200).json(sauces);
  console.log(sauces)
});



  
module.exports = app; 