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
      mostInningsBattedTest: [],
      mostInningsBattedOdi: [],
      mostInningsBattedT20: [],
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
        mostInningsBattedTest: response,
      });
    });
  };

  getMostRunsOdiFromList = (type) => {
    getMostInningsBattedOdiList(type).then((response) => {
      this.setState({
        mostInningsBattedOdi: response,
      });
    });
  };

  getMostRunsT20FromList = (type) => {
    getMostInningsBattedT20List(type).then((response) => {
      this.setState({
        mostInningsBattedT20: response,
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
                {this.state.mostInningsBattedTest.map((mostInningsBattedInTest) => (
                  <tr>
                    <td className="fs-5">{mostInningsBattedInTest.name}</td>
                    <td className="fs-5">{mostInningsBattedInTest.innings}</td>
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
                {this.state.mostInningsBattedOdi.map((mostInningsBattedInOdi) => (
                  <tr>
                    <td className="fs-5">{mostInningsBattedInOdi.name}</td>
                    <td className="fs-5">{mostInningsBattedInOdi.innings}</td>
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
                {this.state.mostInningsBattedT20.map((mostInningsBattedInT20) => (
                  <tr>
                    <td className="fs-5">{mostInningsBattedInT20.name}</td>
                    <td className="fs-5">{mostInningsBattedInT20.innings}</td>
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
