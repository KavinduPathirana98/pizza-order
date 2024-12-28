import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { API_URL } from "../constants";
import { Col, Row } from "react-bootstrap";
import { Table } from "antd";

const Promotions = () => {
  const [promotions, setPromotions] = useState([]);
  useEffect(() => {
    getAllPromotions();
  }, []);
  const getAllPromotions = () => {
    axios
      .get(API_URL + "promotion/getall")
      .then((response) => {
        if (response.data.responseCode === 1) {
          setPromotions(response.data.data);
          console.log(response.data.data);
        } else {
        }
      })
      .catch((error) => {});
  };
  const columns = [
    {
      title: "Promotion",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Discount Price",
      dataIndex: "discountPrice",
      key: "discountPrice",
    },
  ];
  return (
    <Fragment>
      <Row className="mt-3">
        <Col md={3}></Col>
        <Col md={6} style={{ textAlign: "center" }}>
          <h1>Promotions</h1>
        </Col>
        <Col md={3}></Col>
      </Row>
      <Row className="mt-3">
        <Col md={3}></Col>
        <Col md={6}>
          <Table columns={columns} dataSource={promotions} />
        </Col>
        <Col md={3}></Col>
      </Row>
    </Fragment>
  );
};
export default Promotions;
