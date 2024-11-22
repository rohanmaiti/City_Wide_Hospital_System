import React from "react";
import {useState , useLocation} from "react-router-dom"
import Navbar from "./NavBar";

export default function UserDashboard(){
    const links = ["Home","Book Appointment","Previous Appointments","Upload Prescription","Services","Contact Us"]
    return (
        <div>
        <div>
        </div>    
        <Navbar links={links} isLoggedIn={true} />
        
        </div>
    )
}