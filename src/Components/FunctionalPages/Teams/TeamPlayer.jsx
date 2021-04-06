import React, { Component } from "react";

class TeamPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div
          className="card mb-3"
          style={{ maxWidth: "540px", height: "136px" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img src={this.props.teamPlayerImage} alt="player dp here" />
            </div>
            <div className="col-md-8">
              <div className="card-body pt-lg-5">
                <h2 className="card-text">{this.props.teamPLayerName}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamPlayer;
