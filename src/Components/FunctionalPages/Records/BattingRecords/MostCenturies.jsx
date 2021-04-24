import React, { Component } from "react";
import {
  getMostCenturiesTestList,
  getMostCenturiesT20List,
  getMostCenturiesOdiList,
} from "../../functionalApiActions";

class MostCenturies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostCenturiesTest: [],
      mostCenturiesOdi: [],
      mostCenturiesT20: [],
    };
  }

  componentDidMount() {
    this.getMostCenturiesTestFromList();
    this.getMostCenturiesT20FromList();
    this.getMostCenturiesOdiFromList();
  }

  getMostCenturiesTestFromList = (type) => {
    getMostCenturiesTestList(type).then((response) => {
      this.setState({
        mostCenturiesTest: response,
      });
    });
  };

  getMostCenturiesOdiFromList = (type) => {
    getMostCenturiesOdiList(type).then((response) => {
      this.setState({
        mostCenturiesOdi: response,
      });
    });
  };

  getMostCenturiesT20FromList = (type) => {
    getMostCenturiesT20List(type).then((response) => {
      this.setState({
        mostCenturiesT20: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center bg-dark text-warning py-lg-3 rounded-1">
          Most Centuries
        </h1>
        <div className="row">
          <div className="col-4">
            <h2 className="text-center border mb-0 border-bottom-0">Tests</h2>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">Player Name</th>
                  <th scope="col">Centuries</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostCenturiesTest.map((mostCenturiesInTest) => (
                  <tr>
                    <td className="fs-5">{mostCenturiesInTest.name}</td>
                    <td className="fs-5">{mostCenturiesInTest.hundreds}</td>
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
                  <th scope="col">Centuries</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostCenturiesOdi.map((mostCenturiesInOdi) => (
                  <tr>
                    <td className="fs-5">{mostCenturiesInOdi.name}</td>
                    <td className="fs-5">{mostCenturiesInOdi.hundreds}</td>
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
                  <th scope="col">Centuries</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostCenturiesT20.map((mostCenturiesInT20) => (
                  <tr>
                    <td className="fs-5">{mostCenturiesInT20.name}</td>
                    <td className="fs-5">{mostCenturiesInT20.hundreds}</td>
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

export default MostCenturies;
