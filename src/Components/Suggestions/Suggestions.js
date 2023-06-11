import "./Suggestions.scss";
import avatar from "../../Assets/avatar.jpg";
import profilePictures from "../../Assets/profile_pictures/profilePictures";

function Suggestions() {
  return (
    <div className="Suggestions">
      <div className="profile__row">
        <div className="image__container">
          <img src={avatar} />
        </div>
        <div className="name__container">
          <span className="username">username</span>
          <span className="fullname">John Doe</span>
        </div>
        <div className="button__container">
          <a className="switch__button" href="#">
            Switch
          </a>
        </div>
      </div>
      <div className="suggestions__title">
        <span className="title">Suggested for you</span>
        <a className="link" href="#">
          See all
        </a>
      </div>
      <div className="suggestions__list">
        <div className="suggestion__row">
          <div className="image__container">
            <img src={profilePictures["profile_picture_10"]} />
          </div>
          <div className="profile__info">
            <span className="username">username</span>
            <div className="followers">Followed by username + 9 more</div>
          </div>
          <div className="button__container">
            <a href="#">Follow</a>
          </div>
        </div>
        <div className="suggestion__row">
          <div className="image__container">
            <img src={profilePictures["profile_picture_9"]} />
          </div>
          <div className="profile__info">
            <span className="username">username</span>
            <div className="followers">Followed by username + 9 more</div>
          </div>
          <div className="button__container">
            <a href="#">Follow</a>
          </div>
        </div>
        <div className="suggestion__row">
          <div className="image__container">
            <img src={profilePictures["profile_picture_8"]} />
          </div>
          <div className="profile__info">
            <span className="username">username</span>
            <div className="followers">Followed by username + 9 more</div>
          </div>
          <div className="button__container">
            <a href="#">Follow</a>
          </div>
        </div>
        <div className="suggestion__row">
          <div className="image__container">
            <img src={profilePictures["profile_picture_7"]} />
          </div>
          <div className="profile__info">
            <span className="username">username</span>
            <div className="followers">Followed by username + 9 more</div>
          </div>
          <div className="button__container">
            <a href="#">Follow</a>
          </div>
        </div>
        <div className="suggestion__row">
          <div className="image__container">
            <img src={profilePictures["profile_picture_6"]} />
          </div>
          <div className="profile__info">
            <span className="username">username</span>
            <div className="followers">Followed by username + 9 more</div>
          </div>
          <div className="button__container">
            <a href="#">Follow</a>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="links">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">API</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Locations</a>
            </li>
            <li>
              <a href="#">Language</a>
            </li>
            <li>
              <a href="#">Meta Verified</a>
            </li>
          </ul>
          <span className="copyright">© 2023 Instagram from Meta</span>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
