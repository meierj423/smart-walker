/** @format */

import axios from "axios";
export default {
  saveLastLocation: function (location) {
    return axios.post("/api/recent-location", {
      location: location,
    });
  },
  getLastLocation: function () {
    return axios.get("/api/locations");
  },
};
