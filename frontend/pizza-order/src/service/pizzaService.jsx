import axios from "axios";
import { API_URL } from "../constants";

export const GetPizza = (userId) => {
  const response = axios
    .get(API_URL + "pizza/" + userId)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return response;
};
export const ChangeFavourite = (id, bool) => {
  const response = axios
    .put(API_URL + "pizza/fav/" + id + "/" + bool + "", {})
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return response;
};
