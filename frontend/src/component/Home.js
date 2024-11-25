import React from "react"
import TypingAnimation from "./TypingText"
import styles from "../css/home.module.css"

export default function Home(){

    return (
    <div className={styles.parent}>
        {
            console.log("welcome tot home page")
        }
        <div className={styles.div1} >
        <TypingAnimation text="Welcome to Medsync" />
        <h1>
            
        </h1>
        <h1 className={styles.heading1} >One Way Solution to all your Health managements</h1>
        </div>

        <div className={styles.div2}>
            <div>
             <img src="http://localhost:4000/photoes/h2.webp" alt="" />
            </div>
            <div>

            </div>
        </div>

    
    </div>
    )
}