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
import AddPlayerInfo from "../FunctionalPages/Admin/AddPlayerInfo";
import AddBattingStyle from "../FunctionalPages/Admin/AddBattingStyle";
import AddBowlingStyle from "../FunctionalPages/Admin/AddBowlingStyle";
import AddRole from "../FunctionalPages/Admin/AddRole";
import AddTeam from "../FunctionalPages/Admin/AddTeam";
import AddPlayerStats from "../FunctionalPages/Admin/AddPlayerStats";
import Stadium from "../FunctionalPages/Stadiums/Stadium";
import TeamPlayers from "../FunctionalPages/Teams/TeamPlayers";
import TeamPlayerInfo from "../FunctionalPages/Teams/TeamPlayerInfo";
import PlayerInfo from "../FunctionalPages/PlayerInfo/PlayerInfo";
import MostRuns from "../FunctionalPages/Records/BattingRecords/MostRuns";
import MostSixes from "../FunctionalPages/Records/BattingRecords/MostSixes";
import MostFours from "../FunctionalPages/Records/BattingRecords/MostFours";
import MostFifties from "../FunctionalPages/Records/BattingRecords/MostFifties";
import MostCenturies from "../FunctionalPages/Records/BattingRecords/MostCenturies";
import MostDoubleHundreds from "../FunctionalPages/Records/BattingRecords/MostDoubleHundreds";
import HighestScore from "../FunctionalPages/Records/BattingRecords/HighestScore";
import MostNotOuts from "../FunctionalPages/Records/BattingRecords/MostNotOuts";
import MostMatches from "../FunctionalPages/Records/BattingRecords/MostMatches";
import MostBallsFaced from "../FunctionalPages/Records/BattingRecords/MostBallsFaced";
import MostInningsBatted from "../FunctionalPages/Records/BattingRecords/MostInningsBatted";
import BestStrikeRate from "../FunctionalPages/Records/BattingRecords/BestStrikeRate";
import BestAverage from "../FunctionalPages/Records/BattingRecords/BestAverage";
import MostWickets from "../FunctionalPages/Records/BowlingRecords/MostWickets";
import BestBBI from "../FunctionalPages/Records/BowlingRecords/BestBBI";
import BestBBM from "../FunctionalPages/Records/BowlingRecords/BestBBM";
import BestEconomy from "../FunctionalPages/Records/BowlingRecords/BestEconomy";
import Most4W from "../FunctionalPages/Records/BowlingRecords/Most4W";
import Most10W from "../FunctionalPages/Records/BowlingRecords/Most10W";
import Most5W from "../FunctionalPages/Records/BowlingRecords/Most5W";
import MostInningsBowled from "../FunctionalPages/Records/BowlingRecords/MostInningsBowled";
import MostBallsBowled from "../FunctionalPages/Records/BowlingRecords/MostBallsBowled";
import MostRunsConceded from "../FunctionalPages/Records/BowlingRecords/MostRunsConceded";
import BestBowlingStrikeRate from "../FunctionalPages/Records/BowlingRecords/BestBowlingStrikeRate";
import BestBowlingAverage from "../FunctionalPages/Records/BowlingRecords/BestBowlingAverage";

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
              path={PAGE_URLS.VIEW_PLAYER_INFO}
              exact
              component={PlayerInfo}
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
            <Route path={PAGE_URLS.MOST_SIXES} exact component={MostSixes} />
            <Route path={PAGE_URLS.MOST_FOURS} exact component={MostFours} />
            <Route
              path={PAGE_URLS.MOST_FIFTIES}
              exact
              component={MostFifties}
            />
            <Route
              path={PAGE_URLS.MOST_CENTURIES}
              exact
              component={MostCenturies}
            />
            <Route
              path={PAGE_URLS.MOST_DOUBLE_HUNDREDS}
              exact
              component={MostDoubleHundreds}
            />
            <Route
              path={PAGE_URLS.HIGHEST_SCORE}
              exact
              component={HighestScore}
            />
            <Route
              path={PAGE_URLS.MOST_NOT_OUTS}
              exact
              component={MostNotOuts}
            />
            <Route
              path={PAGE_URLS.MOST_MATCHES}
              exact
              component={MostMatches}
            />
            <Route
              path={PAGE_URLS.MOST_BALLS_FACED}
              exact
              component={MostBallsFaced}
            />
            <Route
              path={PAGE_URLS.MOST_INNINGS_BATTED}
              exact
              component={MostInningsBatted}
            />
            <Route
              path={PAGE_URLS.BEST_STRIKE_RATE}
              exact
              component={BestStrikeRate}
            />
            <Route
              path={PAGE_URLS.BEST_AVERAGE}
              exact
              component={BestAverage}
            />
            <Route
              path={PAGE_URLS.MOST_WICKETS}
              exact
              component={MostWickets}
            />
            <Route path={PAGE_URLS.BEST_BBI} exact component={BestBBI} />
            <Route path={PAGE_URLS.BEST_BBM} exact component={BestBBM} />
            <Route
              path={PAGE_URLS.BEST_ECONOMY}
              exact
              component={BestEconomy}
            />
            <Route path={PAGE_URLS.MOST_4W} exact component={Most4W} />
            <Route
              path={PAGE_URLS.MOST_BALLS_BOWLED}
              exact
              component={MostBallsBowled}
            />
            <Route
              path={PAGE_URLS.MOST_RUNS_CONCEDED}
              exact
              component={MostRunsConceded}
            />
            <Route
              path={PAGE_URLS.BEST_BOWLING_STRIKE_RATE}
              exact
              component={BestBowlingStrikeRate}
            />
            <Route
              path={PAGE_URLS.BEST_BOWLING_AVERAGE}
              exact
              component={BestBowlingAverage}
            />
            <Route
              path={PAGE_URLS.MOST_INNINGS_BOWLED}
              exact
              component={MostInningsBowled}
            />
            <Route path={PAGE_URLS.MOST_5W} exact component={Most5W} />
            <Route path={PAGE_URLS.MOST_10W} exact component={Most10W} />

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
