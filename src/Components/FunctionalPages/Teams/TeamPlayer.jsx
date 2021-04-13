import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";

class TeamPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div
          className="card my-3 ml-lg-5 "
          style={{ maxWidth: "1200px", height: "180px" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img src={this.props.tpList.image} alt="stadium dp here" />
            </div>
            <div className="col-md-5">
              <div className="card-body pt-lg-5 ">
                <h2 className="card-text pt-lg-4">{this.props.tpList.name}</h2>
              </div>
            </div>
            <div className="col-md-3 pt-lg-5 pl-lg-5 mr-lg-0 pr-lg-0">
              <div className="card-body pl-lg-5 mr-lg-0 pr-lg-0">
                <Link
                  className="btn btn-success fs-4"
                  to={PAGE_URLS.VIEW_TEAM_PLAYER_INFO.replace(
                    ":id",
                    this.props.tpList.id
                  )}
                >
                  Info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamPlayer;
