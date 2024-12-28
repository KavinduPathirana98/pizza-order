import { Form, Input } from "antd";
import { Fragment } from "react";
import { Container, Row, Col, Button, FormGroup } from "react-bootstrap";
import { msgRequired, toastSaveError, toastSignupSuccess } from "../constants";
import { SignUpUser } from "../service/userService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const createUserAccount = async () => {
    try {
      const formValues = await form.validateFields();
      formValues.type = 1;
      await SignUpUser(formValues)
        .then((response) => {
          if (response.data.responseCode == 1) {
            toast.success(toastSignupSuccess);
            navigate("/");
          } else {
            toast.error(toastSaveError);
          }
        })
        .catch((error) => {
          toast.error(toastSaveError);
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
            <h4 className="mb-4 text-center">Sign Up</h4>
            <Form form={form}>
              <Row>
                <Col>
                  <FormGroup className="mb-3" controlId="formUsername">
                    <label>First Name</label>
                    <Form.Item
                      name={"fName"}
                      rules={[{ required: true, message: msgRequired }]}
                    >
                      <Input />
                    </Form.Item>
                    {/* <Form.Control
                      type="text"
                      placeholder="Enter your username"
                    /> */}
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup className="mb-3" controlId="formUsername">
                    <label>Last Name</label>
                    <Form.Item
                      name={"lName"}
                      rules={[{ required: true, message: msgRequired }]}
                    >
                      <Input />
                    </Form.Item>
                    {/* <Form.Control
                      type="text"
                      placeholder="Enter your username"
                    /> */}
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup className="mb-3" controlId="formEmail">
                <label>Email</label>
                <Form.Item
                  name={"email"}
                  rules={[{ required: true, message: msgRequired }]}
                >
                  <Input type="email" />
                </Form.Item>
                {/* <Form.Control type="email" placeholder="Enter your email" /> */}
              </FormGroup>

              <FormGroup className="mb-3" controlId="formPassword">
                <label>Password</label>
                <Form.Item
                  name={"password"}
                  rules={[{ required: true, message: msgRequired }]}
                >
                  <Input type="password" />
                </Form.Item>
                {/* <Form.Control
                  type="password"
                  placeholder="Enter your password"
                /> */}
              </FormGroup>

              <Button
                variant="danger"
                type="submit"
                className="w-100"
                onClick={() => {
                  createUserAccount();
                }}
              >
                Sign Up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default SignUp;
