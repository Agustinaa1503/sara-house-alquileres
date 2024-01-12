const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://agustinaa1503:lFgKXB8vxQ0H51MS@clusterag.wsapxec.mongodb.net/reserva'

mongoose.connect(mongoURL , {/*useUnifiedTopology : true , useNewUrlParser:true*/})

var connection = mongoose.connection

connection.on('error' , () =>{
    console.log('La conexión de Mongodb falló')
})

connection.on('connected' , ()=>{
    console.log('Conexión Mongodb exitosa')
})

module.exports = mongoose