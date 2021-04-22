const express = require("express");
const app = express();
const db = require("../../dbConfig/dbConfig");

const playerInfo = {
  addPlayerInfo: app.post("/add-player-info", (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const birth_place = req.body.birth_place;
    const born = req.body.born;
    const role = req.body.role;
    const batting_style = req.body.batting_style;
    const bowling_style = req.body.bowling_style;
    const teams = req.body.teams;
    const description = req.body.description;
    const image = req.body.image;

    if (id === "" || id == null) {
      db.query(
        "INSERT INTO player_info (name, birth_place, born, role, batting_style, bowling_style, teams, description, image) VALUES (?,?,?,?,?,?,?,?,?)",
        [
          name,
          birth_place,
          born,
          role,
          batting_style,
          bowling_style,
          teams,
          description,
          image,
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
        "UPDATE player_info SET  name = ?, birth_place = ?, born = ?, role = ?, batting_style = ?, bowling_style=?, teams = ?, description = ?, image =?  WHERE id = ?",
        [
          name,
          birth_place,
          born,
          role,
          batting_style,
          bowling_style,
          teams,
          description,
          image,
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

  getPlayerInfo:app.get("/get-player-info", (req, res) => {
      db.query(
        "SELECT pi.* FROM player_info pi ORDER BY pi.id",
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
        }
      );
    }),

  addBattinStyle: app.post("/add-batting-style", (req, res) => {
    const id = req.body.id;
    const batting_style = req.body.batting_style;

    if (id === "" || id == null) {
      db.query(
        "INSERT INTO batting_style_info (batting_style) VALUES (?)",
        [batting_style],
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
        "UPDATE batting_style_info SET  batting_style = ? WHERE id = ?",
        [batting_style, id],
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

  addbowlingStyle: app.post("/add-bowling-style", (req, res) => {
    const id = req.body.id;
    const bowling_style = req.body.bowling_style;

    if (id === "" || id == null) {
      db.query(
        "INSERT INTO bowling_style_info (bowling_style) VALUES (?)",
        [bowling_style],
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
        "UPDATE bowling_style_info SET  bowling_style = ? WHERE id = ?",
        [bowling_style, id],
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

  addRole: app.post("/add-role", (req, res) => {
    const id = req.body.id;
    const role = req.body.role;

    if (id === "" || id == null) {
      db.query(
        "INSERT INTO role_info (role) VALUES (?)",
        [role],
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
        "UPDATE role_info SET  role = ? WHERE id = ?",
        [role, id],
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

module.exports = playerInfo;
