import React, { Component } from "react";

class PlayerStats extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Test</th>
                <td>{this.props.matchesTest}</td>
                <td>{this.props.inningsTest}</td>
                <td>{this.props.notOutsTest}</td>
                <td>{this.props.runsTest}</td>
                <td>{this.props.highScoreTest}</td>
                <td>{this.props.averageTest}</td>
                <td>{this.props.ballsFacedTest}</td>
                <td>{this.props.strikeRateTest}</td>
                <td>{this.props.hundredsTest}</td>
                <td>{this.props.doubleHundredsTest}</td>
                <td>{this.props.fiftiesTest}</td>
                <td>{this.props.foursTest}</td>
                <td>{this.props.sixesTest}</td>
              </tr>
              <tr>
                <th scope="row">ODI</th>
                <td>{this.props.matchesODI}</td>
                <td>{this.props.inningsODI}</td>
                <td>{this.props.notOutsODI}</td>
                <td>{this.props.runsODI}</td>
                <td>{this.props.highScoreODI}</td>
                <td>{this.props.averageODI}</td>
                <td>{this.props.ballsFacedODI}</td>
                <td>{this.props.strikeRateODI}</td>
                <td>{this.props.hundredsODI}</td>
                <td>{this.props.doubleHundredODI}</td>
                <td>{this.props.fiftiesODI}</td>
                <td>{this.props.foursODI}</td>
                <td>{this.props.sixesODI}</td>
              </tr>
              <tr>
                <th scope="row">T20I</th>
                <td>{this.props.matchesT20I}</td>
                <td>{this.props.inningsT20I}</td>
                <td>{this.props.notOutsT20I}</td>
                <td>{this.props.runsT20I}</td>
                <td>{this.props.highScoreT20I}</td>
                <td>{this.props.averageT20I}</td>
                <td>{this.props.ballsFacedT20I}</td>
                <td>{this.props.strikeRateT20I}</td>
                <td>{this.props.hundredsT20I}</td>
                <td>{this.props.doubleHundredsT20I}</td>
                <td>{this.props.fiftiesT20I}</td>
                <td>{this.props.foursT20I}</td>
                <td>{this.props.sixesT20I}</td>
              </tr>
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
              <tr>
                <th scope="row">Test</th>
                <td>{this.props.matchesBTest}</td>
                <td>{this.props.inningsBTest}</td>
                <td>{this.props.ballsBowledTest}</td>
                <td>{this.props.runsBTest}</td>
                <td>{this.props.wicketsTest}</td>
                <td>{this.props.bBBITest}</td>
                <td>{this.props.bBBMTest}</td>
                <td>{this.props.economyTest}</td>
                <td>{this.props.averageBTest}</td>
                <td>{this.props.strike_rateBTest}</td>
                <td>{this.props.b4WTest}</td>
                <td>{this.props.b5WTest}</td>
                <td>{this.props.b10WTest}</td>
              </tr>
              <tr>
                <th scope="row">ODI</th>
                <td>{this.props.matchesBODI}</td>
                <td>{this.props.inningsBODI}</td>
                <td>{this.props.ballsBowledODI}</td>
                <td>{this.props.runsBODI}</td>
                <td>{this.props.wicketsODI}</td>
                <td>{this.props.bBBIODI}</td>
                <td>{this.props.bBBMODI}</td>
                <td>{this.props.economyODI}</td>
                <td>{this.props.averageBODI}</td>
                <td>{this.props.strike_rateBODI}</td>
                <td>{this.props.b4WODI}</td>
                <td>{this.props.b5WODI}</td>
                <td>{this.props.b10WODI}</td>
              </tr>
              <tr>
                <th scope="row">T20I</th>
                <td>{this.props.matchesBT20I}</td>
                <td>{this.props.inningsBT20I}</td>
                <td>{this.props.ballsBowledT20I}</td>
                <td>{this.props.runsBT20I}</td>
                <td>{this.props.wicketsT20I}</td>
                <td>{this.props.bBBIT20I}</td>
                <td>{this.props.bBBMT20I}</td>
                <td>{this.props.economyT20I}</td>
                <td>{this.props.averageBT20I}</td>
                <td>{this.props.strike_rateBT20I}</td>
                <td>{this.props.b4WT20I}</td>
                <td>{this.props.b5WT20I}</td>
                <td>{this.props.b10WT20I}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default PlayerStats;
