const express = require("express");

const app = express();

const dbConfig = require('./db')
const roomsRoute = require('./routes/roomsRoute') //Habitaciones
const userRoute = require('./routes/usersRoute') //Usuario
const bookingsRoute = require('./routes/bookingsRoute') //Reservas


app.use(express.json())

//Verifica la raiz de las habitaciones
app.use('/api/rooms', roomsRoute)

//Verifica la raiz del usuario
app.use('/api/users', userRoute)

//Verifica la raiz de las reservas
app.use('/api/bookings', bookingsRoute)


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Servidor de node iniciado`));
