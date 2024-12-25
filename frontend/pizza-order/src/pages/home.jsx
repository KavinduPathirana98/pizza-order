import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChangeFavourite, GetPizza } from "../service/pizzaService";
import { toast } from "react-toastify";
import { toastFetchingError } from "../constants";
import { Button, Table } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";

const Home = () => {
  const navigate = useNavigate();
  const authenticated = localStorage.getItem("authenticated");
  const userId = JSON.parse(localStorage.getItem("user")).id;

  const [pizza, setPizza] = useState([]);

  useEffect(() => {
    if (!authenticated) {
      navigate("/");
    }
    getMyPizza();
  }, [authenticated]);
  const getMyPizza = async () => {
    await GetPizza(userId)
      .then((response) => {
        const arr = [];
        console.log(response.data.responseCode);
        if (response.data.responseCode === 1) {
          response.data.data.map((item) => {
            arr.push(item.id);
          });
          localStorage.setItem("pizzaIds", arr);
          setPizza(response.data.data);
        } else {
          toast.error(toastFetchingError);
        }
      })
      .catch((error) => {
        toast.error(toastFetchingError);
      });
  };
  const changeFavourite = async (model) => {
    await ChangeFavourite(model.id, !model.favourite).then((response) => {
      getMyPizza();
    });
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Crust",
      dataIndex: "crust",
      key: "crust",
    },
    {
      title: "Sause",
      dataIndex: "sauce",
      key: "sauce",
    },
    {
      title: "Topping",
      dataIndex: "toppings",
      key: "toppings",
    },
    {
      title: "Cheese",
      dataIndex: "cheese",
      key: "cheese",
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Favourite",
      render: (_, model) => {
        if (_ == true) {
          return (
            <Button
              onClick={() => {
                changeFavourite(model);
              }}
            >
              <FontAwesomeIcon icon={faHeart} style={{ color: "#fb2d09" }} />
            </Button>
          );
        } else {
          return (
            <Button
              onClick={() => {
                changeFavourite(model);
              }}
            >
              <FontAwesomeIcon icon={faHeart} />
            </Button>
          );
        }
      },
      dataIndex: "favourite",
      key: "favourite",
    },
  ];
  return (
    <Fragment>
      <Row className="mt-3">
        <Col md={3}></Col>
        <Col md={6} style={{ textAlign: "center" }}>
          <h1>My Pizzas</h1>
        </Col>
        <Col md={3}></Col>
      </Row>
      <Row className="mt-3">
        <Col md={3}></Col>
        <Col md={6}>
          <Table columns={columns} dataSource={pizza} />
        </Col>
        <Col md={3}></Col>
      </Row>
    </Fragment>
  );
};
export default Home;
