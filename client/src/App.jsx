import{ BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css"
import "./Auth.css"
import Signup from "./Signup/Signup";
import Login from "./Login/Login"
import Seat from "./Seat/Seat"
const App = () =>{
 return(
  <BrowserRouter>
      <Routes>
         <Route path="/" element={<Signup />} />
         <Route path="/login" element={<Login />} />
         <Route path="/seats" element={<Seat />} />
        </Routes>
  </BrowserRouter>
 )
}
export default App;
