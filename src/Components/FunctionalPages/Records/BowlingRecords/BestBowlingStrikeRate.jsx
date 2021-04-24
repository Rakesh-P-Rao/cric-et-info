import React, { Component } from "react";
import {
  getBestBowlingStrikeRateTestList,
  getBestBowlingStrikeRateT20List,
  getBestBowlingStrikeRateOdiList,
} from "../../functionalApiActions";

class BestBowlingStrikeRate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bowlingStrikeRateTest: [],
      bowlingStrikeRateOdi: [],
      bowlingStrikeRateT20: [],
    };
  }

  componentDidMount() {
    this.getBowlingStrikeRateTestFromList();
    this.getBowlingStrikeRateT20FromList();
    this.getBowlingStrikeRateOdiFromList();
  }

  getBowlingStrikeRateTestFromList = (type) => {
    getBestBowlingStrikeRateTestList(type).then((response) => {
      this.setState({
        bowlingStrikeRateTest: response,
      });
    });
  };

  getBowlingStrikeRateOdiFromList = (type) => {
    getBestBowlingStrikeRateOdiList(type).then((response) => {
      this.setState({
        bowlingStrikeRateOdi: response,
      });
    });
  };

  getBowlingStrikeRateT20FromList = (type) => {
    getBestBowlingStrikeRateT20List(type).then((response) => {
      this.setState({
        bowlingStrikeRateT20: response,
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
                {this.state.bowlingStrikeRateTest.map(
                  (bowlingStrikeRateInTest) => (
                    <tr>
                      <td className="fs-5">{bowlingStrikeRateInTest.name}</td>
                      <td className="fs-5">
                        {bowlingStrikeRateInTest.strike_rateB}
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
                  <th scope="col">Strike rate</th>
                </tr>
              </thead>
              <tbody>
                {this.state.bowlingStrikeRateOdi.map(
                  (bowlingStrikeRateInOdi) => (
                    <tr>
                      <td className="fs-5">{bowlingStrikeRateInOdi.name}</td>
                      <td className="fs-5">
                        {bowlingStrikeRateInOdi.strike_rateB}
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
                  <th scope="col">Strike rate</th>
                </tr>
              </thead>
              <tbody>
                {this.state.bowlingStrikeRateT20.map(
                  (bowlingStrikeRateInT20) => (
                    <tr>
                      <td className="fs-5">{bowlingStrikeRateInT20.name}</td>
                      <td className="fs-5">
                        {bowlingStrikeRateInT20.strike_rateB}
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

export default BestBowlingStrikeRate;
