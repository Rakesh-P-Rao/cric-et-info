import React, { Component } from 'react';
import Team from "../Teams/Team"

class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
          <div className="container">
            <Team teamName="India"/>
            <Team teamName="Australia" />
            <Team teamName="New Zealand" />
            <Team teamName="West Indies" />
            <Team teamName="England" />
            <Team teamName="South Africa" />
            <Team teamName="Pakistan" />
            <Team teamName="Sri Lanka" />
            <Team teamName="Zimbabwe" />
            <Team teamName="Ireland" />
            <Team teamName="Bangladesh" />
            <Team teamName="Afghanistan" />
            <Team teamName="Nepal" />
            <Team teamName="USA" />
            <Team teamName="Netherlands" />
            <Team teamName="Kenya" />
          </div>
        );
    }
}
 
export default Teams;