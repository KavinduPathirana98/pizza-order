import axios from "axios";
import { API_URL } from "../constants";

export const GetPizza = async (userId) => {
  const response = await axios
    .get(API_URL + "pizza/" + userId)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return response;
};
export const ChangeFavourite = async (id, bool) => {
  const response = await axios
    .put(API_URL + "pizza/fav/" + id + "/" + bool + "", {})
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return response;
};
export const SavePizza = async (model) => {
  const response = await axios
    .post(API_URL + "pizza/add", model)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return response;
};
