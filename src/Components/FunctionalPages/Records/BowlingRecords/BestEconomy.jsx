import React, { Component } from "react";
import {
  getBestEconomyTestList,
  getBestEconomyT20List,
  getBestEconomyOdiList,
} from "../../functionalApiActions";

class BestEconomy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostEconomyTest: [],
      mostEconomyOdi: [],
      mostEconomyT20: [],
    };
  }

  componentDidMount() {
    this.getMostEconomyTestFromList();
    this.getMostEconomyT20FromList();
    this.getMostEconomyOdiFromList();
  }

  getMostEconomyTestFromList = (type) => {
    getBestEconomyTestList(type).then((response) => {
      this.setState({
        mostEconomyTest: response,
      });
    });
  };

  getMostEconomyOdiFromList = (type) => {
    getBestEconomyOdiList(type).then((response) => {
      this.setState({
        mostEconomyOdi: response,
      });
    });
  };

  getMostEconomyT20FromList = (type) => {
    getBestEconomyT20List(type).then((response) => {
      this.setState({
        mostEconomyT20: response,
      });
    });
  };

  render() {
    console.log(this.state.mostEconomyT20)
    console.log(this.state.mostEconomyOdi);
    return (
      <div className="container">
        <h1 className="text-center bg-dark text-warning py-lg-3 rounded-1">
          Most Economy
        </h1>
        <div className="row">
          <div className="col-4">
            <h2 className="text-center border mb-0 border-bottom-0">Tests</h2>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">Player Name</th>
                  <th scope="col">Economy</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostEconomyTest.map((mostEconomyInTest) => (
                  <tr>
                    <td className="fs-5">{mostEconomyInTest.name}</td>
                    <td className="fs-5">{mostEconomyInTest.economy}</td>
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
                  <th scope="col">Economy</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostEconomyOdi.map((mostEconomyInOdi) => (
                  <tr>
                    <td className="fs-5">{mostEconomyInOdi.name}</td>
                    <td className="fs-5">{mostEconomyInOdi.economy}</td>
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
                  <th scope="col">Economy</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostEconomyT20.map((mostEconomyInT20) => (
                  <tr>
                    <td className="fs-5">{mostEconomyInT20.name}</td>
                    <td className="fs-5">{mostEconomyInT20.economy}</td>
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

export default BestEconomy;
