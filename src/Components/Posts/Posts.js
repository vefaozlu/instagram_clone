import { useState } from "react";
import avatar from "../../Assets/avatar.jpg";
import {
  CommentIcon,
  EmojiIcon,
  LikeIcon,
  MoreIcon,
  SaveIcon,
  ShareIcon,
} from "../../Assets/icons/icons";
import { createUser } from "../../firebase/createUser";
import { db } from "../../utils/firebase";
import "./Posts.scss";

export const Post = ({
  username,
  profilePic,
  media,
  likeCount,
  commentCount,
  description,
  id
}) => {
  const [comment, setComment] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(db);
  };

  return (
    <div className="Post">
      <div className="top">
        <div className="avatar-container">
          <img src={profilePic} className="avatar" alt="profile-picture"></img>
        </div>
        <div className="username-container">
          <a href="#" className="username">
            {username}
          </a>
        </div>
        <MoreIcon />
      </div>
      <div className="media-container">
        <img src={media} className="media" alt="post"></img>
      </div>
      <div className="buttons-container">
        <LikeIcon />
        <CommentIcon />
        <ShareIcon />
        <span></span>
        <SaveIcon />
      </div>
      <div className="likes-container">
        <div className="liked-by-avatar">
          <a href="#">
            <img src={avatar} className="avatar" alt="profile-picture"></img>
          </a>
        </div>
        <div className="likes-text">
          Liked by <a href="#">username</a> and
          <a href="#">{likeCount} others</a>
        </div>
      </div>
      <div className="content">
        <div className="text">
          <a href="#" className="post-user">
            username
          </a>
          {description}
        </div>
        <a href="#">more</a>
        <span></span>
        <a href={`/post/${id}`}>View all {commentCount} comments</a>
      </div>
      <div className="shared-date">
        <a href="#">1 hour ago</a>
      </div>
      <div className="comment-container">
        <EmojiIcon />
        <form>
          <input
            className="textfield"
            type="text"
            placeholder="Add a comment..."
          ></input>
          <input className="button" type="submit" value="Post"></input>
        </form>
      </div>
    </div>
  );
};

function Posts({ posts }) {
  return (
    <div className="Posts">
      {posts.map((post, index) => (
        <div key={index}>{post}</div>
      ))}
    </div>
  );
}

export default Posts;
