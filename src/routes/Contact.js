import React from "react";

import Navbar from "../components/Navbar";

import Footers from "../components/Footers";
import Heroimg2 from "../components/Heroimg2";
import Form from "../components/Form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2
        heading="CONTACT ME"
        text="Feel free to contact me for any queries."
      />
      <Form />
      <Footers />
    </div>
  );
};

export default Contact;
