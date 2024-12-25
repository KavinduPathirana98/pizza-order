import { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import { Navbar, Container, Nav } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import MakePizza from "./pages/make-pizza";
import Orders from "./pages/orders";

function App() {
  const authenticated = localStorage.getItem("authenticated");

  // Navigation Bar Component
  const NavigationBar = () => (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home">Pizza Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/make">Make Pizza</Nav.Link>
          <Nav.Link href="/orders">Orders</Nav.Link>
          <Nav.Link href="/invoice">Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );

  // Wrapper Component to conditionally render the NavigationBar
  const Layout = ({ children }) => {
    const location = useLocation();
    const noNavPaths = ["/", "/signup"]; // Paths without the navigation bar

    return (
      <>
        {!noNavPaths.includes(location.pathname) && <NavigationBar />}
        {children}
      </>
    );
  };

  return (
    <Router>
      <ToastContainer />
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/make" element={<MakePizza />} />
          <Route path="/orders" element={<Orders />} />
          {/* Additional routes can be added here */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
