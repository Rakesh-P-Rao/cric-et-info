import React, { Component } from "react";
import {
  getBestBBITestList,
  getBestBBIT20List,
  getBestBBIOdiList,
} from "../../functionalApiActions";

class BestBBI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bestBBITest: [],
      bestBBIOdi: [],
      bestBBIT20: [],
    };
  }

  componentDidMount() {
    this.getBestBBITestFromList();
    this.getBestBBIOdiFromList();
    this.getBestBBIT20FromList();
  }

  getBestBBITestFromList = (type) => {
    getBestBBITestList(type).then((response) => {
      this.setState({
        bestBBITest: response,
      });
    });
  };

  getBestBBIT20FromList = (type) => {
    getBestBBIOdiList(type).then((response) => {
      this.setState({
        bestBBIOdi: response,
      });
    });
  };

  getBestBBIOdiFromList = (type) => {
    getBestBBIT20List(type).then((response) => {
      this.setState({
        bestBBIT20: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center bg-dark text-warning py-lg-3 rounded-1">
          Most BBI
        </h1>
        <div className="row">
          <div className="col-4">
            <h2 className="text-center border mb-0 border-bottom-0">Tests</h2>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">Player Name</th>
                  <th scope="col">BBI</th>
                </tr>
              </thead>
              <tbody>
                {this.state.bestBBITest.map((bestBBIInTest) => (
                  <tr>
                    <td className="fs-5">{bestBBIInTest.name}</td>
                    <td className="fs-5">{bestBBIInTest.bBBI}</td>
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
                  <th scope="col">BBI</th>
                </tr>
              </thead>
              <tbody>
                {this.state.bestBBIOdi.map((bestBBIInOdi) => (
                  <tr>
                    <td className="fs-5">{bestBBIInOdi.name}</td>
                    <td className="fs-5">{bestBBIInOdi.bBBI}</td>
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
                  <th scope="col">BBI</th>
                </tr>
              </thead>
              <tbody>
                {this.state.bestBBIT20.map((bestBBIInT20) => (
                  <tr>
                    <td className="fs-5">{bestBBIInT20.name}</td>
                    <td className="fs-5">{bestBBIInT20.bBBI}</td>
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

export default BestBBI;
