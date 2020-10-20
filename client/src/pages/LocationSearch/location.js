import React, { Component } from "react";
// import "./home.css";

import Button from "react-bootstrap/Button";
import Textbox from "../../components/TextBox";
import GenericButton from "../../components/Button/button";

function LocationSearch() {
  return (
    <Textbox
      title="Location Search"
      text="Enter your zip code or city"
      formDisplay="block"
      placeholder1="Enter zip code"
      buttonDisplay="none"
    />
  );
}

export default LocationSearch;
