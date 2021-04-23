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
    this.getMostRunsTestFromList();
    this.getMostRunsT20FromList();
    this.getMostRunsOdiFromList();
  }

  getMostRunsTestFromList = (type) => {
    getBestAverageTestList(type).then((response) => {
      this.setState({
        bestAverageTest: response,
      });
    });
  };

  getMostRunsOdiFromList = (type) => {
    getBestAverageOdiList(type).then((response) => {
      this.setState({
        bestAverageOdi: response,
      });
    });
  };

  getMostRunsT20FromList = (type) => {
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
                {this.state.bestAverageTest.map((mostRunsInTest) => (
                  <tr>
                    <td className="fs-5">{mostRunsInTest.name}</td>
                    <td className="fs-5">{mostRunsInTest.average}</td>
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
                {this.state.bestAverageOdi.map((mostRunsInOdi) => (
                  <tr>
                    <td className="fs-5">{mostRunsInOdi.name}</td>
                    <td className="fs-5">{mostRunsInOdi.average}</td>
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
                {this.state.bestAverageT20.map((mostRunsInT20) => (
                  <tr>
                    <td className="fs-5">{mostRunsInT20.name}</td>
                    <td className="fs-5">{mostRunsInT20.average}</td>
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
