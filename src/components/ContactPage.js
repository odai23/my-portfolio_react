import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactPage.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lkqv5sl",
        "template_jblkbxd",
        form.current,
        "IVFnw9JaHeUKZnE5z"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <Navbar />
      <div id="contact" className="form_container">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <div className="full_name">
            <input
              type="text"
              id="first_name"
              name="first_name"
              required
              placeholder="First name"
            />
            <input
              type="text"
              id="last_name"
              name="last_name"
              required
              placeholder="Last name"
            />
          </div>

          <label htmlFor="phone">Phone</label>
          <input
            className="phone_input"
            type="text"
            id="phone"
            name="phone"
            required
            placeholder="Enter your Phone"
          />
          <label>Email</label>
          <input
            className="email_input"
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your Email"
          />
          <label>Message</label>
          <textarea
            className="message_area"
            type="text"
            name="message"
            id="message"
            required
            placeholder="Here you can discribe your belongings, ask us about our services or add your comments."
          />
          <input type="submit" value="Send" />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
