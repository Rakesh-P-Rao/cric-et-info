const express = require("express");
const app = express();
const db = require("./dbConfig/dbConfig");
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
const team = require("./codes/Teams/Team/Team");
app.use(team.addTeam, team.allTeams);

const teamPlayers = require("./codes/Teams/TeamPlayers/teamPlayers");
app.use(
  teamPlayers.getTeamPlayerInfo,
  teamPlayers.getTeamPlayerStatsOdi,
  teamPlayers.getTeamPlayerStatsT20,
  teamPlayers.getTeamPlayerStatsTest,
  teamPlayers.getTeamPlayers
);

////STADIUM////
const stadiums = require("./codes/Stadiums/stadiums");
app.use(stadiums.addStadium, stadiums.allStadiums, stadiums.getStadium);

////PLAYER_INFO////
////ROLE, BOWLINGSTYLE, BATTINGSTYLE////
const playerInfo = require("./codes/PlayerInfo/playerInfo");
app.use(
  playerInfo.addBattinStyle,
  playerInfo.addPlayerInfo,
  playerInfo.addRole,
  playerInfo.addbowlingStyle
);

////PLAYER_STATS////
const playerStats = require("./codes/PlayerStats/playerStats");
app.use(
  playerStats.addPlayerStatsOdi,
  playerStats.addPlayerStatsT20,
  playerStats.addPlayerStatsTest
);

////RECORDS////
const battingRecords = require("./codes/Records/BattingRecords/battingRecords");
////MOST_RUNS////
app.use(
  battingRecords.mostRuns.mostRunsOdi,
  battingRecords.mostRuns.mostRunsT20,
  battingRecords.mostRuns.mostRunsTest
);

////MOST_SIXES////
app.use(
  battingRecords.mostSixes.mostSixesOdi,
  battingRecords.mostSixes.mostSixesT20,
  battingRecords.mostSixes.mostSixesTest
);

////MOST_FOURS////
app.get("/most-fours-test", (req, res) => {
  db.query(
    "SELECT pi.id, pi.name, MAX(pst.fours) AS fours FROM player_stats_test pst, player_info pi WHERE pi.id=pst.player_stats_test_id GROUP BY pi.id, pi.name ORDER BY pst.fours DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/most-fours-odi", (req, res) => {
  db.query(
    "SELECT pi.id, pi.name, MAX(pso.fours) AS fours FROM player_stats_odi pso, player_info pi WHERE pi.id=pso.player_stats_odi_id GROUP BY pi.id, pi.name ORDER BY pso.fours DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/most-fours-t20", (req, res) => {
  db.query(
    "SELECT pi.id, pi.name, MAX(ps2.fours) AS fours FROM player_stats_t20 ps2, player_info pi WHERE pi.id=ps2.player_stats_t20_id GROUP BY pi.id, pi.name ORDER BY ps2.fours DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
/////MOST_FIFTIES/////
app.get("/most-fifties-test", (req, res) => {
  db.query(
    "SELECT pi.id, pi.name, MAX(pst.fifties) AS fifties FROM player_stats_test pst, player_info pi WHERE pi.id=pst.player_stats_test_id GROUP BY pi.id, pi.name ORDER BY pst.fifties DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/most-fifties-odi", (req, res) => {
  db.query(
    "SELECT pi.id, pi.name, MAX(pso.fifties) AS fifties FROM player_stats_odi pso, player_info pi WHERE pi.id=pso.player_stats_odi_id GROUP BY pi.id, pi.name ORDER BY pso.fifties DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/most-fifties-t20", (req, res) => {
  db.query(
    "SELECT pi.id, pi.name, MAX(ps2.fifties) AS fifties FROM player_stats_t20 ps2, player_info pi WHERE pi.id=ps2.player_stats_t20_id GROUP BY pi.id, pi.name ORDER BY ps2.fifties DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
/////MOST_CENTURIES/////
app.get("/most-centuries-test", (req, res) => {
  db.query(
    "SELECT pi.id, pi.name, MAX(pst.hundreds) AS hundreds FROM player_stats_test pst, player_info pi WHERE pi.id=pst.player_stats_test_id GROUP BY pi.id, pi.name ORDER BY pst.hundreds DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/most-centuries-odi", (req, res) => {
  db.query(
    "SELECT pi.id, pi.name, MAX(pso.hundreds) AS hundreds FROM player_stats_odi pso, player_info pi WHERE pi.id=pso.player_stats_odi_id GROUP BY pi.id, pi.name ORDER BY pso.hundreds DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/most-centuries-t20", (req, res) => {
  db.query(
    "SELECT pi.id, pi.name, MAX(ps2.hundreds) AS hundreds FROM player_stats_t20 ps2, player_info pi WHERE pi.id=ps2.player_stats_t20_id GROUP BY pi.id, pi.name ORDER BY ps2.hundreds DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
/////MOST_DOUBLE_CENTURIES/////
app.get("/most-double-hundreds-test", (req, res) => {
  db.query(
    "SELECT pi.id, pi.name, MAX(pst.double_hundreds) AS double_hundreds FROM player_stats_test pst, player_info pi WHERE pi.id=pst.player_stats_test_id GROUP BY pi.id, pi.name ORDER BY pst.double_hundreds DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/most-double-hundreds-odi", (req, res) => {
  db.query(
    "SELECT pi.id, pi.name, MAX(pso.double_hundreds) AS double_hundreds FROM player_stats_odi pso, player_info pi WHERE pi.id=pso.player_stats_odi_id GROUP BY pi.id, pi.name ORDER BY pso.double_hundreds DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/most-double-hundreds-t20", (req, res) => {
  db.query(
    "SELECT pi.id, pi.name, MAX(ps2.double_hundreds) AS double_hundreds FROM player_stats_t20 ps2, player_info pi WHERE pi.id=ps2.player_stats_t20_id GROUP BY pi.id, pi.name ORDER BY ps2.double_hundreds DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
/////HIGHEST_SCORES/////
app.get("/highest-score-test", (req, res) => {
  db.query(
    "SELECT pi.id, pi.name, MAX(pst.high_score) AS high_score FROM player_stats_test pst, player_info pi WHERE pi.id=pst.player_stats_test_id GROUP BY pi.id, pi.name ORDER BY pst.high_score	 DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/highest-score-odi", (req, res) => {
  db.query(
    "SELECT pi.id, pi.name, MAX(pso.high_score) AS high_score	 FROM player_stats_odi pso, player_info pi WHERE pi.id=pso.player_stats_odi_id GROUP BY pi.id, pi.name ORDER BY pso.high_score	 DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/highest-score-t20", (req, res) => {
  db.query(
    "SELECT pi.id, pi.name, MAX(ps2.high_score) AS high_score	 FROM player_stats_t20 ps2, player_info pi WHERE pi.id=ps2.player_stats_t20_id GROUP BY pi.id, pi.name ORDER BY ps2.high_score	 DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
/////MOST_NOT_OUTS/////
app.get("/most-not-outs-test", (req, res) => {
  db.query(
    "SELECT pi.id, pi.name, MAX(pst.no_of_notOuts) AS no_of_notOuts FROM player_stats_test pst, player_info pi WHERE pi.id=pst.player_stats_test_id GROUP BY pi.id, pi.name ORDER BY pst.no_of_notOuts DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/most-not-outs-odi", (req, res) => {
  db.query(
    "SELECT pi.id, pi.name, MAX(pso.no_of_notOuts) AS no_of_notOuts FROM player_stats_odi pso, player_info pi WHERE pi.id=pso.player_stats_odi_id GROUP BY pi.id, pi.name ORDER BY pso.no_of_notOuts DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/most-not-outs-t20", (req, res) => {
  db.query(
    "SELECT pi.id, pi.name, MAX(ps2.no_of_notOuts) AS no_of_notOuts FROM player_stats_t20 ps2, player_info pi WHERE pi.id=ps2.player_stats_t20_id GROUP BY pi.id, pi.name ORDER BY ps2.no_of_notOuts DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
/////MOST_MATCHES/////
app.get("/most-matches-test", (req, res) => {
  db.query(
    "SELECT pi.id, pi.name, MAX(pst.matches) AS matches FROM player_stats_test pst, player_info pi WHERE pi.id=pst.player_stats_test_id GROUP BY pi.id, pi.name ORDER BY pst.matches DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/most-matches-odi", (req, res) => {
  db.query(
    "SELECT pi.id, pi.name, MAX(pso.matches) AS matches FROM player_stats_odi pso, player_info pi WHERE pi.id=pso.player_stats_odi_id GROUP BY pi.id, pi.name ORDER BY pso.matches DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/most-matches-t20", (req, res) => {
  db.query(
    "SELECT pi.id, pi.name, MAX(ps2.matches) AS matches FROM player_stats_t20 ps2, player_info pi WHERE pi.id=ps2.player_stats_t20_id GROUP BY pi.id, pi.name ORDER BY ps2.matches DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
/////MOST_BALLS_FACED/////
app.get("/most-balls-faced-test", (req, res) => {
  db.query(
    "SELECT pi.id, pi.name, MAX(pst.balls_faced) AS balls_faced FROM player_stats_test pst, player_info pi WHERE pi.id=pst.player_stats_test_id GROUP BY pi.id, pi.name ORDER BY pst.balls_faced DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/most-balls-faced-odi", (req, res) => {
  db.query(
    "SELECT pi.id, pi.name, MAX(pso.balls_faced) AS balls_faced FROM player_stats_odi pso, player_info pi WHERE pi.id=pso.player_stats_odi_id GROUP BY pi.id, pi.name ORDER BY pso.balls_faced DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/most-balls-faced-t20", (req, res) => {
  db.query(
    "SELECT pi.id, pi.name, MAX(ps2.balls_faced) AS balls_faced FROM player_stats_t20 ps2, player_info pi WHERE pi.id=ps2.player_stats_t20_id GROUP BY pi.id, pi.name ORDER BY ps2.balls_faced DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
/////BEST_STRIKE_RATE/////
app.get("/best-strike-rate-test", (req, res) => {
  db.query(
    "SELECT pi.id, pi.name, MAX(pst.strike_rate) AS strike_rate FROM player_stats_test pst, player_info pi WHERE pi.id=pst.player_stats_test_id GROUP BY pi.id, pi.name ORDER BY pst.strike_rate DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/best-strike-rate-odi", (req, res) => {
  db.query(
    "SELECT pi.id, pi.name, MAX(pso.strike_rate) AS strike_rate FROM player_stats_odi pso, player_info pi WHERE pi.id=pso.player_stats_odi_id GROUP BY pi.id, pi.name ORDER BY pso.strike_rate DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/best-strike-rate-t20", (req, res) => {
  db.query(
    "SELECT pi.id, pi.name, MAX(ps2.strike_rate) AS strike_rate FROM player_stats_t20 ps2, player_info pi WHERE pi.id=ps2.player_stats_t20_id GROUP BY pi.id, pi.name ORDER BY ps2.strike_rate DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
/////BEST_AVERAGE/////
app.get("/best-average-test", (req, res) => {
  db.query(
    "SELECT pi.id, pi.name, MAX(pst.average) AS average FROM player_stats_test pst, player_info pi WHERE pi.id=pst.player_stats_test_id GROUP BY pi.id, pi.name ORDER BY pst.average DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/best-average-odi", (req, res) => {
  db.query(
    "SELECT pi.id, pi.name, MAX(pso.average) AS average FROM player_stats_odi pso, player_info pi WHERE pi.id=pso.player_stats_odi_id GROUP BY pi.id, pi.name ORDER BY pso.average DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/best-average-t20", (req, res) => {
  db.query(
    "SELECT pi.id, pi.name, MAX(ps2.average) AS average FROM player_stats_t20 ps2, player_info pi WHERE pi.id=ps2.player_stats_t20_id GROUP BY pi.id, pi.name ORDER BY ps2.average DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
/////MOST_INNINGS_BATTED/////
app.get("/most-innings-batted-test", (req, res) => {
  db.query(
    "SELECT pi.id, pi.name, MAX(pst.innings) AS innings FROM player_stats_test pst, player_info pi WHERE pi.id=pst.player_stats_test_id GROUP BY pi.id, pi.name ORDER BY pst.innings DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/most-innings-batted-odi", (req, res) => {
  db.query(
    "SELECT pi.id, pi.name, MAX(pso.innings) AS innings FROM player_stats_odi pso, player_info pi WHERE pi.id=pso.player_stats_odi_id GROUP BY pi.id, pi.name ORDER BY pso.innings DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/most-innings-batted-t20", (req, res) => {
  db.query(
    "SELECT pi.id, pi.name, MAX(ps2.innings) AS innings FROM player_stats_t20 ps2, player_info pi WHERE pi.id=ps2.player_stats_t20_id GROUP BY pi.id, pi.name ORDER BY ps2.innings DESC",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.listen(3001, () => {
  console.log("########_Cric@info IS Running!!!!!!!!!");
});
