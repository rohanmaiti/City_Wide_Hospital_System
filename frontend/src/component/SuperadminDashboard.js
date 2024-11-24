import {React , useState, useEffect} from 'react';
import Navbar from './NavBar';
import styles from '../css/superadmin.module.css'
import TypingAnimation from './TypingText';
import MultiActionAreaCard from './card';


export default function SuperadminDashboard(){
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
            <MultiActionAreaCard/>
           </div>
        </div>
        
        </div>
        
        </>
    )
}