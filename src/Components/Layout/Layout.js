import React, { Component } from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import HeaderComponent from "../UI/HeaderComponent/HeaderComponent";
import FooterComponent from "../UI/FooterComponent/FooterComponent";
import { PAGE_URLS } from "../../Utils/Constants";
import PageNotFound from "../UI/PageNotFound/PageNotFound";
import HomePage from "../FunctionalPages/HomePage/HomePage";
import Teams from "../FunctionalPages/Teams/Teams";
import AllPlayers from "../FunctionalPages/PlayerInfo/AllPlayers";
import Stadiums from "../FunctionalPages/Stadiums/Stadiums";
import Records from "../FunctionalPages/Records/Records";
import Admin from "../FunctionalPages/Admin/Admin";
import AddStadium from "../FunctionalPages/Admin/AddStadium";
import MostRuns from "../FunctionalPages/Records/MostRuns";
import AddPlayerInfo from "../FunctionalPages/Admin/AddPlayerInfo";
import AddBattingStyle from "../FunctionalPages/Admin/AddBattingStyle";
import AddBowlingStyle from "../FunctionalPages/Admin/AddBowlingStyle";
import AddRole from "../FunctionalPages/Admin/AddRole";
import AddTeam from "../FunctionalPages/Admin/AddTeam";
import AddPlayerStats from "../FunctionalPages/Admin/AddPlayerStats";
import Stadium from "../FunctionalPages/Stadiums/Stadium";
import PlayerStats from "../FunctionalPages/PlayerInfo/PlayerStats";
import TeamPlayers from "../FunctionalPages/Teams/TeamPlayers";
import TeamPlayerInfo from "../FunctionalPages/Teams/TeamPlayerInfo";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
        <header>
          <HeaderComponent />
        </header>

        <main>
          <Switch>
            <Route path={PAGE_URLS.HOME} exact component={HomePage} />
            <Route path={PAGE_URLS.ADMIN} exact component={Admin} />
            <Route
              path={PAGE_URLS.ADD_PLAYER_INFO}
              exact
              component={AddPlayerInfo}
            />
            <Route
              path={PAGE_URLS.VIEW_TEAM_PLAYER_INFO}
              exact
              component={TeamPlayerInfo}
            />
            <Route
              path={PAGE_URLS.ADD_PLAYER_STATS}
              exact
              component={AddPlayerStats}
            />
            <Route path={PAGE_URLS.ADD_STADIUM} exact component={AddStadium} />
            <Route
              path={PAGE_URLS.ADD_BATTING_STYLE}
              exact
              component={AddBattingStyle}
            />
            <Route
              path={PAGE_URLS.ADD_BOWLING_STYLE}
              exact
              component={AddBowlingStyle}
            />
            <Route path={PAGE_URLS.ADD_ROLE} exact component={AddRole} />
            <Route path={PAGE_URLS.ADD_TEAM} exact component={AddTeam} />
            <Route path={PAGE_URLS.TEAMS_VIEW} exact component={Teams} />
            <Route
              path={PAGE_URLS.TEAM_PLAYER_VIEW}
              exact
              component={TeamPlayers}
            />
            <Route path={PAGE_URLS.ALL_PLAYERS} exact component={AllPlayers} />
            <Route path={PAGE_URLS.ALL_STADIUMS} exact component={Stadiums} />
            <Route path={PAGE_URLS.VIEW_STADIUM} exact component={Stadium} />
            <Route path={PAGE_URLS.RECORDS} exact component={Records} />
            <Route path={PAGE_URLS.MOST_RUNS} exact component={MostRuns} />
            {/* !------------- temporary routes for viewing ----------------------------!  */}
            <Route
              path={PAGE_URLS.VIEW_PLAYER_STATS}
              exact
              component={PlayerStats}
            />
            <Route path={PAGE_URLS.PAGE_NOT_FOUND} component={PageNotFound} />
          </Switch>
        </main>

        <footer>
          <FooterComponent />
        </footer>
      </BrowserRouter>
    );
  }
}

export default withRouter(Layout);
