import React from "react";
import {useState, useEffect} from "react"
import {useNavigate , useLocation} from "react-router-dom"

export default function HospitalDetails(){
    let i = 0;
    const location = useLocation();
    const [hospital,setHospital] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        if (location.state) {
          setHospital(location.state);
        }
      }, []);

      useEffect(() => {
        const interval = setInterval(() => {
          if (hospital.hospital_photos && hospital.hospital_photos.length > 0) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % hospital.hospital_photos.length);
          }
        }, 3000);
    
        return () => clearInterval(interval);
      }, [hospital.hospital_photos]);
      console.log("y = ",hospital)

    // useEffect(() => {
       
    // },[]);

    return (
    <div>
        {/* <img  src={`http://localhost:4000/${hospital.hospital_photoes[currentIndex].path}`} alt="" /> */}
        
        <div className="image-carousel">
          {hospital.hospital_photos.map((photo, index) => (
            <img
              key={index}
              src={`http://localhost:4000/${photo.path}`}
              alt={`Hospital ${index}`}
              className={`carousel-image ${index === currentIndex ? "active" : ""}`}
            />
          ))}
        </div>
   
    </div>
        )
    
    }