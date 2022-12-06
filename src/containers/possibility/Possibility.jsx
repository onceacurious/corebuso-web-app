import React, { useState } from "react";
import { Link } from "react-router-dom";
import contactImage from "../../assets/contact_possibility.png";
import emailIcon from "../../assets/email_icon.svg";
import api from "../../helpers/api/inquiryApi";
import "./possibility.css";

const Possibility = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
    setName("");
    setContact("");
    setEmail("");
    setCompany("");
  };

  const handleCancel = () => {
    setName("");
    setContact("");
    setEmail("");
    setCompany("");
  };

  const postData = () => {
    try {
      api.post("/", {
        email: email,
        name: name ? name : "",
        contact: contact ? contact : "",
        company: company ? company : "",
      });
    } catch (err) {
      if (err.response) {
        console.log(err.responses.data);
        console.log(err.response.status);
        console.log(err.response.header);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  return (
    <>
      <div className="cbs__possibility section__padding" id="possibility">
        <div className="cbs__possibility-image">
          <img src={contactImage} alt="contact" />
        </div>

        <div className="cbs__possibility-form gradient__bg">
          <img src={emailIcon} alt="email icon" loading="lazy" />
          <h1>Request for a Demo</h1>
          <form action="POST" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              id="request_name"
              placeholder="Complete Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              name="email"
              id="request_email"
              placeholder="Email Address*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              name="contact"
              id="request_contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Contact Number"
            />
            <input
              type="text"
              name="company"
              id="request_company"
              placeholder="Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />

            <div className="cbs__possibility-form_button">
              <input
                className="pointer"
                type="reset"
                value="cancel"
                tabIndex="-1"
                onClick={handleCancel}
              />
              <input type="submit" value="Send" className="pointer" />
            </div>
          </form>
          <div className="cbs__possibility-form_privacy">
            <p>
              By providing the data and clicking the “<strong>SEND</strong>”
              button you agree with processing your personal data for the
              purpose of entering a pre-contractual relationship. For more
              information on how we are committed to protect and respect your
              privacy, please check our{" "}
              <strong>
                <Link
                  to="/about-us"
                  className="btn-flip"
                  tabIndex="-1"
                  data-front="Privacy Policy"
                  data-back="Go to About"
                >
                  {/* Privacy Policy */}
                </Link>
              </strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Possibility;
