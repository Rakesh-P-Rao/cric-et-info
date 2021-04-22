import React, { Component } from "react";
import { getTeamPlayersById } from "../functionalApiActions";
import PlayerStats from "./PlayerStats";

class PlayerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerInfo: [],
      playerClicked: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getPlayersInfoById();
  }

  getPlayersInfoById = (id) => {
    getTeamPlayersById(this.state.playerClicked.id).then((response) => {
      this.setState({
        playerInfo: response,
      });
    });
  };
  render() {
    return (
      <div className="container">
        {this.state.playerInfo.map((playerInfo) => (
          <>
            <div className="playerInfo">
              <div className="card mb-3" style={{ maxWidth: "1200px" }}>
                <div className="firstRow">
                  <div
                    className="row g-0 mx-2 border mt-2 "
                    style={{ height: "270px" }}
                  >
                    <div className="col-md-4 rounded-2">
                      <img src={playerInfo.image} alt="player display pic" />
                    </div>
                    <div className="col-md-8 pt-lg-5 pb-0">
                      <div className="card-body pt-lg-5 pb-0">
                        <h1 className="card-title pt-lg-5 pb-0 ">
                          {playerInfo.name}
                        </h1>
                        <p className="card-text">
                          <small className=" text-dark fw-bold fs-6">
                            {playerInfo.team}
                          </small>
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
                          {playerInfo.born}
                        </p>
                      </div>
                      <div className="col-3 mb-2">
                        <p className="card-text text-dark fs-5 fw-bold ml-2">
                          Birth place:
                        </p>
                      </div>
                      <div className="col-9 mb-2">
                        <p className="card-text text-dark fs-5">
                          {playerInfo.birth_place}
                        </p>
                      </div>
                      <div className="col-3 mb-2 ">
                        <p className="card-text text-dark fs-5 fw-bold ml-2">
                          Role:
                        </p>
                      </div>
                      <div className="col-9 mb-2">
                        <p className="card-text text-dark fs-5">
                          {playerInfo.role}
                        </p>
                      </div>
                      <div className="col-3 mb-2 ">
                        <p className="card-text text-dark fs-5 fw-bold ml-2">
                          Batting style:
                        </p>
                      </div>
                      <div className="col-9 mb-2">
                        <p className="card-text text-dark fs-5">
                          {playerInfo.batting_style}
                        </p>
                      </div>
                      <div className="col-3 mb-2 ">
                        <p className="card-text text-dark fs-5 fw-bold ml-2">
                          Bowling style:
                        </p>
                      </div>
                      <div className="col-9 mb-2">
                        <p className="card-text text-dark fs-5">
                          {playerInfo.bowling_style}
                        </p>
                      </div>
                      <div className="col-3 mb-2 ">
                        <p className="card-text text-dark fs-5 fw-bold ml-2">
                          Teams:
                        </p>
                      </div>
                      <div className="col-9 mb-2">
                        <p className="card-text text-dark fs-5">
                          {playerInfo.team}
                        </p>
                      </div>
                      <div className="col-3 mb-2 ">
                        <p className="card-text text-dark fs-5 fw-bold ml-2">
                          Description:
                        </p>
                      </div>
                      <div className="col-9 mb-2">
                        <p className="card-text text-dark fs-5">
                          {playerInfo.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}

        <PlayerStats playerClicked={this.state.playerClicked} />
      </div>
    );
  }
}

export default PlayerInfo;
