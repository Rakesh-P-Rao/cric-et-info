import React, { Component } from "react";
import {
  getBestAverageTestList,
  getBestAverageT20List,
  getBestAverageOdiList,
} from "../../functionalApiActions";

class BestAverage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bestAverageTest: [],
      bestAverageOdi: [],
      bestAverageT20: [],
    };
  }

  componentDidMount() {
    this.getBestAverageTestFromList();
    this.getBestAverageT20FromList();
    this.getBestAverageOdiFromList();
  }

  getBestAverageTestFromList = (type) => {
    getBestAverageTestList(type).then((response) => {
      this.setState({
        bestAverageTest: response,
      });
    });
  };

  getBestAverageOdiFromList = (type) => {
    getBestAverageOdiList(type).then((response) => {
      this.setState({
        bestAverageOdi: response,
      });
    });
  };

  getBestAverageT20FromList = (type) => {
    getBestAverageT20List(type).then((response) => {
      this.setState({
        bestAverageT20: response,
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
                {this.state.bestAverageTest.map((bestAverageInTest) => (
                  <tr>
                    <td className="fs-5">{bestAverageInTest.name}</td>
                    <td className="fs-5">{bestAverageInTest.average}</td>
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
                  <th scope="col">Average</th>
                </tr>
              </thead>
              <tbody>
                {this.state.bestAverageOdi.map((bestAverageInOdi) => (
                  <tr>
                    <td className="fs-5">{bestAverageInOdi.name}</td>
                    <td className="fs-5">{bestAverageInOdi.average}</td>
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
                  <th scope="col">Average</th>
                </tr>
              </thead>
              <tbody>
                {this.state.bestAverageT20.map((bestAverageInT20) => (
                  <tr>
                    <td className="fs-5">{bestAverageInT20.name}</td>
                    <td className="fs-5">{bestAverageInT20.average}</td>
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

export default BestAverage;
