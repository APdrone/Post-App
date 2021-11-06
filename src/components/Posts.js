import { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function Posts({ history }) {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const { data } = await axios.get(API_URL);

      setPosts(data);

      console.log(posts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  // const createPost = () => {};

  const deletePostHandler = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);

      let newPosts = posts.filter((post) => post.id !== id);

      setPosts(newPosts);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* <p className="mt-4">Posts</p> */}
      <button
        className="btn btn-outline-primary m-2 "
        onClick={() => history.push("/post/createPost")}
      >
        Add Post
      </button>
      {/* <table className="table striped bordered hover"> */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>UserId</th>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
            return (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <button
                    className="btn btn-outline-success"
                    onClick={() => history.push(`/posts/${post.id}`)}
                  >
                    View
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => deletePostHandler(post.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        {/* </table> */}
      </Table>
    </>
  );
}

export default Posts;
