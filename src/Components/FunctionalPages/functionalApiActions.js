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

///////////////RECORDS/////////////////
/////BATTING_RECORDS/////
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

/////MOST_SIXES/////
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

/////MOST_FOURS/////
export function getMostFoursTestList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_FOURS_TEST}`, "GET")
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

export function getMostFoursOdiList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_FOURS_ODI}`, "GET")
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

export function getMostFoursT20List() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_FOURS_T20}`, "GET")
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

/////MOST_FIFTIES/////
export function getMostFiftiesTestList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_FIFTIES_TEST}`, "GET")
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

export function getMostFiftiesOdiList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_FIFTIES_ODI}`, "GET")
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

export function getMostFiftiesT20List() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_FIFTIES_T20}`, "GET")
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

/////MOST_CENTURIES/////
export function getMostCenturiesTestList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_CENTURIES_TEST}`, "GET")
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

export function getMostCenturiesOdiList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_CENTURIES_ODI}`, "GET")
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

export function getMostCenturiesT20List() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_CENTURIES_T20}`, "GET")
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

/////MOST_DOUBLE_HUNDREDS/////
export function getMostDoubleHundredsTestList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_DOUBLE_HUNDREDS_TEST}`, "GET")
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

export function getMostDoubleHundredsOdiList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_DOUBLE_HUNDREDS_ODI}`, "GET")
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

export function getMostDoubleHundredsT20List() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_DOUBLE_HUNDREDS_T20}`, "GET")
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

/////HIGHEST_SCORES/////
export function getMostHighScoresTestList() {
  return new HttpRequest(`${SERVER_ACTIONS.HIGHEST_SCORE_TEST}`, "GET")
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

export function getMostHighScoresOdiList() {
  return new HttpRequest(`${SERVER_ACTIONS.HIGHEST_SCORE_ODI}`, "GET")
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

export function getMostHighScoresT20List() {
  return new HttpRequest(`${SERVER_ACTIONS.HIGHEST_SCORE_T20}`, "GET")
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

/////MOST_NOT_OUTS/////
export function getMostNotOutsTestList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_NOT_OUTS_TEST}`, "GET")
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

export function getMostNotOutsOdiList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_NOT_OUTS_ODI}`, "GET")
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

export function getMostNotOutsT20List() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_NOT_OUTS_T20}`, "GET")
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

/////MOST_MATCHES/////
export function getMostMatchesTestList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_MATCHES_TEST}`, "GET")
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

export function getMostMatchesOdiList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_MATCHES_ODI}`, "GET")
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

export function getMostMatchesT20List() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_MATCHES_T20}`, "GET")
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

/////MOST_BALLS_FACED/////
export function getMostBallsFacedTestList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_BALLS_FACED_TEST}`, "GET")
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

export function getMostBallsFacedOdiList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_BALLS_FACED_ODI}`, "GET")
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

export function getMostBallsFacedT20List() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_BALLS_FACED_T20}`, "GET")
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

/////BEST_STRIKE_RATE/////
export function getBestStrikeRateTestList() {
  return new HttpRequest(`${SERVER_ACTIONS.BEST_STRIKE_RATE_TEST}`, "GET")
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

export function getBestStrikeRateOdiList() {
  return new HttpRequest(`${SERVER_ACTIONS.BEST_STRIKE_RATE_ODI}`, "GET")
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

export function getBestStrikeRateT20List() {
  return new HttpRequest(`${SERVER_ACTIONS.BEST_STRIKE_RATE_T20}`, "GET")
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

/////BEST_AVERAGE/////
export function getBestAverageTestList() {
  return new HttpRequest(`${SERVER_ACTIONS.BEST_AVERAGE_TEST}`, "GET")
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

export function getBestAverageOdiList() {
  return new HttpRequest(`${SERVER_ACTIONS.BEST_AVERAGE_ODI}`, "GET")
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

export function getBestAverageT20List() {
  return new HttpRequest(`${SERVER_ACTIONS.BEST_AVERAGE_T20}`, "GET")
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

/////MOST_INNINGS_BATTED/////
export function getMostInningsBattedTestList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_INNIGS_BATTED_TEST}`, "GET")
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

export function getMostInningsBattedOdiList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_INNIGS_BATTED_ODI}`, "GET")
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

export function getMostInningsBattedT20List() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_INNIGS_BATTED_T20}`, "GET")
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
/////BOWLING_RECORDS/////
/////MOST_WICKETS/////
export function getMostWicketsTestList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_WICKETS_TEST}`, "GET")
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

export function getMostWicketsOdiList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_WICKETS_ODI}`, "GET")
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

export function getMostWicketsT20List() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_WICKETS_T20}`, "GET")
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

/////BEST_BBI/////
export function getBestBBITestList() {
  return new HttpRequest(`${SERVER_ACTIONS.BEST_BBI_TEST}`, "GET")
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

export function getBestBBIOdiList() {
  return new HttpRequest(`${SERVER_ACTIONS.BEST_BBI_ODI}`, "GET")
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

export function getBestBBIT20List() {
  return new HttpRequest(`${SERVER_ACTIONS.BEST_BBI_T20}`, "GET")
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

/////BEST_BBM/////
export function getBestBBMTestList() {
  return new HttpRequest(`${SERVER_ACTIONS.BEST_BBM_TEST}`, "GET")
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

export function getBestBBMOdiList() {
  return new HttpRequest(`${SERVER_ACTIONS.BEST_BBM_ODI}`, "GET")
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

export function getBestBBMT20List() {
  return new HttpRequest(`${SERVER_ACTIONS.BEST_BBM_T20}`, "GET")
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

/////BEST_ECONOMY/////
export function getBestEconomyTestList() {
  return new HttpRequest(`${SERVER_ACTIONS.BEST_ECONOMY_TEST}`, "GET")
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

export function getBestEconomyOdiList() {
  return new HttpRequest(`${SERVER_ACTIONS.BEST_ECONOMY_ODI}`, "GET")
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

export function getBestEconomyT20List() {
  return new HttpRequest(`${SERVER_ACTIONS.BEST_ECONOMY_T20}`, "GET")
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

/////MOST_4W/////
export function getMost4WTestList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_4W_TEST}`, "GET")
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

export function getMost4WOdiList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_4W_ODI}`, "GET")
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

export function getMost4WT20List() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_4W_T20}`, "GET")
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

/////MOST_5W/////
export function getMost5WTestList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_5W_TEST}`, "GET")
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

export function getMost5WOdiList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_5W_ODI}`, "GET")
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

export function getMost5WT20List() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_5W_T20}`, "GET")
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

/////MOST_10W/////
export function getMost10WTestList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_10W_TEST}`, "GET")
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

export function getMost10WOdiList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_10W_ODI}`, "GET")
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

export function getMost10WT20List() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_10W_T20}`, "GET")
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

/////MOST_INNINGS_BOWLED/////
export function getMostInningsBowledTestList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_INNINGS_BOWLED_TEST}`, "GET")
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

export function getMostInningsBowledOdiList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_INNINGS_BOWLED_ODI}`, "GET")
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

export function getMostInningsBowledT20List() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_INNINGS_BOWLED_T20}`, "GET")
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

/////MOST_BALLS_BOWLED_TEST/////
export function getMostBallsBowledTestList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_BALLS_BOWLED_TEST}`, "GET")
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

export function getMostBallsBowledOdiList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_BALLS_BOWLED_ODI}`, "GET")
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

export function getMostBallsBowledT20List() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_BALLS_BOWLED_T20}`, "GET")
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

/////MOST_RUNS_CONCEDED/////
export function getMostRunsConcededTestList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_RUNS_CONCEDED_TEST}`, "GET")
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

export function getMostRunsConcededOdiList() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_RUNS_CONCEDED_ODI}`, "GET")
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

export function getMostRunsConcededT20List() {
  return new HttpRequest(`${SERVER_ACTIONS.MOST_RUNS_CONCEDED_T20}`, "GET")
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

/////BEST_BOWLING_STRIKE_RATE/////
export function getBestBowlingStrikeRateTestList() {
  return new HttpRequest(
    `${SERVER_ACTIONS.BEST_BOWLING_STRIKE_RATE_TEST}`,
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

export function getBestBowlingStrikeRateOdiList() {
  return new HttpRequest(
    `${SERVER_ACTIONS.BEST_BOWLING_STRIKE_RATE_ODI}`,
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

export function getBestBowlingStrikeRateT20List() {
  return new HttpRequest(
    `${SERVER_ACTIONS.BEST_BOWLING_STRIKE_RATE_T20}`,
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

/////BEST_AVERAGE/////
export function getBestBowlingAverageTestList() {
  return new HttpRequest(`${SERVER_ACTIONS.BEST_BOWLING_AVERAGE_TEST}`, "GET")
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

export function getBestBowlingAverageOdiList() {
  return new HttpRequest(`${SERVER_ACTIONS.BEST_BOWLING_AVERAGE_ODI}`, "GET")
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

export function getBestBowlingAverageT20List() {
  return new HttpRequest(`${SERVER_ACTIONS.BEST_BOWLING_AVERAGE_T20}`, "GET")
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
