import { useState, useEffect } from "react";
import "../styles/componentsStyles/JoinForm.css";

function JoinForm() {
  const initialJoinFormData = {
    name: "",
    email: "",
    phone: "",
    profession: "",
    campus: "",
    project: "",
    team: "",
    values: "",
    joinReason: "",
  };

  const [joinFormData, setJoinFormData] = useState(initialJoinFormData);

  // Form message
  const [joinFormMessage, setJoinFormMessage] = useState("");

  // Handling the change in the input field
  const handleChange = (e) => {
    setJoinFormData({ ...joinFormData, [e.target.name]: e.target.value }); //Changing values in realtime
  };

  // Storing errors in form
  const [errors, setErrors] = useState({});

  // Validating wheather form is valid or not
  const validateForm = () => {
    const newErrors = {};

    if (!joinFormData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!joinFormData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(joinFormData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Phone number validation
    // const phoneRegex = /^\d{10}$/; // Adjust the regex based on your validation criteria
    // if (!joinFormData.phone.trim()) {
    //   newErrors.phone = "Phone number is required";
    // } else if (!phoneRegex.test(joinFormData.phone)) {
    //   newErrors.phone = "Invalid phone number format";
    // }

    if (!joinFormData.profession) {
      newErrors.profession = "Please select Your Profession";
    }

    if (!joinFormData.campus) {
      newErrors.campus = "Please select Your Campus";
    }

    if (!joinFormData.project) {
      newErrors.project = "Please select Your Project";
    }

    if (!joinFormData.team) {
      newErrors.team = "Please select Your Team";
    }

    if (!joinFormData.values.trim()) {
      newErrors.values = "Values Message is required";
    }

    if (!joinFormData.joinReason.trim()) {
      newErrors.joinReason = "Join Reason is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Handling the submit logic
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
         // Message for user
         setJoinFormMessage("Sending Email to Pehchaan Ek Safar...");

        // Send form data to the backend and mailing to PES
        const respone = await fetch(
            `http://localhost:5000/join/send-email`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(joinFormData),
            }
          );

        setJoinFormMessage("✓ Form submitted sucessfully!!");

        setJoinFormData(initialJoinFormData);

      } catch (error) {
        console.error("Error sending email:", error);
      }
    }else {
        setJoinFormMessage("Please complete all the fields");
        setErrors({});
      }
  };

  return (
    <>
      <div className="join-form-container">
        <form onSubmit={handleSubmit}>
          <div className="joinus-div">
            <div className="joinus-div-left">
              <lable className="lbl">Name</lable>
              <br />
              <input
                type="text"
                className="text-input"
                name="name"
                id="name"
                placeholder="Your name here.."
                onChange={handleChange}
                value={joinFormData.name}
              />
            </div>

            <div className="joinus-div-right">
              <lable className="lbl">Email</lable>
              <br />
              <input
                type="email"
                className="text-input"
                name="email"
                id="email"
                placeholder="Your email here.."
                onChange={handleChange}
                value={joinFormData.email}
              />
            </div>
          </div>

          <div className="joinus-div">
            <div className="joinus-div-left">
              <lable className="lbl">Contact Number (WhatsApp) </lable>
              <br />
              <input
                type="phone"
                className="text-input"
                name="phone"
                id="contact-no"
                placeholder="Your contact number here.."
                onChange={handleChange}
                value={joinFormData.phone}
              />
            </div>

            <div className="joinus-div-right">
              <lable className="lbl">Current Profession</lable>
              <br />
              <select
                id="profession"
                className="select-input"
                name="profession"
                onChange={handleChange}
                value={joinFormData.profession}
              >
                <option value="">--Select--</option>
                <option value="Undergraduate student">
                  Undergraduate student
                </option>
                <option value="Post Graduate student">
                  Post Graduate student
                </option>
                <option value="Research scholar">Research scholar</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="joinus-div">
            <div className="joinus-div-left">
              <lable className="lbl">Campus in which you mainly reside?</lable>
              <br />
              <select
                id="campus"
                className="select-input"
                name="campus"
                onChange={handleChange}
                value={joinFormData.campus}
              >
                <option value="" selected disabled hidden>
                  --Select--
                </option>
                <option value="Main Campus">Main Campus</option>
                <option value="Transit Campus">Transit Campus</option>
              </select>
            </div>

            <div className="joinus-div-right">
              <lable className="lbl">Which project do you want to join? </lable>
              <br />
              <select
                id="project"
                className="select-input"
                name="project"
                onChange={handleChange}
                value={joinFormData.project}
              >
                <option value="" selected disabled hidden>
                  --Select--
                </option>
                <option value="Paathshala">Paathshala</option>
                <option value="School Outreach">School Outreach</option>
              </select>
            </div>
          </div>

          <div className="joinus-div-single">
            <div>
              <lable className="lbl">
                The Team which would you like to join (can be changed later on)?{" "}
              </lable>
              <br />
              <select
                id="team"
                className="select-input"
                name="team"
                onChange={handleChange}
                value={joinFormData.team}
                defaultValue=""
              >
                <option value="" selected disabled hidden>
                  --Select--
                </option>
                <option value="Public Relations and Sponsorships">
                  Public Relations and Sponsorships
                </option>
                <option value="Social Media">Social Media</option>
                <option value="Office Works">Office Works</option>
                <option value="Accounts and Logistics">
                  Accounts and Logistics
                </option>
              </select>
            </div>
          </div>

          <div className="joinus-div-single">
            <div>
              <lable className="lbl">
                Why do you want to join Pehchaan Ek Safar?{" "}
              </lable>
              <br />
              <textarea
                type="text"
                className="text-area"
                id="joinReason"
                placeholder="Your answer.."
                name="joinReason"
                onChange={handleChange}
                value={joinFormData.joinReason}
              />
            </div>
          </div>

          <div className="joinus-div-single">
            <div>
              <lable className="lbl">
                What value will you bring to Pehchaan Ek Safar and what do you
                expect from us?{" "}
              </lable>
              <br />
              <textarea
                type="text"
                className="text-area"
                id="values"
                placeholder="Your answer.."
                name="values"
                onChange={handleChange}
                value={joinFormData.values}
              />
            </div>
          </div>

          <p className="join-form-message">{joinFormMessage}</p>

          <div className="joinus-div-single">
            <div>
              <button id="btn-submit" className="joinus-submit" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default JoinForm;
