import React from "react";
import "./about.css";
import Textbox from "../../components/TextBox";

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
              {/* <p>
                After entering your zip code, you will be presented with an
                hourly forecast for the next 48 hours. The temperatures listed
                will be colored either <span style={{ color: "red" }}>red</span>
                ,<span style={{ color: "yellow" }}> yellow</span>, or
                <span style={{ color: "green" }}> green</span>. Temperatures
                colored <span style={{ color: "red" }}>red</span> represent
                temperatures that pose a serious threat to your dog’s health
                (less than 15°F and greater than 95°F). At these temperatures,
                you should avoid walking your dog outside regardless of age,
                breed, or physical condition. Temperatures colored{" "}
                <span style={{ color: "yellow" }}>yellow </span>
                represent temperatures that could pose a threat to your dog’s
                health if they are outside for a prolonged amount of time
                (15-45°F or 75-90°F). At these temperatures, you should take
                caution when walking your dog outside and take into account
                their age, breed, and physical condition. Temperatures colored
                <span style={{ color: "green" }}> green</span> mean that it is
                safe for just about any dog- have fun!
              </p>
              <br /> */}
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
