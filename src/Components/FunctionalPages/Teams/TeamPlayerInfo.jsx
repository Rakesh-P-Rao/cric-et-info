import React, { Component } from "react";
import { getTeamPlayersById } from "../functionalApiActions";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
import TeamPlayerStats from "./TeamPlayerStats";

class TeamPlayerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamPlayerInfo: [],
      teamPlayerclicked: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getTeamPlayersInfoById();
  }

  getTeamPlayersInfoById = (id) => {
    getTeamPlayersById(this.state.teamPlayerclicked.id).then((response) => {
      this.setState({
        teamPlayerInfo: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        {this.state.teamPlayerInfo.map((teamPlayerInfo) => (
          <>
            <div className="playerInfo">
              <div className="card mb-3" style={{ maxWidth: "1200px" }}>
                <div className="firstRow">
                  <div
                    className="row g-0 mx-2 border mt-2 "
                    style={{ height: "270px" }}
                  >
                    <div className="col-md-4 rounded-2">
                      <img
                        src={teamPlayerInfo.image}
                        alt="player display pic"
                      />
                    </div>
                    <div className="col-md-8 pt-lg-5 pb-0">
                      <div className="card-body pt-lg-5 pb-0">
                        <h1 className="card-title pt-lg-5 pb-0 ">
                          {teamPlayerInfo.name}
                        </h1>
                        <p className="card-text">
                          <small className=" text-dark fw-bold fs-6">
                            {teamPlayerInfo.team}
                          </small>
                          <div>
                            <Link
                              className="btn btn-danger fs-4"
                              to={PAGE_URLS.ADD_PLAYER_STATS.replace(
                                ":id",
                                teamPlayerInfo.id
                              )}
                            >
                              Add Player stats
                            </Link>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="secondRow">
                  <div className="card mx-2 mb-2 border-0">
                    <div className="card-header text-dark fs-4 fst-normal fw-bold">
                      Player info
                    </div>
                    <div className="row my-3">
                      <div className="col-3 mb-2">
                        <p className="card-text text-dark fs-5 fw-bold ml-2">
                          Born:
                        </p>
                      </div>
                      <div className="col-9 mb-2">
                        <p className="card-text text-dark fs-5">
                          {teamPlayerInfo.born}
                        </p>
                      </div>
                      <div className="col-3 mb-2">
                        <p className="card-text text-dark fs-5 fw-bold ml-2">
                          Birth place:
                        </p>
                      </div>
                      <div className="col-9 mb-2">
                        <p className="card-text text-dark fs-5">
                          {teamPlayerInfo.birth_place}
                        </p>
                      </div>
                      <div className="col-3 mb-2 fw-bold">
                        <p className="card-text text-dark fs-5 ml-2">Role:</p>
                      </div>
                      <div className="col-9 mb-2">
                        <p className="card-text text-dark fs-5">
                          {teamPlayerInfo.role}
                        </p>
                      </div>
                      <div className="col-3 mb-2 fw-bold">
                        <p className="card-text text-dark fs-5 ml-2">
                          Batting style:
                        </p>
                      </div>
                      <div className="col-9 mb-2">
                        <p className="card-text text-dark fs-5">
                          {teamPlayerInfo.batting_style}
                        </p>
                      </div>
                      <div className="col-3 mb-2 fw-bold">
                        <p className="card-text text-dark fs-5 ml-2">
                          Bowling style:
                        </p>
                      </div>
                      <div className="col-9 mb-2">
                        <p className="card-text text-dark fs-5">
                          {teamPlayerInfo.bowling_style}
                        </p>
                      </div>
                      <div className="col-3 mb-2 fw-bold">
                        <p className="card-text text-dark fs-5 ml-2">Teams:</p>
                      </div>
                      <div className="col-9 mb-2">
                        <p className="card-text text-dark fs-5">
                          {teamPlayerInfo.team}
                        </p>
                      </div>
                      <div className="col-3 mb-2 fw-bold">
                        <p className="card-text text-dark fs-5 ml-2">Description:</p>
                      </div>
                      <div className="col-9 mb-2">
                        <p className="card-text text-dark fs-5">
                          {teamPlayerInfo.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
        <TeamPlayerStats teamPlayerclicked={this.state.teamPlayerclicked} />
      </div>
    );
  }
}

export default TeamPlayerInfo;
