import React, { Component } from "react";
import {
  getMostBallsBowledTestList,
  getMostBallsBowledT20List,
  getMostBallsBowledOdiList,
} from "../../functionalApiActions";

class MostBallsBowled extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostBallsBowledTest: [],
      mostBallsBowledOdi: [],
      mostBallsBowledT20: [],
    };
  }

  componentDidMount() {
    this.getMostBallsBowledTestFromList();
    this.getMostBallsBowledT20FromList();
    this.getMostBallsBowledOdiFromList();
  }

  getMostBallsBowledTestFromList = (type) => {
    getMostBallsBowledTestList(type).then((response) => {
      this.setState({
        mostBallsBowledTest: response,
      });
    });
  };

  getMostBallsBowledOdiFromList = (type) => {
    getMostBallsBowledOdiList(type).then((response) => {
      this.setState({
        mostBallsBowledOdi: response,
      });
    });
  };

  getMostBallsBowledT20FromList = (type) => {
    getMostBallsBowledT20List(type).then((response) => {
      this.setState({
        mostBallsBowledT20: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center bg-dark text-warning py-lg-3 rounded-1">
          Most Balls bowled
        </h1>
        <div className="row">
          <div className="col-4">
            <h2 className="text-center border mb-0 border-bottom-0">Tests</h2>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">Player Name</th>
                  <th scope="col">Balls bowled</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostBallsBowledTest.map((mostBallsBowledInTest) => (
                  <tr>
                    <td className="fs-5">{mostBallsBowledInTest.name}</td>
                    <td className="fs-5">
                      {mostBallsBowledInTest.balls_bowled}
                    </td>
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
                  <th scope="col">Balls bowled</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostBallsBowledOdi.map((mostBallsBowledInOdi) => (
                  <tr>
                    <td className="fs-5">{mostBallsBowledInOdi.name}</td>
                    <td className="fs-5">
                      {mostBallsBowledInOdi.balls_bowled}
                    </td>
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
                  <th scope="col">Balls bowled</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostBallsBowledT20.map((mostBallsBowledInT20) => (
                  <tr>
                    <td className="fs-5">{mostBallsBowledInT20.name}</td>
                    <td className="fs-5">
                      {mostBallsBowledInT20.balls_bowled}
                    </td>
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

export default MostBallsBowled;
