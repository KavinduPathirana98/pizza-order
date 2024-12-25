import { Button, Form, Input, Select } from "antd";
import { Fragment, useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  FormGroup,
  Modal,
  Row,
  Form as reactForm,
} from "react-bootstrap";
import { msgRequired, toastSaveError, toastSaveSuccess } from "../constants";
import { Option } from "antd/es/mentions";
import { SavePizza } from "../service/pizzaService";
import { toast } from "react-toastify";
import { SaveOrder } from "../service/orderService";
import { SavePaymentMethod } from "../service/paymentService";
import { useNavigate } from "react-router-dom";

const MakePizza = () => {
  const [bill, setBill] = useState(0);
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [selectedDelivery, setSelectedDelivery] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");
  const [createdPizza, setCreatedPizza] = useState({});
  const navigate = useNavigate();
  const [form] = Form.useForm();
  useEffect(() => {}, [bill, formData]);

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

  const savePizza = async () => {
    try {
      setModal(true);
      const formValues = await form.validateFields();
      setFormData(formValues);
      formValues.user = JSON.parse(localStorage.getItem("user"));
      formValues.favourite = 0;
      formValues.sauce = formValues.sauce.toString();
      formValues.toppings = formValues.toppings.toString();
      formValues.cheese = formValues.cheese.toString();

      await SavePizza(formValues)
        .then((response) => {
          console.log(response);
          if (response.data.responseCode === 1) {
            toast.success(toastSaveSuccess);
            setCreatedPizza(response.data.data);
          } else {
            toast.error(toastSaveError);
          }
        })
        .catch((error) => {
          console.log(error);
          toast.error(toastSaveError);
        });
    } catch (err) {
      console.log(err);
    }
  };
  const savePaymentOrder = () => {
    let model = {
      address: address,
      type: selectedPayment,
      status: 0,
      tp: telephone,
      pizza: createdPizza,
    };

    SaveOrder(model, selectedPayment, formData.price)
      .then((response) => {
        if (response.data.responseCode === 1) {
          toast.success(toastSaveSuccess);
          setModal(false);
          navigate("/orders");
        } else {
          toast.error(toastSaveError);
        }
      })
      .catch((error) => {
        toast.error(toastSaveError);
      });
  };
  const [selectedMethod, setSelectedMethod] = useState("");

  const handleSelect = (method) => {
    setSelectedMethod(method);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Selected Payment Method: ${selectedMethod}`);
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
                    <Button
                      onClick={() => {
                        savePizza();
                      }}
                    >
                      Proceeed
                    </Button>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
        <Col md={2}></Col>
      </Row>

      <Modal
        size="lg"
        show={modal}
        onHide={() => setModal(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Order Summary & Payment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col style={{ textAlign: "center" }}>
              <h1>Order Summary</h1>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <Row>
            <Col sm={2}></Col>
            <Col sm={2}>Pizza Name : </Col>
            <Col sm={4}>{formData && formData.name}</Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={2}>Crust : </Col>
            <Col sm={4}>{formData && formData.crust}</Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={2}>Sauces : </Col>
            <Col sm={4}>
              {formData && formData.sauce && formData.sauce.toString()}
            </Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={2}>Toppings : </Col>
            <Col sm={4}>
              {formData && formData.toppings && formData.toppings.toString()}
            </Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={2}>Cheese : </Col>
            <Col sm={4}>
              {formData && formData.cheese && formData.cheese.toString()}
            </Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={2}>Size : </Col>
            <Col sm={4}>{formData && formData.size}</Col>
          </Row>
          <Row>
            <Col sm={2}></Col>
            <Col sm={2}>TotalPrice : </Col>
            <Col sm={4}>{formData && formData.price} LKR</Col>
          </Row>
          <br></br> <br></br>
          {/* <h1 style={{ textAlign: "center" }}>Select Payment Method</h1> */}
          <Container className="mt-5">
            <h2 className="text-center mb-4">Checkout</h2>
            <reactForm onSubmit={handleSubmit}>
              {/* Delivery Type Section */}
              <h4 className="mb-3">Choose Delivery Type</h4>
              <Row className="g-4">
                <Col md={6}>
                  <Card
                    className={`p-3 ${
                      selectedDelivery === "pickup"
                        ? "border-primary shadow"
                        : ""
                    }`}
                    onClick={() => setSelectedDelivery("pickup")}
                    style={{ cursor: "pointer" }}
                  >
                    <Card.Body className="text-center">
                      <reactForm.Check
                        type="radio"
                        name="deliveryType"
                        id="pickup"
                        value="pickup"
                        checked={selectedDelivery === "pickup"}
                        onChange={() => setSelectedDelivery("pickup")}
                        className="d-none"
                      />
                      <Card.Title>Pickup</Card.Title>
                      <Card.Text>Collect your order from our store.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card
                    className={`p-3 ${
                      selectedDelivery === "delivery"
                        ? "border-primary shadow"
                        : ""
                    }`}
                    onClick={() => setSelectedDelivery("delivery")}
                    style={{ cursor: "pointer" }}
                  >
                    <Card.Body className="text-center">
                      <reactForm.Check
                        type="radio"
                        name="deliveryType"
                        id="delivery"
                        value="delivery"
                        checked={selectedDelivery === "delivery"}
                        onChange={() => setSelectedDelivery("delivery")}
                        className="d-none"
                      />
                      <Card.Title>Delivery</Card.Title>
                      <Card.Text>
                        Get your order delivered to your doorstep.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              {/* Address and Telephone Inputs */}
              <div className="mt-4">
                <reactForm.Group controlId="address" className="mb-3">
                  <reactForm.Label>Address</reactForm.Label>
                  <reactForm.Control
                    type="text"
                    placeholder="Enter your address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </reactForm.Group>
                <reactForm.Group controlId="telephone" className="mb-3">
                  <reactForm.Label>Telephone Number</reactForm.Label>
                  <reactForm.Control
                    type="tel"
                    placeholder="Enter your phone number"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    required
                  />
                </reactForm.Group>
              </div>
              {/* Payment Method Section */}
              <h4 className="mt-5 mb-3">Choose Payment Method</h4>
              <Row className="g-4">
                <Col md={4}>
                  <Card
                    className={`p-3 ${
                      selectedPayment === 0 ? "border-primary shadow" : ""
                    }`}
                    onClick={() => setSelectedPayment(0)}
                    style={{ cursor: "pointer" }}
                  >
                    <Card.Body className="text-center">
                      <reactForm.Check
                        type="radio"
                        name="paymentMethod"
                        id="creditCard"
                        value="creditCard"
                        checked={selectedPayment === 0}
                        onChange={() => setSelectedPayment(0)}
                        className="d-none"
                      />
                      <Card.Img
                        variant="top"
                        src="https://via.placeholder.com/100x50?text=Card"
                        alt="Credit Card"
                        className="mb-3"
                      />
                      <Card.Title>Credit Card</Card.Title>
                      <Card.Text>
                        Pay securely using your credit card.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card
                    className={`p-3 ${
                      selectedPayment === 1 ? "border-primary shadow" : ""
                    }`}
                    onClick={() => setSelectedPayment(1)}
                    style={{ cursor: "pointer" }}
                  >
                    <Card.Body className="text-center">
                      <reactForm.Check
                        type="radio"
                        name="paymentMethod"
                        id="digitalWallet"
                        value="digitalWallet"
                        checked={selectedPayment === 1}
                        onChange={() => setSelectedPayment(1)}
                        className="d-none"
                      />
                      <Card.Img
                        variant="top"
                        src="https://via.placeholder.com/100x50?text=Wallet"
                        alt="Digital Wallet"
                        className="mb-3"
                      />
                      <Card.Title>Digital Wallet</Card.Title>
                      <Card.Text>Use your preferred digital wallet.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card
                    className={`p-3 ${
                      selectedPayment === 2 ? "border-primary shadow" : ""
                    }`}
                    onClick={() => setSelectedPayment(2)}
                    style={{ cursor: "pointer" }}
                  >
                    <Card.Body className="text-center">
                      <reactForm.Check
                        type="radio"
                        name="paymentMethod"
                        id="loyalty"
                        value="loyalty"
                        checked={selectedPayment === 2}
                        onChange={() => setSelectedPayment(2)}
                        className="d-none"
                      />
                      <Card.Img
                        variant="top"
                        src="https://via.placeholder.com/100x50?text=Loyalty"
                        alt="Loyalty"
                        className="mb-3"
                      />
                      <Card.Title>Loyalty</Card.Title>
                      <Card.Text>Redeem points for your purchase.</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <div className="text-center mt-4">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={!selectedPayment || !selectedDelivery}
                  onClick={() => {
                    savePaymentOrder();
                  }}
                >
                  Confirm Order
                </Button>
              </div>
            </reactForm>
          </Container>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};
export default MakePizza;
