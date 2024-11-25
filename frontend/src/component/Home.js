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
        <h1 className={styles.heading1} >One Way Solution to all your managements</h1>
        </div>

    
    </div>
    )
}