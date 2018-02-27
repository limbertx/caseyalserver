const constante = require("./models/constantes");
const Trama = require("./models/Trama.js");
const diagrama = require("./controllers/Diagrama");


function iniciarServidorWebSocket(io){
    
    io.on("connection", (socket)=>{
        console.log("usuario acaba de conectarse");
    
        //Esperando mensajes de entrada a grupo
        socket.on(constante.TipoTrama_JOIN, (data)=>{            
            let tr = JSON.parse(data);
            socket.join(tr.proyecto);
            // ahora envio un mensaje a los demas amigos del proyecto
            let t = new Trama(constante.TipoTrama_NEW_MESSAGE, "Acaba de unirse : " + tr.username , tr.proyecto, tr.username);
            sendMessage(io, tr.proyecto, constante.TipoTrama_NEW_MESSAGE, t)
        });
        // llegan messages del chat al servidor
        socket.on(constante.TipoTrama_MESSAGE, (data)=>{
            let tr = JSON.parse(data);
            let t = new Trama(constante.TipoTrama_NEW_MESSAGE, tr.username + " : " + tr.message , tr.proyecto, tr.username);
            sendMessage(io, tr.proyecto, constante.TipoTrama_NEW_MESSAGE, t);
        });

        socket.on(constante.TipoTrama_Coordenada, (data)=>{
            let trama = JSON.parse(data);
            // obtenemos el punto
            let obj = JSON.parse(trama.message);
            console.log("entrando !");
            diagrama.setPuntoTabla(obj.pto, obj.pkTabla);
            // creamos una nueva trama con los datos
            let message = {"pto": obj.pto, "pkTabla": obj.Tabla};
            let t = new Trama(constante.TipoTrama_CoordenadaServer, JSON.stringify(message), trama.proyecto, trama.username);
            console.log("trama : " + JSON.stringify(t));
            //sendMessage(io, trama.proyecto, constante.TipoTrama_CoordenadaServer, t);
        })
    });
}

function sendMessage(io, proyecto, tipoTrama, paquete){
    io.sockets.in(proyecto).emit(tipoTrama, JSON.stringify(paquete));
}

module.exports.iniciarServidorWebSocket = iniciarServidorWebSocket;