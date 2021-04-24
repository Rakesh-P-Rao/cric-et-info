import React, { Component } from "react";
import {
  getMostBallsFacedTestList,
  getMostBallsFacedT20List,
  getMostBallsFacedOdiList,
} from "../../functionalApiActions";

class MostBallsFaced extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostBallsFacedTest: [],
      mostBallsFacedOdi: [],
      mostBallsFacedT20: [],
    };
  }

  componentDidMount() {
    this.getBallsfacedTestFromList();
    this.getBallsfacedT20FromList();
    this.getBallsfacedOdiFromList();
  }

  getBallsfacedTestFromList = (type) => {
    getMostBallsFacedTestList(type).then((response) => {
      this.setState({
        mostBallsFacedTest: response,
      });
    });
  };

  getBallsfacedOdiFromList = (type) => {
    getMostBallsFacedOdiList(type).then((response) => {
      this.setState({
        mostBallsFacedOdi: response,
      });
    });
  };

  getBallsfacedT20FromList = (type) => {
    getMostBallsFacedT20List(type).then((response) => {
      this.setState({
        mostBallsFacedT20: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center bg-dark text-warning py-lg-3 rounded-1">
          Most Balls faced
        </h1>
        <div className="row">
          <div className="col-4">
            <h2 className="text-center border mb-0 border-bottom-0">Tests</h2>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">Player Name</th>
                  <th scope="col">Balls faced</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostBallsFacedTest.map((mostBallsFacedInTest) => (
                  <tr>
                    <td className="fs-5">{mostBallsFacedInTest.name}</td>
                    <td className="fs-5">{mostBallsFacedInTest.balls_faced}</td>
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
                  <th scope="col">Balls faced</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostBallsFacedOdi.map((mostBallsFacedInOdi) => (
                  <tr>
                    <td className="fs-5">{mostBallsFacedInOdi.name}</td>
                    <td className="fs-5">{mostBallsFacedInOdi.balls_faced}</td>
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
                  <th scope="col">Balls faced</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostBallsFacedT20.map((mostBallsFacedInT20) => (
                  <tr>
                    <td className="fs-5">{mostBallsFacedInT20.name}</td>
                    <td className="fs-5">{mostBallsFacedInT20.balls_faced}</td>
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

export default MostBallsFaced;
