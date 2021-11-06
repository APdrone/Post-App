import { useState } from "react";
import { Form, Row, Col, Button, Stack } from "react-bootstrap";

// function CreatePost({ history }) {
function CreatePost(props) {
  const [userid, setUserid] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(true);

  console.log(props);
  const { history } = props;

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (userid.length !== 0 && title.length > 3 && body.length > 5) {
      setError(false);
    }
    if (!error) {
      console.log({ userid, title, body });
      setUserid("");
      setTitle("");
      setBody("");
    } else {
      console.log("error");
    }
  };

  return (
    <>
      {/* <p>Hello Post !</p>
      <form onSubmit={submitFormHandler}>
        <div>
          <label>User ID</label>
          <input
            name="userid"
            type="text"
            value={userid}
            onChange={(event) => setUserid(event.target.value)}
          />
        </div>
        <div>
          <label>Title</label>
          <input
            name="title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label>Body</label>
          <input
            name="body"
            type="text"
            value={body}
            onChange={(event) => setBody(event.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
        <button onClick={() => history.goBack()}>Cancel</button>
      </form> */}
      <p className="mt-4">Posts</p>
      <h1 className="text-center">New Post</h1>
      <Form onSubmit={submitFormHandler}>
        <Form.Group as={Row} className="m-3" controlId="formHorizontalUserId">
          <Form.Label column sm={2}>
            User ID
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="userid"
              placeholder="userid"
              onChange={(event) => setUserid(event.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="m-3" controlId="formHorizontalTitle">
          <Form.Label column sm={2}>
            Title
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="Title"
              placeholder="Title"
              onChange={(event) => setTitle(event.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="m-3" controlId="formHorizontalTitle">
          <Form.Label column sm={2}>
            Body
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="Body"
              placeholder="Title"
              onChange={(event) => setBody(event.target.value)}
            />
          </Col>
        </Form.Group>

        <Stack
          direction="horizontal"
          className="justify-content-center"
          gap={3}
        >
          <Button type="submit">Submit</Button>
          <Button onClick={() => history.goBack()} type="submit">
            Cancel
          </Button>
        </Stack>
      </Form>
    </>
  );
}

export default CreatePost;
