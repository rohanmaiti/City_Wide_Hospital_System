import axios from "axios";
import React from "react";
import {useState ,useEffect} from "react"

export default  function AdminApprovePage(){
    const [hospitalList,setHospitalList] = useState([]);
    useEffect()
    // async function getHospitals(){
    // let response =await axios.get("http://localhost:4000/getHospitals");
    // setHospitalList(response.data.hospitals);
    // console.log(hospitalList);
    // }

    return(
        <>
        <div>
            {
                // hospitalList.map((hospital)=>{
                //     return (
                //         <div>
                //             {
                //                 console.log(hospital)
                //             }
                //             <img src={`../../../backend/${hospital.hospital_photoes[0].path}`} alt="" />
                //             <h1>{hospital.hospital_name}</h1>
                //         </div>
                //     )
                // })
            }
        </div>
        </>
    )
}