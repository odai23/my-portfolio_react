
import React from "react";
import ImageSlider from "./ImageSlider";

const ImageSliderModal = ({ slides }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default ImageSliderModal;
