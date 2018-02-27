class Tabla{

    constructor(pkTabla, nombreTabla, fkuserCreate, fechaCreate, fkDiagrama, pto){
        this.pkTabla = pkTabla;
        this.nombreTabla = nombreTabla;
        this.fkuserCreate = fkuserCreate;
        this.fechaCreate = fechaCreate;
        this.fkDiagrama = fkDiagrama;
        this.pto = pto;
    }
}

module.exports = Tabla;