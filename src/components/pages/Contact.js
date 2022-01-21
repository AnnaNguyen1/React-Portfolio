import React, { useState } from "react";
import "../../App.css";
import validator from "validator";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitMsg, setSubmitMsg] = useState("");
  const { name, email, message } = formState;

  const validate = (e) => {
    if (e.target.name === "Email") {
      const email = e.target.value;
      console.log(email);
      if (validator.isEmail(email)) {
        setErrorMsg("");
      } else {
        setErrorMsg("Enter valid email!");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMsg(`${e.target.name} is required!`);
      } else {
        setErrorMsg("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMsg) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      setSubmitMsg("Message submitted!");
    }
  };

  return (
    <div id="head-container">
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="container-title-after-2 fatface col-11 col-sm-8 z-index-1">
          <h2>Get in touch.</h2>
        </div>
        <div className="col-sm-2"></div>
      </div>
      <div className="column z-index-1">
        <div className="form-margin">
          <div className="margin-content poppins mt-3 mt-md-5 z-index-1">
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="contactName">Name:</label>
                <input
                  className="form-control"
                  type="text"
                  onBlur={validate}
                  defaultValue={name}
                  name="Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactEmail">Email:</label>
                <input
                  className="form-control"
                  type="text"
                  onBlur={validate}
                  defaultValue={email}
                  name="Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactMsg">Message:</label>
                <textarea
                  className="form-control"
                  type="text"
                  onBlur={validate}
                  defaultValue={message}
                  name="Message"
                  rows="5"
                />
              </div>
              <br />
              {errorMsg && (
                <div>
                  <p className="error-text">{errorMsg}</p>
                </div>
              )}
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
                onSubmit={handleSubmit}
              >
                Submit
              </button>
              {submitMsg && (
                <div>
                  <p className="submit-text">{submitMsg}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
