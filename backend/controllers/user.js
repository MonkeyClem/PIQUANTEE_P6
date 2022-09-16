//importation du modèle de la base de données
const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());
const User = require('../models/user');

console.log("CONTENU DE : user")
console.log(User)

//signup pour enregistrer le nouvel utilisateur dans la BDD

exports.signup = (req, res, next) => {
    console.log("CONTENU DU : req.body (controller user)")
    console.log(req.body)

    console.log("CONTENU DU : req.body.email (controller user)")
    console.log(req.body.email)

    console.log("CONTENU DU : req.body.password (controller user)")
    console.log(req.body.password)

    //Le Hachage du Mot de Passe 
    
    const user = new User ({
        email : req.body.email,
        password : req.body.password,
    })
 
    console.log("Contenu du nouvel User :")
    console.log(user)
    
    user
    .save()
    .then(() => res.status(201).json({message: "User Created and Saved"}))
    .catch((error) => res.status(500).json({error}))
};