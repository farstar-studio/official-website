import logo from './logo.svg';
import './App.css';
import "./main.scss";
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import star from './images/star3.svg'
import farStarLogo from './images/FarStar.png'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src= {star}
            width="30"
            height="30"
            className="d-inline-block align-top mx-2"
            alt="React Bootstrap logo"
          />
          遠星工作室
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">英勇紋章</Nav.Link>
          </Nav>
          <Nav className="mx-2">
            <Nav.Link href="#features">關於我們</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <img src={farStarLogo} height="400" />
      </div>
    </div>
  );
}

export default App;
