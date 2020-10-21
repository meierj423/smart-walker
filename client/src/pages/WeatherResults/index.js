import React from "react";
import Textbox from "../../components/TextBox";

const WEATHER_API_KEY = "3cb3221cf83645ed701a2873e477b9b9";
const GEOCODE_API_KEY = "AIzaSyArMGDSwWUvndNNSTGCV27GSE8IUwYgiMw";

class WeatherResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    // const zip = this.props.location.state.zip;
    const zip = this.props.location.state.zip;
    // const city = this.props.location.state.city;
    // const state = this.props.location.state.state;
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=${GEOCODE_API_KEY}`
    ).then((res) =>
      res.json().then((data) => console.log(data.results[0].geometry.location))
    );
  }

  render() {
    const zip = this.props.location.state.zip;
    const city = this.props.location.state.city;
    const state = this.props.location.state.state;

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
}

export default WeatherResults;
