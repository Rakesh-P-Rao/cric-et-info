import React, { Component } from "react";
import Record from "./Record";

class Records extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <h1>Records</h1>
        <div className="row">
          <div className="col-6">
            <h3 className="text-center text-dark fw-bolder fs-2">
              Batting Records
            </h3>
            <Record record="Most Runs" />
            <Record record="Most 6's" />
            <Record record="Most 4's" />
            <Record record="Most 50's" />
            <Record record="Most centuries" />
            <Record record="Most 200's" />
            <Record record="High Scores" />
            <Record record="Most Not-outs" />
            <Record record="Most Matches" />
            <Record record="Most Balls Faced" />
            <Record record="Best Strike Rate" />
            <Record record="Best Average" />
            <Record record="Most Innings Batted" />
          </div>

          <div className="col-6">
            <h3 className="text-center text-dark fw-bolder fs-2">
              Bowling Records
            </h3>
            <Record record="Most Wickets" />
            <Record record="Best BBI" />
            <Record record="Best BBM" />
            <Record record="Best Economy" />
            <Record record="Most 4W" />
            <Record record="Most 5W" />
            <Record record="Most 10W" />
            <Record record="Most Innings Bowled" />
            <Record record="Most Balls Bowled" />
            <Record record="Most Runs Conceded" />
            <Record record="Best Bowling Strike Rate" />
            <Record record="Best Bowling Average " />
          </div>
        </div>
      </div>
    );
  }
}

export default Records;
