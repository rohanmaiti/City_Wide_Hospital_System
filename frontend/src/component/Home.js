import React from "react";
import TypingAnimation from "./TypingText";
import ImageSlider from "./imageSlider";
import styles from "../css/home.module.css";

export default function Home() {
  const images = [
    {
      imgURL:
        "https://5.imimg.com/data5/SELLER/Default/2024/9/451487642/ZV/PI/QM/28133479/hospital-management-software-development-service.jpeg",
      imgAlt: "img-1",
      text: "Hello Rohan",
    },
    {
      imgURL:
        "https://docpulse.com/wp-content/uploads/2023/09/Hospital-Information-Management-System-Software-2.jpg",
      imgAlt: "img-2",
      text: "Hello Rohan",
    },
    {
      imgURL:
        "https://www.tatvasoft.com/outsourcing/wp-content/uploads/2024/04/HMS-Hospital-Management-System-Workflow-Example.jpg",
      imgAlt: "img-3",
      text: "Hello Rohan",
    },
    {
      imgURL:
        "https://b2461891.smushcdn.com/2461891/wp-content/uploads/2021/10/hospital-management-system.jpg?lossy=1&strip=1&webp=1",
      imgAlt: "img-4",
      text: "Hello Rohan",
    }
  ];

  return (
    <div className={styles.parent}>
      <div className={styles.div1}>
        <TypingAnimation animationTime="2s" text="Welcome to Medsync" />
        <h1 className={styles.heading1}>
          One Way Solution to all your Health managements
        </h1>
      </div>

      <div className={styles.div2}>
        <div className={styles.div3}>
          <ImageSlider>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image.imgURL} alt={image.imgAlt} />
              </div>
            ))}
          </ImageSlider>
        </div>

        <div className={styles.div4}>
          <h1>
            Explore Comprehensive  Healthcare Software Solutions
            Tailored for Hospitals, Clinics, and Doctors.
          </h1>
          <p>
            Experience state-of-the-art digital solutions with MedSync's
            CMS(Clinic Management Software), PMS(Patient Management Software),
            and HIMS(Hospital Integrated Management Software), designed to meet
            the unique needs of doctors, clinics, and hospitals.
          </p>
          <div>
            <img src="http://localhost:4000/photoes/h5.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
