import React, { useState, useEffect } from "react";
import { useNavigate , useLocation} from 'react-router-dom';
import axios from "axios";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [typeOfUser,setTypeOfUser] = useState("");

    useEffect(()=>{
     setTypeOfUser(location.state.typeOfUser)
    },[location.state])
    
  
    const [logindata, setLogindata] = useState({ email: "", password: "" ,type:""});

    const handleChange = (e) => {
        setLogindata({ ...logindata, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle login logic here
        if(location.state.typeOfUser == "user"){
            setLogindata({...logindata,type:"user"})
        }
        else if(location.state.typeOfUser == "doctor"){
            setLogindata({...logindata,type:"doctor"})
        }
        else if(location.state.typeOfUser == "inventory_manager"){
            setLogindata({...logindata,type:"inventory_manager"})
        }
        else if(location.state.typeOfUser == "hospital_admin"){
            setLogindata({...logindata,type:"hospital_admin"})
        }
        else if(location.state.typeOfUser == "super_admin"){
            setLogindata({...logindata,type:"super_admin"})
        }
        try {
            
            let response = await axios.post("http://localhost:4000/login",logindata);
            Swal.fire({
                title: "Successful Login!",
                text: "Redirection to Dashboard",
                icon: "success"
            });
            if(location.state.typeOfUser == "user"){
                navigate("/userdashboard",{state:{user:response.data.user}});
            }
            else if(location.state.typeOfUser == "doctor"){
                navigate("/doctordashboard",{state:{user:response.data.user}});
            }
            else if(location.state.typeOfUser == "inventory_manager"){
                navigate("/inventory_manager_dashboard",{state:{user:response.data.user}})
            }
            else if(location.state.typeOfUser == "hospital_admin"){
                navigate("/hospital_admin_dashboard",{state:{user:response.data.user}})
            }
            else if(location.state.typeOfUser == "super_admin"){
                navigate("/super_admin_dashboard",{state:{user:response.data.user}})
            }
            
        } catch (error) {
            
        }
    };

    return (
        <form onSubmit={handleSubmit} className="container flex flex-col items-center justify-start gap-4 p-4 mt-16 h-96 mx-auto w-96 bg-gray-800 shadow-lg rounded-lg">
            <h1 className="text-blue-500 text-3xl font-bold mb-5 mt-7"> {location.state.typeOfUser} Login</h1>
            
            <input
                type="email"
                name="email"
                value={logindata.email}
                placeholder="Enter email id"
                onChange={handleChange}
                required
                className="w-64 h-10 p-2 rounded-md border-none focus:outline-none"
            />
            <input
                type="password"
                name="password"
                value={logindata.password}
                placeholder="Enter password"
                onChange={handleChange}
                required
                className="w-64 h-10 p-2 rounded-md border-none focus:outline-none"
            />
            <button
                type="submit"
                className="w-20 h-10 bg-green-500 text-white font-medium rounded-md hover:bg-blue-600"
            >
                Login
            </button>
            <div className="text-center">
                {
                    typeOfUser=="user" ? 
                     <Link className="text-white text-sm hover:text-green-400 " to="/signup">
                    Don't have an account? Click here
                     </Link> : 
                     <></>
                }
          
            <br/>
            <Link className="text-white text-sm hover:text-orange-600" to="/forgotpassword">
                Forgot password? Reset here
            </Link>
            </div>
           
        </form>
    );
};

export default Login;
