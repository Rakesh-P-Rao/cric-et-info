import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";

class Records extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <h1>Records</h1>
        <div className="row  ">
          <div className="col col-md-3">
            <div
              className="card text-white bg-dark mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
                <h1 className="card-title">Dark card title</h1>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card text-white bg-dark mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
                            <h1 className="card-text">Most runs</h1>
                            <Link className="most runs" to={PAGE_URLS.MOST_RUNS} >View</Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card text-white bg-dark mb-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-body">
                <h5 className="card-title">Dark card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
                </div>
                </div>
      </div>
    );
  }
}

export default Records;
