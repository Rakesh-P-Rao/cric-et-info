import React, { Component } from 'react';
import TeamPlayer from './TeamPlayer';
import { getTeamPlayersByTeam } from "../functionalApiActions";

class TeamPlayers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamPlayers: [],
      teamClicked: this.props.match.params,
    };
  }

  componentDidMount() {
    this.getTeamPlayersInfoByTeam();
  }

  getTeamPlayersInfoByTeam = (id) => {
    getTeamPlayersByTeam(this.state.teamClicked.id).then((response) => {
      this.setState({
        teamPlayers: response,
      });
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-11">
            {this.state.teamPlayers.map((tpList) => (
              <TeamPlayer tpList={tpList} key={tpList.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
 
export default TeamPlayers;