import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Forgotpassword = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: location.state == null ? "" : location.state.email,
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleButtonClick = async () => {
        if ((user.password === user.confirmPassword) && user.password !== "") {
            try {
                let response = await axios.post("http://localhost:4000/forgotpassword", user);
                Swal.fire({
                    title: response.data.msg,
                    text: "You can login with your new password",
                    icon: "success"
                }).then(() => {
                    navigate("/"); // This will run after the OK button is clicked
                });
            } catch (err) {
                Swal.fire({
                    icon: "error",
                    title: err.response.data.msg,
                    text: "Please enter correct email id",
                });
            }
        } else {
            if (user.password !== user.confirmPassword) {
                Swal.fire("Confirm password does not match");
            } else {
                Swal.fire("Email Id or Password can't be empty. Please enter them");
            }
        }
    };

    return (
        <form  onSubmit={handleButtonClick} className="w-96 p-6 rounded-lg flex flex-col justify-start items-center gap-4 shadow-lg bg-indigo-200 mt-16 mx-auto">
            <h1 className="text-3xl font-semibold text-blue-800">Reset your password</h1>

            <input
                className="w-64 h-10 p-2 text-sm border-b-2 border-gray-300 rounded-md focus:outline-none"
                type="email"
                placeholder="Enter your email id"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
            />
            <input
                className="w-64 h-10 p-2 text-sm border-b-2 border-gray-300 rounded-md focus:outline-none"
                type="password"
                placeholder="Enter new password"
                name="password"
                value={user.password}
                onChange={handleChange}
                required
            />
            <input
                className="w-64 h-10 p-2 text-sm border-b-2 border-gray-300 rounded-md focus:outline-none"
                type="password"
                placeholder="Confirm your new password"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleChange}
                required
            />
            
            {
                ((user.password === "" && user.confirmPassword === "") || (user.password !== "" && user.confirmPassword === "")) ? <div></div> : 
                <div>
                    {
                    user.confirmPassword !== user.password 
                        ? <p className="text-red-500 text-sm">Passwords do not match</p> 
                        : <p className="text-green-700 text-sm">Passwords matched</p>
                    }
                </div>
            }

            <button
                className="w-36 h-10 bg-yellow-400 text-black font-semibold rounded-md mt-4 hover:bg-green-400"
               
            >
                Change Password
            </button>

            <div className="w-full text-left mt-4 pl-2">
                <Link to="/" className="text-black-500 hover:text-yellow-700 text-sm">Back</Link>
            </div>
        </form>
    );
};

export default Forgotpassword;
