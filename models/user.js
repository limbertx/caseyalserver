const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    nickName: {
        type: String,
        required: true
    },
    nombreCom: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    editable: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('User', UserSchema);
