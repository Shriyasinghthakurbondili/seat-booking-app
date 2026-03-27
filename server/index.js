require("dotenv").config()
var express = require("express")

var app = express()

var SeatRoutes = require("./route/seatRoutes")
app.use(express.json())
var connectToDatabase = require("./config/db")
var cors = require("cors")
app.use(cors())

connectToDatabase()
app.use("/api/SeatsRoutes",SeatRoutes)
var port = process.env.PORT 

const userRoutes = require("./route/userRoute")
app.use("/api/users",userRoutes)
app.listen(port,()=>{
    console.log("The server is running")
})