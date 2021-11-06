import { Card, Button } from "react-bootstrap";

function Home({ history }) {
  return (
    <>
      {/* <Image src="holder.js/100px250" fluid /> */}
      {/* <Image src="../" fluid /> */}
      {/* <p className="mt-4">Posts</p> */}
      <div className="text-center ">
        {/* <img
          src="https://images.unsplash.com/photo-1597613261732-344e083d25e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
          alt="Girl in a jacket"
          width="800"
          height="700"
        /> */}
        {/* <h1>Welcome to the page</h1> */}

        <Card className="text-center ">
          <Card.Header>Welcome</Card.Header>
          <Card.Body>
            <Card.Title>Welcome to Post App </Card.Title>
            <Card.Text>
              App allows you to view and update the user posts Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </Card.Text>
            <Button variant="primary" onClick={() => history.push("/posts")}>
              Go to Posts
            </Button>
          </Card.Body>
          {/* <Card.Footer className="text-muted">Thank you</Card.Footer> */}
        </Card>
      </div>
    </>
  );
}

export default Home;
