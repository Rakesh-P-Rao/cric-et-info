import React, { Component } from "react";
import {
  getMostFiftiesTestList,
  getMostFiftiesT20List,
  getMostFiftiesOdiList,
} from "../../functionalApiActions";

class MostFifties extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostFiftiesTest: [],
      mostFiftiesOdi: [],
      mostFiftiesT20: [],
    };
  }

  componentDidMount() {
    this.getMostFiftiesTestFromList();
    this.getMostFiftiesT20FromList();
    this.getMostFiftiesOdiFromList();
  }

  getMostFiftiesTestFromList = (type) => {
    getMostFiftiesTestList(type).then((response) => {
      this.setState({
        mostFiftiesTest: response,
      });
    });
  };

  getMostFiftiesOdiFromList = (type) => {
    getMostFiftiesOdiList(type).then((response) => {
      this.setState({
        mostFiftiesOdi: response,
      });
    });
  };

  getMostFiftiesT20FromList = (type) => {
    getMostFiftiesT20List(type).then((response) => {
      this.setState({
        mostFiftiesT20: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center bg-dark text-warning py-lg-3 rounded-1">
          Most Fifties
        </h1>
        <div className="row">
          <div className="col-4">
            <h2 className="text-center border mb-0 border-bottom-0">Tests</h2>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">Player Name</th>
                  <th scope="col">Fifties</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostFiftiesTest.map((mostFiftiesInTest) => (
                  <tr>
                    <td className="fs-5">{mostFiftiesInTest.name}</td>
                    <td className="fs-5">{mostFiftiesInTest.fifties}</td>
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
                  <th scope="col">Fifties</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostFiftiesOdi.map((mostFiftiesInOdi) => (
                  <tr>
                    <td className="fs-5">{mostFiftiesInOdi.name}</td>
                    <td className="fs-5">{mostFiftiesInOdi.fifties}</td>
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
                  <th scope="col">Fifties</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostFiftiesT20.map((mostFiftiesInT20) => (
                  <tr>
                    <td className="fs-5">{mostFiftiesInT20.name}</td>
                    <td className="fs-5">{mostFiftiesInT20.fifties}</td>
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

export default MostFifties;
