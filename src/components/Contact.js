import React from 'react';

const Contact = () => {
  return (
    <>
      <h3>Contact</h3>
      <div className="contact-form">
        <input
          placeholder="Username"
          type="text"
          name="username"
          className="my-form"
        />
        <br />
        <br />
        <input
          placeholder="Password"
          type="password"
          name="password"
          className="my-form"
        />
        <br />
        <br />
        <button className="submit-btn my-form" onclick="myfun">
          Submit
        </button>
      </div>
    </>
  );
};
export default Contact;
