var mongoose = require("mongoose")

async function connectToDatabase(){
    try{
        await mongoose.connect(process.env.MONGO_url)
        console.log("Connected to the database")
    }catch(error){
        console.log("error",error) 
    }
}
module.exports = connectToDatabase