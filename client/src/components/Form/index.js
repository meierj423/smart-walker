import React from "react";
import { Redirect } from "react-router-dom";
import "./Form.css";

class LocationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false, zip: "", city: "", state: "" };

    this.handleZipChange = this.handleZipChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleZipChange(event) {
    this.setState({ zip: event.target.value });
  }
  handleCityChange(event) {
    this.setState({ city: event.target.value });
  }
  handleStateChange(event) {
    this.setState({ state: event.target.value });
  }

  locationCheck() {
    while (this.state.zip === "") {
      if (this.state.city === "" && this.state.state === "") {
        throw "Please enter either a zip code or a city and state";
      } else if (this.state.city !== "" && this.state.state === "") {
        throw "Please enter a state";
      } else if (this.state.city === "" && this.state.state !== "") {
        throw "Please enter a city";
      }
      return;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Zip: ${this.state.zip} | City: ${this.state.city} | State: ${this.state.state}`
    );
    try {
      this.locationCheck();
      alert("you pass");
      this.setState({ redirect: true });
    } catch (error) {
      alert(error);
    }
  }

  render() {
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: "/results",
            state: {
              zip: this.state.zip,
              city: this.state.city,
              state: this.state.state,
            },
          }}
        />
      );
    } else {
      return (
        <form
          className="form"
          onSubmit={this.handleSubmit}
          style={{ display: this.props.formDisplay }}
        >
          <label>
            {/* Input for zip code */}
            <div className="centeredRow">
              <input
                type="text"
                value={this.state.zip}
                onChange={this.handleZipChange}
                placeholder={this.props.placeholder1}
              />
            </div>
            <h5>Or</h5>
            {/* Input for city */}
            <div className="centeredRow">
              <input
                type="text"
                value={this.state.city}
                onChange={this.handleCityChange}
                placeholder={this.props.placeholder2}
              />
            </div>
            {/* Input for state */}
            <div className="centeredRow">
              <input
                type="text"
                value={this.state.state}
                onChange={this.handleStateChange}
                placeholder={this.props.placeholder3}
              />
            </div>
          </label>
          <div className="centeredRow">
            <input type="submit" value="Next" />
          </div>
        </form>
      );
    }
  }
}

export default LocationForm;
