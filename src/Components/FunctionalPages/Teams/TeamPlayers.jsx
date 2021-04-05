import React, { Component } from 'react';

class TeamPlayers extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
          <div className="container">
            <h1>(this team players here) through react</h1>
            <div className="row">
              <div className="col-6">
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src="" alt="" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h2 className="card-text">player name</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
 
export default TeamPlayers;