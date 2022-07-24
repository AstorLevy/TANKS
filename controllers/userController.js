let fs = require("fs")
let path = require("path")
const { validationResult } = require("express-validator");

userController = {

    loginA: (req, res) => {
        res.render("login")
    },

    loginB: (req, res) => {

        const errors = validationResult(req);

        if(errors.isEmpty()){
            //...
        }else{
            res.render("login", { errors: errors.mapped(), old: req.body });
        }
        
    },
    
    registerA: (req, res) => {
        res.render("register")
    },

    registerB: (req, res) => {

        const errors = validationResult(req);

        if(errors.isEmpty()){
            //...
        }else{
            res.render("register", { errors: errors.mapped(), old: req.body });
        }
    }
}

module.exports = userController