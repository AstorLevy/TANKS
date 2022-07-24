const { check } = require("express-validator")
const path = require("path");

const validates = {

    //configuarción validaciones de registro -----------------------------------------------
    validateRegister : [
        check("name").notEmpty().withMessage("Campo obligatorio"),
        check("email").notEmpty().withMessage("Campo obligatorio").bail().isEmail().withMessage("Email no válido"),
        check("password").notEmpty().withMessage("Campo oblgatorio"),
        check("confirmPassword").notEmpty().withMessage("Campo oblgatorio").bail().custom((confirmPassword, { req }) => {
            if (confirmPassword != req.body.password) {
                throw new Error("Las contraseñas no coinciden");
            }else  {
                return true;
            }
        }),
        check("avatar").custom((el, { req }) => {
            const ext = [".jpg", ".png", ".jpeg", ".webp"];
            const extFile = path.extname(req.file.originalname);
            return (ext.includes(extFile));
        }).withMessage("Debes subir una imagen de perfil")
    ],
    //---------------------------------------------------------------------------------------

    //configuracion validaciones de logueo --------------------------------------------------
    validateLogin : [
        check("user").notEmpty().withMessage("Campo obligatorio").bail().isEmail().withMessage("Email no válido"),
        check("password").notEmpty().withMessage("Campo obligatorio")
    ]
    //---------------------------------------------------------------------------------------
}

module.exports = validates;