//-------------------------------------LES IMPORTS-------------------------------------//
//IMPORTATION DE : bcrypt afin de hasher le password
const bcrypt = require ('bcrypt')
console.log('CONTENU DE BCRYPT')
console.log(bcrypt)
//IMPORTATION DE : express
const express = require('express');
const app = express();
//IMPORTATION DE : module CORS, permettant d'éviter les erreurs relatives à l'origine de la requête 
var cors = require('cors');
app.use(cors());
//IMPORTATION DE : Modèle user 
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
    bcrypt.hash(req.body.password, 10) // L'algorithme de hash sera executé 10 fois 
    .then((hash) =>{
        // ce qui sera enregistré dans MongoDB
        const user = new User ({
            email : req.body.email,
            password : hash,
        });
        console.log("Contenu du nouvel User :")
        console.log(user)

        //Envoyer le user dans la base de données MongoDB
        user
        .save()
        .then(()=>
            res.status(201).json({message: "Utilisateur crée et sauvegardé"})
            )
            .catch((error) => res.status(400).json({error}).send())

    })
    .catch((error) => res.status(500).json({error}).send(console.log(error)))
};