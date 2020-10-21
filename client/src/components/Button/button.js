import React from "react";
import Button from "react-bootstrap/Button";

function GenericButton({buttonDisplay, btnMsg}) {
  return (
    <div className="beginBtn">
      <Button variant="light" size="lg" href="/location" style={{display: buttonDisplay}}>
        {btnMsg}
      </Button>
    </div>
  );
}

export default GenericButton;
