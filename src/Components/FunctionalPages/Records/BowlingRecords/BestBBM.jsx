import React, { Component } from "react";
import {
  getBestBBMTestList,
  getBestBBMT20List,
  getBestBBMOdiList,
} from "../../functionalApiActions";

class BestBBM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bestBBMInTest: [],
      bestBBMInOdi: [],
      bestBBMInT20: [],
    };
  }

  componentDidMount() {
    this.getBestBBMTestFromList();
    this.getBestBBMT20FromList();
    this.getBestBBMOdiFromList();
  }

  getBestBBMTestFromList = (type) => {
    getBestBBMTestList(type).then((response) => {
      this.setState({
        bestBBMInTest: response,
      });
    });
  };

  getBestBBMOdiFromList = (type) => {
    getBestBBMOdiList(type).then((response) => {
      this.setState({
        bestBBMInOdi: response,
      });
    });
  };

  getBestBBMT20FromList = (type) => {
    getBestBBMT20List(type).then((response) => {
      this.setState({
        bestBBMInT20: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center bg-dark text-warning py-lg-3 rounded-1">
          Most BBM
        </h1>
        <div className="row">
          <div className="col-4">
            <h2 className="text-center border mb-0 border-bottom-0">Tests</h2>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">Player Name</th>
                  <th scope="col">BBM</th>
                </tr>
              </thead>
              <tbody>
                {this.state.bestBBMInTest.map((bestBBMInTest) => (
                  <tr>
                    <td className="fs-5">{bestBBMInTest.name}</td>
                    <td className="fs-5">{bestBBMInTest.bBBM}</td>
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
                  <th scope="col">BBM</th>
                </tr>
              </thead>
              <tbody>
                {this.state.bestBBMInOdi.map((bestBBMInOdi) => (
                  <tr>
                    <td className="fs-5">{bestBBMInOdi.name}</td>
                    <td className="fs-5">{bestBBMInOdi.bBBM}</td>
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
                  <th scope="col">BBM</th>
                </tr>
              </thead>
              <tbody>
                {this.state.bestBBMInT20.map((bestBBMInT20) => (
                  <tr>
                    <td className="fs-5">{bestBBMInT20.name}</td>
                    <td className="fs-5">{bestBBMInT20.bBBM}</td>
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

export default BestBBM;
