import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* <h1>Footer </h1> */}

      <Navbar
        className="justify-content-center my-3"
        bg="dark"
        variant="dark"
        expand="lg"

        // fixed="bottom"
      >
        <Nav activeKey="/home">
          <Nav.Item className="mx-3">
            <NavLink to="/">Home</NavLink>
          </Nav.Item>
          <Nav.Item className="mx-3">
            <NavLink to="/about">About</NavLink>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
}

export default Footer;
