import React from "react";
import "./home.css";
import Button from "react-bootstrap/Button";

function Home() {
  return (
    <div id="main">
      <div className="container p-3">
        <div className="row">
          <div className="col-sm">
            <div className="card p-3">
              <div className="card-body">
                <h2 className="card-title">Smart Walker</h2>
                <p className="card-subtitle mb-2">
                  A Place to Plan Safe Walks With Your Dog
                </p>
              </div>
              <div className="beginBtn">
                <Button variant="light" size="lg">
                  Let's Begin
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
