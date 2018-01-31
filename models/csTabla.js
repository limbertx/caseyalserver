const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let TablaSchema = new Schema({
    pkTabla: {
        type: Number,
        required: true
    },
    nombreTabla: {
        type: String,
        required: true
    },
    fkUserCreate: {
        type: Number,
        required: true
    },
    fechaCreate: {
        type: Date,
        default: Date.now,
        required: true
    },
    fkDiagrama: {
        type: Number,
        required: true
    },
    pto: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('csTabla', TablaSchema);