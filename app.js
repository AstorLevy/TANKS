const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000

const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: false}));
app.use(express.static("public"))
app.use(express.json());                               
app.use(methodOverride("_method"));
app.set("view engine", "ejs");


//rutas de rutas
const indexRouter = require("./routes/index.routes.js");

//rutas
app.use("/", indexRouter);


app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`))

