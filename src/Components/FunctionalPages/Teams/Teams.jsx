import React, { Component } from "react";
import Team from "../Teams/Team";
import { getAllTeamsList } from "../functionalApiActions";

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
        <div className="row">
          <div className="col-12">
            {this.state.allTeamsList.map((tList) => (
              <Team tList={tList} key={tList.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Teams;
