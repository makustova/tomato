import React from "react";
import './index.css';

class Post extends React.Component {
  handleDeletePost = () => {
    if (!window.confirm('u sure?')) {
      return;
    }
    fetch(`http://localhost:3000/posts/${this.props.post.id}`, {
      method: 'delete'
    });

    this.props.onDelete();
  }

  render() {
    const {post} = this.props
    return (
      <div className="post-wrapper">
        <div className="post-content-wrapper">
          <img src={post.cover} alt="cover" />
          <div className="text-wrapper">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <div>
              <a href={post.links.apple} className="platform-link">Apple Music</a>
              <a href={post.links.spotify} className="platform-link">Spotify</a>
            </div>
          </div>
        </div>
        <button style={{height: '20px'}} onClick={this.handleDeletePost}>x</button>
      </div>
    )
  }
}

export default Post;
