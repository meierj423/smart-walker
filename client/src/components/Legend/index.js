import React from "react";
import "./Legend.css";

function Legend() {
  return (
    <div className="legend-component">
      <div className="row">
        <h3 className="legend-header">Legend</h3>
      </div>
      <div className="row">
        <div className="col">
          <div className="cold-temps">Cold Limits</div>
          <div className="row">hi</div>
        </div>

        <div className="col">
          <div className="hot-temps">Hot Limits</div>
        </div>
      </div>
    </div>
  );
}

export default Legend;
