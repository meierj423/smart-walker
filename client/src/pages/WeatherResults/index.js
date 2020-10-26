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

    // Table data
    const unixTimeStamps = forecastArr.map((hour) => hour.dt);
    console.log("Times", unixTimeStamps);
    const hourlyFeelsLike = forecastArr.map((hour) => hour.feels_like);
    console.log("Hourly Feels Like Temps", hourlyFeelsLike);

    // let firstUnixTime = times[0];
    // console.log(times[0]);
    // let dateObj = new Date(firstUnixTime * 1000);
    // let date = dateObj.toLocaleDateString();
    // let time = dateObj.toLocaleTimeString();

    const dates = unixTimeStamps.map((timestamp) =>
      new Date(timestamp * 1000).toLocaleDateString()
    );
    const times = unixTimeStamps.map((timestamp) =>
      new Date(timestamp * 1000).toLocaleTimeString()
    );
    console.log("in progress", dates);

    // let hours = date.getHours();
    // let minutes = "0" + date.getMinutes();
    // let seconds = "0" + date.getSeconds();
    // let formattedTime =
    //   hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    // console.log(date, time);

    const zip = this.props.location.state.zip;
    const city = this.props.location.state.city;
    const state = this.props.location.state.state;

    for (let i = 0; i < hourlyFeelsLike.length; i++) {
      if (hourlyFeelsLike[i] > 65.0) {
        console.log("less than 70!");
      }
    }
    return (
      <div id="main">
        <div className="container p-3">
          <div className="row centered-rows">
            <div className="col">
              <div className="card p-3">
                <div className="card-body"></div>
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
                        if (hour.feels_like < 15)
                          return (
                            <div
                              className="temps big-danger-cold"
                              key={hour.dt}
                            >
                              {hour.feels_like}°F
                            </div>
                          );
                        else if (hour.feels_like >= 15 && hour.feels_like < 30)
                          return (
                            <div
                              className="temps medium-danger-cold"
                              key={hour.dt}
                            >
                              {hour.feels_like}°F
                            </div>
                          );
                        else if (hour.feels_like >= 30 && hour.feels_like < 45)
                          return (
                            <div
                              className="temps small-danger-cold"
                              key={hour.dt}
                            >
                              {hour.feels_like}°F
                            </div>
                          );
                        else if (hour.feels_like >= 45 && hour.feels_like < 50)
                          return (
                            <div className="temps caution-cold" key={hour.dt}>
                              {hour.feels_like}°F
                            </div>
                          );
                        else if (hour.feels_like >= 50 && hour.feels_like < 70)
                          return (
                            <div className="temps safe" key={hour.dt}>
                              {hour.feels_like}°F
                            </div>
                          );
                        else if (hour.feels_like >= 70 && hour.feels_like < 75)
                          return (
                            <div className="temps caution-hot" key={hour.dt}>
                              {hour.feels_like}°F
                            </div>
                          );
                        else if (hour.feels_like >= 75 && hour.feels_like < 85)
                          return (
                            <div
                              className="temps small-danger-hot"
                              key={hour.dt}
                            >
                              {hour.feels_like}°F
                            </div>
                          );
                        else
                          return (
                            <div className="temps big-danger-hot" key={hour.dt}>
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
