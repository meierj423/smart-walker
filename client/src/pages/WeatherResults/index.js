import React from "react";
import Legend from "../../components/Legend";
import "./weather.css";
import API from "../../utils/API";

const WEATHER_API_KEY = "3cb3221cf83645ed701a2873e477b9b9";
const GEOCODE_API_KEY = "AIzaSyBc_DTfXxDbVMeDlTrtQWmmF3ZC8qNzNTc";

class WeatherResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = { forecast: [], location: "" };
  }

  componentDidMount() {
    const zip = this.props.location.state.zip;
    const city = this.props.location.state.city;
    const state = this.props.location.state.state;
    if (zip) {
      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=${GEOCODE_API_KEY}`
      ).then((res) => {
        res.json().then((data) => {
          console.log(data);
          // console.log("data", data.results[0].formatted_address);
          let locationData = data.results[0].formatted_address;

          API.saveLastLocation(locationData)
            .then((res) => {
              console.log("Results saved successfully");
            })
            .catch((err) => {
              console.log(err);
            });

          this.setState({ location: locationData });
          let lat = data.results[0].geometry.location.lat;
          let lng = data.results[0].geometry.location.lng;
          fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=imperial&appid=${WEATHER_API_KEY}`
          ).then((res) => {
            res.json().then((data) => {
              const forecastData = data.hourly;
              this.setState({ forecast: forecastData });
            });
          });
        });
      });
    } else if (city && state) {
      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${city}+${state}&key=${GEOCODE_API_KEY}`
      ).then((res) => {
        res.json().then((data) => {
          let locationData = data.results[0].formatted_address;

          API.saveLastLocation(locationData)
            .then((res) => {
              console.log("Results saved successfully");
            })
            .catch((err) => {
              console.log(err);
            });

          this.setState({ location: locationData });
          let lat = data.results[0].geometry.location.lat;
          let lng = data.results[0].geometry.location.lng;
          fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=imperial&appid=${WEATHER_API_KEY}`
          ).then((res) => {
            res.json().then((data) => {
              const forecastData = data.hourly;
              this.setState({ forecast: forecastData });
            });
          });
        });
      });
    } else {
      alert("Please enter a valid location");
    }
  }

  render() {
    const forecastArr = this.state.forecast;

    // Table data
    // ================================================================
    const unixTimeStamps = forecastArr.map((hour) => hour.dt);

    const dates = unixTimeStamps.map((timestamp) =>
      new Date(timestamp * 1000).toLocaleDateString()
    );
    const times = unixTimeStamps.map((timestamp) =>
      new Date(timestamp * 1000).toLocaleTimeString()
    );
    // ================================================================

    return (
      <div id="main">
        <div className="container p-3">
          <div className="row centered-rows">
            <div className="col">
              <div className="card p-3">
                <div className="card-body legend">
                  <Legend />
                </div>
                <div className="currentLocation">{this.state.location}</div>
                <div className="row centered-rows">
                  <div className="date-column">
                    <p>Date</p>
                    <div className="col">
                      {dates.map((date) => (
                        <div className="dates" key={Math.random()}>
                          {date}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="time-column">
                    <p>Time</p>
                    <div className="col">
                      {times.map((time) => (
                        <div className="times" key={Math.random()}>
                          {time}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="temp-column">
                    <p>Temp</p>
                    <div className="col">
                      {forecastArr.map((hour) => {
                        if (hour.feels_like < 15 || hour.feels_like >= 90)
                          return (
                            <div className="temps danger" key={hour.dt}>
                              {hour.feels_like}°F
                            </div>
                          );
                        else if (
                          (hour.feels_like >= 15 && hour.feels_like < 45) ||
                          (hour.feels_like >= 75 && hour.feels_like < 90)
                        )
                          return (
                            <div className="temps caution" key={hour.dt}>
                              {hour.feels_like}°F
                            </div>
                          );
                        else
                          return (
                            <div className="temps safe" key={hour.dt}>
                              {hour.feels_like}°F
                            </div>
                          );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherResults;
