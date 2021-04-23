import React, { Component } from "react";
import {
  getMost5WTestList,
  getMost5WT20List,
  getMost5WOdiList,
} from "../../functionalApiActions";

class Most5W extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostRunsTest: [],
      mostRunsOdi: [],
      mostRunsT20: [],
    };
  }

  componentDidMount() {
    this.getMostRunsTestFromList();
    this.getMostRunsT20FromList();
    this.getMostRunsOdiFromList();
  }

  getMostRunsTestFromList = (type) => {
    getMost5WTestList(type).then((response) => {
      this.setState({
        mostRunsTest: response,
      });
    });
  };

  getMostRunsOdiFromList = (type) => {
    getMost5WOdiList(type).then((response) => {
      this.setState({
        mostRunsOdi: response,
      });
    });
  };

  getMostRunsT20FromList = (type) => {
    getMost5WT20List(type).then((response) => {
      this.setState({
        mostRunsT20: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center bg-dark text-warning py-lg-3 rounded-1">
          Most 5W
        </h1>
        <div className="row">
          <div className="col-4">
            <h2 className="text-center border mb-0 border-bottom-0">Tests</h2>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">Player Name</th>
                  <th scope="col">5W</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostRunsTest.map((mostRunsInTest) => (
                  <tr>
                    <td className="fs-5">{mostRunsInTest.name}</td>
                    <td className="fs-5">{mostRunsInTest.runs}</td>
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
                  <th scope="col">5W</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostRunsOdi.map((mostRunsInOdi) => (
                  <tr>
                    <td className="fs-5">{mostRunsInOdi.name}</td>
                    <td className="fs-5">{mostRunsInOdi.runs}</td>
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
                  <th scope="col">5W</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostRunsT20.map((mostRunsInT20) => (
                  <tr>
                    <td className="fs-5">{mostRunsInT20.name}</td>
                    <td className="fs-5">{mostRunsInT20.runs}</td>
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

export default Most5W;
