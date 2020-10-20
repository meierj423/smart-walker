import React from "react";
import "./Textbox.css";
import GenericButton from "../Button/button";
import LocationForm from "../Form";

class Textbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { zip: "", city: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ zip: event.target.value });
  }

  handleSubmit(event) {
    alert("A location was submitted: " + this.state.zip);
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
                    <input
                      type="text"
                      value={this.state.zip}
                      onChange={this.handleChange}
                      placeholder={this.props.placeholder1}
                    />
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
