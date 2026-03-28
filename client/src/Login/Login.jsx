import {useState} from "react"
import {useNavigate} from "react-router-dom"

function Login(){
    const navigate = useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    async function HandleLogin(){
        await fetch("http://localhost:3000/api/users/login",{
            method:"POST",
            header:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({email,password})

        });
        alert("Signup successfully")
        
    }

    return(
        <div className="auth-container">
            <div className="auth-card"/>
            <h2>Login</h2>
            <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} typeof="Email"></input>
            <input placeholder="Password" onChange={(e)=>setPassword(e.target.password)}></input>
            <button onClick={HandleLogin}>Login</button>
            <p className="auth-link" onClick={()=>navigate("/signup")}>Dont have have account ? Signup</p>
        </div>
    )
}
export default Login;
