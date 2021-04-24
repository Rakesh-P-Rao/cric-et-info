const express = require("express");
const app = express();
const db = require("../../../dbConfig/dbConfig");

const bowlingRecords = {
  mostWickets: {
    mostWicketsTest: app.get("/most-wickets-test", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MAX(pst.wickets) AS wickets FROM player_stats_test pst, player_info pi WHERE pi.id=pst.player_stats_test_id GROUP BY pi.id, pi.name ORDER BY pst.wickets DESC",
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    }),

    mostWicketsOdi: app.get("/most-wickets-odi", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MAX(pso.wickets) AS wickets FROM player_stats_odi pso, player_info pi WHERE pi.id=pso.player_stats_odi_id GROUP BY pi.id, pi.name ORDER BY pso.wickets DESC",
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    }),

    mostWicketsT20: app.get("/most-wickets-t20", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MAX(ps2.wickets) AS wickets FROM player_stats_t20 ps2, player_info pi WHERE pi.id=ps2.player_stats_t20_id GROUP BY pi.id, pi.name ORDER BY ps2.wickets DESC",
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

  bestBBI: {
    bestBBITest: app.get("/best-bbi-test", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MAX(pst.bBBI) AS bBBI FROM player_stats_test pst, player_info pi WHERE pi.id=pst.player_stats_test_id GROUP BY pi.id, pi.name ORDER BY pst.bBBI DESC",
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    }),

    bestBBIOdi: app.get("/best-bbi-odi", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MAX(pso.bBBI) AS bBBI FROM player_stats_odi pso, player_info pi WHERE pi.id=pso.player_stats_odi_id GROUP BY pi.id, pi.name ORDER BY pso.bBBI DESC",
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    }),

    bestBBIT20: app.get("/best-bbi-t20", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MAX(ps2.bBBI) AS bBBI FROM player_stats_t20 ps2, player_info pi WHERE pi.id=ps2.player_stats_t20_id GROUP BY pi.id, pi.name ORDER BY ps2.bBBI DESC",
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

  bestBBM: {
    bestBBMTest: app.get("/best-bbm-test", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MAX(pst.bBBM) AS bBBM FROM player_stats_test pst, player_info pi WHERE pi.id=pst.player_stats_test_id GROUP BY pi.id, pi.name ORDER BY pst.bBBM DESC",
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    }),

    bestBBMOdi: app.get("/best-bbm-odi", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MAX(pso.bBBM) AS bBBM FROM player_stats_odi pso, player_info pi WHERE pi.id=pso.player_stats_odi_id GROUP BY pi.id, pi.name ORDER BY pso.bBBM DESC",
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    }),

    bestBBMT20: app.get("/best-bbm-t20", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MAX(ps2.bBBM) AS bBBM FROM player_stats_t20 ps2, player_info pi WHERE pi.id=ps2.player_stats_t20_id GROUP BY pi.id, pi.name ORDER BY ps2.bBBM DESC",
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

  bestEconomy: {
    bestEconomyTest: app.get("/best-economy-test", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MIN(pst.economy) AS economy FROM player_stats_test pst, player_info pi WHERE pi.id=pst.player_stats_test_id GROUP BY pi.id, pi.name, pst.inningsB HAVING pst.inningsB > 50 ORDER BY pst.economy DESC",
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    }),

    bestEconomyOdi: app.get("/best-economy-odi", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MIN(pso.economy) AS economy FROM player_stats_odi pso, player_info pi WHERE pi.id=pso.player_stats_odi_id GROUP BY pi.id, pi.name, pso.inningsB HAVING pso.inningsB > 50 ORDER BY pso.economy DESC",
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    }),

    bestEconomyT20: app.get("/best-economy-t20", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MIN(ps2.economy) AS economy FROM player_stats_t20 ps2, player_info pi WHERE pi.id=ps2.player_stats_t20_id GROUP BY pi.id, pi.name,ps2.inningsB HAVING ps2.inningsB > 20 ORDER BY ps2.economy DESC",
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

  most4W: {
    most4WTest: app.get("/most-4W-test", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MAX(pst.four_fers) AS four_fers FROM player_stats_test pst, player_info pi WHERE pi.id=pst.player_stats_test_id GROUP BY pi.id, pi.name ORDER BY pst.four_fers DESC",
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    }),

    most4WOdi: app.get("/most-4W-odi", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MAX(pso.four_fers) AS four_fers FROM player_stats_odi pso, player_info pi WHERE pi.id=pso.player_stats_odi_id GROUP BY pi.id, pi.name ORDER BY pso.four_fers DESC",
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    }),

    most4WT20: app.get("/most-4W-t20", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MAX(ps2.four_fers) AS four_fers FROM player_stats_t20 ps2, player_info pi WHERE pi.id=ps2.player_stats_t20_id GROUP BY pi.id, pi.name ORDER BY ps2.four_fers DESC",
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

  most5W: {
    most5WTest: app.get("/most-5W-test", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MAX(pst.fifers) AS fifers FROM player_stats_test pst, player_info pi WHERE pi.id=pst.player_stats_test_id GROUP BY pi.id, pi.name ORDER BY pst.fifers DESC",
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    }),

    most5WOdi: app.get("/most-5W-odi", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MAX(pso.fifers) AS fifers FROM player_stats_odi pso, player_info pi WHERE pi.id=pso.player_stats_odi_id GROUP BY pi.id, pi.name ORDER BY pso.fifers DESC",
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    }),

    most5WT20: app.get("/most-5W-t20", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MAX(ps2.fifers) AS fifers FROM player_stats_t20 ps2, player_info pi WHERE pi.id=ps2.player_stats_t20_id GROUP BY pi.id, pi.name ORDER BY ps2.fifers DESC",
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

  most10W: {
    most10WTest: app.get("/most-10W-test", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MAX(pst.ten_wickets) AS ten_wickets FROM player_stats_test pst, player_info pi WHERE pi.id=pst.player_stats_test_id GROUP BY pi.id, pi.name ORDER BY pst.ten_wickets DESC",
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    }),

    most10WOdi: app.get("/most-10W-odi", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MAX(pso.ten_wickets) AS ten_wickets FROM player_stats_odi pso, player_info pi WHERE pi.id=pso.player_stats_odi_id GROUP BY pi.id, pi.name ORDER BY pso.ten_wickets DESC",
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    }),

    most10WT20: app.get("/most-10W-t20", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MAX(ps2.ten_wickets) AS ten_wickets FROM player_stats_t20 ps2, player_info pi WHERE pi.id=ps2.player_stats_t20_id GROUP BY pi.id, pi.name ORDER BY ps2.ten_wickets DESC",
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

  mostInningsBowled: {
    mostInningsBowledTest: app.get("/most-innings-bowled-test", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MAX(pst.inningsB) AS inningsB FROM player_stats_test pst, player_info pi WHERE pi.id=pst.player_stats_test_id GROUP BY pi.id, pi.name ORDER BY pst.inningsB DESC",
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    }),

    mostInningsBowledOdi: app.get("/most-innings-bowled-odi", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MAX(pso.inningsB) AS inningsB FROM player_stats_odi pso, player_info pi WHERE pi.id=pso.player_stats_odi_id GROUP BY pi.id, pi.name ORDER BY pso.inningsB DESC",
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    }),

    mostInningsBowledT20: app.get("/most-innings-bowled-t20", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MAX(ps2.inningsB) AS inningsB FROM player_stats_t20 ps2, player_info pi WHERE pi.id=ps2.player_stats_t20_id GROUP BY pi.id, pi.name ORDER BY ps2.inningsB DESC",
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

  mostBallsBowled: {
    mostBallsBowledTest: app.get("/most-balls-bowled-test", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MAX(pst.balls_bowled) AS balls_bowled FROM player_stats_test pst, player_info pi WHERE pi.id=pst.player_stats_test_id GROUP BY pi.id, pi.name ORDER BY pst.balls_bowled DESC",
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    }),

    mostBallsBowledOdi: app.get("/most-balls-bowled-odi", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MAX(pso.balls_bowled) AS balls_bowled FROM player_stats_odi pso, player_info pi WHERE pi.id=pso.player_stats_odi_id GROUP BY pi.id, pi.name ORDER BY pso.balls_bowled DESC",
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    }),

    mostBallsBowledT20: app.get("/most-balls-bowled-t20", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MAX(ps2.balls_bowled) AS balls_bowled FROM player_stats_t20 ps2, player_info pi WHERE pi.id=ps2.player_stats_t20_id GROUP BY pi.id, pi.name ORDER BY ps2.balls_bowled DESC",
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

  mostRunsConceded: {
    mostRunsConcededTest: app.get("/most-runs-conceded-test", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MAX(pst.runsB) AS runsB FROM player_stats_test pst, player_info pi WHERE pi.id=pst.player_stats_test_id GROUP BY pi.id, pi.name ORDER BY pst.runsB DESC",
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    }),

    mostRunsConcededOdi: app.get("/most-runs-conceded-odi", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MAX(pso.runsB) AS runsB FROM player_stats_odi pso, player_info pi WHERE pi.id=pso.player_stats_odi_id GROUP BY pi.id, pi.name ORDER BY pso.runsB DESC",
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    }),

    mostRunsConcededT20: app.get("/most-runs-conceded-t20", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MAX(ps2.runsB) AS runsB FROM player_stats_t20 ps2, player_info pi WHERE pi.id=ps2.player_stats_t20_id GROUP BY pi.id, pi.name ORDER BY ps2.runsB DESC",
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

  bestBowlingStrikeRate: {
    bestBowlingStrikeRateTest: app.get(
      "/best-bowling-strike-rate-test",
      (req, res) => {
        db.query(
          "SELECT pi.id, pi.name, MIN(pst.strike_rateB) AS strike_rateB FROM player_stats_test pst, player_info pi WHERE pi.id=pst.player_stats_test_id GROUP BY pi.id, pi.name, pst.inningsB HAVING pst.inningsB > 50 ORDER BY pst.strike_rateB DESC",
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send(result);
            }
          }
        );
      }
    ),

    bestBowlingStrikeRateOdi: app.get(
      "/best-bowling-strike-rate-odi",
      (req, res) => {
        db.query(
          "SELECT pi.id, pi.name, MIN(pso.strike_rateB) AS strike_rateB FROM player_stats_odi pso, player_info pi WHERE pi.id=pso.player_stats_odi_id GROUP BY pi.id, pi.name, pso.inningsB HAVING pso.inningsB > 50 ORDER BY pso.strike_rateB DESC",
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send(result);
            }
          }
        );
      }
    ),

    bestBowlingStrikeRateT20: app.get(
      "/best-bowling-strike-rate-t20",
      (req, res) => {
        db.query(
          "SELECT pi.id, pi.name, MIN(ps2.strike_rateB) AS strike_rateB FROM player_stats_t20 ps2, player_info pi WHERE pi.id=ps2.player_stats_t20_id GROUP BY pi.id, pi.name, ps2.inningsB HAVING ps2.inningsB > 20 ORDER BY ps2.strike_rateB DESC",
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send(result);
            }
          }
        );
      }
    ),
  },
  
  bestBowlingAverage: {
    bestBowlingAverageTest: app.get(
      "/best-bowling-average-test",
      (req, res) => {
        db.query(
          "SELECT pi.id, pi.name, MIN(pst.averageB) AS averageB FROM player_stats_test pst, player_info pi WHERE pi.id=pst.player_stats_test_id GROUP BY pi.id, pi.name, pst.inningsB HAVING pst.inningsB > 50 ORDER BY pst.averageB DESC",
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send(result);
            }
          }
        );
      }
    ),

    besBowlingtAverageOdi: app.get("/best-bowling-average-odi", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MIN(pso.averageB) AS averageB FROM player_stats_odi pso, player_info pi WHERE pi.id=pso.player_stats_odi_id GROUP BY pi.id, pi.name, pso.inningsB HAVING pso.inningsB > 50 ORDER BY pso.averageB DESC",
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    }),

    bestBowlingAverageT20: app.get("/best-bowling-average-t20", (req, res) => {
      db.query(
        "SELECT pi.id, pi.name, MIN(ps2.averageB) AS averageB FROM player_stats_t20 ps2, player_info pi WHERE pi.id=ps2.player_stats_t20_id GROUP BY pi.id, pi.name, ps2.inningsB HAVING ps2.inningsB > 20 ORDER BY ps2.averageB DESC",
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

module.exports =  bowlingRecords;
