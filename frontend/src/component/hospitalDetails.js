import React from "react";
import {useState, useEffect} from "react"
import {useNavigate , useLocation} from "react-router-dom"
import styles from "../css/hospitalDetails.module.css"

export default function HospitalDetails(){
    const location = useLocation();
    const [hospital,setHospital] = useState({});
    const [images , setImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      };
    
      const handlePrevious = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      };
    
    useEffect(()=>{
    setHospital(location.state)
    const arr = location.state.hospital_photoes.map(photoes => `http://localhost:4000/${photoes.path}`);
    setImages(arr);
      const interval = setInterval(() => {
        handleNext();
    }, 5000);

    return ()=>{
        clearInterval(interval);
    }
    },[currentImageIndex])
    return (
       <div>
         {hospital.hospital_photoes && hospital.hospital_photoes.length > 0 ? 
          <div className={styles.card}>
          <div className={styles.slider}>
            <button onClick={handlePrevious} className={styles.sliderBtn}>
              ❮
            </button>
            <img
              src={images[currentImageIndex]}
              alt="Sliding content"
              className={styles.sliderImage}
            />
            <button onClick={handleNext} className={styles.sliderBtn}>
              ❯
            </button>
          </div>
        </div>
        :<></>}
       </div>
    )
    
    }