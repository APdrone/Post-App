import { Route, Switch } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import Posts from "../components/Posts";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";

function Routes() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/posts/:id" component={Post} />
        <Route path="/post/createPost" component={CreatePost} exact />
        <Route path="/posts" component={Posts} exact />
      </Switch>
    </>
  );
}

export default Routes;
