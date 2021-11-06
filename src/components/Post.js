import axios from "axios";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

function Post({ match: { params } }) {
  const api_user = `https://jsonplaceholder.typicode.com/users/${params.id}`;
  const api_post = `https://jsonplaceholder.typicode.com/posts/${params.id}`;
  const api_comments = `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`;

  const [userDetail, setUserDetail] = useState({});
  const [userPost, setUserPost] = useState({});
  const [userComment, setUserComment] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await getAllDetails(api_user, setUserDetail);
      await getAllDetails(api_post, setUserPost);
      await getAllDetails(api_comments, setUserComment);
    }
    fetchData();
  }, []);

  const getAllDetails = async (url, setFn) => {
    const { data } = await axios.get(url);
    setFn(data);
    // console.log(data);
  };

  const { name, username, email, website, address } = userDetail;

  const { title, body } = userPost;
  console.log("userDetail", userDetail);
  return (
    <>
      {/* <p>Hello Post</p>

      <h1>{name}</h1>
      <h1>{username}</h1>

      <h3>{title}</h3>
      <h3>{body}</h3>

      {userComment.map((comment) => {
        return (
          <div key={comment.id}>
            <p>{comment.email}</p>
            <p>{comment.name}</p>
          </div>
        );
      })} */}

      <Card className="text-center">
        <Card.Header>User Details</Card.Header>
        <Card.Body>
          <Card.Title>{`${name} -alias ${username}`}</Card.Title>
          <Card.Text>
            {`User lives in ${address?.city} and runs website named ${website}`}
            {` and runs website named ${website}`}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">`${email}`</Card.Footer>
      </Card>
      <br />
      <br />
      <br />

      <Card className="text-center">
        <Card.Header>Post Details</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">`${email}`</Card.Footer>
      </Card>
      <br />
      <br />
      <br />

      <Card className="text-center">
        <Card.Header>Comments</Card.Header>
        {userComment.map((comment) => {
          return (
            <Card.Body key={comment.id}>
              <Card.Title>{`${comment.name} -alias ${comment.email}`}</Card.Title>
              <Card.Text>{comment.body}</Card.Text>
            </Card.Body>
          );
        })}
      </Card>
    </>
  );
}

export default Post;
