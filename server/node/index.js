const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const AllFiles = require("./layout");
app.use(
  AllFiles.team.addTeam,
  AllFiles.team.allTeams,
  AllFiles.teamPlayers.getTeamPlayerInfo,
  AllFiles.teamPlayers.getTeamPlayers,
  AllFiles.stadiums.addStadium,
  AllFiles.playerInfo.addBattinStyle,
  AllFiles.playerStats.addPlayerStatsOdi,
  AllFiles.battingRecords.bestAverage.bestAverageOdi,
  AllFiles.bowlingRecords.bestBBI.bestBBIOdi
);

app.listen(3001, () => {
  console.log("########_Cric@info IS Running!!!!!!!!!");
});
