import "./NavBar.scss";
import { HomeIcon, MenuIcon } from "../../Assets/icons/icons";
import Logo from "../../Assets/logo";
import { auth } from "../../utils/firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router";

function NavBar() {
  const navigate = useNavigate();
  const onButtonClick = async () => {
    await auth.signOut();
    console.log("User signed out");
    window.location.reload(false);
  };

  return (
    <div className="navbar">
      <div className="logo-container">
        <Logo color={"#fff"} />
      </div>
      <div className="nav-items">
        <NavButton icon={<HomeIcon />} text="Home" to="#" />
        <NavButton icon={<HomeIcon />} text="Search" to="#" />
        <NavButton icon={<HomeIcon />} text="Explore" to="#" />
        <NavButton icon={<HomeIcon />} text="Reels" to="#" />
        <NavButton icon={<HomeIcon />} text="Messages" to="#" />
        <NavButton icon={<HomeIcon />} text="Notifications" to="#" />
        <NavButton icon={<HomeIcon />} text="Create" to="#" />
        <NavButton icon={<HomeIcon />} text="Profile" to="#" />
      </div>
      <div className="more-button-container">
        <NavButton icon={<MenuIcon />} text="More" to="#" />
        <button onClick={onButtonClick}>Sign out</button>
      </div>
    </div>
  );
}

function NavButton({ icon, text, to }) {
  return (
    <div className="button-background">
      <a href={to}>
        <div className="button">
          {icon}
          <div className="text">{text}</div>
        </div>
      </a>
    </div>
  );
}

export default NavBar;
