const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({

    //Descripción de cabañas / habitaciones
    name : {
        type: String ,
        required: true
    },
    maxcount : {
        type: Number ,
        required: true
    },
    phone : {
        type: Number ,
        required: true
    },
    rentperday : {
        type: Number ,
        required: true
    },
    image : [],
    currentbookings : [],
    type : {
        type: String ,
        required: true
    },
    description : {
        type: String , 
        required: true
    } 
} , {

    //Marcas de tiempo:
    timestamps : true,
})

const roomModel = mongoose.model('rooms' , roomSchema)

module.exports = roomModel