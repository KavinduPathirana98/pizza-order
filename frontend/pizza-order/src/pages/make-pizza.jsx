import { Button, Form, Input, Select } from "antd";
import { Fragment, useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Row,
} from "react-bootstrap";
import { msgRequired } from "../constants";
import { Option } from "antd/es/mentions";

const MakePizza = () => {
  const [bill, setBill] = useState(0);
  const [form] = Form.useForm();
  useEffect(() => {}, [bill]);

  const calculateBill = (value) => {
    if (value.includes("Tomato Sauce")) {
      setBill(bill + 10);
    }
    if (value.includes("BBQ Sauce")) {
      setBill(bill + 15);
    }
    if (value.includes("Chilli Sauce")) {
      setBill(bill + 5);
    }
    if (value == "Thin Crust") {
      setBill(bill + 150);
    }
    if (value == "Thick Crust") {
      setBill(bill + 200);
    }
    if (value.includes("Bacon")) {
      setBill(bill + 50);
    }
    if (value.includes("Peperoni")) {
      setBill(bill + 70);
    }
    if (value.includes("Mushrooms")) {
      setBill(bill + 40);
    }
    if (value.includes("Chedar Cheese")) {
      setBill(bill + 35);
    }
    if (value.includes("Mozeralla Cheese")) {
      setBill(bill + 40);
    }
    if (value.includes("Parmesan Cheese")) {
      setBill(bill + 50);
    }
    if (value == "Small") {
      setBill(bill + 500);
    }
    if (value == "Medium") {
      setBill(bill + 700);
    }
    if (value == "Large") {
      setBill(bill + 1000);
    }
    form.setFieldValue("price", bill);
  };

  return (
    <Fragment>
      <Row className="mt-3">
        <Col md={2}></Col>
        <Col md={8}>
          <Card>
            <CardHeader style={{ textAlign: "center" }}>
              Make Your Own Pizza
            </CardHeader>
            <CardBody>
              <Form form={form}>
                <Row>
                  <Col>
                    <FormGroup>
                      <label>Name</label>
                      <Form.Item
                        rules={[{ message: msgRequired, required: true }]}
                        name="name"
                      >
                        <Input />
                      </Form.Item>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <label>Crust</label>
                      <Form.Item
                        rules={[{ message: msgRequired, required: true }]}
                        name="crust"
                      >
                        <Select
                          onChange={(e) => {
                            calculateBill(e);
                          }}
                        >
                          <Option value="Thin Crust">Thin Crust</Option>
                          <Option value="Thick Crust">Thick Crust</Option>
                        </Select>
                      </Form.Item>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <label>Sauce</label>
                      <Form.Item
                        rules={[{ message: msgRequired, required: true }]}
                        name="sauce"
                      >
                        <Select
                          mode="multiple"
                          onChange={(e) => {
                            calculateBill(e);
                          }}
                        >
                          <Option value="Tomato Sauce">Tomato Sauce</Option>
                          <Option value="BBQ Sauce">BBQ Sauce</Option>
                          <Option value="Chilli Sauce">Chilli Sauce</Option>
                        </Select>
                      </Form.Item>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <label>Toppings</label>
                      <Form.Item
                        rules={[{ message: msgRequired, required: true }]}
                        name="toppings"
                      >
                        <Select
                          mode="multiple"
                          onChange={(e) => {
                            calculateBill(e);
                          }}
                        >
                          <Option value="Bacon">Bacon</Option>
                          <Option value="Peperoni">Peperoni</Option>
                          <Option value="Mushrooms">Mushrooms</Option>
                        </Select>
                      </Form.Item>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <label>Cheese</label>
                      <Form.Item
                        rules={[{ message: msgRequired, required: true }]}
                        name="cheese"
                      >
                        <Select
                          mode="multiple"
                          onChange={(e) => {
                            calculateBill(e);
                          }}
                        >
                          <Option value="Chedar Cheese">Chedar Cheese</Option>
                          <Option value="Mozeralla Cheese">
                            Mozeralla Cheese
                          </Option>
                          <Option value="Parmesan Cheese">
                            Parmesan Cheese
                          </Option>
                        </Select>
                      </Form.Item>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <label>Size</label>
                      <Form.Item
                        rules={[{ message: msgRequired, required: true }]}
                        name="size"
                      >
                        <Select
                          onChange={(e) => {
                            calculateBill(e);
                          }}
                        >
                          <Option value="Small">Small</Option>
                          <Option value="Medium">Medium</Option>
                          <Option value="Large">Large</Option>
                        </Select>
                      </Form.Item>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <label>Price</label>
                      <Form.Item
                        rules={[{ message: msgRequired, required: true }]}
                        name="price"
                      >
                        <Input disabled type="text" />
                      </Form.Item>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col style={{ textAlign: "center" }}>
                    <Button>Proceeed</Button>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Fragment>
  );
};
export default MakePizza;
