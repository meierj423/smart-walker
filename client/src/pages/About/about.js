import React from "react";
import "./about.css";

function About() {
  return (
    <div id="main">
      <div className="container p-3">
        <div className="row centered-rows">
          <div className="col">
            <div className="card p-3">
              <h1 className="card-body header">About</h1>
              <p>
                This app was created with your dog in mind. Our furry companions
                are not impervious to extreme weather conditions and, as owners,
                we must be mindful of their safety.
              </p>

              <br />
              <p className="note">
                *Apparent (i.e. feels like) temperatures are used in this
                application - NOT actual temperatures
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
