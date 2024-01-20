import "../styles/componentsStyles/ContactForm.css";
import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    //Changing values in realtime
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Showing message to the user for sucessfull submission
    setSubmitMessage("✓ Form Submitted sucessfully!!");

    // Reseting form value to null
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      <div className="contact-form-container">
        <h1>Contact US</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            id=""
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Name"
          />
          <input
            type="email"
            name="email"
            id=""
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
          />
          <input
            type="phone"
            name="phone"
            id=""
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 9876543210"
          />
          <textarea
            type="text"
            name="message"
            id=""
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message ..."
          />

          <p className="submit-msg">{submitMessage}</p>

          <button type="submit" className="cnt-fm-btn">
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
