import React from "react";
import "./AccordionPanel.css";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

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

  // const navigate = useNavigate();

  // const handleGoButtonClick = () => {
  //   navigate(`/AccordionGallery/${category}`);
  // };

  return (
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
      <Link to={`/AccordionGallery/${category}`} className="go-button">
        <BsArrowUpRightSquare />
      </Link>
    </div>
  );
}

export default AccordionPanel;
