import {React , useState, useEffect} from 'react';
import {useNavigate , useLocation} from "react-router-dom";
import Navbar from './NavBar';
import styles from '../css/superadmin.module.css'
import TypingAnimation from './TypingText';
import MultiActionAreaCard from './card';


export default function SuperadminDashboard(){
    const navigate = useNavigate();
    const handleClick=(endPoint)=>{
    navigate(endPoint);
    }
    const links = ["Home","Applied Hospitals","Approved Hospitals","Contact Requests","Hospital Lists",]
    return(
        <>
        <div className="bg-gray-900 w-screen h-screen" >
        <Navbar links={links}/>
        <div className={styles.div1}>
           <div className={styles.typing}>
            <div className={styles.div3}>
            <TypingAnimation text="Welcome to Super Admin Dashboard" />
            </div>
            <div className={styles.div3}>
              <img  className={styles.transparentImage} src="http://localhost:4000/photoes/doc1.png"/>
            </div>
           </div>
           <div className={styles.div2}>
          
            <MultiActionAreaCard title="Applied Hospitals" img_url="https://plus.unsplash.com/premium_photo-1682130157004-057c137d96d5?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D" button_text="Approve Hospitals"
            onclick="/adminapprove"
            />

            <MultiActionAreaCard title="Hospital List" img_url="https://c8.alamy.com/comp/2F3NFC4/smiling-woman-doctor-with-check-list-on-the-phone-screen-medical-internet-consultation-healthcare-consulting-web-service-hospital-support-online-m-2F3NFC4.jpg" button_text="See Hospital List"
            onclick="/adminapprove"
            />

<MultiActionAreaCard title="Hospital List" img_url="https://c8.alamy.com/comp/2F3NFC4/smiling-woman-doctor-with-check-list-on-the-phone-screen-medical-internet-consultation-healthcare-consulting-web-service-hospital-support-online-m-2F3NFC4.jpg" button_text="See Hospital List"
            onclick="/adminapprove"
            />
 <MultiActionAreaCard title="Hospital List" img_url="https://c8.alamy.com/comp/2F3NFC4/smiling-woman-doctor-with-check-list-on-the-phone-screen-medical-internet-consultation-healthcare-consulting-web-service-hospital-support-online-m-2F3NFC4.jpg" button_text="See Hospital List"
            onclick="/adminapprove"
            />
 <MultiActionAreaCard title="Hospital List" img_url="https://c8.alamy.com/comp/2F3NFC4/smiling-woman-doctor-with-check-list-on-the-phone-screen-medical-internet-consultation-healthcare-consulting-web-service-hospital-support-online-m-2F3NFC4.jpg" button_text="See Hospital List"
            onclick="/adminapprove"
            />


            
           </div>
        </div>
        
        </div>
        
        </>
    )
}