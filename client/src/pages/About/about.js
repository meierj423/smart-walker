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
              <p>
                For more information on your dog and hot weather, please click:{" "}
                <a href="https://www.gopetplan.com/sites/default/files/inline-images/How%20Hot%20Is%20Too%20Hot%20infographic.png">
                  here
                </a>
              </p>
              <p>
                For more information on your dog and cold weather, please click{" "}
                <a href="https://www.gopetplan.com/sites/default/files/inline-images/PETP_2245_HowColdIsTooCold_Infographic_0918.png">
                  here
                </a>
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
