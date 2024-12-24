import { Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { Fragment } from "react";
import { Container, Row, Col, Button, FormGroup } from "react-bootstrap";
import { msgRequired } from "../constants";
import { UserLogin } from "../service/userService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const [form] = useForm();
  const login = async () => {
    try {
      const formValues = await form.validateFields();
      formValues.id = 0;
      formValues.fName = "";
      formValues.lName = "";
      formValues.type = 1;
      await UserLogin(formValues)
        .then((response) => {
          console.log(response);
          if (response.data.responseCode == 1) {
            localStorage.setItem("authenticated", true);
            localStorage.setItem("user", JSON.stringify(response.data.data));
            navigate("/home");
            toast.success("Login Successfully");
          } else {
            toast.error("Email or Password is incorrect");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {}
  };

  return (
    <Fragment>
      <Container
        fluid
        className="vh-100 d-flex align-items-center justify-content-center"
        style={{ backgroundColor: "#FFD700" }}
      >
        <Row
          className="shadow-lg"
          style={{ maxWidth: "900px", backgroundColor: "white" }}
        >
          <Col md={6} className="p-0">
            <div
              className="h-100 d-flex flex-column justify-content-center align-items-center"
              style={{
                backgroundImage: `url('https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?fm=jpg&amp;q=60&amp;w=3000&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
                textAlign: "center",
                padding: "20px",
              }}
            >
              <h3>Need some Pizza, yo?</h3>
              <p>
                C’mon and order from nearby Pizza delivery and pickup
                restaurants.
              </p>
            </div>
          </Col>

          <Col md={6} className="p-4">
            <h4 className="mb-4 text-center">Login</h4>
            <Form form={form}>
              <FormGroup className="mb-3" controlId="formEmail">
                <label>Email</label>
                <Form.Item
                  name="email"
                  rules={[{ required: true, message: msgRequired }]}
                >
                  <Input type="email" placeholder="Enter your email" />
                </Form.Item>
              </FormGroup>

              <FormGroup className="mb-3" controlId="formPassword">
                <label>Password</label>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: msgRequired }]}
                >
                  <Input type="password" placeholder="Enter your password" />
                </Form.Item>
              </FormGroup>

              <Button
                variant="danger"
                onClick={() => {
                  login();
                }}
                className="w-100"
              >
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default Login;
