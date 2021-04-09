import React, { Component } from "react";
import Team from "../Teams/Team";
import { getAllTeamsList } from "../functionalApiActions";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";

class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTeamsList: [],
    };
  }

  componentDidMount() {
    this.getAllListOfTeams();
  }

  getAllListOfTeams = (type) => {
    getAllTeamsList(type).then((response) => {
      this.setState({
        allTeamsList: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <Link className="teamPlayers" to={PAGE_URLS.VIEW_TEAM_PLAYERS}>
          <h1> View Team PLayers should add onclick on that particular team</h1>
        </Link>
        {this.state.allTeamsList.map((tList) => (
          <Team tList={tList} key={tList.id} />
        ))}
      </div>
    );
  }
}

export default Teams;
