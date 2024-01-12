const express = require("express");
const router = express.Router();
const Booking = require('../models/bookings');
const Room = require('../models/room');

router.post('/bookroom', async (req, res) => {

    const {
        room,
        user,
        name,
        lastName,
        fromdate,
        todate,
        totalAmount,
        totalDays,
        guests
    } = req.body;

    // Verificar el numero de hguespedes está presente.
    if (!guests) {
        return res.status(400).json({ error: 'Cantidad de huéspedes no proporcionado.' });
    }

    try {
        const newbooking = new Booking({
            room: room.name,
            id: room._id,
            user,
            name,
            lastName,
            fromdate,
            todate,
            totalAmount,
            totalDays,
            guests,
            transactionId: '1234'
        })

        const booking = await newbooking.save(); //RUTA DE RESERVA.

        //res.status(201).json(savedBooking); MUESTRA EN CONSOLA EL DETALLE DE LA RESERVA COMPLETA, CON TODOS LOS DATOS.

        const roomtemp = await Room.findOne({ _id: room._id }); //ACTUALIZAR LAS RESERVAS.

        roomtemp.currentbookings.push({
            bookingid: booking._id, // IDENTIFICACIÓN DE LA RESERVA.
            fromdate: fromdate, //FECHA DE INICIO DE LA RESERVA.
            todate: todate, //FECHA FINAL DE LA RESERVA.
            user: user, //IDENTIFICACIÓN DEL USUARIO.
            name: name, //NOMBRE DEL USUARIO.
            lastName: lastName, //APELLIDO DEL USUARIO.
            guests: guests, //CANTIDAD DE HUESPEDES.
            totalAmount: totalAmount, //MONTO TOTAL DE LA RESERVA.
            status: booking.status //ESTADO DE LA RESERVA.
        })

        await roomtemp.save();

        res.status(201).json('Reserva realizada con Exito');
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: 'Error al procesar la reserva' });
    }
});


router.post('/getbookingsbyuserid', async (req, res) => {

    const userid = req.body.userid;

    try {
        const bookings = await Booking.find({ user: userid });
        res.send(bookings);
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post('/cancelbooking', async (req, res) => {
    const { bookingid, id } = req.body;

    try {
        const bookingitem  = await Booking.findOne({ _id: bookingid });
        
        bookingitem.status = 'cancelled';
        await bookingitem.save();
        const room = await Room.findOne({ _id: id });

        const bookings = room.currentbookings;

        const temp = bookings.filter(booking => booking.bookingid.toString() !== bookingid);
        room.currentbookings = temp;

        await room.save();

        res.send('Reserva Cancelada con Éxito');
    } catch (error) {
        return res.status(400).json({ error });
    }
});


router.get('/getallbookings', async (req, res) => {
    
    try {
        const bookings = await Booking.find({})
        res.send(bookings)
    } catch (error) {
        return res.status(400).json({ error });
    }
})


module.exports = router

