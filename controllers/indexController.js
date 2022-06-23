let tanques = require("../data/tanques.json")

const indexController = {

    home: (req, res) => {
        res.render("home", {tanques})
    },
    detalle: (req, res) => {
        let id = req.params.id
        let detalleDeTanque = tanques.find((tanque) => tanque.id == id)
        res.render("tankDetail", {detalleDeTanque}) 
    }
    
}

module.exports = indexController;
