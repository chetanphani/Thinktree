import React from "react";
import "./Floorplan.scss";

const Floorplan = () => {
  return (
    <>
      <div className="floorPlan">
        <h1>FLOOR PLAN</h1>
        <div className="masterPlan">
          <h3>FLOOR PLAN</h3>
          <h3 className="master">MASTER PLAN</h3>
          <button className="button">Schelue A tour</button>
        </div>
        <div className="borderBox"></div>
      </div>
    </>
  );
};

export default Floorplan;
