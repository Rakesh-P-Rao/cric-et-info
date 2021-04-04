import React, { Component } from 'react';
import TeamImage from './TeamImage';

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
          <div className="row">
            <div className="col-6">
              <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <TeamImage />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                                    <h2 className="card-text">{ this.props.teamName}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
 
export default Team;