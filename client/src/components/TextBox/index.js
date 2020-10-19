import React from "react";
import "./Textbox.css";
import Button from "react-bootstrap/Button";
import GenericButton from "../Button/button";

function Textbox({ title, text, buttonDisplay, btnMsg }) {
  return (
    <div id="main">
      <div className="container p-3">
        <div className="row">
          <div className="col-sm">
            <div className="card p-3">
              <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="card-subtitle mb-2">{text} </p>
              </div>
              <GenericButton buttonDisplay={buttonDisplay} btnMsg={btnMsg} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Textbox;
