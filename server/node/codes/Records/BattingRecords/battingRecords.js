const express = require("express");
const app = express();
const db = require("../../../dbConfig/dbConfig");

const battingRecords = {
  mostRuns: {
    mostRunsTest: app.get("/most-runs-test", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MAX(pst.runs) AS runs FROM player_stats_test pst, player_info pi WHERE pi.id=pst.player_stats_test_id GROUP BY pi.id, pi.name ORDER BY pst.runs DESC",
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    }),

    mostRunsOdi: app.get("/most-runs-odi", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MAX(pso.runs) AS runs FROM player_stats_odi pso, player_info pi WHERE pi.id=pso.player_stats_odi_id GROUP BY pi.id, pi.name ORDER BY pso.runs DESC",
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    }),

    mostRunsT20: app.get("/most-runs-t20", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MAX(ps2.runs) AS runs FROM player_stats_t20 ps2, player_info pi WHERE pi.id=ps2.player_stats_t20_id GROUP BY pi.id, pi.name ORDER BY ps2.runs DESC",
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    }),
  },

  mostSixes: {
    mostSixesTest: app.get("/most-sixes-test", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MAX(pst.sixes) AS sixes FROM player_stats_test pst, player_info pi WHERE pi.id=pst.player_stats_test_id GROUP BY pi.id, pi.name ORDER BY pst.sixes DESC",
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    }),

    mostSixesOdi: app.get("/most-sixes-odi", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MAX(pso.sixes) AS sixes FROM player_stats_odi pso, player_info pi WHERE pi.id=pso.player_stats_odi_id GROUP BY pi.id, pi.name ORDER BY pso.sixes DESC",
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    }),

    mostSixesT20: app.get("/most-sixes-t20", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MAX(ps2.sixes) AS sixes FROM player_stats_t20 ps2, player_info pi WHERE pi.id=ps2.player_stats_t20_id GROUP BY pi.id, pi.name ORDER BY ps2.sixes DESC",
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    }),
  },
};

module.exports = battingRecords;
