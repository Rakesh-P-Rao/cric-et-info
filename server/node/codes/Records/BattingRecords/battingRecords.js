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

  mostFours: {
    mostFoursTest: app.get("/most-fours-test", (req, res) => {
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
    }),

    mostFoursOdi: app.get("/most-fours-odi", (req, res) => {
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
    }),

    mostFoursT20: app.get("/most-fours-t20", (req, res) => {
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
    }),
  },

  mostFifties: {
    mostFiftiesTest: app.get("/most-fifties-test", (req, res) => {
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
    }),

    mostFiftiesOdi: app.get("/most-fifties-odi", (req, res) => {
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
    }),

    mostFiftiesT20: app.get("/most-fifties-t20", (req, res) => {
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
    }),
  },

  mostCenturies: {
    mostCenturiesTest: app.get("/most-centuries-test", (req, res) => {
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
}),

mostCenturiesOdi:app.get("/most-centuries-odi", (req, res) => {
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
}),

mostCenturiesT20:app.get("/most-centuries-t20", (req, res) => {
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
}),
  },

  mostDoubleCenturies: {
    mostDoubleCenturiesTest:app.get("/most-double-hundreds-test", (req, res) => {
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
}),

mostDoubleCenturiesOdi:app.get("/most-double-hundreds-odi", (req, res) => {
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
}),

mostDoubleCenturiesT20:app.get("/most-double-hundreds-t20", (req, res) => {
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
}),
  },

  highestScore: {
    highestScoreTest:app.get("/highest-score-test", (req, res) => {
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
}),

highestScoreOdi:app.get("/highest-score-odi", (req, res) => {
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
}),

highestScoreT20:app.get("/highest-score-t20", (req, res) => {
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
}),
  },

  mostNotOuts: {
    mostNotOutsTest:app.get("/most-not-outs-test", (req, res) => {
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
}),

mostNotOutsOdi:app.get("/most-not-outs-odi", (req, res) => {
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
}),

mostNotOutsT20:app.get("/most-not-outs-t20", (req, res) => {
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
}),
  },

  mostMatches: {
    mostMatchesTest:app.get("/most-matches-test", (req, res) => {
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
}),

mostMatchesOdi:app.get("/most-matches-odi", (req, res) => {
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
}),

mostMatchesT20:app.get("/most-matches-t20", (req, res) => {
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
}),
  },

  mostBallsFaced: {
    mostBallsFacedTest:app.get("/most-balls-faced-test", (req, res) => {
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
}),

mostBallsFacedOdi:app.get("/most-balls-faced-odi", (req, res) => {
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
}),

mostBallsFacedT20:app.get("/most-balls-faced-t20", (req, res) => {
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
}),
  },

  bestStrikeRate: {
    bestStrikeRateTest:app.get("/best-strike-rate-test", (req, res) => {
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
}),

bestStrikeRateOdi:app.get("/best-strike-rate-odi", (req, res) => {
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
}),

bestStrikeRateT20:app.get("/best-strike-rate-t20", (req, res) => {
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
}),
  },

  bestAverage: {
    bestAverageTest:app.get("/best-average-test", (req, res) => {
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
}),

bestAverageOdi:app.get("/best-average-odi", (req, res) => {
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
}),

bestAverageT20:app.get("/best-average-t20", (req, res) => {
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
}),
  },

  mostInningsBatted: {
    mostInningsBattedTest:app.get("/most-innings-batted-test", (req, res) => {
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
}),

mostInningsBattedOdi:app.get("/most-innings-batted-odi", (req, res) => {
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
}),

mostInningsBattedT20:app.get("/most-innings-batted-t20", (req, res) => {
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
}),
  },
};

module.exports = battingRecords;
