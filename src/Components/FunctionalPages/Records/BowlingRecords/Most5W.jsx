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
      most5WTest: [],
      most5WOdi: [],
      most5WT20: [],
    };
  }

  componentDidMount() {
    this.getMost5WTestFromList();
    this.getMost5WT20FromList();
    this.getMost5WOdiFromList();
  }

  getMost5WTestFromList = (type) => {
    getMost5WTestList(type).then((response) => {
      this.setState({
        most5WTest: response,
      });
    });
  };

  getMost5WOdiFromList = (type) => {
    getMost5WOdiList(type).then((response) => {
      this.setState({
        most5WOdi: response,
      });
    });
  };

  getMost5WT20FromList = (type) => {
    getMost5WT20List(type).then((response) => {
      this.setState({
        most5WT20: response,
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
                {this.state.most5WTest.map((most5WInTest) => (
                  <tr>
                    <td className="fs-5">{most5WInTest.name}</td>
                    <td className="fs-5">{most5WInTest.fifers}</td>
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
                {this.state.most5WOdi.map((most5WInOdi) => (
                  <tr>
                    <td className="fs-5">{most5WInOdi.name}</td>
                    <td className="fs-5">{most5WInOdi.fifers}</td>
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
                {this.state.most5WT20.map((most5WInT20) => (
                  <tr>
                    <td className="fs-5">{most5WInT20.name}</td>
                    <td className="fs-5">{most5WInT20.fifers}</td>
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
