class Type{
    constructor(pkType, nombre, size_bool, scala_bool){
        this.pkType = pkType;
        this.nombre = nombre;
        this.size_bool = size_bool;
        this.scala_bool = scala_bool;
    }

    set pkType(value){
        this.pkType = value;
    }
    get pkType(){
        return this.pkType;
    }
}

module.exports = Type;