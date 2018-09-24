import React, { Component } from "react";
import axios from "axios";
import "./Posts.css";
import { Link } from "react-router-dom";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    const url = `https://jsonplaceholder.typicode.com/posts`;

    axios.get(url).then(response => {
      this.setState({ posts: response.data.slice(0, 10) });
    });
  }

  render() {
    return (
      <div className="posts">
        {this.state.posts.map(post => (
          <div className="post__card" key={post.id}>
            <Link to={"/" + post.id}>
              <div className="post__title">{post.title}</div>
            </Link>
            <div className="post__body">{post.body}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
