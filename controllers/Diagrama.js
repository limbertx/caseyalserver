var HashMap = require('hashmap');
var Tabla = require("./Tabla");
var Point = require("point-geometry");

var relaciones = new HashMap();
var tablas = new HashMap();

function setTabla(tabla){
    // pkTabla, nombreTabla, fkuserCreate, fechaCreate, fkDiagrama, pto
    let fecha = new Date().toJSON().slice(0,10);
    tabla = new Tabla(tabla.pkTabla, tabla.nombre, tabla.fkuserCreate, fecha, tabla.fkDiagrama, tabla.pto);
    console.log("tabla creada correctamente");
    tablas.set(tabla.pkTabla, tabla);
}

/**
 * Metodo que cambia la posicion de la tabla
 * @param {Nueva posicion de la tabla} newPunto 
 */
function setPuntoTabla(newPunto, pkTabla){
    tablas.get(pkTabla).pto = newPunto;
    /*let tabla = tablas.get(pkTabla);
    tabla.pto = newPunto;
    tablas.set(tabla.pkTabla, tabla);*/
}

function listarTablas(){
    tablas.forEach(function(value, key) {
        console.log("key : " + key + " : " + JSON.stringify(value));
    });
}


module.exports.setTabla = setTabla;
module.exports.setPuntoTabla = setPuntoTabla;
module.exports.listarTablas = listarTablas;