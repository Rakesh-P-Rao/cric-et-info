import React, { Component } from 'react'
import AddPlayerStatsOdi from './AddPlayerStatsOdi';
import AddPlayerStatsT20 from './AddPlayerStatsT20';
import AddPlayerStatsTest from './AddPlayerStatsTest';

class AddPlayerStats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player_id: this.props.match.params,
     }
  }
  render() { 
    return (
      <div className="container">
        <h1 className="text-danger">Add player stats</h1>
        <div className="row">
          <div className="col-4">
            <AddPlayerStatsTest player_id={this.state.player_id} />
          </div>
          <div className="col-4">
            <AddPlayerStatsOdi player_id={this.state.player_id} />
          </div>
          <div className="col-4">
            <AddPlayerStatsT20 player_id={this.state.player_id} />
          </div>
        </div>
      </div>
    );
  }
}
 
export default AddPlayerStats;