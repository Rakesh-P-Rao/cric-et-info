import React, { Component } from "react";
import TrialStadiumPic from "../../../Images/Demo/demoStadiumPic.jpg";

class Stadium extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="card my-3">
          <img
            src={TrialStadiumPic}
            //{this.props.stadiumImage}
            className="card-img-top"
            style={{ height: "300px" }}
            alt="stadium dp here"
          />
          <div className="card-body">
            <div>
              <h1>{this.props.stadiumName}Name</h1>
              <h3>
                City, Country
                {this.props.stadiumCity}
                {this.props.stadiumCountry}
              </h3>
            </div>
            <div className="row my-3">
              <div className="col-3 mb-2">
                <p className="card-text text-dark fs-5 fw-bold">Capacity:</p>
              </div>
              <div className="col-9 mb-2">
                <p className="card-text text-dark fs-5">
                  capacity{this.props.stadiumCapacity}
                </p>
              </div>
              <div className="col-3 mb-2">
                <p className="card-text text-dark fs-5 fw-bold">Ends:</p>
              </div>
              <div className="col-9 mb-2">
                <p className="card-text text-dark fs-5">
                  A end, B end{this.props.stadiumEnds}
                </p>
              </div>
              <div className="col-3 mb-2">
                <p className="card-text text-dark fs-5 fw-bold">Home To:</p>
              </div>
              <div className="col-9 mb-2">
                <p className="card-text text-dark fs-5">
                  home to{this.props.stadiumHomeTo}
                </p>
              </div>
              <div className="col-3 mb-2 fw-bold">
                <p className="card-text text-dark fs-5">Location:</p>
              </div>
              <div className="col-9 mb-2">
                <p className="card-text text-dark fs-5">
                  location{this.props.stadiumCity}, {this.props.stadiumCountry}
                </p>
              </div>
              <div className="col-3 mb-2 fw-bold">
                <p className="card-text text-dark fs-5">Opened:</p>
              </div>
              <div className="col-9 mb-2">
                <p className="card-text text-dark fs-5">
                  opened{this.props.stadiumopened}
                </p>
              </div>
              <div className="col-3 mb-2 fw-bold">
                <p className="card-text text-dark fs-5">Description:</p>
              </div>
              <div className="col-9 mb-2">
                <p className="card-text text-dark fs-5">
                  Description{this.props.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stadium;
