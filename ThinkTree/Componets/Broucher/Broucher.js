import React from "react";
import "./Broucher.scss";

const Broucher = () => {
  const scrolldown = () => {
    window.scrollTo(0, 860);
  };
  return (
    <>
      <body>
        <div className="Broucher_main">
          <div className="black_border">
            <h1 className="h1">
              LUXURY APPARTMENTS WITH
              <br />
              270 DEGREE VIEW
            </h1>
            <button className="button">
              <a href="" download>
                Broucher
              </a>
            </button>
          </div>
        </div>
        <div className="explore" onClick={scrolldown}>
          Explore
          <h2>↓</h2>
        </div>
      </body>
    </>
  );
};

export default Broucher;
