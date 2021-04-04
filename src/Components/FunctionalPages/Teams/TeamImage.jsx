import React, { Component } from 'react';
import India from "../../../Images/Teams/india.webp";

class TeamImage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<div>
            <img src={India} alt=""/>
        </div> );
    }
}
 
export default TeamImage;