import React from "react";
import API from "../../utils/API";

import Textbox from "../../components/TextBox";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lastSearched: "" };
  }

  componentDidMount() {
    API.getLastLocation().then((res) => {
      let lastSearched = res.data[0].location;
      console.log(lastSearched);
      this.setState({ lastSearched: lastSearched });
      console.log("state", this.state);
    });
  }

  render() {
    return (
      <Textbox
        title="Smart Walker"
        text="A Place to Plan Safe Walks With Your Dog"
        lastSearched={this.state.lastSearched}
        buttonDisplay="block"
        btnMsg="Let's Begin"
        formDisplay="none"
        orDisplay="none"
      />
    );
  }
}

export default Home;
