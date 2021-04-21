import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../../Utils/Constants";
import { getMostSixesTestList } from "../../functionalApiActions";

class MostSixesTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostSixesTest: [],
    };
  }

  componentDidMount() {
    this.getMostSixesTestFromList();
  }

  getMostSixesTestFromList = (type) => {
    getMostSixesTestList(type).then((response) => {
      this.setState({
        mostSixesTest: response,
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
                <Link className="nav-link active" aria-current="true">
                  Test
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark"
                  to={PAGE_URLS.MOST_SIXES_ODI}
                >
                  ODI
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark"
                  to={PAGE_URLS.MOST_SIXES_T20}
                >
                  T20
                </Link>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <h2 className="card-title text-start">Most sixes in Tests</h2>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col" colSpan="2" className="fs-4">
                    Player name
                  </th>
                  <th scope="col" className="fs-4">
                    Sixes
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.state.mostSixesTest.map((mostSixesTests) => (
                  <tr>
                    <td colSpan="2" className="fs-4">
                      {mostSixesTests.name}
                    </td>
                    <td className="fs-4">{mostSixesTests.sixes}</td>
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

export default MostSixesTest;
