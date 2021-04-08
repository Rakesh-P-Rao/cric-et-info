import { SERVER_ACTIONS } from "../../Utils/Constants";
import HttpRequest from "../../Utils/HttpRequest";

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