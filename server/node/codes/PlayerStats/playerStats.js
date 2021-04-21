const express = require("express");
const app = express();
const db = require("../../dbConfig/dbConfig");

const playerStats = {
  addPlayerStatsTest: app.post("/add-player-stats-test", (req, res) => {
    const id = req.body.id;
    const player_stats_test_id = req.body.player_stats_test_id;
    const matches = req.body.matches;
    const innings = req.body.innings;
    const no_of_notOuts = req.body.no_of_notOuts;
    const runs = req.body.runs;
    const high_score = req.body.high_score;
    const average = req.body.average;
    const balls_faced = req.body.balls_faced;
    const strike_rate = req.body.strike_rate;
    const hundreds = req.body.hundreds;
    const double_hundreds = req.body.double_hundreds;
    const fifties = req.body.fifties;
    const fours = req.body.fours;
    const sixes = req.body.sixes;
    const ducks = req.body.ducks;
    const matchesB = req.body.matchesB;
    const inningsB = req.body.inningsB;
    const balls_bowled = req.body.balls_bowled;
    const runsB = req.body.runsB;
    const maidens = req.body.maidens;
    const wickets = req.body.wickets;
    const bBBI = req.body.bBBI;
    const bBBM = req.body.bBBM;
    const economy = req.body.economy;
    const averageB = req.body.averageB;
    const strike_rateB = req.body.strike_rateB;
    const four_fers = req.body.four_fers;
    const fifers = req.body.fifers;
    const ten_wickets = req.body.ten_wickets;

    if (id === "" || id == null) {
      db.query(
        "INSERT INTO player_stats_test (player_stats_test_id, matches, innings, no_of_notOuts, runs, high_score, average, balls_faced, strike_rate, hundreds, double_hundreds, fifties, fours, sixes, ducks, matchesB, inningsB, balls_bowled, runsB, maidens, wickets, bBBI, bBBM, economy, averageB, strike_rateB, four_fers, fifers, ten_wickets) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [
          player_stats_test_id,
          matches,
          innings,
          no_of_notOuts,
          runs,
          high_score,
          average,
          balls_faced,
          strike_rate,
          hundreds,
          double_hundreds,
          fifties,
          fours,
          sixes,
          ducks,
          matchesB,
          inningsB,
          balls_bowled,
          runsB,
          maidens,
          wickets,
          bBBI,
          bBBM,
          economy,
          averageB,
          strike_rateB,
          four_fers,
          fifers,
          ten_wickets,
        ],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send("Values Inserted");
          }
        }
      );
    } else {
      db.query(
        "UPDATE player_stats_test SET player_stats_test_id = ?, matches = ?, innings = ?, no_of_notOuts = ?, runs = ?, high_score = ?, average = ?, balls_faced = ?, strike_rate = ?,  hundreds = ?, double_hundreds = ?, fifties = ?, fours = ?, sixes = ?, ducks = ?, matchesB=?, inningsB = ?, balls_bowled = ?, runsB =?, maidens = ?, wickets = ?, bBBI = ?, bBBM = ?, economy = ?, averageB = ?, strike_rateB = ?, four_fers = ?, fifers = ?, ten_wickets =? WHERE id = ?",
        [
          player_stats_test_id,
          matches,
          innings,
          no_of_notOuts,
          runs,
          high_score,
          average,
          balls_faced,
          strike_rate,
          hundreds,
          double_hundreds,
          fifties,
          fours,
          sixes,
          ducks,
          matchesB,
          inningsB,
          balls_bowled,
          runsB,
          maidens,
          wickets,
          bBBI,
          bBBM,
          economy,
          averageB,
          strike_rateB,
          four_fers,
          fifers,
          ten_wickets,
          id,
        ],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    }
  }),

  addPlayerStatsOdi: app.post("/add-player-stats-odi", (req, res) => {
    const id = req.body.id;
    const player_stats_odi_id = req.body.player_stats_odi_id;
    const matches = req.body.matches;
    const innings = req.body.innings;
    const no_of_notOuts = req.body.no_of_notOuts;
    const runs = req.body.runs;
    const high_score = req.body.high_score;
    const average = req.body.average;
    const balls_faced = req.body.balls_faced;
    const strike_rate = req.body.strike_rate;
    const hundreds = req.body.hundreds;
    const double_hundreds = req.body.double_hundreds;
    const fifties = req.body.fifties;
    const fours = req.body.fours;
    const sixes = req.body.sixes;
    const ducks = req.body.ducks;
    const matchesB = req.body.matchesB;
    const inningsB = req.body.inningsB;
    const balls_bowled = req.body.balls_bowled;
    const runsB = req.body.runsB;
    const maidens = req.body.maidens;
    const wickets = req.body.wickets;
    const bBBI = req.body.bBBI;
    const bBBM = req.body.bBBM;
    const economy = req.body.economy;
    const averageB = req.body.averageB;
    const strike_rateB = req.body.strike_rateB;
    const four_fers = req.body.four_fers;
    const fifers = req.body.fifers;
    const ten_wickets = req.body.ten_wickets;

    if (id === "" || id == null) {
      db.query(
        "INSERT INTO player_stats_odi (player_stats_odi_id, matches, innings, no_of_notOuts, runs, high_score, average, balls_faced, strike_rate, hundreds, double_hundreds, fifties, fours, sixes, ducks, matchesB, inningsB, balls_bowled, runsB, maidens, wickets, bBBI, bBBM, economy, averageB, strike_rateB, four_fers, fifers, ten_wickets) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [
          player_stats_odi_id,
          matches,
          innings,
          no_of_notOuts,
          runs,
          high_score,
          average,
          balls_faced,
          strike_rate,
          hundreds,
          double_hundreds,
          fifties,
          fours,
          sixes,
          ducks,
          matchesB,
          inningsB,
          balls_bowled,
          runsB,
          maidens,
          wickets,
          bBBI,
          bBBM,
          economy,
          averageB,
          strike_rateB,
          four_fers,
          fifers,
          ten_wickets,
        ],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send("Values Inserted");
          }
        }
      );
    } else {
      db.query(
        "UPDATE player_stats_odi SET player_stats_odi_id = ?, matches = ?, innings = ?, no_of_notOuts = ?, runs = ?, high_score = ?, average = ?, balls_faced = ?, strike_rate = ?,  hundreds = ?, double_hundreds = ?, fifties = ?, fours = ?, sixes = ?, ducks = ?, matchesB=?, inningsB = ?, balls_bowled = ?, runsB =?, maidens = ?, wickets = ?, bBBI = ?, bBBM = ?, economy = ?, averageB = ?, strike_rateB = ?, four_fers = ?, fifers = ?, ten_wickets =? WHERE id = ?",
        [
          player_stats_odi_id,
          matches,
          innings,
          no_of_notOuts,
          runs,
          high_score,
          average,
          balls_faced,
          strike_rate,
          hundreds,
          double_hundreds,
          fifties,
          fours,
          sixes,
          ducks,
          matchesB,
          inningsB,
          balls_bowled,
          runsB,
          maidens,
          wickets,
          bBBI,
          bBBM,
          economy,
          averageB,
          strike_rateB,
          four_fers,
          fifers,
          ten_wickets,
          id,
        ],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    }
  }),

  addPlayerStatsT20: app.post("/add-player-stats-t20", (req, res) => {
    const id = req.body.id;
    const player_stats_t20_id = req.body.player_stats_t20_id;
    const matches = req.body.matches;
    const innings = req.body.innings;
    const no_of_notOuts = req.body.no_of_notOuts;
    const runs = req.body.runs;
    const high_score = req.body.high_score;
    const average = req.body.average;
    const balls_faced = req.body.balls_faced;
    const strike_rate = req.body.strike_rate;
    const hundreds = req.body.hundreds;
    const double_hundreds = req.body.double_hundreds;
    const fifties = req.body.fifties;
    const fours = req.body.fours;
    const sixes = req.body.sixes;
    const ducks = req.body.ducks;
    const matchesB = req.body.matchesB;
    const inningsB = req.body.inningsB;
    const balls_bowled = req.body.balls_bowled;
    const runsB = req.body.runsB;
    const maidens = req.body.maidens;
    const wickets = req.body.wickets;
    const bBBI = req.body.bBBI;
    const bBBM = req.body.bBBM;
    const economy = req.body.economy;
    const averageB = req.body.averageB;
    const strike_rateB = req.body.strike_rateB;
    const four_fers = req.body.four_fers;
    const fifers = req.body.fifers;
    const ten_wickets = req.body.ten_wickets;

    if (id === "" || id == null) {
      db.query(
        "INSERT INTO player_stats_t20 (player_stats_t20_id, matches, innings, no_of_notOuts, runs, high_score, average, balls_faced, strike_rate, hundreds, double_hundreds, fifties, fours, sixes, ducks, matchesB, inningsB, balls_bowled, runsB, maidens, wickets, bBBI, bBBM, economy, averageB, strike_rateB, four_fers, fifers, ten_wickets) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [
          player_stats_t20_id,
          matches,
          innings,
          no_of_notOuts,
          runs,
          high_score,
          average,
          balls_faced,
          strike_rate,
          hundreds,
          double_hundreds,
          fifties,
          fours,
          sixes,
          ducks,
          matchesB,
          inningsB,
          balls_bowled,
          runsB,
          maidens,
          wickets,
          bBBI,
          bBBM,
          economy,
          averageB,
          strike_rateB,
          four_fers,
          fifers,
          ten_wickets,
        ],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send("Values Inserted");
          }
        }
      );
    } else {
      db.query(
        "UPDATE player_stats_t20 SET player_stats_t20_id = ?, matches = ?, innings = ?, no_of_notOuts = ?, runs = ?, high_score = ?, average = ?, balls_faced = ?, strike_rate = ?,  hundreds = ?, double_hundreds = ?, fifties = ?, fours = ?, sixes = ?, ducks = ?, matchesB=?, inningsB = ?, balls_bowled = ?, runsB = ?, maidens = ?, wickets = ?, bBBI = ?, bBBM = ?, economy = ?, averageB = ?, strike_rateB = ?, four_fers = ?, fifers = ?, ten_wickets =? WHERE id = ?",
        [
          player_stats_t20_id,
          matches,
          innings,
          no_of_notOuts,
          runs,
          high_score,
          average,
          balls_faced,
          strike_rate,
          hundreds,
          double_hundreds,
          fifties,
          fours,
          sixes,
          ducks,
          matchesB,
          inningsB,
          balls_bowled,
          runsB,
          maidens,
          wickets,
          bBBI,
          bBBM,
          economy,
          averageB,
          strike_rateB,
          four_fers,
          fifers,
          ten_wickets,
          id,
        ],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    }
  }),
};

module.exports = playerStats;
