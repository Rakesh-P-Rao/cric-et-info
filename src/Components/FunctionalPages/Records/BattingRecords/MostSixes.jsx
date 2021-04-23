import React, { Component } from "react";
import {
  getMostSixesTestList,
  getMostSixesT20List,
  getMostSixesOdiList,
} from "../../functionalApiActions";

class MostSixes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostSixesTest: [],
      mostSixesOdi: [],
      mostSixesT20: [],
    };
  }

  componentDidMount() {
    this.getMostSixesTestFromList();
    this.getMostSixesT20FromList();
    this.getMostSixesOdiFromList();
  }

  getMostSixesTestFromList = (type) => {
    getMostSixesTestList(type).then((response) => {
      this.setState({
        mostSixesTest: response,
      });
    });
  };

  getMostSixesOdiFromList = (type) => {
    getMostSixesOdiList(type).then((response) => {
      this.setState({
        mostSixesOdi: response,
      });
    });
  };

  getMostSixesT20FromList = (type) => {
    getMostSixesT20List(type).then((response) => {
      this.setState({
        mostSixesT20: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center bg-dark text-warning py-lg-3 rounded-1">
          Most Sixes
        </h1>
        <div className="row">
          <div className="col-4">
            <h2 className="text-center border mb-0 border-bottom-0">Tests</h2>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">Player Name</th>
                  <th scope="col">Sixes</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostSixesTest.map((mostSixesInTest) => (
                  <tr>
                    <td className="fs-5">{mostSixesInTest.name}</td>
                    <td className="fs-5">{mostSixesInTest.sixes}</td>
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
                  <th scope="col">Sixes</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostSixesOdi.map((mostSixesInOdi) => (
                  <tr>
                    <td className="fs-5">{mostSixesInOdi.name}</td>
                    <td className="fs-5">{mostSixesInOdi.sixes}</td>
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
                  <th scope="col">Sixes</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostSixesT20.map((mostSixesInT20) => (
                  <tr>
                    <td className="fs-5">{mostSixesInT20.name}</td>
                    <td className="fs-5">{mostSixesInT20.sixes}</td>
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

export default MostSixes;
