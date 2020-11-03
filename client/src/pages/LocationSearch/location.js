import React from "react";

import Textbox from "../../components/TextBox";

function LocationSearch() {
  return (
    <Textbox
      title="Location Search"
      text="Please enter your location"
      formDisplay="block"
      placeholder1="Enter zip code (e.g. 92101)"
      placeholder2="Enter city (e.g. San Diego)"
      placeholder3="Enter state (e.g. California)"
      buttonDisplay="none"
      lastSearchedDisplay="none"
    ></Textbox>
  );
}

export default LocationSearch;
