import { SERVER_ACTIONS } from "../../Utils/Constants";
import HttpRequest from "../../Utils/HttpRequest";

//////////TEAM/////////
export function saveTeamToList(data, formAction) {
  return new HttpRequest(`${SERVER_ACTIONS.ADD_TEAM}`, "POST", data)
    .requestWithAuthentication()
    .then(
      (response) => {
        alert("Team Added/Updated To DataBase Successfully !");
        return Promise.resolve(response.data);
      },
      (error) => {
        alert("Error in Adding Team To DataBase !");
        return Promise.reject(error);
      }
    );
}

export function getAllTeamsList() {
  return new HttpRequest(`${SERVER_ACTIONS.GET_ALL_TEAMS}`, "GET")
    .requestWithAuthentication()
    .then(
      (response) => {
        return Promise.resolve(response.data);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
}

export function getTeamPlayersByTeam(id) {
  return new HttpRequest(`${SERVER_ACTIONS.GET_TEAM_PLAYERS}/${id}`, "GET")
    .requestWithAuthentication()
    .then(
      (response) => {
        return Promise.resolve(response.data);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
}

export function getTeamPlayersById(id) {
  return new HttpRequest(`${SERVER_ACTIONS.GET_TEAM_PLAYER_INFO}/${id}`, "GET")
    .requestWithAuthentication()
    .then(
      (response) => {
        return Promise.resolve(response.data);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
}

export function getTeamPlayersStatsTestById(id) {
  return new HttpRequest(
    `${SERVER_ACTIONS.GET_TEAM_PLAYER_STATS_TEST}/${id}`,
    "GET"
  )
    .requestWithAuthentication()
    .then(
      (response) => {
        return Promise.resolve(response.data);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
}

export function getTeamPlayersStatsOdiById(id) {
  return new HttpRequest(
    `${SERVER_ACTIONS.GET_TEAM_PLAYER_STATS_ODI}/${id}`,
    "GET"
  )
    .requestWithAuthentication()
    .then(
      (response) => {
        return Promise.resolve(response.data);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
}

export function getTeamPlayersStatsT20ById(id) {
  return new HttpRequest(
    `${SERVER_ACTIONS.GET_TEAM_PLAYER_STATS_T20}/${id}`,
    "GET"
  )
    .requestWithAuthentication()
    .then(
      (response) => {
        return Promise.resolve(response.data);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
}

//////////STADIUM/////////
export function saveStadiumToList(data, formAction) {
  return new HttpRequest(`${SERVER_ACTIONS.ADD_STADIUM}`, "POST", data)
    .requestWithAuthentication()
    .then(
      (response) => {
        alert("Stadium Added/Updated To DataBase Successfully !");
        return Promise.resolve(response.data);
      },
      (error) => {
        alert("Error in Adding Stadium To DataBase !");
        return Promise.reject(error);
      }
    );
}

export function getAllStadiumsList() {
  return new HttpRequest(`${SERVER_ACTIONS.GET_ALL_STADIUMS}`, "GET")
    .requestWithAuthentication()
    .then(
      (response) => {
        return Promise.resolve(response.data);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
}

export function getStadiumById(id) {
  return new HttpRequest(`${SERVER_ACTIONS.GET_THE_STADIUM}/${id}`, "GET")
    .requestWithAuthentication()
    .then(
      (response) => {
        return Promise.resolve(response.data);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
}

//////////BATTINGSTYLE/////////
export function saveBattingStylesToList(data, formAction) {
  return new HttpRequest(`${SERVER_ACTIONS.ADD_BATTING_STYLE}`, "POST", data)
    .requestWithAuthentication()
    .then(
      (response) => {
        alert("BattingStyle Added/Updated To DataBase Successfully !");
        return Promise.resolve(response.data);
      },
      (error) => {
        alert("Error in Adding BattingStyle To DataBase !");
        return Promise.reject(error);
      }
    );
}

//////////BOWLINGSTYLE/////////
export function saveBowlingStylesToList(data, formAction) {
  return new HttpRequest(`${SERVER_ACTIONS.ADD_BOWLING_STYLE}`, "POST", data)
    .requestWithAuthentication()
    .then(
      (response) => {
        alert("BowlingStyle Added/Updated To DataBase Successfully !");
        return Promise.resolve(response.data);
      },
      (error) => {
        alert("Error in Adding BowlingStyle To DataBase !");
        return Promise.reject(error);
      }
    );
}

//////////ROLE/////////
export function saveRoleToList(data, formAction) {
  return new HttpRequest(`${SERVER_ACTIONS.ADD_ROLE}`, "POST", data)
    .requestWithAuthentication()
    .then(
      (response) => {
        alert("Role Added/Updated To DataBase Successfully !");
        return Promise.resolve(response.data);
      },
      (error) => {
        alert("Error in Adding Role To DataBase !");
        return Promise.reject(error);
      }
    );
}

//////////PLAYER_INFO/////////
export function savePlayerInfoToList(data, formAction) {
  return new HttpRequest(`${SERVER_ACTIONS.ADD_PLAYER_INFO}`, "POST", data)
    .requestWithAuthentication()
    .then(
      (response) => {
        alert("Player Added/Updated To DataBase Successfully !");
        return Promise.resolve(response.data);
      },
      (error) => {
        alert("Error in Adding Player To DataBase !");
        return Promise.reject(error);
      }
    );
}

export function getPlayerInfoList() {
  return new HttpRequest(`${SERVER_ACTIONS.GET_PLAYER_INFO}`, "GET")
    .requestWithAuthentication()
    .then(
      (response) => {
        return Promise.resolve(response.data);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
}

//////////PLAYER_STATS/////////
export function savePlayerStatstestToList(data, formAction) {
  return new HttpRequest(
    `${SERVER_ACTIONS.ADD_PLAYER_STATS_TEST}`,
    "POST",
    data
  )
    .requestWithAuthentication()
    .then(
      (response) => {
        alert("Player test stats Added/Updated To DataBase Successfully !");
        return Promise.resolve(response.data);
      },
      (error) => {
        alert("Error in Adding Player test stats To DataBase !");
        return Promise.reject(error);
      }
    );
}

export function savePlayerStatsOdiToList(data, formAction) {
  return new HttpRequest(`${SERVER_ACTIONS.ADD_PLAYER_STATS_ODI}`, "POST", data)
    .requestWithAuthentication()
    .then(
      (response) => {
        alert("Player odi stats Added/Updated To DataBase Successfully !");
        return Promise.resolve(response.data);
      },
      (error) => {
        alert("Error in Adding Player odi stats To DataBase !");
        return Promise.reject(error);
      }
    );
}

export function savePlayerStatsT20ToList(data, formAction) {
  return new HttpRequest(`${SERVER_ACTIONS.ADD_PLAYER_STATS_T20}`, "POST", data)
    .requestWithAuthentication()
    .then(
      (response) => {
        alert("Player t20 stats Added/Updated To DataBase Successfully !");
        return Promise.resolve(response.data);
      },
      (error) => {
        alert("Error in Adding Player t20 stats To DataBase !");
        return Promise.reject(error);
      }
    );
}

//////////RECORDS/////////
/////MOST_RUNS/////
export function getMostRunsTestList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_RUNS_TEST}`, "GET")
    .requestWithAuthentication()
    .then(
      (response) => {
        return Promise.resolve(response.data);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
}

export function getMostRunsOdiList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_RUNS_ODI}`, "GET")
    .requestWithAuthentication()
    .then(
      (response) => {
        return Promise.resolve(response.data);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
}

export function getMostRunsT20List() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_RUNS_T20}`, "GET")
    .requestWithAuthentication()
    .then(
      (response) => {
        return Promise.resolve(response.data);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
}

/////MOST_RUNS/////
export function getMostSixesTestList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_SIXES_TEST}`, "GET")
    .requestWithAuthentication()
    .then(
      (response) => {
        return Promise.resolve(response.data);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
}

export function getMostSixesOdiList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_SIXES_ODI}`, "GET")
    .requestWithAuthentication()
    .then(
      (response) => {
        return Promise.resolve(response.data);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
}

export function getMostSixesT20List() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_SIXES_T20}`, "GET")
    .requestWithAuthentication()
    .then(
      (response) => {
        return Promise.resolve(response.data);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
}