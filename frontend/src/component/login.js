import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
    const [logindata, setLogindata] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setLogindata({ ...logindata, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle login logic here
    };

    return (
        <form onSubmit={handleSubmit} className="container flex flex-col items-center justify-start gap-4 p-4 mt-16 h-96 mx-auto w-96 bg-gray-800 shadow-lg rounded-lg">
            <h1 className="text-blue-500 text-3xl font-bold mb-5 mt-7">Login</h1>
            
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
            <Link className="text-white text-sm hover:text-green-400 " to="/signup">
                Don't have an account? Click here
            </Link>
            <br/>
            <Link className="text-white text-sm hover:text-orange-600" to="/forgotpassword">
                Forgot password? Reset here
            </Link>
            </div>
           
        </form>
    );
};

export default Login;
