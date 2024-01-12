const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    name : {
        type: String ,
        required: true
    },
    lastName : {
        type: String ,
        required: true
    },
    email : {
        type: String , 
        required: true
    },
    phone : {
        type: Number ,
        required: true
    },
    dni : {
        type: Number ,
        required: true
    },
    password : {
        type: String ,
        required: true
    },

    //Propiedad de Administrador - verificamos si es el administrador o no. Para darle acceso al panel de administrador.
    isAdmin : {
        type: Boolean ,
        default: false
    }
} , {
    timestamps: true

})

const userModel = mongoose.model('User' , userSchema);

module.exports = userModel
