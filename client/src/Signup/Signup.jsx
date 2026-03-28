import {useState} from "react"
import {useNavigate} from "react-router-dom"

function Signup(){
    const navigate = useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    async function handleSignup(e){
        e.preventDefault();
        const res = await fetch("http://localhost:3000/api/users/signup",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({email,password})

        });

        const data = await res.json();
        if(res.ok){
            
            navigate("/seats")
        }else{
            alert(data.message)
        }
        
}

    return(
        <div className="auth-container">
            <form className="auth-card" onSubmit={handleSignup}>
            <h2>Signup</h2>
            
            <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} typeof="Email" />
            <input placeholder="Password" onChange={(e)=>setPassword(e.target.password)} />
           
            <button type="submit">Signup</button>
    
            <p className="auth-link" onClick={()=>navigate("/login")}>Already have account ? Login</p>

            </form>
        </div>
    )
}
export default Signup;
