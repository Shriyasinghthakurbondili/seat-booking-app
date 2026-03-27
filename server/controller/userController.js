const User = require("../model/User");

const signup = async(req,res)=>{
    const {email,password} = req.body;

    const user = await User.create({email, password})

    res.send({
        message: "User created successfully",
        data: user
    })
}

const login = async(req,res)=>{
    const {email, password} = req.body
    const user= await User.findOne({
        email,password
    })
    if(!user){
        return res.status(400).json({
            message:"Invalid credentials"
        })

    }
     res.send({
            message:"Login success"
        })
}

module.exports = {signup, login}
