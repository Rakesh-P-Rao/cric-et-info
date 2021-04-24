import React, { Component } from "react";
import {
  getMostMatchesTestList,
  getMostMatchesT20List,
  getMostMatchesOdiList,
} from "../../functionalApiActions";

class MostMatches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostMatchesTest: [],
      mostMatchesOdi: [],
      mostMatchesT20: [],
    };
  }

  componentDidMount() {
    this.getMostMatchesTestFromList();
    this.getMostMatchesT20FromList();
    this.getMostMatchesOdiFromList();
  }

  getMostMatchesTestFromList = (type) => {
    getMostMatchesTestList(type).then((response) => {
      this.setState({
        mostMatchesTest: response,
      });
    });
  };

  getMostMatchesOdiFromList = (type) => {
    getMostMatchesOdiList(type).then((response) => {
      this.setState({
        mostMatchesOdi: response,
      });
    });
  };

  getMostMatchesT20FromList = (type) => {
    getMostMatchesT20List(type).then((response) => {
      this.setState({
        mostMatchesT20: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center bg-dark text-warning py-lg-3 rounded-1">
          Most Matches
        </h1>
        <div className="row">
          <div className="col-4">
            <h2 className="text-center border mb-0 border-bottom-0">Tests</h2>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">Player Name</th>
                  <th scope="col">Matches</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostMatchesTest.map((mostMatchesInTest) => (
                  <tr>
                    <td className="fs-5">{mostMatchesInTest.name}</td>
                    <td className="fs-5">{mostMatchesInTest.matches}</td>
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
                  <th scope="col">Matches</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostMatchesOdi.map((mostMatchesInOdi) => (
                  <tr>
                    <td className="fs-5">{mostMatchesInOdi.name}</td>
                    <td className="fs-5">{mostMatchesInOdi.matches}</td>
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
                  <th scope="col">Matches</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostMatchesT20.map((mostMatchesInT20) => (
                  <tr>
                    <td className="fs-5">{mostMatchesInT20.name}</td>
                    <td className="fs-5">{mostMatchesInT20.matches}</td>
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

export default MostMatches;
