import "./PostView.scss";
import {
  CommentIcon,
  EmojiIcon,
  LikeIcon,
  MoreIcon,
  SaveIcon,
  ShareIcon,
} from "../../Assets/icons/icons";
import { db } from "../../utils/firebase";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../firebase/getPost";
import profilePictures from "../../Assets/profile_pictures/profilePictures";

function PostView() {
  const id = useParams().id;
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      getPost(db, id)
        .then((post) => {
          setPost(post);
          setLoading(false);
        })
        .catch((e) => alert(e));
    }
  });

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="PostView">
        <div className="media__container">
          <img src={post.content} alt="media" />
        </div>
        <div className="right">
          <div className="top">
            <div className="avatar__container">
              <img
                src={profilePictures[post.user.profilePic]}
                className="avatar"
                alt="profile-picture"
              />
            </div>
            <div className="username__container">
              <a href="#" className="username">
                {post.user.username}
              </a>
            </div>
            <MoreIcon />
          </div>
          <div className="comments">
            <div className="comment">
              <div className="image__container">
                <img
                  src={profilePictures[post.user.profilePic]}
                  alt="profile_picture"
                />
              </div>
              <div className="content">
                <div className="text__content">
                  <a href="#">{post.user.username}</a>
                  <span className="comment__text">
                    comment text herecomment text herecomment text here
                  </span>
                </div>
                <div className="bottom">
                  <span className="date">5m</span>
                  <span className="likes">1 like</span>
                  <span className="reply">Reply</span>
                  <span className="translate">See translation</span>
                </div>
              </div>
              <div className="like__buton">
                <LikeIcon />
              </div>
            </div>
          </div>
          <div className="buttons__container">
            <LikeIcon />
            <CommentIcon />
            <ShareIcon />
            <span></span>
            <SaveIcon />
          </div>
          <div className="info">
            <div className="likes">32 likes</div>
            <span className="date">43 MINUTES AGO</span>
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
      </div>
    );
  }
}

export default PostView;
