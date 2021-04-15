import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../../Utils/Constants";
import { getMostRunsT20List } from "../../functionalApiActions";

class MostRunsT20 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostRunsT20: [],
    };
  }

  componentDidMount() {
    this.getMostRunsT20FromList();
  }

  getMostRunsT20FromList = (type) => {
    getMostRunsT20List(type).then((response) => {
      this.setState({
        mostRunsT20: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <div className="card text-center my-3">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <Link
                  className="nav-link text-dark"
                  to={PAGE_URLS.MOST_RUNS_TEST}
                >
                  Test
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark"
                  to={PAGE_URLS.MOST_RUNS_ODI}
                >
                  ODI
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active " aria-current="true">
                  T20
                </Link>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <h2 className="card-title text-start">Most runs in T20</h2>
            <p className="card-text">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col" colSpan="2" className="fs-4">
                      Player name
                    </th>
                    <th scope="col" className="fs-4">
                      Runs
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.mostRunsT20.map((mostRunsT20s) => (
                    <tr>
                      <td colSpan="2" className="fs-4">
                        {mostRunsT20s.name}
                      </td>
                      <td className="fs-4">{mostRunsT20s.runs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MostRunsT20;
