const express = require("express");
const router = express.Router();
const multer  = require('multer')
const path = require("path")
const userController = require("../controllers/userController");
const validates = require("../src/validaciones");

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

//Login vista
router.get("/login", userController.loginA);
//Login Prosses
router.post("/login", validates.validateLogin, userController.loginB);
//Register Vista
router.get("/register", userController.registerA);
//Register Presses
router.post("/register", validates.validateRegister, userController.registerB);
//home del perfil
router.get("/profile", userController.profile);

module.exports = router;
