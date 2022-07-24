const express = require("express");
const path = require("path");
const app = express();
const methodOverride = require("method-override")
const port = process.env.PORT || 3000


app.use(express.urlencoded({ extended: false}));
app.use(express.static("public"))
app.use(express.json());                               
app.use(methodOverride("_method"));
app.set("view engine", "ejs");


//rutas de rutas
const indexRouter = require("./routes/index.routes.js");
const userRouter = require("./routes/user.routes.js");

//rutas
app.use("/", indexRouter);
app.use("/users", userRouter);


app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`))

