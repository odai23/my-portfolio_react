import React from "react";
import Navbar from "./Navbar";
import meImage from "./images/me.JPG";
import "./AboutPage.css";
import Footer from "./Footer";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="about-me">
          <div className="text-section">
            <h1>About Me:</h1>
            <p>
              My name is Odai Merheg, and I am an architect from Syria,
              currently residing in the beautiful city of Prague. I had my
              Bachelor's degree in architecture from Syria, following which I
              moved to Prague to pursue my Master's degree in landscape
              planning. My passion lies in creating innovative spaces that
              inspire and excite, and I am always on the lookout for new ideas
              and concepts that can scratch the itch in my brain. To further
              explore my interests in design, I created my own website, where I
              showcase my projects and also dabble in web design. As a creative
              individual, I am constantly looking for ways to improve my skills
              and learn new techniques, and I believe that every project
              presents an opportunity to learn and grow. My ultimate goal as an
              architect is to create spaces that not only look beautiful but
              also serve a practical purpose and make a positive impact on
              people's lives.
            </p>
          </div>
          <div className="photo-section">
            <img src={meImage} alt="Me" className="black-white" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
