import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

function App() {
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
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
