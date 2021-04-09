import React, { Component } from "react";

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row">
        <div className="col-6">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={this.props.tList.image} alt="team dp here" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="card-text pt-lg-3">{this.props.tList.team}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
