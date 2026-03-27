var express = require("express")

var router = express.Router()

var {getAllSeats, createSeats, bookSeats, getAvailableSeats} = require("../controller/seatController")

router.get("/getAllSeats",getAllSeats)
router.post("/createSeats", createSeats)
router.put("/bookSeats/:id", bookSeats)
router.get("/getAvailableSeats", getAvailableSeats)
module.exports = router