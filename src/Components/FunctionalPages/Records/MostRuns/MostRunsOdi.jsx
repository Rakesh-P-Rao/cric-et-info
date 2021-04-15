import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../../Utils/Constants";
import { getMostRunsOdiList } from "../../functionalApiActions";

class MostRunsOdi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostRunsOdi: [],
    };
  }

  componentDidMount() {
    this.getMostRunsOdiFromList();
  }

  getMostRunsOdiFromList = (type) => {
    getMostRunsOdiList(type).then((response) => {
      this.setState({
        mostRunsOdi: response,
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
              <li className="nav-item " aria-current="true">
                <Link className="nav-link active">ODI</Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark"
                  to={PAGE_URLS.MOST_RUNS_T20}
                >
                  T20
                </Link>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <h2 className="card-title text-start">Most runs in ODI</h2>
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
                {this.state.mostRunsOdi.map((mostRunsOdis) => (
                  <tr>
                    <td colSpan="2" className="fs-4">
                      {mostRunsOdis.name}
                    </td>
                    <td className="fs-4">{mostRunsOdis.runs}</td>
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

export default MostRunsOdi;
