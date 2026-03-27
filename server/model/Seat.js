var mongoose = require("mongoose")

var seatSchema = new mongoose.Schema({
    seatNumber: Number,
    isBooked: Boolean,
    });
var Seat = mongoose.model("Seat",seatSchema)
module.exports = Seat