const express = require("express");
const app = express();
const db = require("../../../dbConfig/dbConfig");

const teamPlayers = {
getTeamPlayers:app.get("/get-team-players/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT pi.id, pi.name, pi.image FROM player_info pi left join teams_info ti on ti.id=pi.teams WHERE ti.id = ?",
    id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
}),

getTeamPlayerInfo:app.get("/get-team-player-info/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT pi.id, pi.name, pi.birth_place, pi.born, pi.description, pi.image, ri.role, bas.batting_style, bos.bowling_style, ti.team FROM player_info pi, role_info ri, batting_style_info bas, bowling_style_info bos, teams_info ti WHERE pi.role=ri.id AND pi.batting_style=bas.id AND pi.bowling_style=bos.id AND pi.teams=ti.id AND pi.id = ?",
    id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
}),

getTeamPlayerStatsTest:app.get("/get-team-player-stats-test/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT pst.* FROM player_stats_test pst, player_info pi WHERE pi.id=pst.player_stats_test_id AND pst.player_stats_test_id = ?",
    id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
}),

getTeamPlayerStatsOdi:app.get("/get-team-player-stats-odi/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT pso.* FROM player_stats_odi pso, player_info pi WHERE pi.id=pso.player_stats_odi_id AND pso.player_stats_odi_id = ?",
    id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
}),

getTeamPlayerStatsT20:app.get("/get-team-player-stats-t20/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT ps2.* FROM player_stats_t20 ps2, player_info pi WHERE pi.id=ps2.player_stats_t20_id AND ps2.player_stats_t20_id = ?",
    id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
}),
};

module.exports = teamPlayers;
