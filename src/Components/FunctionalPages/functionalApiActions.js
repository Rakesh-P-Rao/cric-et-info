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