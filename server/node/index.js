const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// var cricapi = require("cricapi");
// cricapi.setAPIKey("Uf7LXjV6kucaZmjXfGKJeU6nBqY2");
// cricapi.matches(function (databundle) {
//   //Variable "databundle" now contains JSON data in the below form
//   "https://cricapi.com/api/playerStats?apikey=Uf7LXjV6kucaZmjXfGKJeU6nBqY2&pid=35320";
// });

////TEAM////
////STADIUM////
const team = require("./codes/Teams/Team/Team");
const teamPlayers = require("./codes/Teams/TeamPlayers/teamPlayers");
app.use(
  teamPlayers.getTeamPlayers,
  team.addTeam,
  team.allTeams
);

const stadiums = require("./codes/Stadiums/stadiums");
app.use(stadiums.addStadium, stadiums.allStadiums, stadiums.getStadium);

////PLAYER_INFO////////ROLE, BOWLINGSTYLE, BATTINGSTYLE////////PLAYER_STATS////
const playerInfo = require("./codes/PlayerInfo/playerInfo");
const playerStats = require("./codes/PlayerStats/playerStats");
app.use(
  playerInfo.addBattinStyle,
  playerInfo.addPlayerInfo,
  playerInfo.getPlayerInfo,
  playerInfo.addRole,
  playerInfo.addbowlingStyle,
  playerStats.addPlayerStatsOdi,
  playerStats.addPlayerStatsT20,
  playerStats.addPlayerStatsTest,
);

////RECORDS////
////BATTING_RECORDS////
const battingRecords = require("./codes/Records/BattingRecords/battingRecords");
app.use(
  battingRecords.mostRuns.mostRunsTest,
);
////BOWLING_RECORDS////
const bowlingRecords = require("./codes/Records/BowlingRecords/bowlingRecords");


app.listen(3001, () => {
  console.log("########_Cric@info IS Running!!!!!!!!!");
});
