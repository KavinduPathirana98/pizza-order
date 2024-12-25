import { Fragment, useEffect, useState } from "react";
import { viewMyOrders } from "../service/orderService";
import { toastFetchingError } from "../constants";
import { toast } from "react-toastify";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const getMyOrders = async () => {
    await viewMyOrders(localStorage.getItem("pizzaIds"))
      .then((response) => {
        if (response.data.responseCode === 1) {
          console.log(response.data.data);
          setOrders(response.data.data);
        } else {
          toast.error(toastFetchingError);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(toastFetchingError);
      });
  };
  useEffect(() => {
    getMyOrders();
  }, []);
  return <Fragment></Fragment>;
};
export default Orders;
