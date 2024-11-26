import React from "react"
import TypingAnimation from "./TypingText"
import styles from "../css/home.module.css"
import ImageSlider from "./imageSlider"

export default function Home(){
    const images = [
        {
          imgURL:
            "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          imgAlt: "img-1"
        },
        {
          imgURL:
            "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          imgAlt: "img-2"
        },
        {
          imgURL:
            "https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          imgAlt: "img-3"
        },
        {
          imgURL:
            "https://images.pexels.com/photos/54455/cook-food-kitchen-eat-54455.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
          imgAlt: "img-4"
        }
      ];
      

    return (
    <div className={styles.parent}>
        {
            console.log("welcome tot home page")
        }
        <div className={styles.div1} >
        <TypingAnimation  animationTime="2s" text="Welcome to Medsync" />
        <h1 className={styles.heading1} >One Way Solution to all your Health managements</h1>
        </div>
      <h1>  Explore Comprehensive Cloud-Based Healthcare Software Solutions Tailored for Hospitals, Clinics, and Doctors.</h1>
      <p>  Experience state-of-the-art digital solutions with DocPulse’s
        CMS(Clinic Management Software), PMS(Patient Management Software),
        and HIMS(Hospital Integrated Management Software),
        designed to meet the unique needs of doctors, clinics, and hospitals.
      </p>  
        <div className={styles.div2}>
        <div className={styles.div3}>
        <ImageSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
        </ImageSlider>
        </div>
      
            
        </div>

    
    </div>
    )
}