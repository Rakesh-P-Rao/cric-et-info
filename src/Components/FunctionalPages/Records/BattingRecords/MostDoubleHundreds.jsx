import React, { Component } from "react";
import {
  getMostDoubleHundredsTestList,
  getMostDoubleHundredsT20List,
  getMostDoubleHundredsOdiList,
} from "../../functionalApiActions";

class MostDoubleHundreds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostDoubleHundredsTest: [],
      mostDoubleHundredsOdi: [],
      mostDoubleHundredsT20: [],
    };
  }

  componentDidMount() {
    this.getMostDoubleHundredsTestFromList();
    this.getMostDoubleHundredsT20FromList();
    this.getMostDoubleHundredsOdiFromList();
  }

  getMostDoubleHundredsTestFromList = (type) => {
    getMostDoubleHundredsTestList(type).then((response) => {
      this.setState({
        mostDoubleHundredsTest: response,
      });
    });
  };

  getMostDoubleHundredsOdiFromList = (type) => {
    getMostDoubleHundredsOdiList(type).then((response) => {
      this.setState({
        mostDoubleHundredsOdi: response,
      });
    });
  };

  getMostDoubleHundredsT20FromList = (type) => {
    getMostDoubleHundredsT20List(type).then((response) => {
      this.setState({
        mostDoubleHundredsT20: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center bg-dark text-warning py-lg-3 rounded-1">
          Most Double Hundreds
        </h1>
        <div className="row">
          <div className="col-4">
            <h2 className="text-center border mb-0 border-bottom-0">Tests</h2>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">Player Name</th>
                  <th scope="col">Double Hundreds</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostDoubleHundredsTest.map((mostDoubleHundredsInTest) => (
                  <tr>
                    <td className="fs-5">{mostDoubleHundredsInTest.name}</td>
                    <td className="fs-5">{mostDoubleHundredsInTest.double_hundreds}</td>
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
                  <th scope="col">Double Hundreds</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostDoubleHundredsOdi.map((mostDoubleHundredsInOdi) => (
                  <tr>
                    <td className="fs-5">{mostDoubleHundredsInOdi.name}</td>
                    <td className="fs-5">{mostDoubleHundredsInOdi.double_hundreds}</td>
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
                  <th scope="col">Double Hundreds</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostDoubleHundredsT20.map((mostDoubleHundredsInT20) => (
                  <tr>
                    <td className="fs-5">{mostDoubleHundredsInT20.name}</td>
                    <td className="fs-5">{mostDoubleHundredsInT20.double_hundreds}</td>
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

export default MostDoubleHundreds;
