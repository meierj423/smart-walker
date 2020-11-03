import React from "react";
import Button from "react-bootstrap/Button";
import "./button.css"

function GenericButton({buttonDisplay, btnMsg}) {
  return (
    <div className="btn">
      <Button className="beginBtn" variant="light" size="lg" href="/location" style={{display: buttonDisplay}}>
        {btnMsg}
      </Button>
    </div>
  );
}

export default GenericButton;
