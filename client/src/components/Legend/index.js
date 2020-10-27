import React from "react";
import "./Legend.css";

function Legend() {
  return (
    <div className="legend-component">
      <div className="row">
        <h5>Legend</h5>
      </div>
      <div className="row limits-row">
        <div className="col">
          <p className="limits safe">Safe</p>
        </div>
        <div className="col">
          <p className="limits caution">Caution</p>
        </div>

        <div className="col">
          <p className="limits danger">Dangerous</p>
        </div>
      </div>
    </div>
  );
}

export default Legend;
