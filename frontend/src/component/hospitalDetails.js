import React from "react";
import {useState, useEffect} from "react"
import {useNavigate , useLocation} from "react-router-dom"
import axios from "axios"
import SuperAdminNavbar from "./superAdminNavbar";
import styles from "../css/hospitalDetails.module.css"

export default function HospitalDetails(){
    const location = useLocation();
    const [hospital,setHospital] = useState({});
    const [images , setImages] = useState([]);
    const [approveStatus, setApproveStatus] = useState(false);
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

      const handleApproveClick =async (hospital)=>{
           try {
               let response = await axios.post("http://localhost:4000/approveHospital",hospital)
               setApproveStatus(true);
           } catch (error) {
            
           }
      }
      const handleDisapproveClick  = async (hospital)=>{
        try {
          let response = await axios.post("http://localhost:4000/disapproveHospital",hospital)
          setApproveStatus(false);
      } catch (error) {
       
      }
      }
    
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
         
        <div className={styles.grid1}>
          <SuperAdminNavbar/>
          <div className={styles.div10}>
          <div className={styles.grid2}>
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
                <h1 className={styles.h1} >{hospital.hospital_name}</h1>
            </div>
          </div>
          <div className={styles.div3}>
                <h2 className={styles.h2} >Identity Card</h2>
                <img className={styles.identity_card} src={`http://localhost:4000/${hospital.identity_card[0].path}`} alt="" />
          </div>
          </div>

        <div className={styles.grid4}>
           <div className={styles.details}>
              <h2 className="text-center font-mono" >Hospital Details</h2>
              <hr className={styles.hr} />
            <div className={styles.div6} >
           
            <div className={styles.div7} >
              <p><strong>Hospital Name:</strong> {hospital.hospital_name || "invalid Data"}</p>
              <p><strong>Address:</strong> {hospital.hospital_address || "invalid Data"}</p>
              <p><strong>Pincode:</strong> {hospital.hospital_pincode || "invalid Data"}</p>
              <p><strong>Contact:</strong> {hospital.hospital_contact_number || "invalid Data"}</p>
            </div>
             <div className={styles.horizontalLine}></div>
            <div className={styles.div7}>
              <p><strong>Email:</strong> {hospital.hospital_email || "invalid Data"}</p>
              <p><strong>Applicant Name:</strong> {hospital.hospital_applicant_name || "invalid Data"}</p>
              <p><strong>Applicant Identity Card Type:</strong> {hospital.identity_type || "invalid Data"}</p>
            </div> 
            <div className={styles.horizontalLine}></div>
            <div className={styles.div4} >
              <div className={styles.div5}>
                <button className={styles.button1} >Call The Hospital</button>
                <button className={styles.button2} >Email the Hospital</button>
              </div>
              <div className={styles.div5}> 
                {
                  approveStatus==false ?  <button onClick={()=>handleApproveClick(hospital)} className={styles.button3} >Approve</button>
                  : <></>
                }
               
                <button onClick={()=>handleDisapproveClick(hospital)} className={styles.button4} >Disapprove</button>
              </div>   
            </div>   
            </div>

          </div>
        </div> 

          {/* <div className={styles.horizontalLine}></div> */}
        </div>

        :<>No Out Put</>}
       </div>
    )
    
    }