import React, { Component } from "react";
import {
  getTeamPlayersStatsTestById,
  getTeamPlayersStatsOdiById,
  getTeamPlayersStatsT20ById,
} from "../functionalApiActions";

class TeamPlayerStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamPlayerStatsTests: [],
      teamPlayerStatsODI: [],
      teamPlayerStatsT20: [],
    };
  }

  componentDidMount() {
    this.getTeamPlayersTestStatsTestById();
    this.getTeamPlayersOdiStatsTestById();
    this.getTeamPlayersT20StatsById();
  }

  getTeamPlayersTestStatsTestById = (id) => {
    getTeamPlayersStatsTestById(this.props.teamPlayerclicked.id).then(
      (response) => {
        this.setState({
          teamPlayerStatsTests: response,
        });
      }
    );
  };

  getTeamPlayersOdiStatsTestById = (id) => {
    getTeamPlayersStatsOdiById(this.props.teamPlayerclicked.id).then(
      (response) => {
        this.setState({
          teamPlayerStatsODI: response,
        });
      }
    );
  };

  getTeamPlayersT20StatsById = (id) => {
    getTeamPlayersStatsT20ById(this.props.teamPlayerclicked.id).then(
      (response) => {
        this.setState({
          teamPlayerStatsT20: response,
        });
      }
    );
  };

  render() {
    return (
      <div className="container">
        <>
          <h1>Player Stats</h1>
          <div>
            <ul className="list-group list-group-horizontal-xxl">
              <li className="list-group-item fw-bold fs-4">Batting stats</li>
            </ul>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Matches</th>
                  <th scope="col">Innings</th>
                  <th scope="col">Not Outs</th>
                  <th scope="col">Runs</th>
                  <th scope="col">High Score</th>
                  <th scope="col">Average</th>
                  <th scope="col">Balls Faced</th>
                  <th scope="col">Strike Rate</th>
                  <th scope="col">100's</th>
                  <th scope="col">200's</th>
                  <th scope="col">50's</th>
                  <th scope="col">4's</th>
                  <th scope="col">6's</th>
                  <th scope="col">Ducks</th>
                </tr>
              </thead>
              <tbody>
                {this.state.teamPlayerStatsTests.map((teamPlayerStatsTests) => (
                  <tr>
                    <th scope="row">Test</th>
                    <td>{teamPlayerStatsTests.matches}</td>
                    <td>{teamPlayerStatsTests.innings}</td>
                    <td>{teamPlayerStatsTests.no_of_notOuts}</td>
                    <td>{teamPlayerStatsTests.runs}</td>
                    <td>{teamPlayerStatsTests.high_score}</td>
                    <td>{teamPlayerStatsTests.average}</td>
                    <td>{teamPlayerStatsTests.balls_faced}</td>
                    <td>{teamPlayerStatsTests.strike_rate}</td>
                    <td>{teamPlayerStatsTests.hundreds}</td>
                    <td>{teamPlayerStatsTests.double_hundreds}</td>
                    <td>{teamPlayerStatsTests.fifties}</td>
                    <td>{teamPlayerStatsTests.fours}</td>
                    <td>{teamPlayerStatsTests.sixes}</td>
                    <td>{teamPlayerStatsTests.ducks}</td>
                  </tr>
                ))}
                {this.state.teamPlayerStatsODI.map((teamPlayerStatsODI) => (
                  <tr>
                    <th scope="row">ODI</th>
                    <td>{teamPlayerStatsODI.matches}</td>
                    <td>{teamPlayerStatsODI.innings}</td>
                    <td>{teamPlayerStatsODI.no_of_notOuts}</td>
                    <td>{teamPlayerStatsODI.runs}</td>
                    <td>{teamPlayerStatsODI.high_score}</td>
                    <td>{teamPlayerStatsODI.average}</td>
                    <td>{teamPlayerStatsODI.balls_faced}</td>
                    <td>{teamPlayerStatsODI.strike_rate}</td>
                    <td>{teamPlayerStatsODI.hundreds}</td>
                    <td>{teamPlayerStatsODI.double_hundreds}</td>
                    <td>{teamPlayerStatsODI.fifties}</td>
                    <td>{teamPlayerStatsODI.fours}</td>
                    <td>{teamPlayerStatsODI.sixes}</td>
                    <td>{teamPlayerStatsODI.ducks}</td>
                  </tr>
                ))}
                {this.state.teamPlayerStatsT20.map((teamPlayerStatsT20) => (
                  <tr>
                    <th scope="row">T20</th>
                    <td>{teamPlayerStatsT20.matches}</td>
                    <td>{teamPlayerStatsT20.innings}</td>
                    <td>{teamPlayerStatsT20.no_of_notOuts}</td>
                    <td>{teamPlayerStatsT20.runs}</td>
                    <td>{teamPlayerStatsT20.high_score}</td>
                    <td>{teamPlayerStatsT20.average}</td>
                    <td>{teamPlayerStatsT20.balls_faced}</td>
                    <td>{teamPlayerStatsT20.strike_rate}</td>
                    <td>{teamPlayerStatsT20.hundreds}</td>
                    <td>{teamPlayerStatsT20.double_hundreds}</td>
                    <td>{teamPlayerStatsT20.fifties}</td>
                    <td>{teamPlayerStatsT20.fours}</td>
                    <td>{teamPlayerStatsT20.sixes}</td>
                    <td>{teamPlayerStatsT20.ducks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <ul className="list-group list-group-horizontal-xxl">
              <li className="list-group-item fw-bold fs-4">Bowling stats</li>
            </ul>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Matches</th>
                  <th scope="col">Innings</th>
                  <th scope="col">Balls bowled</th>
                  <th scope="col">Runs</th>
                  <th scope="col">Maidens</th>
                  <th scope="col">Wickets</th>
                  <th scope="col">BBI</th>
                  <th scope="col">BBM</th>
                  <th scope="col">Economy</th>
                  <th scope="col">Average</th>
                  <th scope="col">Strike Rate</th>
                  <th scope="col">4W</th>
                  <th scope="col">5W</th>
                  <th scope="col">10W</th>
                </tr>
              </thead>
              <tbody>
                {this.state.teamPlayerStatsTests.map((teamPlayerStatsTests) => (
                  <tr>
                    <th scope="row">Test</th>
                    <td>{teamPlayerStatsTests.matchesB}</td>
                    <td>{teamPlayerStatsTests.inningsB}</td>
                    <td>{teamPlayerStatsTests.balls_bowled}</td>
                    <td>{teamPlayerStatsTests.runsB}</td>
                    <td>{teamPlayerStatsTests.maidens}</td>
                    <td>{teamPlayerStatsTests.wickets}</td>
                    <td>{teamPlayerStatsTests.bBBI}</td>
                    <td>{teamPlayerStatsTests.bBBM}</td>
                    <td>{teamPlayerStatsTests.economy}</td>
                    <td>{teamPlayerStatsTests.averageB}</td>
                    <td>{teamPlayerStatsTests.strike_rateB}</td>
                    <td>{teamPlayerStatsTests.four_fers}</td>
                    <td>{teamPlayerStatsTests.fifers}</td>
                    <td>{teamPlayerStatsTests.ten_wickets}</td>
                  </tr>
                ))}
                {this.state.teamPlayerStatsODI.map((teamPlayerStatsODI) => (
                  <tr>
                    <th scope="row">ODI</th>
                    <td>{teamPlayerStatsODI.matchesB}</td>
                    <td>{teamPlayerStatsODI.inningsB}</td>
                    <td>{teamPlayerStatsODI.balls_bowled}</td>
                    <td>{teamPlayerStatsODI.runsB}</td>
                    <td>{teamPlayerStatsODI.maidens}</td>
                    <td>{teamPlayerStatsODI.wickets}</td>
                    <td>{teamPlayerStatsODI.bBBI}</td>
                    <td>{teamPlayerStatsODI.bBBM}</td>
                    <td>{teamPlayerStatsODI.economy}</td>
                    <td>{teamPlayerStatsODI.averageB}</td>
                    <td>{teamPlayerStatsODI.strike_rateB}</td>
                    <td>{teamPlayerStatsODI.four_fers}</td>
                    <td>{teamPlayerStatsODI.fifers}</td>
                    <td>{teamPlayerStatsODI.ten_wickets}</td>
                  </tr>
                ))}
                {this.state.teamPlayerStatsT20.map((teamPlayerStatsT20) => (
                  <tr>
                    <th scope="row">T20</th>
                    <td>{teamPlayerStatsT20.matchesB}</td>
                    <td>{teamPlayerStatsT20.inningsB}</td>
                    <td>{teamPlayerStatsT20.balls_bowled}</td>
                    <td>{teamPlayerStatsT20.runsB}</td>
                    <td>{teamPlayerStatsT20.maidens}</td>
                    <td>{teamPlayerStatsT20.wickets}</td>
                    <td>{teamPlayerStatsT20.bBBI}</td>
                    <td>{teamPlayerStatsT20.bBBM}</td>
                    <td>{teamPlayerStatsT20.economy}</td>
                    <td>{teamPlayerStatsT20.averageB}</td>
                    <td>{teamPlayerStatsT20.strike_rateB}</td>
                    <td>{teamPlayerStatsT20.four_fers}</td>
                    <td>{teamPlayerStatsT20.fifers}</td>
                    <td>{teamPlayerStatsT20.ten_wickets}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      </div>
    );
  }
}

export default TeamPlayerStats;
