import React from "react";
import About from "./Componets/About/About";
import Broucher from "./Componets/Broucher/Broucher";
import Contacts from "./Componets/Contacts/Contacts";
import Features from "./Componets/Features/Features";
import Floorplan from "./Componets/Floorplan/Floorplan";
import Gallery from "./Componets/Gallery/Gallery";
import Navbar from "./Componets/NavBar/Navbar";

import "./Mainapp.scss";

const ThinktreeMainApp = () => {
  return (
    <>
      <div className="layout">
        <Navbar classname="navClass" style={{ cursor: "pointer" }} />
        <div className="pages">
          <Broucher />
          <About />
          <Gallery />
          <Floorplan />
          <Features />

          <Contacts />
        </div>
      </div>
    </>
  );
};

export default ThinktreeMainApp;
