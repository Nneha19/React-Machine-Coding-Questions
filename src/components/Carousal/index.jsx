import React, { useState } from 'react';
import './style.css'; // You can create this CSS file to style your carousel

const images = [
  'img1.jpeg',
  'img2.jpeg', 'img3.jpeg', 'img4.jpeg', 'img5.jpeg',
  // Add more image URLs as needed
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="maindiv">
    <div className="carousel-container">
      <button className="arrow-button arrow-left" onClick={handlePrev}>
        &lt;
      </button>
      <div className="imagecontainer">
      <img className="carousel-image" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />

      </div>
      <button className="arrow-button arrow-right" onClick={handleNext}>
        &gt;
      </button>
    </div>
    </div>
  );
};

export default Carousel;
