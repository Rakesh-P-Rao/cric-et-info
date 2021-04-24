import React, { Component } from "react";
import {
  getMostFoursTestList,
  getMostFoursT20List,
  getMostFoursOdiList,
} from "../../functionalApiActions";

class MostFours extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostFoursTest: [],
      mostFoursOdi: [],
      mostFoursT20: [],
    };
  }

  componentDidMount() {
    this.getMostFoursTestFromList();
    this.getMostFoursT20FromList();
    this.getMostFoursOdiFromList();
  }

  getMostFoursTestFromList = (type) => {
    getMostFoursTestList(type).then((response) => {
      this.setState({
        mostFoursTest: response,
      });
    });
  };

  getMostFoursOdiFromList = (type) => {
    getMostFoursOdiList(type).then((response) => {
      this.setState({
        mostFoursOdi: response,
      });
    });
  };

  getMostFoursT20FromList = (type) => {
    getMostFoursT20List(type).then((response) => {
      this.setState({
        mostFoursT20: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center bg-dark text-warning py-lg-3 rounded-1">
          Most Fours
        </h1>
        <div className="row">
          <div className="col-4">
            <h2 className="text-center border mb-0 border-bottom-0">Tests</h2>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">Player Name</th>
                  <th scope="col">Fours</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostFoursTest.map((mostFoursInTest) => (
                  <tr>
                    <td className="fs-5">{mostFoursInTest.name}</td>
                    <td className="fs-5">{mostFoursInTest.fours}</td>
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
                  <th scope="col">Fours</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostFoursOdi.map((mostFoursInOdi) => (
                  <tr>
                    <td className="fs-5">{mostFoursInOdi.name}</td>
                    <td className="fs-5">{mostFoursInOdi.fours}</td>
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
                  <th scope="col">Fours</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostFoursT20.map((mostFoursInT20) => (
                  <tr>
                    <td className="fs-5">{mostFoursInT20.name}</td>
                    <td className="fs-5">{mostFoursInT20.fours}</td>
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

export default MostFours;
