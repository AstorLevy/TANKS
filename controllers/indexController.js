let tanques = require("../data/tanques.json")
let fs = require("fs")
let path = require("path")

const indexController = {

    home: (req, res) => {
        res.render("home", {tanques})
    },
    detalle: (req, res) => {
        let id = req.params.id
        let detalleDeTanque = tanques.find((tanque) => tanque.id == id)
        res.render("tankDetail", {detalleDeTanque}) 
    },
    delete: (req, res) => {
        let id = req.params.id
        tanques = tanques.filter((item) => item.id != id)

        fs.writeFileSync(
            path.join(__dirname, "../data/tanques.json"),
            JSON.stringify(tanques, null, 4),
            {
                encoding: "utf-8"
            }
        );
        res.render("home", {tanques})
    },
    editarA: (req, res) => {
        let id = req.params.id
        let detalleDeTanque = tanques.find((tanque) => tanque.id == id)
        res.render("editTank", {detalleDeTanque})
    },

    editB: (req, res) => {
        let id = req.params.id;
        const {country, name, description, tipo, img} = req.body;
        let file = req.file
        tanques.forEach(item => {
            if(item.id == id){
                item.country = country;
                item.name = name;
                item.description = description;
                item.tipo = tipo;
                item.img = file.fileName
            }
        });
        fs.writeFileSync(
            path.join(__dirname, "../data/tanques.json"),
            JSON.stringify(tanques, null, 4),
            {
                encoding: "utf-8"
            }
        );
        res.render("home", {tanques})
    },
    crearA: (req, res) => {
        res.render("tankCreate")
    },
    crearB: (req, res) => {
        let newId = tanques[(tanques.length - 1)].id + 1
        let file = req.file
        let newtanque = {
            id: newId,
            country: req.body.country,
            name: req.body.name,
            description: req.body.description,
            tipo: req.body.tipo,
            img: file.fileName
        };

        tanques.push(newtanque);

        fs.writeFileSync(
            path.join(__dirname, "../data/tanques.json"),
            JSON.stringify(tanques, null, 4),
            {
                encoding: "utf-8"
            }
        );
        res.render("home", {tanques})
    }
}

module.exports = indexController;
