import React, { Component } from "react";
import {
  getMostHighScoresTestList,
  getMostHighScoresT20List,
  getMostHighScoresOdiList,
} from "../../functionalApiActions";

class HighestScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highestScoreTest: [],
      highestScoreOdi: [],
      highestScoreT20: [],
    };
  }

  componentDidMount() {
    this.getHighestScoreTestFromList();
    this.getHighestScoreT20FromList();
    this.getHighestScoreOdiFromList();
  }

  getHighestScoreTestFromList = (type) => {
    getMostHighScoresTestList(type).then((response) => {
      this.setState({
        highestScoreTest: response,
      });
    });
  };

  getHighestScoreOdiFromList = (type) => {
    getMostHighScoresOdiList(type).then((response) => {
      this.setState({
        highestScoreOdi: response,
      });
    });
  };

  getHighestScoreT20FromList = (type) => {
    getMostHighScoresT20List(type).then((response) => {
      this.setState({
        highestScoreT20: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center bg-dark text-warning py-lg-3 rounded-1">
          Most High score
        </h1>
        <div className="row">
          <div className="col-4">
            <h2 className="text-center border mb-0 border-bottom-0">Tests</h2>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">Player Name</th>
                  <th scope="col">High score</th>
                </tr>
              </thead>
              <tbody>
                {this.state.highestScoreTest.map((highestScoreInTest) => (
                  <tr>
                    <td className="fs-5">{highestScoreInTest.name}</td>
                    <td className="fs-5">{highestScoreInTest.high_score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-4">
            <h2 className="text-center border mb-0 border-bottom-0">ODI</h2>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">Player Name</th>
                  <th scope="col">High score</th>
                </tr>
              </thead>
              <tbody>
                {this.state.highestScoreOdi.map((mostRunsInOdi) => (
                  <tr>
                    <td className="fs-5">{mostRunsInOdi.name}</td>
                    <td className="fs-5">{mostRunsInOdi.high_score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-4">
            <h2 className="text-center border mb-0 border-bottom-0">T20</h2>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">Player Name</th>
                  <th scope="col">High score</th>
                </tr>
              </thead>
              <tbody>
                {this.state.highestScoreT20.map((highestScoreInT20) => (
                  <tr>
                    <td className="fs-5">{highestScoreInT20.name}</td>
                    <td className="fs-5">{highestScoreInT20.high_score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default HighestScore;
