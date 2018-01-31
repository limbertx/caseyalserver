/// este servidor esta funcional para usar con mongodb

const express = require("express");
const path = require('path');

const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

const cors = require("cors");

const apiRouter = require("./routes/api_v2");

const app = express();

mongoose.connect("mongodb://admin:admin@ds227865.mlab.com:27865/dbmongosw2", {
    useMongoClient: true
});

// creamos un midleaware para servir la pagina desde el servidor
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

// aqui llamamos a las rutas api
app.use('/api', apiRouter);

// mostramos las paginas staticas
app.use(express.static(path.join(__dirname, '/public/dist')))


// iniciamos el servidor en el puerto 3000
app.listen(3000, ()=>{
    console.log("server on port 3000");
});
