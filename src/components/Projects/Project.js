import React, { useState } from "react";
import AccordionPanel from "../AccordionPanel";
import { accordionsPanels } from "./Data";

const Project = () => {
  const [expandedIndex, setExpandedIndex] = useState(1);

  const handleAccordionClick = (index) => {
    setExpandedIndex(index);
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
            {...panel}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
