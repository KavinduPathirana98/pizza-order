import axios from "axios";
import { API_URL } from "../constants";

export const SaveFeedback = async (model) => {
  const response = await axios
    .post(API_URL + "feedback/add", model)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
  return response;
};
