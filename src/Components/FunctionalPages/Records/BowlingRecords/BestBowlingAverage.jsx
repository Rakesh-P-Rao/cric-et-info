import React, { Component } from "react";
import {
  getBestBowlingAverageTestList,
  getBestBowlingAverageT20List,
  getBestBowlingAverageOdiList,
} from "../../functionalApiActions";

class BestBowlingAverage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bestBowlingAverageTest: [],
      bestBowlingAverageOdi: [],
      bestBowlingAverageT20: [],
    };
  }

  componentDidMount() {
    this.getBestBowlingAverageTestFromList();
    this.getBestBowlingAverageT20FromList();
    this.getBestBowlingAverageOdiFromList();
  }

  getBestBowlingAverageTestFromList = (type) => {
    getBestBowlingAverageTestList(type).then((response) => {
      this.setState({
        bestBowlingAverageTest: response,
      });
    });
  };

  getBestBowlingAverageOdiFromList = (type) => {
    getBestBowlingAverageOdiList(type).then((response) => {
      this.setState({
        bestBowlingAverageOdi: response,
      });
    });
  };

  getBestBowlingAverageT20FromList = (type) => {
    getBestBowlingAverageT20List(type).then((response) => {
      this.setState({
        bestBowlingAverageT20: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center bg-dark text-warning py-lg-3 rounded-1">
          Most Average
        </h1>
        <div className="row">
          <div className="col-4">
            <h2 className="text-center border mb-0 border-bottom-0">Tests</h2>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">Player Name</th>
                  <th scope="col">Average</th>
                </tr>
              </thead>
              <tbody>
                {this.state.bestBowlingAverageTest.map(
                  (bestBowlingAverageInTest) => (
                    <tr>
                      <td className="fs-5">{bestBowlingAverageInTest.name}</td>
                      <td className="fs-5">
                        {bestBowlingAverageInTest.averageB}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
          <div className="col-4">
            <h2 className="text-center border mb-0 border-bottom-0">ODI</h2>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">Player Name</th>
                  <th scope="col">Average</th>
                </tr>
              </thead>
              <tbody>
                {this.state.bestBowlingAverageOdi.map(
                  (bestBowlingAverageInOdi) => (
                    <tr>
                      <td className="fs-5">{bestBowlingAverageInOdi.name}</td>
                      <td className="fs-5">
                        {bestBowlingAverageInOdi.averageB}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
          <div className="col-4">
            <h2 className="text-center border mb-0 border-bottom-0">T20</h2>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">Player Name</th>
                  <th scope="col">Average</th>
                </tr>
              </thead>
              <tbody>
                {this.state.bestBowlingAverageT20.map(
                  (bestBowlingAverageInT20) => (
                    <tr>
                      <td className="fs-5">{bestBowlingAverageInT20.name}</td>
                      <td className="fs-5">
                        {bestBowlingAverageInT20.averageB}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default BestBowlingAverage;
