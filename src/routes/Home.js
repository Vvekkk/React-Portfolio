import React from "react";
import Navbar from "../components/Navbar";

import Heroimg from "../components/Heroimg";

import Footers from "../components/Footers";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Heroimg />
      <Skills />
      <Footers />
    </div>
  );
};

export default Home;
