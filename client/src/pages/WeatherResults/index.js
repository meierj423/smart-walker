import React from "react";
import "./weather.css";
import Textbox from "../../components/TextBox";

const WEATHER_API_KEY = "3cb3221cf83645ed701a2873e477b9b9";
const GEOCODE_API_KEY = "AIzaSyArMGDSwWUvndNNSTGCV27GSE8IUwYgiMw";

class WeatherResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = { forecast: [] };
  }

  componentDidMount() {
    // const zip = this.props.location.state.zip;
    const zip = this.props.location.state.zip;
    // const city = this.props.location.state.city;
    // const state = this.props.location.state.state;
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=${GEOCODE_API_KEY}`
    ).then((res) => {
      res.json().then((data) => {
        let lat = data.results[0].geometry.location.lat;
        let lng = data.results[0].geometry.location.lng;
        console.log(`Lat: ${lat} | Lng: ${lng}`);
        fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=imperial&appid=${WEATHER_API_KEY}`
        ).then((res) => {
          res.json().then((data) => {
            console.log(data.hourly);
            const forecastData = data.hourly;
            this.setState({ forecast: forecastData });
          });
        });
      });
    });
  }

  render() {
    const forecastArr = this.state.forecast;
    console.log(forecastArr);
    const zip = this.props.location.state.zip;
    const city = this.props.location.state.city;
    const state = this.props.location.state.state;

    return (
      <div id="main">
        <div className="container p-3">
          <div className="row">
            <div className="col-sm">
              <div className="card p-3">
                <div className="card-body">
                  <h2 className="card-title"></h2>
                  <p className="card-subtitle mb-2"> </p>
                </div>
                <ul>
                  {forecastArr.map((hour) => (
                    <div className="temps" key={hour.dt}>
                      {hour.temp}
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      // <Textbox
      //   title="Forecast"
      //   text={`Zip: ${zip} | City: ${city} | State: ${state}`}
      //   buttonDisplay="none"
      //   btnMsg="Let's Begin"
      //   formDisplay="none"
      //   orDisplay="none"
      // />
    );
  }
}

export default WeatherResults;
