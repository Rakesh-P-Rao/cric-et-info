import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <h1>admin</h1>
        <div className="row">
          <div className="col col-md-2  ">
            <Link
              className="addPlayerInfo btn btn-danger"
              to={PAGE_URLS.ADD_PLAYER_INFO}
            >
              Add Player Info
            </Link>
          </div>
          <div className="col col-md-2">
            <Link
              className="addStadium btn btn-danger"
              to={PAGE_URLS.ADD_STADIUM}
            >
              Add Stadium
            </Link>
          </div>
          <div className="col col-md-2">
            <Link
              className="addBattingStyle btn btn-danger"
              to={PAGE_URLS.ADD_BATTING_STYLE}
            >
              Add Batting style
            </Link>
          </div>
          <div className="col col-md-2">
            <Link
              className="addBowlingStyle btn btn-danger"
              to={PAGE_URLS.ADD_BOWLING_STYLE}
            >
              Add Bowling style
            </Link>
          </div>
          <div className="col col-md-2">
            <Link className="addRole btn btn-danger" to={PAGE_URLS.ADD_ROLE}>
              Add Role
            </Link>
          </div>
          <div className="col col-md-2">
            <Link className="addTeam btn btn-danger" to={PAGE_URLS.ADD_TEAM}>
              Add Team
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
