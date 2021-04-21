import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";
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
            <Link to={PAGE_URLS.MOST_RUNS_TEST}>
              <Record record="Most Runs" />
            </Link>
            <Link to={PAGE_URLS.MOST_SIXES_TEST} >
              <Record record="Most 6's" />
            </Link>
            <Link to={PAGE_URLS.MOST_FOURS_TEST}>
              <Record record="Most 4's" />
            </Link>
            <Link to={PAGE_URLS.MOST_FIFTIES_TEST}>
              <Record record="Most 50's" />
            </Link>
            <Link to={PAGE_URLS.MOST_CENTURIES_TEST}>
              <Record record="Most centuries" />
            </Link>
            <Link to={PAGE_URLS.MOST_DOUBLE_HUNDREDS_TEST}>
              <Record record="Most 200's" />
            </Link>
            <Link to={PAGE_URLS.HIGHEST_SCORE_TEST}>
              <Record record="High Scores" />
            </Link>
            <Link to={PAGE_URLS.MOST_NOT_OUTS_TEST}>
              <Record record="Most Not-outs" />
            </Link>
            <Link to={PAGE_URLS.MOST_MATCHES_TEST}>
              <Record record="Most Matches" />
            </Link>
            <Link to={PAGE_URLS.MOST_BALLS_FACED_TEST}>
              <Record record="Most Balls Faced" />
            </Link>
            <Link to={PAGE_URLS.BEST_STRIKE_RATE_TEST}>
              <Record record="Best Strike Rate" />
            </Link>
            <Link to={PAGE_URLS.BEST_AVERAGE_TEST}>
              <Record record="Best Average" />
            </Link>
            <Link to={PAGE_URLS.MOST_INNIGS_BATTED_TEST}>
              <Record record="Most Innings Batted" />
            </Link>
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
