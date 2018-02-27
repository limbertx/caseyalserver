const TipoTrama_TABLA = "TABLA";
const TipoTrama_COLUMNA = "COLUMNA";
const TipoTrama_MESSAGE = "MESSAGE";
const TipoTrama_NEW_MESSAGE = "NEW-MESSAGE";
const TipoTrama_JOIN = "JOIN";
const TipoTrama_Coordenada = "COORDENADA";
const TipoTrama_CoordenadaServer = "COORDENADA-SERVER";

/**
 * Genera una llave primaria
 */
function generateUID(){
    let uniqueId = Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
    return uniqueId;
}

module.exports.TipoTrama_TABLA = TipoTrama_TABLA;
module.exports.TipoTrama_COLUMNA = TipoTrama_COLUMNA;
module.exports.TipoTrama_MESSAGE = TipoTrama_MESSAGE;
module.exports.TipoTrama_NEW_MESSAGE = TipoTrama_NEW_MESSAGE;
module.exports.TipoTrama_JOIN = TipoTrama_JOIN;
module.exports.TipoTrama_Coordenada = TipoTrama_Coordenada;
module.exports.TipoTrama_CoordenadaServer  = TipoTrama_CoordenadaServer;
module.exports.generateUID = generateUID;