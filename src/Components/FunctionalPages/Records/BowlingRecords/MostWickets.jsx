import React, { Component } from "react";
import {
  getMostWicketsTestList,
  getMostWicketsT20List,
  getMostWicketsOdiList,
} from "../../functionalApiActions";

class MostWickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostWicketsTest: [],
      mostWicketsOdi: [],
      mostWicketsT20: [],
    };
  }

  componentDidMount() {
    this.getMostWicketsTestFromList();
    this.getMostWicketsT20FromList();
    this.getMostWicketsOdiFromList();
  }

  getMostWicketsTestFromList = (type) => {
    getMostWicketsTestList(type).then((response) => {
      this.setState({
        mostWicketsTest: response,
      });
    });
  };

  getMostWicketsOdiFromList = (type) => {
    getMostWicketsOdiList(type).then((response) => {
      this.setState({
        mostWicketsOdi: response,
      });
    });
  };

  getMostWicketsT20FromList = (type) => {
    getMostWicketsT20List(type).then((response) => {
      this.setState({
        mostWicketsT20: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center bg-dark text-warning py-lg-3 rounded-1">
          Most Wickets
        </h1>
        <div className="row">
          <div className="col-4">
            <h2 className="text-center border mb-0 border-bottom-0">Tests</h2>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">Player Name</th>
                  <th scope="col">Wickets</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostWicketsTest.map((mostWicketsInTest) => (
                  <tr>
                    <td className="fs-5">{mostWicketsInTest.name}</td>
                    <td className="fs-5">{mostWicketsInTest.wickets}</td>
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
                  <th scope="col">Wickets</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostWicketsOdi.map((mostWicketsInOdi) => (
                  <tr>
                    <td className="fs-5">{mostWicketsInOdi.name}</td>
                    <td className="fs-5">{mostWicketsInOdi.wickets}</td>
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
                  <th scope="col">Wickets</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostWicketsT20.map((mostWicketsInT20) => (
                  <tr>
                    <td className="fs-5">{mostWicketsInT20.name}</td>
                    <td className="fs-5">{mostWicketsInT20.wickets}</td>
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

export default MostWickets;
