import React, { Component } from "react";
import {
  getMost10WTestList,
  getMost10WOdiList,
  getMost10WT20List,
} from "../../functionalApiActions";

class Most10W extends Component {
  constructor(props) {
    super(props);
    this.state = {
      most10WTest: [],
      most10WOdi: [],
      most10WT20: [],
    };
  }

  componentDidMount() {
    this.getMost10WTestFromList();
    this.getMost10WT20FromList();
    this.getMost10WOdiFromList();
  }

  getMost10WTestFromList = (type) => {
    getMost10WTestList(type).then((response) => {
      this.setState({
        most10WTest: response,
      });
    });
  };

  getMost10WOdiFromList = (type) => {
    getMost10WOdiList(type).then((response) => {
      this.setState({
        most10WOdi: response,
      });
    });
  };

  getMost10WT20FromList = (type) => {
    getMost10WT20List(type).then((response) => {
      this.setState({
        most10WT20: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center bg-dark text-warning py-lg-3 rounded-1">
          Most 10W
        </h1>
        <div className="row">
          <div className="col-4">
            <h2 className="text-center border mb-0 border-bottom-0">Tests</h2>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">Player Name</th>
                  <th scope="col">10W</th>
                </tr>
              </thead>
              <tbody>
                {this.state.most10WTest.map((most10WInTest) => (
                  <tr>
                    <td className="fs-5">{most10WInTest.name}</td>
                    <td className="fs-5">{most10WInTest.ten_wickets}</td>
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
                  <th scope="col">10W</th>
                </tr>
              </thead>
              <tbody>
                {this.state.most10WOdi.map((most10WInOdi) => (
                  <tr>
                    <td className="fs-5">{most10WInOdi.name}</td>
                    <td className="fs-5">{most10WInOdi.ten_wickets}</td>
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
                  <th scope="col">10W</th>
                </tr>
              </thead>
              <tbody>
                {this.state.most10WT20.map((most10WInT20) => (
                  <tr>
                    <td className="fs-5">{most10WInT20.name}</td>
                    <td className="fs-5">{most10WInT20.ten_wickets}</td>
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

export default Most10W;
