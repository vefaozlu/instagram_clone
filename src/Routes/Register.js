import { useState } from "react";
import {createUser} from "../firebase/createUser";

function Register() {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((values) => ({
      ...values,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(inputs.username, inputs.password);
    alert("Logging In");
  };

  return (
    <div className="register">
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
        <input className="button" type="submit" value="Sign up" />
      </form>
    </div>
  );
}

export default Register;
