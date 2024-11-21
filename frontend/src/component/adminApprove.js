import axios from "axios";
import React from "react";
import {useState ,useEffect } from "react"
import { useNavigate } from "react-router-dom";
import styles from "../css/adminApprove.module.css"

export default  function AdminApprovePage(){
    const navigate = useNavigate();
    const [hospitalList,setHospitalList] = useState([]);

    useEffect( ()=>{
    axios.get("http://localhost:4000/getHospitals")
    .then((response)=>{
        console.log(response.data);
        setHospitalList(response.data.hospitals);
    })
    },[])
    
    const navigateDetail = (hospital)=>{
    navigate("/hospitalDetails",{state:hospital})
    }

    return(
        <> 
        <div className={styles.parentContainer}>
       {
                hospitalList.map((hospital)=>{
                    
                    return (
                        <div className={styles.container} key={hospital._id}>
                            <img onClick={()=>navigateDetail(hospital)} className={styles.image} src={`http://localhost:4000/${hospital.hospital_photoes[0].path}`} alt="" />
                            <div className={styles.div1}>
                            <h1 className={styles.name} >{hospital.hospital_name}</h1>
                            <button onClick={()=>navigateDetail(hospital)} className={styles.button} >Details</button>
                            </div>
                            
                        </div>
                       
                    )
                })
       }
       
        </div>
        </>
    )
}


               