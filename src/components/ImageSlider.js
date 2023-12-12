import React, { useState } from "react";
import { SlideData } from "./SlideData";
import "./ImageSlider.css";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides, category, onClose }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <div className="slider_container"></div>
      <div className="close_wrapper">
        <button className="close_button" onClick={() => onClose()}>
          close
        </button>
      </div>
      <div className="slider_wrapper">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {SlideData[category].map((slide, index) => {
          console.log(slide, index);
          // this is the fix: version 2
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}>
              {index === current && (
                <img src={slide} alt="project photos" className="image" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ImageSlider;
