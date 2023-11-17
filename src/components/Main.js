import React, { useState, useEffect } from "react";
import "./Main.css";

const Main = () => {
  const [opacity, setOpacity] = useState(1);

  const updateImage = () => {
    setOpacity(1 - window.scrollY / 700);
  };

  useEffect(() => {
    const handleScroll = () => {
      updateImage();
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <main className="main">
        <div className="cover-img" id="cover-img" style={{ opacity: opacity }}>
          <h1>Design your world !</h1>
        </div>
        <div className="project-heading">CHECK OUT SOME OF MY PROJECTS</div>
      </main>
    </div>
  );
};

export default Main;
