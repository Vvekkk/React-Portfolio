import React from "react";

import Navbar from "../components/Navbar";

import Footers from "../components/Footers";
import Heroimg2 from "../components/Heroimg2";
import Work from "../components/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS" text="Some of my most recent work." />
      <Work />
      <Footers />
    </div>
  );
};

export default Project;
