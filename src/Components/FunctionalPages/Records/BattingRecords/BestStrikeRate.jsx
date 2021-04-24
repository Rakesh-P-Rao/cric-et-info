import React, { Component } from "react";
import {
  getBestStrikeRateTestList,
  getBestStrikeRateT20List,
  getBestStrikeRateOdiList,
} from "../../functionalApiActions";

class BestStrikeRate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bestStrikeRateTest: [],
      bestStrikeRateOdi: [],
      bestStrikeRateT20: [],
    };
  }

  componentDidMount() {
    this.getBestStrikeRateTestFromList();
    this.getBestStrikeRateT20FromList();
    this.getBestStrikeRateOdiFromList();
  }

  getBestStrikeRateTestFromList = (type) => {
    getBestStrikeRateTestList(type).then((response) => {
      this.setState({
        bestStrikeRateTest: response,
      });
    });
  };

  getBestStrikeRateOdiFromList = (type) => {
    getBestStrikeRateOdiList(type).then((response) => {
      this.setState({
        bestStrikeRateOdi: response,
      });
    });
  };

  getBestStrikeRateT20FromList = (type) => {
    getBestStrikeRateT20List(type).then((response) => {
      this.setState({
        bestStrikeRateT20: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center bg-dark text-warning py-lg-3 rounded-1">
          Most Strike rate
        </h1>
        <div className="row">
          <div className="col-4">
            <h2 className="text-center border mb-0 border-bottom-0">Tests</h2>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">Player Name</th>
                  <th scope="col">Strike rate</th>
                </tr>
              </thead>
              <tbody>
                {this.state.bestStrikeRateTest.map((bestStrikeRateInTest) => (
                  <tr>
                    <td className="fs-5">{bestStrikeRateInTest.name}</td>
                    <td className="fs-5">{bestStrikeRateInTest.strike_rate}</td>
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
                  <th scope="col">Strike rate</th>
                </tr>
              </thead>
              <tbody>
                {this.state.bestStrikeRateOdi.map((bestStrikeRateInOdi) => (
                  <tr>
                    <td className="fs-5">{bestStrikeRateInOdi.name}</td>
                    <td className="fs-5">{bestStrikeRateInOdi.strike_rate}</td>
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
                  <th scope="col">Strike rate</th>
                </tr>
              </thead>
              <tbody>
                {this.state.bestStrikeRateT20.map((bestStrikeRateInT20) => (
                  <tr>
                    <td className="fs-5">{bestStrikeRateInT20.name}</td>
                    <td className="fs-5">{bestStrikeRateInT20.strike_rate}</td>
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

export default BestStrikeRate;
