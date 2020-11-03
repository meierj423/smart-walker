import React from "react";
import "./Textbox.css";
import GenericButton from "../Button/button";
import LocationForm from "../Form";



function Textbox({ ...props }) {
  return (
    <div id="main">
      <div className="container p-3">
        <div className="row">
          <div className="col-sm">
            <div className="card p-3">
              <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-subtitle mb-2">{props.text} </p>
              </div>
              <LocationForm
                formDisplay={props.formDisplay}
                placeholder1={props.placeholder1}
                placeholder2={props.placeholder2}
                placeholder3={props.placeholder3}
              />
              <GenericButton
                buttonDisplay={props.buttonDisplay}
                btnMsg={props.btnMsg}
              />
              <div>Last Searched:</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Textbox;
