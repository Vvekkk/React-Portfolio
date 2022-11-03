import "./FormStyles.css";

import React from "react";

const Form = () => {
  return (
    <div className="form">
      <form action="https://formspree.io/f/xyyvbvlj" method="POST">
        <label>Your name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email" name="email" />
        <label>Subject</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea
          name="message"
          rows="6"
          placeholder="Type your message here"
          className="msg-size"
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
