import {useEffect, useState} from "react";


const Seat = () =>{
  const [seats,setSeats] = useState([])

  async function fetchData(){
    var response = await fetch("http://localhost:3000/api/SeatsRoutes/getAllSeats")
    var result = await response.json();
    console.log(result)
    setSeats(result.message)
  }

  async function bookSeat(id){
     await fetch(`http://localhost:3000/api/SeatsRoutes/bookSeats/${id}`,{
      method:"PUT",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({})  
    });

    fetchData();
  }

  useEffect(()=>{
    fetchData();
  }, []) 

  return(
    <div className="container">
      <h2>Seats Booking</h2>
      <div className="grid"/>
      {seats.map((items)=>(
        <div key={items._id}>
          Seat {items.seatNumber} - {items.isBooked ? "Booked" : "Available"}
          {!items.isBooked && (
            <button onClick={()=> bookSeat(items._id)}>Book</button>
          )}
        </div>
      ))}

 
    </div>
  );
};
export default Seat;
