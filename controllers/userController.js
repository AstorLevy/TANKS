let fs = require("fs")
let path = require("path")
const { validationResult } = require("express-validator");
const User = require("../models/User")
const bcrypt = require('bcrypt');

userController = {

    loginA: (req, res) => {
        res.render("login")
    },

    loginB: (req, res) => {

        let userToLogin = User.findByField("email", req.body.email);

        if(userToLogin) {
            let isOk = bcrypt.compareSync(req.body.password, userToLogin.password)
            if (isOk){
                return res.redirect("/users/profile");
            }
            return res.render("login", {
                errors: {
                    email: {
                        msg: "No es la contraseña"
                    }
                }
            });
        }
        
        return res.render("login", {
            errors: {
                email: {
                    msg: "No se encuentra el email en la base de datos"
                }
            }
        });
    },
    
    registerA: (req, res) => {
        res.render("register")
    },

    registerB: (req, res) => {

        let userToCreate = {
            ...req.body,
            password: bcrypt.hashSync(req.body.password, 10)
        }

        let userInDB = User.findByField("email", req.body.email);

        if(userInDB){
            return res.render ("register", {
                errors: {email: {msg: "Este email ya está registrado"},old: req.body}})
        }

        User.create(userToCreate)
        res.redirect("login")

    },
    profile: (req, res) => {
        res.render("profile")
    }
}

module.exports = userController