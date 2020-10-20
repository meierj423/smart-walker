import React from "react";

import Textbox from "../../components/TextBox";
import GenericButton from "../../components/Button/button";

function LocationSearch() {
  return (
    <Textbox
      title="Location Search"
      text="Enter your zip code or city"
      formDisplay="block"
      placeholder1="Enter zip code"
      orDisplay="block"
      placeholder2="Enter city"
      placeholder3="Enter state"
      buttonDisplay="none"
    ></Textbox>
  );
}

export default LocationSearch;
