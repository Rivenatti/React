import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  state = {
    post: null
  };

  componentDidMount() {
    let id = this.props.match.params.post_id;

    axios
      .get(`https://jsonplaceholder.typicode.com/posts/` + id)
      .then(response => {
        this.setState({
          post: response.data
        });
      });
  }
  render() {
    const post = this.state.post ? (
      <div className="posts">
        <div className="post__card" key={this.state.post.id}>
          <div className="post__title">{this.state.post.title}</div>
          <div className="post__body">{this.state.post.body}</div>
        </div>
      </div>
    ) : (
      <div>Post is loading</div>
    );

    return (
      <div>
        <h2>{post}</h2>
      </div>
    );
  }
}

export default Post;
