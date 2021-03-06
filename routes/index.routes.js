const express = require("express");
const router = express.Router();
const multer  = require('multer')
const path = require("path")
const indexController = require("../controllers/indexController");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/imgs')
    },
    filename: function (req, file, cb) {
      const filename = `${Date.now()}-img${path.extname(file.originalname)}`
      cb(null, fileName)
    }
  })
  
const upload = multer({storage})
//-------------------------------------------------------------------


//rutas______________________________________________________________

//home
router.get("/", indexController.home);
//detalle
router.get("/tankDetail/:id", indexController.detalle)
//borrar
router.delete("/:id", indexController.delete)
//editar
router.get("/editTank/:id", indexController.editarA)
router.put("/edit/:id", upload.single("img"), indexController.editB)
//crear
router.get("/tankCreate", indexController.crearA)
router.post("/tankCreate", upload.single("img"), indexController.crearB)

module.exports = router;
