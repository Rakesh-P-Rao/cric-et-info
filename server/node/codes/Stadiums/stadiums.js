const express = require("express");
const app = express();
const db = require("../../dbConfig/dbConfig");

const stadiums = {
addStadium:app.post("/add-stadium", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const opened = req.body.opened;
  const capacity = req.body.capacity;
  const ends = req.body.ends;
  const city = req.body.city;
  const country = req.body.country;
  const home_to = req.body.home_to;
  const description = req.body.description;
  const image = req.body.image;

  if (id === "" || id == null) {
    db.query(
      "INSERT INTO stadium_info (name, opened, capacity, ends, city, country, home_to, description, image) VALUES (?,?,?,?,?,?,?,?,?)",
      [
        name,
        opened,
        capacity,
        ends,
        city,
        country,
        home_to,
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
      "UPDATE stadium_info SET  name = ?, opened = ?, capacity = ?, ends = ?, city = ?, country=?, home_to = ?, description = ?, image =?  WHERE id = ?",
      [
        name,
        opened,
        capacity,
        ends,
        city,
        country,
        home_to,
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

allStadiums:app.get("/all-stadiums", (req, res) => {
  db.query("SELECT * FROM stadium_info", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
}),

getStadium:app.get("/get-stadium/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT si.id, si.name, si.opened, si.capacity, si.ends, si.city, si.home_to, si.description, si.image, ti.team as country, ti.id as thisTeam_id FROM stadium_info si left join teams_info ti on ti.id=si.country WHERE si.id = ?",
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

module.exports = stadiums;
