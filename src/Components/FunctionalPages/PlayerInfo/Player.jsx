import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="card h-100">
          <img
            src={this.props.pList.image}
            className="card-img-top"
            alt="player dp"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.pList.name}</h5>
              <Link
                className="btn btn-light col"
                to={PAGE_URLS.VIEW_PLAYER_INFO.replace(
                  ":id",
                  this.props.pList.id
                )}
              >
                View Player
              </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
