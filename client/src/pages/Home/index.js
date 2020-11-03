import React from "react";
import API from "../../utils/API";

import Textbox from "../../components/TextBox";

function Home() {
  API.getLastLocation().then((res) => {
    let lastSearched = res.data[0].location;
    console.log(lastSearched);
  });
  return (
    <Textbox
      title="Smart Walker"
      text="A Place to Plan Safe Walks With Your Dog"
      buttonDisplay="block"
      btnMsg="Let's Begin"
      formDisplay="none"
      orDisplay="none"
    />
  );
}

export default Home;
