import React, { Component } from "react";
import {
  getMostInningsBattedTestList,
  getMostInningsBattedT20List,
  getMostInningsBattedOdiList,
} from "../../functionalApiActions";

class MostInningsBatted extends Component {
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
    getMostInningsBattedTestList(type).then((response) => {
      this.setState({
        mostRunsTest: response,
      });
    });
  };

  getMostRunsOdiFromList = (type) => {
    getMostInningsBattedOdiList(type).then((response) => {
      this.setState({
        mostRunsOdi: response,
      });
    });
  };

  getMostRunsT20FromList = (type) => {
    getMostInningsBattedT20List(type).then((response) => {
      this.setState({
        mostRunsT20: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center bg-dark text-warning py-lg-3 rounded-1">
          Most Innings batted
        </h1>
        <div className="row">
          <div className="col-4">
            <h2 className="text-center border mb-0 border-bottom-0">Tests</h2>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">Player Name</th>
                  <th scope="col">Innings batted</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostRunsTest.map((mostRunsInTest) => (
                  <tr>
                    <td className="fs-5">{mostRunsInTest.name}</td>
                    <td className="fs-5">{mostRunsInTest.innings}</td>
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
                  <th scope="col">Innings batted</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostRunsOdi.map((mostRunsInOdi) => (
                  <tr>
                    <td className="fs-5">{mostRunsInOdi.name}</td>
                    <td className="fs-5">{mostRunsInOdi.innings}</td>
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
                  <th scope="col">Innings batted</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostRunsT20.map((mostRunsInT20) => (
                  <tr>
                    <td className="fs-5">{mostRunsInT20.name}</td>
                    <td className="fs-5">{mostRunsInT20.innings}</td>
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

export default MostInningsBatted;
