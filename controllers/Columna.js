class Columna{

    constructor(pkColumna, fkTabla, fkType, nombre, size, scala, primaryKey, notNull){
        this.pkColumna = pkColumna;
        this.fkTabla = fkTabla;
        this.fkType = fkType;
        this.nombre = nombre;
        this.size = size;
        this.scala = scala;
        this.primaryKey = primaryKey;
        this.notNull = notNull;
    }

    set pkColumna(value){
        this.pkColumna = value;
    }
    get pkColumna(){
        return this.pkColumna;
    }
}

module.exports = Columna;