import React from "react";
import "./Form.css";
import GenericButton from "../Button/button";

class LocationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { zip: "", city: "", state: "" };

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
      this.setState({ zip: "", city: "", state: "" });
    } catch (error) {
      alert(error);
    }
  }

  render() {
    console.log("form props", this.props);
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

export default LocationForm;
