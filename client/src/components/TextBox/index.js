import React from "react";
import "./Textbox.css";
import GenericButton from "../Button/button";
import LocationForm from "../Form";

class Textbox extends React.Component {
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

  handleSubmit(event) {
    alert(
      `Zip: ${this.state.zip} | City: ${this.state.city} | State: ${this.state.state}`
    );
    event.preventDefault();
  }
  render() {
    return (
      <div id="main">
        <div className="container p-3">
          <div className="row">
            <div className="col-sm">
              <div className="card p-3">
                <div className="card-body">
                  <h2 className="card-title">{this.props.title}</h2>
                  <p className="card-subtitle mb-2">{this.props.text} </p>
                </div>
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

                <GenericButton
                  buttonDisplay={this.props.buttonDisplay}
                  btnMsg={this.props.btnMsg}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Textbox;
