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
import Promotions from "./pages/promotions";
import AdminPromotions from "./pages/admin-promotion";

function App() {
  const authenticated = localStorage.getItem("authenticated");
  const user = JSON.parse(localStorage.getItem("user"));
  // Navigation Bar Component
  const NavigationBar = () => (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/home">Pizza Shop</Navbar.Brand>
        <Nav className="me-auto">
          {user.type == 1 ? <Nav.Link href="/home">Home</Nav.Link> : ""}
          {user.type == 1 ? <Nav.Link href="/make">Make Pizza</Nav.Link> : ""}
          {user.type == 1 ? <Nav.Link href="/orders">Orders</Nav.Link> : ""}

          {user.type == 1 ? (
            <Nav.Link href="/promotions">Promotions</Nav.Link>
          ) : (
            <Nav.Link href="/admin-promotions">Promotions</Nav.Link>
          )}
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
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/admin-promotions" element={<AdminPromotions />} />
          {/* Additional routes can be added here */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
