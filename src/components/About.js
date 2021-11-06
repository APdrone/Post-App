import { Card, Button } from "react-bootstrap";

import "holderjs";

function About({ history }) {
  return (
    <>
      <Card className="text-center">
        <Card.Header>About Us</Card.Header>
        <Card.Body>
          <Card.Title>About Post App </Card.Title>
          <Card.Text>
            App allows you to view and update the user posts Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </Card.Text>
          <Button variant="primary" onClick={() => history.replace("/home")}>
            Go Back to HomePage
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">Thank you</Card.Footer>
      </Card>
    </>
  );
}

export default About;
