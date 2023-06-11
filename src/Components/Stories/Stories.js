import "./Stories.scss";
import { useRef } from "react";

export const Story = ({ img, username, seen = false }) => {
  return (
    <div className="Story">
      <div className={seen ? "seen_image" : "unseen_image"}>
        <img src={img} style={{aspectRatio: 1/1}}/>
      </div>
      <span className={seen ? "seen_text" : "unseen_text"}>{username}</span>
    </div>
  );
};

function Stories({ stories }) {
  const scrollRef = useRef();
  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="Stories">
      <button className="left_button" onClick={() => scroll(-500)}></button>
      <button className="right_button" onClick={() => scroll(500)}></button>
      <div className="story-list" ref={scrollRef}>
        {stories.map((story, index) => (
          <div key={index}>{story}</div>
        ))}
      </div>
    </div>
  );
}

export default Stories;
