import React from "react";
import "./AccordionPanel.css";
import { BsArrowUpRightSquare } from "react-icons/bs";
import ImageSlider from "./ImageSlider";
import SlideData from "./SlideData";

function AccordionPanel({
  title,
  content,
  imageSrc,
  alt,
  category,
  index,
  isExpandedState,
  setIsExpandedState,
}) {
  const handleAccordionClick = () => {
    setIsExpandedState(index);
  };
  const [popUpSlider, setPopUpSlider] = React.useState(false);

  const openSlider = () => {
    setPopUpSlider(!popUpSlider);
  };

  return (
    <>
      <div className="accordion-panel">
        <h2 id={`panel${index}-heading`} onClick={handleAccordionClick}>
          <button
            className="accordion-trigger"
            aria-controls={`panel${index}-heading`}
            aria-expanded={isExpandedState}>
            <span className="accordion-title" id={`panel${index}-title`}>
              {title}
            </span>
            <svg aria-hidden={!isExpandedState} className="accordion-icon">
              <use xlinkHref="#interior"></use>
            </svg>
          </button>
        </h2>
        <div
          className="accordion-content"
          id={`panel${index}-content`}
          aria-labelledby={`panel${index}-heading`}
          aria-hidden={isExpandedState}>
          <p>{content}</p>
          <img
            className="accordion-image"
            src={imageSrc}
            alt={alt}
            data-category={category}
          />
        </div>
        <button className="go-button" onClick={openSlider}>
          <BsArrowUpRightSquare />
        </button>
      </div>
      <div className="image_popup">
        {popUpSlider && (
          <ImageSlider
            slides={SlideData[category]}
            category={category}
            onClose={() => setPopUpSlider(false)}
          />
        )}
      </div>
    </>
  );
}

export default AccordionPanel;
