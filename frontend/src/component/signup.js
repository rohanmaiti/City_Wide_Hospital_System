import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2';

const Signup = () => {
    const navigate = useNavigate();
    const [signupData, setSignupData] = useState({
        name: "",
        age: "",
        gender: "",
        blood_group: "",
        email: "",
        number: "",
        password: ""
    });

    const handleChange = (e) => {
        setSignupData({ ...signupData, [e.target.name]: e.target.value });
    };

    const handleForgotPassword = (e) => {
        Swal.close();
        navigate("/forgotpassword", { state: { email: signupData.email } });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.post("http://localhost:4000/signup", signupData);
            Swal.fire({
                title: "Successful signup!",
                text: "Your account has been created",
                icon: "success"
            });
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: err.response.data.msg,
                text: "Login to your account",
                footer: '<p id="forgot-password-link" style="cursor: pointer; color: blue; text-decoration: underline;">Forgot password?</p>',
                didOpen: () => {
                    document.getElementById('forgot-password-link').addEventListener('click', handleForgotPassword);
                }
            });
        }
        setSignupData({
            name: "",
            age: "",
            gender: "",
            blood_group: "",
            email: "",
            number: "",
            password: ""
        });
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-start gap-2 p-4 mt-8 mx-auto w-96 bg-violet-300 shadow-lg rounded-lg">
            <h1 className="text-indigo-900 font-extrabold text-2xl mb-4">Sign Up</h1>

            <input
                className="w-72 h-10 p-2 rounded-md border-none focus:outline-none"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                value={signupData.name}
                onChange={handleChange}
            />
            <input
                className="w-72 h-10 p-2 rounded-md border-none focus:outline-none"
                type="number"
                name="age"
                placeholder="Enter your age"
                required
                value={signupData.age}
                onChange={handleChange}
            />

            <div className="flex items-center gap-2 mb-1">
                <label className="text-indigo-900 font-semibold">Select your gender:</label>
                <div>
                    <label htmlFor="male" className="mr-2 text-indigo-900">Male</label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        id="male"
                        required
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="female" className="mr-2 text-indigo-900">Female</label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        id="female"
                        required
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="w-72 mb-2">
                <label className="text-indigo-900 font-semibold">Blood Group:</label>
                <select
                    id="blood_group"
                    name="blood_group"
                    value={signupData.blood_group}
                    className="w-64 h-10 p-2 rounded-md border-none focus:outline-none"
                    required
                    onChange={handleChange}
                >
                    <option value=""  disabled >--Select Blood Group--</option>
                    <option value="A+" key="A+">A+</option>
                    <option value="B+" key="B+">B+</option>
                    <option value="AB+" key="AB+">AB+</option>
                    <option value="O+" key="O+">O+</option>
                    <option value="A-" key="A-">A-</option>
                    <option value="B-" key="B-">B-</option>
                    <option value="AB-" key="AB-">AB-</option>
                    <option value="O-" key="O-">O-</option>
                </select>
            </div>

            <input
                value={signupData.email}
                className="w-72 h-10 p-2 rounded-md border-none focus:outline-none"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                onChange={handleChange}
            />
            <input
                value={signupData.number}
                className="w-72 h-10 p-2 rounded-md border-none focus:outline-none"
                type="number"
                name="number"
                placeholder="Enter your phone number"
                min="1000000000"
                max="9999999999"
                required
                onChange={handleChange}
            />
            {signupData.number.length !== 10 && signupData.number !== "" && (
                <div className="text-red-500 text-xs">Phone number must be of 10 digits</div>
            )}

            <input
                value={signupData.password}
                className="w-72 h-10 p-2 rounded-md border-none focus:outline-none"
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                onChange={handleChange}
            />

            <button
                type="submit"
                className="w-28 h-10 bg-yellow-400 text-black font-semibold rounded-md mt-4 hover:bg-green-400"
            >
                Sign Up
            </button>

            <Link to={"/"} className="text-white-600 hover:text-blue-800 mt-4">
                Already have an account? Login
            </Link>
        </form>
    );
};

export default Signup;
