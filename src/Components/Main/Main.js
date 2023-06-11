import avatar from "../../Assets/avatar.jpg";
import Posts, { Post } from "../Posts/Posts";
import Stories, { Story } from "../Stories/Stories";
import profilePictures from "../../Assets/profile_pictures/profilePictures";
import Suggestions from "../Suggestions/Suggestions";
import "./Main.scss";
import { useState, useEffect } from "react";
import { db } from "../../utils/firebase";
import { getPosts } from "../../firebase/getPosts";

function Main() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (posts.length === 0) {
      getPosts(db).then((posts) => {
        setPosts(posts);
      });
    }
  });

  return (
    <div className="main">
      <div className="feed">
        <Stories stories={stories} />
        <Posts
          posts={posts.map((e) => (
            <Post
              username={e.user.username}
              media={e.content}
              likeCount={e.likeCount}
              commentCount={e.commentCount}
              description={e.description}
              profilePic={profilePictures[e.user.profilePic]}
              id={e.id}
            />
          ))}
        />
      </div>
      <Suggestions />
    </div>
  );
}

export default Main;

const postComponents = [
  <Post
    username="username"
    media="https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60"
    likeCount={23}
    commentCount={3}
    description="Art"
    profilePic={profilePictures["profile_picture_1"]}
  />,
  <Post
    username="username"
    media="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60"
    likeCount={23}
    commentCount={3}
    description="Art"
    profilePic={profilePictures["profile_picture_2"]}
  />,
  <Post
    username="username"
    media="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60"
    likeCount={23}
    commentCount={3}
    description="Art"
    profilePic={profilePictures["profile_picture_3"]}
  />,
  <Post
    username="username"
    media="https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60"
    likeCount={23}
    commentCount={3}
    description="Art"
    profilePic={profilePictures["profile_picture_4"]}
  />,
  <Post
    username="username"
    media="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60"
    likeCount={23}
    commentCount={3}
    description="Art"
    profilePic={profilePictures["profile_picture_5"]}
  />,
  <Post
    username="username"
    media="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60"
    likeCount={23}
    commentCount={3}
    description="Art"
    profilePic={profilePictures["profile_picture_6"]}
  />,
];

const stories = [
  <Story
    img={profilePictures["profile_picture_1"]}
    username="username"
    seen={false}
  />,
  <Story
    img={profilePictures["profile_picture_2"]}
    username="username"
    seen={false}
  />,
  <Story
    img={profilePictures["profile_picture_3"]}
    username="username"
    seen={false}
  />,
  <Story
    img={profilePictures["profile_picture_4"]}
    username="username"
    seen={false}
  />,
  <Story
    img={profilePictures["profile_picture_5"]}
    username="username"
    seen={false}
  />,
  <Story
    img={profilePictures["profile_picture_6"]}
    username="username"
    seen={false}
  />,
  <Story
    img={profilePictures["profile_picture_7"]}
    username="username"
    seen={false}
  />,
  <Story
    img={profilePictures["profile_picture_8"]}
    username="username"
    seen={true}
  />,
  <Story
    img={profilePictures["profile_picture_9"]}
    username="username"
    seen={true}
  />,
  <Story
    img={profilePictures["profile_picture_10"]}
    username="username"
    seen={true}
  />,
  <Story img={avatar} username="username" seen={true} />,
];
