import React, { Component } from "react";
import Player from "./Player";
import { getPlayerInfoList } from "../functionalApiActions";

class AllPlayers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPlayersList:[],
    };
  }

  componentDidMount() {
    this.getPlayer();
  }

  getPlayer = () => {
    getPlayerInfoList().then((response) => {
      this.setState({
        allPlayersList: response,
      });
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="bg-dark text-light text-center py-lg-4 ">All Players</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {this.state.allPlayersList.map((pList) => (
            <div className="col">
              <Player pList={pList} key={pList.id} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AllPlayers;
