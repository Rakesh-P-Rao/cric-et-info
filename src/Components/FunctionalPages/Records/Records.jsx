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
            <Link to={PAGE_URLS.MOST_RUNS}>
              <Record record="Most Runs" />
            </Link>
            <Link to={PAGE_URLS.MOST_SIXES}>
              <Record record="Most 6's" />
            </Link>
            <Link to={PAGE_URLS.MOST_FOURS}>
              <Record record="Most 4's" />
            </Link>
            <Link to={PAGE_URLS.MOST_FIFTIES}>
              <Record record="Most 50's" />
            </Link>
            <Link to={PAGE_URLS.MOST_CENTURIES}>
              <Record record="Most centuries" />
            </Link>
            <Link to={PAGE_URLS.MOST_DOUBLE_HUNDREDS}>
              <Record record="Most 200's" />
            </Link>
            <Link to={PAGE_URLS.HIGHEST_SCORE}>
              <Record record="High Scores" />
            </Link>
            <Link to={PAGE_URLS.MOST_NOT_OUTS}>
              <Record record="Most Not-outs" />
            </Link>
            <Link to={PAGE_URLS.MOST_MATCHES}>
              <Record record="Most Matches" />
            </Link>
            <Link to={PAGE_URLS.MOST_BALLS_FACED}>
              <Record record="Most Balls Faced" />
            </Link>
            <Link to={PAGE_URLS.BEST_STRIKE_RATE}>
              <Record record="Best Strike Rate" />
            </Link>
            <Link to={PAGE_URLS.BEST_AVERAGE}>
              <Record record="Best Average" />
            </Link>
            <Link to={PAGE_URLS.MOST_INNIGS_BATTED}>
              <Record record="Most Innings Batted" />
            </Link>
          </div>

          <div className="col-6">
            <h3 className="text-center text-dark fw-bolder fs-2">
              Bowling Records
            </h3>
            <Link to={PAGE_URLS.MOST_WICKETS}>
              <Record record="Most Wickets" />
            </Link>
            <Link to={PAGE_URLS.BEST_BBI}>
              <Record record="Best BBI" />
            </Link>
            <Link to={PAGE_URLS.BEST_BBM}>
              <Record record="Best BBM" />
            </Link>
            <Link to={PAGE_URLS.BEST_ECONOMY}>
              <Record record="Best Economy" />
            </Link>
            <Link to={PAGE_URLS.MOST_4W}>
              <Record record="Most 4W" />
            </Link>
            <Link to={PAGE_URLS.MOST_5W}>
              <Record record="Most 5W" />
            </Link>
            <Link to={PAGE_URLS.HIGHEST_10W}>
              <Record record="Most 10W" />
            </Link>
            <Link to={PAGE_URLS.MOST_INNIGS_BOWLED}>
              <Record record="Most Innings Bowled" />
            </Link>
            <Link to={PAGE_URLS.MOST_BALLS_BOWLED}>
              <Record record="Most Balls Bowled" />
            </Link>
            <Link to={PAGE_URLS.MOST_RUNS_CONCEDED}>
              <Record record="Most Runs Conceded" />
            </Link>
            <Link to={PAGE_URLS.BEST_BOWLING_STRIKE_RATE}>
              <Record record="Best Bowling Strike Rate" />
            </Link>
            <Link to={PAGE_URLS.BEST_BOWLING_AVERAGE}>
              <Record record="Best Bowling Average " />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Records;
