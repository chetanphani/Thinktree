import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  const scrollAbout = () => {
    window.scrollTo(0, 800);
  
  };
  const scrolltoGallery = () => {
    window.scrollTo(0, 1800);
  };
  const scrolltoFloorplan = () => {
    window.scrollTo(0, 2500);
  };
  const scrolltoFeatures = () => {
    window.scrollTo(0, 3200);
  };
  const scrolltoContacts = () => {
    window.scrollTo(0, 4000);
  };
  return (
    <>
      <div className="Navbar_Main">
        <div className="sidebar">
          <ul style={{ cursor: "pointer" }}>
            <li>
              <a href="#">Home</a>
            </li>
            <li onClick={scrollAbout}>
              <a>About us</a>
            </li>
            <li onClick={scrolltoGallery}>
              <a>Gallery</a>
            </li>
            <li onClick={scrolltoFloorplan}>
              <a>Floor plan</a>
            </li>
            <li onClick={scrolltoFeatures}>
              <a>Features</a>
            </li>
            <li>
              <a href="#">WalkThrough</a>
            </li>
            <li onClick={scrolltoContacts}>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
