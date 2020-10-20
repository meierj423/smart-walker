import React, { Component } from "react";
// import "./home.css";

import Button from "react-bootstrap/Button";
import Textbox from "../../components/TextBox";
import GenericButton from "../../components/Button/button";

function Home() {
  return (
    <Textbox
      title="Smart Walker"
      text="A Place to Plan Safe Walks With Your Dog"
      buttonDisplay="block"
      btnMsg="Let's Begin"
      formDisplay="none"
    />
  );
}

export default Home;
