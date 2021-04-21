const express = require("express");
const app = express();
const db = require("../../../dbConfig/dbConfig");

const team = {
addTeam:app.post("/add-team", (req, res) => {
  const id = req.body.id;
  const team = req.body.team;
  const image = req.body.image;

  if (id === "" || id == null) {
    db.query(
      "INSERT INTO teams_info (team, image) VALUES (?,?)",
      [team, image],
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
      "UPDATE teams_info SET  team = ?, image =?  WHERE id = ?",
      [team, image, id],
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

allTeams:app.get("/all-teams", (req, res) => {
  db.query("SELECT * FROM teams_info", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
}),
};

module.exports = team;
