class Trama{
    /**
     * Constructor de trama
     * @param {*} tipoTrama Tipo de trama
     * @param {*} message    El objeto es un string en formato json (es decir la tabla, etc..)
     * @param {*} proyecto  Es el proyecto donde esta trabajando
     * @param {*} username  Es el nombre del usuario
     */    
    constructor(tipoTrama, message, proyecto, username){
        this.tipoTrama = tipoTrama;
        this.message = message;
        this.proyecto = proyecto;
        this.username = username;
    }
/*    
    set tipoMsg(value){
        this.tipoMsg = value;
    }
    get tipoMsg(){
        return this.tipoMsg;
    }

    set tipoTrama(value){
        this.tipoTrama = value;
    }
    get tipoTrama(){
        return this.tipoTrama;
    }

    set message(value){
        this.message = value;
    }
    get message(){
        return this.message;
    }

    set proyecto(value){
        this.proyecto = value;
    }
    get proyecto(){
        return this.proyecto;
    }

    set username(value){
        this.username = value;
    }
    get username(){
        return this.username;
    }
*/
}

module.exports = Trama;