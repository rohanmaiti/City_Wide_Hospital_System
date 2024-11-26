import React, { useState, useEffect } from "react";
import styles from "../css/slidingImage.module.css"; // Importing the CSS module


const CardWithSlider = () => {
  const images = [
    "https://via.placeholder.com/300x200?text=Image+1",
    "https://via.placeholder.com/300x200?text=Image+2",
    "https://via.placeholder.com/300x200?text=Image+3",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

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

  return (
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
      <div className={styles.cardText}>
        <h3>Card Title</h3>
        <p>This is some descriptive text for the card. You can add more content here as needed.</p>
      </div>
    </div>
  );
};

export default CardWithSlider;
