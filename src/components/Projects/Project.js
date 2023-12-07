import React, { useState } from "react";
import AccordionPanel from "../AccordionPanel";
import { accordionsPanels } from "./Data";
import ImageSliderModel from "../ImageSliderModel";
import SlideData from "../SlideData";

const Project = () => {
  const [expandedIndex, setExpandedIndex] = useState(1);
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const handleAccordionClick = (index) => {
    setExpandedIndex(index);
  };

  const handleOpenSlider = () => {
    setIsSliderOpen(true);
  };

  const handleCloseSlider = () => {
    setIsSliderOpen(false);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {accordionsPanels.map((panel, index) => (
          <AccordionPanel
            key={panel.title}
            index={index + 1}
            isExpandedState={expandedIndex === index + 1}
            setIsExpandedState={handleAccordionClick}
            handleOpenSliderprop={handleOpenSlider}
            {...panel}
          />
        ))}
      </div>
      {isSliderOpen && (
        <ImageSliderModel slides={SlideData} onClose={handleCloseSlider} />
      )}
    </div>
  );
};

export default Project;
