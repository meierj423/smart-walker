import React from "react";
import "./about.css";
import Textbox from "../../components/TextBox";

function About() {
  return (
    <Textbox
      title="About"
      text="Description goes here!"
      buttonDisplay="none"
      formDisplay="none"
      orDisplay="none"
    />
  );
}

export default About;
