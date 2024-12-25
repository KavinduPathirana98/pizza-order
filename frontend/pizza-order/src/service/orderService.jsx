import axios from "axios";
import { API_URL } from "../constants";

export const SaveOrder = async (model, payment, delivery) => {
  const response = await axios
    .post(API_URL + "order/add/" + payment + "/" + delivery, model)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  return response;
};
export const viewMyOrders = async (ids) => {
  const response = await axios
    .get(API_URL + "order/viewMyOrders/" + ids)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
  return response;
};
