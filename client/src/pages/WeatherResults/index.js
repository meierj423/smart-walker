import React from "react";

import Textbox from "../../components/TextBox";

function WeatherResults(props) {
  const zip = props.location.state.zip;
  const city = props.location.state.city;
  const state = props.location.state.state;

  console.log("weatherResults props", props.location.state.zip);
  return (
    <Textbox
      title="Forecast"
      text={`Zip: ${zip} | City: ${city} | State: ${state}`}
      buttonDisplay="none"
      btnMsg="Let's Begin"
      formDisplay="none"
      orDisplay="none"
    />
  );
}

export default WeatherResults;
