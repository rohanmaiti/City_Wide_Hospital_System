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
        "https://img.freepik.com/premium-photo/doctor-icon-virtual-screen-health-care-medical-background-copy-space_55997-4372.jpg",
      imgAlt: "img-2",
      text: "Hello Rohan",
    },
    {
      imgURL:
        "https://d34t42wpe6kclg.cloudfront.net/in/live/publication/2/7/6/276/pictures/1/how-to-complete-my-profile-as-a-medical-professional-video-cover.jpg",
      imgAlt: "img-3",
      text: "Hello Rohan",
    },
    {
      imgURL:
        "https://b2461891.smushcdn.com/2461891/wp-content/uploads/2021/10/hospital-management-system.jpg?lossy=1&strip=1&webp=1",
      imgAlt: "img-4",
      text: "Hello Rohan",
    },
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
            Explore Comprehensive Cloud-Based Healthcare Software Solutions
            Tailored for Hospitals, Clinics, and Doctors.
          </h1>
          <p>
            Experience state-of-the-art digital solutions with DocPulse’s
            CMS(Clinic Management Software), PMS(Patient Management Software),
            and HIMS(Hospital Integrated Management Software), designed to meet
            the unique needs of doctors, clinics, and hospitals.
          </p>
        </div>
      </div>
    </div>
  );
}
