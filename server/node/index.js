const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "cric@info",
});

//////////TEAM/////////
app.post("/add-team", (req, res) => {
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
});

app.get("/all-teams", (req, res) => {
  db.query(
    "SELECT * FROM teams_info",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.get("/get-team-players/:id", (req, res) => {
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
});

app.get("/get-team-player-info/:id", (req, res) => {
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
});

//////////STADIUM/////////
app.post("/add-stadium", (req, res) => {
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
      [name, opened, capacity, ends, city, country, home_to, description, image],
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
      [name, opened, capacity, ends, city, country, home_to, description, image, id],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
  }
});

app.get("/all-stadiums", (req, res) => {
  db.query("SELECT * FROM stadium_info", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/get-stadium/:id", (req, res) => {
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
});

//////////BATTINGSTYLE/////////
app.post("/add-batting-style", (req, res) => {
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
});

//////////BOWLINGSTYLE/////////
app.post("/add-bowling-style", (req, res) => {
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
});

//////////ROLE/////////
app.post("/add-role", (req, res) => {
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
});

//////////PLAYER_INFO///////////
app.post("/add-player-info", (req, res) => {
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
});

app.listen(3001, () => {
  console.log("$erver IS Running!!!!!!!!!");
});
