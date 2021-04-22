import React, { Component } from "react";
import {
  getTeamPlayersStatsTestById,
  getTeamPlayersStatsOdiById,
  getTeamPlayersStatsT20ById,
} from "../functionalApiActions";

class PlayerStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerStatsTests: [],
      playerStatsOdi: [],
      playerStatsT20: [],
    };
  }

  componentDidMount() {
    this.getPlayersTestStatsTestById();
    this.getPlayersOdiStatsTestById();
    this.getPlayersT20StatsById();
  }

  getPlayersTestStatsTestById = (id) => {
    getTeamPlayersStatsTestById(this.props.playerClicked.id).then(
      (response) => {
        this.setState({
          playerStatsTests: response,
        });
      }
    );
  };

  getPlayersOdiStatsTestById = (id) => {
    getTeamPlayersStatsOdiById(this.props.playerClicked.id).then((response) => {
      this.setState({
        playerStatsOdi: response,
      });
    });
  };

  getPlayersT20StatsById = (id) => {
    getTeamPlayersStatsT20ById(this.props.playerClicked.id).then((response) => {
      this.setState({
        playerStatsT20: response,
      });
    });
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
                {this.state.playerStatsTests.map((playerStatsTests) => (
                  <tr>
                    <th scope="row">Test</th>
                    <td>{playerStatsTests.matches}</td>
                    <td>{playerStatsTests.innings}</td>
                    <td>{playerStatsTests.no_of_notOuts}</td>
                    <td>{playerStatsTests.runs}</td>
                    <td>{playerStatsTests.high_score}</td>
                    <td>{playerStatsTests.average}</td>
                    <td>{playerStatsTests.balls_faced}</td>
                    <td>{playerStatsTests.strike_rate}</td>
                    <td>{playerStatsTests.hundreds}</td>
                    <td>{playerStatsTests.double_hundreds}</td>
                    <td>{playerStatsTests.fifties}</td>
                    <td>{playerStatsTests.fours}</td>
                    <td>{playerStatsTests.sixes}</td>
                    <td>{playerStatsTests.ducks}</td>
                  </tr>
                ))}
                {this.state.playerStatsOdi.map((playerStatsOdi) => (
                  <tr>
                    <th scope="row">ODI</th>
                    <td>{playerStatsOdi.matches}</td>
                    <td>{playerStatsOdi.innings}</td>
                    <td>{playerStatsOdi.no_of_notOuts}</td>
                    <td>{playerStatsOdi.runs}</td>
                    <td>{playerStatsOdi.high_score}</td>
                    <td>{playerStatsOdi.average}</td>
                    <td>{playerStatsOdi.balls_faced}</td>
                    <td>{playerStatsOdi.strike_rate}</td>
                    <td>{playerStatsOdi.hundreds}</td>
                    <td>{playerStatsOdi.double_hundreds}</td>
                    <td>{playerStatsOdi.fifties}</td>
                    <td>{playerStatsOdi.fours}</td>
                    <td>{playerStatsOdi.sixes}</td>
                    <td>{playerStatsOdi.ducks}</td>
                  </tr>
                ))}
                {this.state.playerStatsT20.map((playerStatsT20) => (
                  <tr>
                    <th scope="row">T20</th>
                    <td>{playerStatsT20.matches}</td>
                    <td>{playerStatsT20.innings}</td>
                    <td>{playerStatsT20.no_of_notOuts}</td>
                    <td>{playerStatsT20.runs}</td>
                    <td>{playerStatsT20.high_score}</td>
                    <td>{playerStatsT20.average}</td>
                    <td>{playerStatsT20.balls_faced}</td>
                    <td>{playerStatsT20.strike_rate}</td>
                    <td>{playerStatsT20.hundreds}</td>
                    <td>{playerStatsT20.double_hundreds}</td>
                    <td>{playerStatsT20.fifties}</td>
                    <td>{playerStatsT20.fours}</td>
                    <td>{playerStatsT20.sixes}</td>
                    <td>{playerStatsT20.ducks}</td>
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
                {this.state.playerStatsTests.map((playerStatsTests) => (
                  <tr>
                    <th scope="row">Test</th>
                    <td>{playerStatsTests.matchesB}</td>
                    <td>{playerStatsTests.inningsB}</td>
                    <td>{playerStatsTests.balls_bowled}</td>
                    <td>{playerStatsTests.runsB}</td>
                    <td>{playerStatsTests.maidens}</td>
                    <td>{playerStatsTests.wickets}</td>
                    <td>{playerStatsTests.bBBI}</td>
                    <td>{playerStatsTests.bBBM}</td>
                    <td>{playerStatsTests.economy}</td>
                    <td>{playerStatsTests.averageB}</td>
                    <td>{playerStatsTests.strike_rateB}</td>
                    <td>{playerStatsTests.four_fers}</td>
                    <td>{playerStatsTests.fifers}</td>
                    <td>{playerStatsTests.ten_wickets}</td>
                  </tr>
                ))}
                {this.state.playerStatsOdi.map((playerStatsOdi) => (
                  <tr>
                    <th scope="row">ODI</th>
                    <td>{playerStatsOdi.matchesB}</td>
                    <td>{playerStatsOdi.inningsB}</td>
                    <td>{playerStatsOdi.balls_bowled}</td>
                    <td>{playerStatsOdi.runsB}</td>
                    <td>{playerStatsOdi.maidens}</td>
                    <td>{playerStatsOdi.wickets}</td>
                    <td>{playerStatsOdi.bBBI}</td>
                    <td>{playerStatsOdi.bBBM}</td>
                    <td>{playerStatsOdi.economy}</td>
                    <td>{playerStatsOdi.averageB}</td>
                    <td>{playerStatsOdi.strike_rateB}</td>
                    <td>{playerStatsOdi.four_fers}</td>
                    <td>{playerStatsOdi.fifers}</td>
                    <td>{playerStatsOdi.ten_wickets}</td>
                  </tr>
                ))}
                {this.state.playerStatsT20.map((playerStatsT20) => (
                  <tr>
                    <th scope="row">T20</th>
                    <td>{playerStatsT20.matchesB}</td>
                    <td>{playerStatsT20.inningsB}</td>
                    <td>{playerStatsT20.balls_bowled}</td>
                    <td>{playerStatsT20.runsB}</td>
                    <td>{playerStatsT20.maidens}</td>
                    <td>{playerStatsT20.wickets}</td>
                    <td>{playerStatsT20.bBBI}</td>
                    <td>{playerStatsT20.bBBM}</td>
                    <td>{playerStatsT20.economy}</td>
                    <td>{playerStatsT20.averageB}</td>
                    <td>{playerStatsT20.strike_rateB}</td>
                    <td>{playerStatsT20.four_fers}</td>
                    <td>{playerStatsT20.fifers}</td>
                    <td>{playerStatsT20.ten_wickets}</td>
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

export default PlayerStats;
