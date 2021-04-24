import React, { Component } from "react";
import {
  getMost4WTestList,
  getMost4WT20List,
  getMost4WOdiList,
} from "../../functionalApiActions";

class Most4W extends Component {
  constructor(props) {
    super(props);
    this.state = {
      most4WTest: [],
      most4WOdi: [],
      most4WT20: [],
    };
  }

  componentDidMount() {
    this.getMost4WTestFromList();
    this.getMost4WT20FromList();
    this.getMost4WOdiFromList();
  }

  getMost4WTestFromList = (type) => {
    getMost4WTestList(type).then((response) => {
      this.setState({
        most4WTest: response,
      });
    });
  };

  getMost4WOdiFromList = (type) => {
    getMost4WOdiList(type).then((response) => {
      this.setState({
        most4WOdi: response,
      });
    });
  };

  getMost4WT20FromList = (type) => {
    getMost4WT20List(type).then((response) => {
      this.setState({
        most4WT20: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center bg-dark text-warning py-lg-3 rounded-1">
          Most 4W
        </h1>
        <div className="row">
          <div className="col-4">
            <h2 className="text-center border mb-0 border-bottom-0">Tests</h2>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">Player Name</th>
                  <th scope="col">4W</th>
                </tr>
              </thead>
              <tbody>
                {this.state.most4WTest.map((most4WInTest) => (
                  <tr>
                    <td className="fs-5">{most4WInTest.name}</td>
                    <td className="fs-5">{most4WInTest.four_fers}</td>
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
                  <th scope="col">4W</th>
                </tr>
              </thead>
              <tbody>
                {this.state.most4WOdi.map((most4WInOdi) => (
                  <tr>
                    <td className="fs-5">{most4WInOdi.name}</td>
                    <td className="fs-5">{most4WInOdi.four_fers}</td>
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
                  <th scope="col">4W</th>
                </tr>
              </thead>
              <tbody>
                {this.state.most4WT20.map((most4WInT20) => (
                  <tr>
                    <td className="fs-5">{most4WInT20.name}</td>
                    <td className="fs-5">{most4WInT20.four_fers}</td>
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

export default Most4W;
