import React from "react";
import "./Form.css";
import GenericButton from "../Button/button";

class LocationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A location was submitted: " + this.state.value);
    event.preventDefault();
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
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder={this.props.placeholder1}
          />
        </label>
        <input type="submit" value="Submit" />
        <GenericButton btnMsg={this.state.value}></GenericButton>
      </form>
    );
  }
}

export default LocationForm;
