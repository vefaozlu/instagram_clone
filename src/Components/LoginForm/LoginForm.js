import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../Assets/logo";
import { auth } from "../../utils/firebase";
import { signIn } from "../../firebase/signIn";
import "./LoginForm.scss";

function LoginForm() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((values) => ({
      ...values,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await signIn(auth, inputs.username, inputs.password);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="LoginForm">
      <div className="image-container"></div>
      <div className="content">
        <div className="form-container">
          <div className="logo-container">
            <Logo />
          </div>
          <form onSubmit={handleSubmit}>
            <input
              className="form-input"
              type="text"
              name="username"
              value={inputs.username || ""}
              onChange={handleChange}
            />
            <input
              className="form-input"
              type="password"
              name="password"
              value={inputs.password || ""}
              onChange={handleChange}
            />
            <input className="button" type="submit" value="Log in" />
          </form>
          <div className="other">
            <div className="divider">
              <span></span>
              <p>OR</p>
              <span></span>
            </div>
            <div className="login-fb">
              <div className="icon">f</div>
              <div className="text">Log in with Facebook</div>
            </div>
            <div className="forget-password">
              <a href="#">Forget password?</a>
            </div>
          </div>
        </div>
        <div className="register-container">
          <span className="text">Don't have an account?</span>
          <Link className="link" to="/register">
            Sign up
          </Link>
        </div>
        <div className="get-the-app">
          <span className="text">Get the app.</span>
          <div className="links">
            <a className="ios-link" href="#">
              <img src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png" />
            </a>
            <a className="google-link" href="#">
              <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default LoginForm;
