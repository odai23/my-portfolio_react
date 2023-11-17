import React from "react";
import "./ContactPage.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <main className="contact-me">
        <form action="/send-email" method="POST">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your name"
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your e-mail"
          />

          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            placeholder="Enter the subject"
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Type in your message"></textarea>

          <input type="submit" value="Send" />
        </form>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
