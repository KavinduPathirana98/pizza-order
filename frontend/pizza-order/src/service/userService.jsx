import axios from "axios";
import { API_URL } from "../constants";

export const UserLogin = (model) => {
  const response = axios
    .post(API_URL + "user/login", model)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return response;
};
