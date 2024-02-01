import "../styles/componentsStyles/ContactForm.css";
import { useState } from "react";

// const BASE_URL = process.env.REACT_APP_API_BASE_URL;

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
    message: "",
  });

  const [submitMessage, setSubmitMessage] = useState("");

  // Handling the change in the input field
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); //Changing values in realtime
  };

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // // Phone number validation
    // const phoneRegex = /^\d{10}$/; // Adjust the regex based on your validation criteria
    // if (!formData.phone.trim()) {
    //   newErrors.phone = "Phone number is required";
    // } else if (!phoneRegex.test(formData.phone)) {
    //   newErrors.phone = "Invalid phone number format";
    // }

    if (!formData.query) {
      newErrors.query = "Please select an option";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Logic for handling after clicking the submit button
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Message for user
        setSubmitMessage("Sending Email to Pehchaan Ek Safar...");

        // Send form data to the backend and mailing to PES
        const respone = await fetch(
          `${import.meta.env.VITE_API_BASE}/api/contact/send-email`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        // Showing message to the user for sucessfull submission
        setSubmitMessage("✓ Form Submitted sucessfully!!");

        // Reseting form value to null
        setFormData({
          name: "",
          email: "",
          phone: "",
          query: "",
          message: "",
        });
      } catch (error) {
        console.error("Error sending email:", error);
      }
    } else {
      setSubmitMessage("Please complete all the fields");
      setErrors({});
    }
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
            placeholder="Phone"
          />

          <select name="query" value={formData.query} onChange={handleChange}>
            <option
              className="form-option-btn"
              value=""
              selected
              disabled
              hidden
            >
              Query related to
            </option>
            <option className="form-option-btn">Donation</option>
            <option className="form-option-btn">Carrer</option>
            <option className="form-option-btn">Volunteering</option>
            <option className="form-option-btn">Others</option>
          </select>

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
