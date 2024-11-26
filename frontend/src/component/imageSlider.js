import React, { useState, useEffect } from "react";
import styles from "../css/imageSlider.module.css";

function ImageSlider({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  let timerId;

  useEffect(() => {
    if (isAutoPlaying) {
      timerId = setTimeout(() => {
        slideNext();
      }, 3000);
    }
    return () => clearTimeout(timerId);
  }, [activeIndex, isAutoPlaying]);

  const slideNext = () => {
    setActiveIndex((prev) => (prev + 1) % children.length);
  };

  const slidePrev = () => {
    setActiveIndex((prev) => (prev - 1 + children.length) % children.length);
  };

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <div
      className={styles.container__slider}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.slider__wrapper}>
        {children.map((item, index) => (
          <div
            key={index}
            className={`${styles.slider__item} ${
              index === activeIndex ? styles.slider__item_active : ""
            }`}
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {item}
          </div>
        ))}
      </div>

      <div className={styles.container__slider__links}>
        {children.map((_, index) => (
          <button
            key={index}
            className={
              activeIndex === index
                ? `${styles.container__slider__links_small} ${styles.container__slider__links_small_active}`
                : styles.container__slider__links_small
            }
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>

      <button className={styles.slider__btn_next} onClick={slideNext}>
        &gt;
      </button>
      <button className={styles.slider__btn_prev} onClick={slidePrev}>
        &lt;
      </button>
    </div>
  );
}

export default ImageSlider;
