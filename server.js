// se utilizo esta guia
// https://platzi.com/blog/postgresql-nodejs/


// esta esta funcional para postgresSQL


// configuraciones
var config = require("./config.json");

// servidor express
var express = require("express");

// publicador de la pagina estatica
var serverStatic = require("serve-static");

// para entender los metodos post, get...
var bodyParser = require("body-parser");

// ni idea
var multer = require("multer");

// para conectar a postgres
var massive = require("massive");

var massiveInstance = massive.connectSync({connectionString : connectionString});
var db;

// inicializacion del servidor
var app = express();
var startExpress = function(){
    app.listen(config.express.port);
    db = app.get("db");
    var initialize = function(){
        startExpress();
        };
    };

var handleError = function(res){
      return function(err){
            console.log(err);
            res.send(500, {error : err.message});
        }
    }

//##############################################################################
// lista de acceso a la base de datos
var list = function(request, res, next)
          {
            db.steps.findDoc(1, function(err,doc){ if (err) { handleError(res) };
            console.log(doc.data);
            res.json({ data: doc.data }); });
}

// actualiza el obejto en la base de datos.
var update = function(request, res, next) {
          var newDoc = request.body.data;
          db.steps.saveDoc({id:1,data:newDoc},
                  function(err,response){
                          if (err){
                            handleError(res);
                          };
                          console.log(response);
                          res.json({ data: response });
                        });
          }
//##############################################################################
// configuramos el servidor express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(multer());

//definimos la rutas
app.route('/api/list').get(list);
app.route('/api/update').post(update);

// definimos los archivos estaticos del servidor
app.use(serverStatic('./public'));

// establecemos una referencia a massive en el servidor express
app.set('db', massiveInstance);
initialize()
