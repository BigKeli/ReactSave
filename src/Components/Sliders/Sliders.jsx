import React, { useState } from "react";
import './Sliders.css';

const Sliders = ({ items, itemsPerSlide = 4 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(items.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
  };

  const startIndex = currentSlide * itemsPerSlide;
  const currentItems = items.slice(startIndex, startIndex + itemsPerSlide);

  return (
   <div class="container">
   <div class="slider">
  
  <a href="#slide-1">1</a>
  <a href="#slide-2">2</a>
  <a href="#slide-3">3</a>
  <a href="#slide-4">4</a>
  <a href="#slide-5">5</a>

  <div class="slides">
    <div id="slide-1">
      1
    </div>
    <div id="slide-2">
      2
    </div>
    <div id="slide-3">
      3
    </div>
    <div id="slide-4">
      4
    </div>
    <div id="slide-5">
      5
    </div>
  </div>
</div>
</div>
  );
};

export default Sliders; // Default export
