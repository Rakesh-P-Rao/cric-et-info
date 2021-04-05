import React, { Component } from "react";

class PlayerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="playerInfo">
          <div
            className="card mb-3"
            style={{ maxWidth: "1200px", height: "2700px" }}
          >
            <div className="firstRow">
              <div
                className="row g-0 mx-2 border mt-2 "
                style={{ height: "270px" }}
              >
                <div className="col-md-4 rounded-2">
                  <img src="..." alt="player display pic" />
                </div>
                <div className="col-md-8 pt-lg-5 pb-0">
                  <div className="card-body pt-lg-5 pb-0">
                    <h1 className="card-title pt-lg-5 pb-0">Player name</h1>
                    <p className="card-text">
                      <small className=" text-dark">Player team/country</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="secondRow">
              <div className="card mx-2 mb-2 border-0">
                <div className="card-header text-dark fs-4 fst-normal ">
                  Player info
                </div>
                <ul className="list-group list-group-flush ">
                  <li className="list-group-item text-dark fs-5 px-lg-5">
                    <ul className="list-group list-group-horizontal ">
                      <li className="list-group-item">Born</li>
                      <li className="list-group-item">DOB</li>
                      <li className="list-group-item">Or try inline!!!</li>
                    </ul>
                  </li>
                  <li className="list-group-item text-dark fs-5 px-lg-5">
                    Birth place
                  </li>
                  <li className="list-group-item text-dark fs-5 px-lg-5">
                    Height
                  </li>
                  <li className="list-group-item text-dark fs-5 px-lg-5">
                    Role
                  </li>
                  <li className="list-group-item text-dark fs-5 px-lg-5">
                    Batting Style
                  </li>
                  <li className="list-group-item text-dark fs-5 px-lg-5">
                    Bowling Style
                  </li>
                  <li className="list-group-item text-dark fs-5 px-lg-5">
                    Teams
                  </li>
                  <li className="list-group-item text-dark fs-5 px-lg-5">
                    Description
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlayerInfo;
