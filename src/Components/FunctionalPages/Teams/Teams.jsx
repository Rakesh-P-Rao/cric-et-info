import React, { Component } from "react";
import Team from "../Teams/Team";
import India from "../../../Images/Teams/india.webp";
import Australia from "../../../Images/Teams/australia.webp";
import NewZealand from "../../../Images/Teams/newZealand.webp";
import WestIndies from "../../../Images/Teams/westIndies.webp";
import England from "../../../Images/Teams/england.webp";
import SouthAfrica from "../../../Images/Teams/southAfrica.webp";
import Pakistan from "../../../Images/Teams/pakistan.webp";
import SriLanka from "../../../Images/Teams/sriLanka.webp";
import Zimbabwe from "../../../Images/Teams/zimbabwe.webp";
import Ireland from "../../../Images/Teams/ireland.webp";
import Bangladesh from "../../../Images/Teams/bangladesh.webp";
import Afghanistan from "../../../Images/Teams/afghanistan.webp";
import Scotland from "../../../Images/Teams/scotland.webp";
import { Link } from "react-router-dom";
import { PAGE_URLS } from "../../../Utils/Constants";

class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <Link className="teamPlayers" to={PAGE_URLS.VIEW_TEAM_PLAYERS}>
          <h1> View Team PLayers should add onclick on that particular team</h1>
        </Link>
        <Team teamName="India" teamImage={India} />
        <Team teamName="Australia" teamImage={Australia} />
        <Team teamName="New Zealand" teamImage={NewZealand} />
        <Team teamName="West Indies" teamImage={WestIndies} />
        <Team teamName="England" teamImage={England} />
        <Team teamName="South Africa" teamImage={SouthAfrica} />
        <Team teamName="Pakistan" teamImage={Pakistan} />
        <Team teamName="Sri Lanka" teamImage={SriLanka} />
        <Team teamName="Zimbabwe" teamImage={Zimbabwe} />
        <Team teamName="Ireland" teamImage={Ireland} />
        <Team teamName="Bangladesh" teamImage={Bangladesh} />
        <Team teamName="Afghanistan" teamImage={Afghanistan} />
        <Team teamName="Scotland" teamImage={Scotland} />
      </div>
    );
  }
}

export default Teams;
