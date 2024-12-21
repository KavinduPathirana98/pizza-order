import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import { useState } from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignUp from './pages/signup';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
    <Router>
      {/* <ToastContainer></ToastContainer>
      <>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/appointments">Aurora Skin Care </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/appointments">Appointments</Nav.Link>
              <Nav.Link href="/patients">Patients</Nav.Link>
              <Nav.Link href="/treatments">Treatments</Nav.Link>
              <Nav.Link href="/invoice">Invoices</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </> */}
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/appointments">Appointments</Link>
            </li>
            <li>
              <Link to="/patients">Patients</Link>
            </li>
            <li>
              <Link to="/treatments">Treatments</Link>
            </li>
            <li>
              <Link to="/invoice">Invoice</Link>
            </li>
          </ul>
        </nav> */}

        {/* Define routes for the different components */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/patients" element={<Home />} />
          {/* <Route path="/treatments" element={<Treatments />} />
          <Route path="/invoice" element={<Invoice />} /> */}
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
