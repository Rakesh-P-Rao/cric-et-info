import React, { Component } from "react";
import PlayerInfo from "./PlayerInfo";
import PlayerStats from "./PlayerStats";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
            <h1>This component containe both playerInfo and playerStats!!!</h1>
            <PlayerInfo />
            <PlayerStats />
      </div>
    );
  }
}

export default Player;
