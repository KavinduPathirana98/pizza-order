import { Fragment, useEffect, useState } from "react";
import { viewMyOrders } from "../service/orderService";
import {
  msgRequired,
  toastFetchingError,
  toastSaveSuccess,
} from "../constants";
import { toast } from "react-toastify";
import { Col, FormGroup, Row } from "react-bootstrap";
import { Button, Form, Modal, Table } from "antd";
import { EyeOutlined, StarOutlined } from "@ant-design/icons";
import { SaveFeedback } from "../service/feedbackService";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [pizza, setPizza] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState({});
  const [form] = Form.useForm();
  const orderColumns = [
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Delivery Type",
      render: (_) => {
        if (_ == 1) {
          return "Delivery";
        } else {
          return "Pickup";
        }
      },
      key: "type",
    },
    {
      title: "Status",
      render: (_, all) => {
        console.log(_);
        if (_.status == 0) {
          return "Placed";
        } else if (_.status == 1) {
          return "Preparing";
        } else if (_.status == 2) {
          return "Out for Delivery";
        } else if (_.status == 3) {
          return "Delivered";
        }
      },

      key: "status",
    },
    {
      title: "Telephone",
      dataIndex: "tp",
      key: "tp",
    },
    {
      title: "Actions",
      render: (_) => {
        return (
          <tr>
            <td>
              <Button
                onClick={() => {
                  showModalPizza(_);
                }}
              >
                <EyeOutlined />
              </Button>
            </td>
            <td>
              <Button
                onClick={() => {
                  showModalFeed(_);
                }}
              >
                <StarOutlined />
              </Button>
            </td>
          </tr>
        );
      },
      key: "id",
    },
  ];
  //   const pizzaColumns = [
  //     {
  //       title: "Name",
  //       dataIndex: "name",
  //       key: "name",
  //     },
  //     {
  //       title: "Crust",
  //       dataIndex: "crust",
  //       key: "crust",
  //     },
  //     {
  //       title: "Sause",
  //       dataIndex: "sauce",
  //       key: "sauce",
  //     },
  //     {
  //       title: "Topping",
  //       dataIndex: "toppings",
  //       key: "toppings",
  //     },
  //     {
  //       title: "Cheese",
  //       dataIndex: "cheese",
  //       key: "cheese",
  //     },
  //     {
  //       title: "Size",
  //       dataIndex: "size",
  //       key: "size",
  //     },
  //     {
  //       title: "Price",
  //       dataIndex: "price",
  //       key: "price",
  //     },
  //   ];
  const getMyOrders = async () => {
    await viewMyOrders(localStorage.getItem("pizzaIds"))
      .then((response) => {
        if (response.data.responseCode === 1) {
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
  const [feedbackModal, setFeedbackModal] = useState(false);
  const [pizzaModal, setPizzaModal] = useState(false);
  const showModalFeed = (data) => {
    setFeedbackModal(true);
    setSelectedOrder(data);
  };
  const handleOkFeed = async () => {
    try {
      const formValues = await form.validateFields();
      formValues.order = selectedOrder;
      await SaveFeedback(formValues).then((response) => {
        if (response.data.responseCode == 1) {
          toast.success(toastSaveSuccess);
        } else {
          toast.error(toastFetchingError);
        }
      });
    } catch (err) {
      toast.error(toastFetchingError);
    }

    setFeedbackModal(false);
    form.setFieldValue("description", "");
    form.setFieldValue("ratings", "");
  };
  const handleCancelFeed = () => {
    setFeedbackModal(false);
  };
  const showModalPizza = (data) => {
    setPizza(data.pizza);
    setPizzaModal(true);
  };
  const handleOkPizza = () => {
    setPizzaModal(false);
  };
  const handleCancelPizza = () => {
    setPizzaModal(false);
  };
  useEffect(() => {
    getMyOrders();
  }, []);
  return (
    <Fragment>
      <Modal
        title="Pizza Details"
        open={pizzaModal}
        onOk={handleOkPizza}
        onCancel={handleCancelPizza}
      >
        <p> Pizza Name : {pizza.name}</p>
        <p> Crust : {pizza.crust}</p>
        <p> Sauce : {pizza.sauce}</p>
        <p> Toppings : {pizza.toppings}</p>
        <p> Cheese : {pizza.cheese}</p>
        <p> Size : {pizza.size}</p>
        <p> Price : {pizza.price}</p>
      </Modal>
      <Modal
        title="Give a Feedback"
        open={feedbackModal}
        onOk={handleOkFeed}
        onCancel={handleCancelFeed}
      >
        <Form form={form}>
          <Row>
            <Col md={6}>
              <FormGroup>
                <label>Description</label>
                <Form.Item
                  name={"description"}
                  rules={[
                    {
                      message: msgRequired,
                      required: true,
                    },
                  ]}
                >
                  <textarea className="form-control" />
                </Form.Item>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <label>Rate Your Order (out of 5)</label>
                <Form.Item
                  name={"ratings"}
                  rules={[
                    {
                      message: msgRequired,
                      required: true,
                    },
                  ]}
                >
                  <input
                    className="form-control"
                    type="number"
                    max={5}
                    maxLength={1}
                  />
                </Form.Item>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </Modal>
      <Row className="mt-3">
        <Col md={3}></Col>
        <Col md={6} style={{ textAlign: "center" }}>
          <h1>My Orders</h1>
        </Col>
        <Col md={3}></Col>
      </Row>
      <Row className="mt-3">
        <Col md={3}></Col>
        <Col md={6}>
          <Table columns={orderColumns} dataSource={orders} />
        </Col>
        <Col md={3}></Col>
      </Row>
    </Fragment>
  );
};
export default Orders;
