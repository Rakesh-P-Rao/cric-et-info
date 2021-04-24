import React, { Component } from "react";
import {
  getMostInningsBowledTestList,
  getMostInningsBowledT20List,
  getMostInningsBowledOdiList,
} from "../../functionalApiActions";

class MostInningsBowled extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostInningsBowledTest: [],
      mostInningsBowledOdi: [],
      mostInningsBowledT20: [],
    };
  }

  componentDidMount() {
    this.getMostInningsBowledTestFromList();
    this.getMostInningsBowledT20FromList();
    this.getMostInningsBowledOdiFromList();
  }

  getMostInningsBowledTestFromList = (type) => {
    getMostInningsBowledTestList(type).then((response) => {
      this.setState({
        mostInningsBowledTest: response,
      });
    });
  };

  getMostInningsBowledOdiFromList = (type) => {
    getMostInningsBowledOdiList(type).then((response) => {
      this.setState({
        mostInningsBowledOdi: response,
      });
    });
  };

  getMostInningsBowledT20FromList = (type) => {
    getMostInningsBowledT20List(type).then((response) => {
      this.setState({
        mostInningsBowledT20: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center bg-dark text-warning py-lg-3 rounded-1">
          Most Innings bowled
        </h1>
        <div className="row">
          <div className="col-4">
            <h2 className="text-center border mb-0 border-bottom-0">Tests</h2>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">Player Name</th>
                  <th scope="col">Innings bowled</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostInningsBowledTest.map(
                  (mostInningsBowledInTest) => (
                    <tr>
                      <td className="fs-5">{mostInningsBowledInTest.name}</td>
                      <td className="fs-5">
                        {mostInningsBowledInTest.inningsB}
                      </td>
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
                  <th scope="col">Innings bowled</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostInningsBowledOdi.map(
                  (mostInningsBowledInOdi) => (
                    <tr>
                      <td className="fs-5">{mostInningsBowledInOdi.name}</td>
                      <td className="fs-5">
                        {mostInningsBowledInOdi.inningsB}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
          <div className="col-4">
            <h2 className="text-center border mb-0 border-bottom-0">T20</h2>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">Player Name</th>
                  <th scope="col">Innings bowled</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostInningsBowledT20.map(
                  (mostInningsBowledInT20) => (
                    <tr>
                      <td className="fs-5">{mostInningsBowledInT20.name}</td>
                      <td className="fs-5">
                        {mostInningsBowledInT20.inningsB}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default MostInningsBowled;
