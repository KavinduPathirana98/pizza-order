import { Fragment } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
const Login = () => {
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
            <Form>
              <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter your username" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                />
              </Form.Group>

              <Button variant="danger" type="submit" className="w-100">
                Sign Up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default Login;
