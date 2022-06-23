const express = require("express");
const router = express.Router();
const multer  = require('multer')
const indexController = require("../controllers/indexController");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/imgs')
    },
    filename: function (req, file, cb) {
      const filename = `${Date.now()}-img${path.extname(file.originalname)}`
      cb(null, filename)
    }
  })
  
const upload = multer({storage})
//-------------------------------------------------------------------


//rutas
router.get("/", indexController.home);
router.get("/tankDetail/:id", indexController.detalle)

module.exports = router;
