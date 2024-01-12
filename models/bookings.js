const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    
    room : {
        type: String, required: true
    },
    id : {
        type: String, required: true
    },
    user : {
        type: String, required: true
    },
    fromdate : {
        type: String, required: true
    },
    todate : {
        type: String, required: true
    },
    guests : {
        type: Number, required: true
    },
    totalAmount : {
        type: Number, required: true
    },
    totalDays : {
        type: Number, required: true
    },
    transactionId : {
        type: String, required: true
    },
    status : {
        type: String, required: true, default : "booked"
    }

}, {
    timestamps: true
})

const bookingModel = mongoose.model('bookings', bookingSchema);

module.exports = bookingModel;