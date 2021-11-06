import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <>
      {/* <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/posts">Posts</NavLink> */}

      {/* <Navbar bg="dark" variant="dark" expand="lg" fixed="top"> */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">POST APP</Navbar.Brand>
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item className="mx-3">
            <NavLink to="/home">Home</NavLink>
          </Nav.Item>
          <Nav.Item className="mx-3">
            <NavLink to="/about">About</NavLink>
          </Nav.Item>
          <Nav.Item className="mx-3">
            <NavLink to="/posts">Posts</NavLink>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
}

export default Navigation;
