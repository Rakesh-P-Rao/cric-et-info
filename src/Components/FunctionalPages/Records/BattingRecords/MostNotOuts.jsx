import React, { Component } from "react";
import {
  getMostNotOutsTestList,
  getMostNotOutsT20List,
  getMostNotOutsOdiList,
} from "../../functionalApiActions";

class MostNotOuts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostNotOutsTest: [],
      mostNotOutsOdi: [],
      mostNotOutsT20: [],
    };
  }

  componentDidMount() {
    this.getMostNotOutsTestFromList();
    this.getMostNotOutsT20FromList();
    this.getMostNotOutsOdiFromList();
  }

  getMostNotOutsTestFromList = (type) => {
    getMostNotOutsTestList(type).then((response) => {
      this.setState({
        mostNotOutsTest: response,
      });
    });
  };

  getMostNotOutsOdiFromList = (type) => {
    getMostNotOutsOdiList(type).then((response) => {
      this.setState({
        mostNotOutsOdi: response,
      });
    });
  };

  getMostNotOutsT20FromList = (type) => {
    getMostNotOutsT20List(type).then((response) => {
      this.setState({
        mostNotOutsT20: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center bg-dark text-warning py-lg-3 rounded-1">
          Most Not outs
        </h1>
        <div className="row">
          <div className="col-4">
            <h2 className="text-center border mb-0 border-bottom-0">Tests</h2>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">Player Name</th>
                  <th scope="col">Not outs</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostNotOutsTest.map((mostNotOutsInTest) => (
                  <tr>
                    <td className="fs-5">{mostNotOutsInTest.name}</td>
                    <td className="fs-5">{mostNotOutsInTest.no_of_notOuts}</td>
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
                  <th scope="col">Not outs</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostNotOutsOdi.map((mostNotOutsInOdi) => (
                  <tr>
                    <td className="fs-5">{mostNotOutsInOdi.name}</td>
                    <td className="fs-5">{mostNotOutsInOdi.no_of_notOuts}</td>
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
                  <th scope="col">Not outs</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostNotOutsT20.map((mostNotOutsInT20) => (
                  <tr>
                    <td className="fs-5">{mostNotOutsInT20.name}</td>
                    <td className="fs-5">{mostNotOutsInT20.no_of_notOuts}</td>
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

export default MostNotOuts;
