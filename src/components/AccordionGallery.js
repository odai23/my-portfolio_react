import React from "react";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./AccordionGallery.css";
import { accordionsPanels } from "./Projects/Data";
import image1 from './images/Luxury/1.jpg'

const AccordionGallery = () => {
  const slug = "luxury";
  const selectedCategory = accordionsPanels.find(
    (panel) => panel.categorySlug === slug
  );

  console.log(selectedCategory);


  return (
    <div className="gallery-modal">
      <div className="gallery-content">
        <button className="gallery-close">
          <BsArrowUpRightSquare />
        </button>
        <div className="gallery-slider">
          <button className="gallery-slider-btn" >
            <FiChevronLeft />
          </button>
          <img
            src={image1}
            alt="Slideshow"
            className="gallery-image"
          />
          <button className="gallery-slider-btn" >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccordionGallery;
