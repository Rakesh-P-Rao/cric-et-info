import React, { Component } from "react";
import {
  getMostRunsConcededTestList,
  getMostRunsConcededT20List,
  getMostRunsConcededOdiList,
} from "../../functionalApiActions";

class MostRunsConceded extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostRunsConcededTest: [],
      mostRunsConcededOdi: [],
      mostRunsConcededT20: [],
    };
  }

  componentDidMount() {
    this.getMostRunsConcededTestFromList();
    this.getMostRunsConcededT20FromList();
    this.getMostRunsConcededOdiFromList();
  }

  getMostRunsConcededTestFromList = (type) => {
    getMostRunsConcededTestList(type).then((response) => {
      this.setState({
        mostRunsConcededTest: response,
      });
    });
  };

  getMostRunsConcededOdiFromList = (type) => {
    getMostRunsConcededOdiList(type).then((response) => {
      this.setState({
        mostRunsConcededOdi: response,
      });
    });
  };

  getMostRunsConcededT20FromList = (type) => {
    getMostRunsConcededT20List(type).then((response) => {
      this.setState({
        mostRunsConcededT20: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center bg-dark text-warning py-lg-3 rounded-1">
          Most Runs conceded
        </h1>
        <div className="row">
          <div className="col-4">
            <h2 className="text-center border mb-0 border-bottom-0">Tests</h2>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">Player Name</th>
                  <th scope="col">Runs conceded</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostRunsConcededTest.map(
                  (mostRunsConcededInTest) => (
                    <tr>
                      <td className="fs-5">{mostRunsConcededInTest.name}</td>
                      <td className="fs-5">{mostRunsConcededInTest.runsB}</td>
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
                  <th scope="col">Runs conceded</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostRunsConcededOdi.map((mostRunsConcededInOdi) => (
                  <tr>
                    <td className="fs-5">{mostRunsConcededInOdi.name}</td>
                    <td className="fs-5">{mostRunsConcededInOdi.runsB}</td>
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
                  <th scope="col">Runs conceded</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostRunsConcededT20.map((mostRunsConcededInT20) => (
                  <tr>
                    <td className="fs-5">{mostRunsConcededInT20.name}</td>
                    <td className="fs-5">{mostRunsConcededInT20.runsB}</td>
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

export default MostRunsConceded;
