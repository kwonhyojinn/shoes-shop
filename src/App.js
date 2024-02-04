import logo from "./logo.svg";
import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import data from "./data.js";
import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import DetailPage from "./pages/DetailPage.jsx";

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Shoes Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#all">All</Nav.Link>
            <Nav.Link href="#new">New</Nav.Link>
            <Nav.Link href="#best">Best</Nav.Link>
          </Nav>
          <Link to="/">home</Link>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i} />;
                  })}
                </div>
              </div>
            </>
          }
        />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <Link to="/detail">
        <img
          src={process.env.PUBLIC_URL + `/shoes${props.i + 1}.jpeg`}
          width="80%"
        />
      </Link>
      <h5>{props.shoes.title}</h5>
      <p>{props.shoes.price}원</p>
    </div>
  );
}

export default App;
