import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div
          className="card my-3"
          style={{ maxWidth: "1200px", height: "127px" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img src={this.props.tList.image} alt="stadium dp here" />
            </div>
            <div className="col-md-5">
              <div className="card-body pt-lg-4 ">
                <h2 className="card-text pt-lg-4">{this.props.tList.team}</h2>
              </div>
            </div>
            <div className="col-md-3 pt-lg-4 pl-lg-5 mr-lg-0 pr-lg-0">
              <div className="card-body pl-lg-5 mr-lg-0 pr-lg-0">
                <Link
                  className="btn btn-warning"
                  to={PAGE_URLS.TEAM_PLAYER_VIEW.replace(
                    ":id",
                    this.props.tList.id
                  )}
                >
                  Team Players
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
