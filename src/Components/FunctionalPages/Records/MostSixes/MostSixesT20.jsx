import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../../Utils/Constants";
import { getMostSixesT20List } from "../../functionalApiActions";

class MostSixesT20 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mostSixesT20: [],
    };
  }

  componentDidMount() {
    this.getMostSixesT20FromList();
  }

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
        <div className="card text-center my-3">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <Link
                  className="nav-link text-dark"
                  to={PAGE_URLS.MOST_SIXES_TEST}
                >
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
                <Link className="nav-link active " aria-current="true">
                  T20
                </Link>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <h2 className="card-title text-start">Most Sixes in T20</h2>
            <p className="card-text">
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
                  {this.state.mostSixesT20.map((mostSixesT20s) => (
                    <tr>
                      <td colSpan="2" className="fs-4">
                        {mostSixesT20s.name}
                      </td>
                      <td className="fs-4">{mostSixesT20s.sixes}</td>
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

export default MostSixesT20;
