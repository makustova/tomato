import React from "react";
import './index.css';

const Post = ({post}) => {
  return (
    <div className="post-wrapper">
      <img src={post.cover} alt="cover" />
      <div className="text-wrapper">
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <div>
          <a href={post.links['Apple Music']} className="platform-link">Apple Music</a>
          <a href={post.links.Spotify} className="platform-link">Spotify</a>
        </div>
      </div>
    </div>
  )
}

export default Post;
