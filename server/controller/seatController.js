var Seat = require("../model/Seat")

var getAllSeats = async(req,res)=>{
    try{
        var allSeats = await Seat.find()
        res.send({
            message:allSeats 
        })
    }catch(error){
        console.log("error",error)
    }
}

var createSeats = async(req,res)=>{
    try{
        var {totalSeats} = req.body
       var seats = [] 
        for(var i=1;i<=totalSeats;i++){
            seats.push({
                seatNumber: i,
                isBooked:false
        })
    }
    var newSeat = await Seat.insertMany(seats);
    res.status(201).json({
        message: "Seats are created successfully",
        data: newSeat
    })
    }catch(error){
        console.log("error",error)

        return res.status(500).json({
            message:"Getting error while creating the seats",
            error:error.message
        })
    }

}

var bookSeats = async(req,res)=>{
    try{
       var seat = await Seat.findById(req.params.id)
       if(!seat){
        return res.status(404).json({
            message:"Seat not found"
        })
       }
       if(seat.isBooked){
        return res.status(400).json({
            message:"Seats already booked"
        })
       }
       seat.isBooked = true

       var updatedSeats = await seat.save()
       res.status(200).json({
        message:"Seats are booked successfully",
        data: updatedSeats 
       })
    }catch(error){
        console.log("error",error)

        res.status(500).json({
            message:"Getting error will booking",
            error:error.message
        })
    }
    
}

var getAvailableSeats = async(req,res)=>{
    try{
        const seats = await Seat.find({
            isBooked:false 
        })

        res.status(200).json({
            message:"Available seats featched",
            data:seats 
        })
    }catch(error){
        console.log("error",error)
        res.status(500).json({
            message:"Error fetching seats",
            error:error.message
        })
    }
}
module.exports = {
    getAllSeats, createSeats, bookSeats, getAvailableSeats
}