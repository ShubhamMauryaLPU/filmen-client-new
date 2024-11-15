import React, { useContext, useState } from "react";
import "./Register.css";
import { SignUp, SignIn } from "../server/server.js";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext.jsx";

const Register = () => {
  const [action, setAction] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [logErrorMsg, setLogErrorMsg] = useState("");
  const [regErrorMsg, setRegErrorMsg] = useState("");
  const [RegData, setRegData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [LogData, setLogData] = useState({
    username: "",
    password: "",
  });
  
  const registerLink = () => {
    setAction(" active");
  };

  const loginLink = () => {
    setAction("");
  };
  const navigate = useNavigate();
  const { updateUser } = useContext(AuthContext);
  const HandleRegChange = (e) => {
    setRegData({
      ...RegData,
      [e.target.name]: e.target.value,
    });
  };
  const HandleLogChange = (e) => {
    setLogData({
      ...LogData,
      [e.target.name]: e.target.value,
    });
  };
  const HandleRegForm = async (e) => {
    e.preventDefault();

    if (RegData.password.length < 5) {
      setRegErrorMsg("Password must be at least 6 characters long.");
      return;
    }

    try {
      let response = await SignUp(RegData);

      console.log(response);
      navigate("#login-form");
    } catch (error) {
      setRegErrorMsg("Registration failed, Credentials already exist.");
      console.error("Registration failed:", error);
    }
  };

  const HandleLogForm = async (e) => {
    e.preventDefault();
    console.log(LogData);
    try {
      let response = await SignIn(LogData, { withCredentials: true });
      console.log("Login successful:", response.data);
      updateUser(response.data);
      // localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/");
      alert("Login successful");
    } catch (error) {
      console.error("Registration failed:", error);
      setLogErrorMsg("Login failed, incorrect Credentials.");
    }
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="LoginMainDiv">
      <div className={`wrapper${action}`}>
        <div className="form-box login" id="login-form">
          <form action="" onSubmit={HandleLogForm}>
            <h1>Login</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                required
                name="username"
                onChange={HandleLogChange}
              />
            </div>

            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                onChange={HandleLogChange}
              />
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember Me
              </label>
              <a href="#">Forgot Password</a>
            </div>

            <button type="submit">Login</button>
            <div className="register-link">
              <p>
                Don't have an account &nbsp;
                <a href="#" onClick={registerLink}>
                  Register
                </a>
              </p>
            </div>
            <p className="err-msg">{logErrorMsg}</p>
          </form>
        </div>

        <div className="form-box register" id="register-form">
          <form action="" onSubmit={HandleRegForm}>
            <h1>Registration</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                required
                name="username"
                onChange={HandleRegChange}
              />
            </div>

            <div className="input-box">
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                onChange={HandleRegChange}
              />
            </div>

            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                onChange={HandleRegChange}
                minLength="6"
              />
            </div>

            <div className="remember-forgot">
              <label>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                I agree to the terms & conditions
              </label>
            </div>

            <button type="submit" disabled={!isChecked}>
              Register
            </button>
            <div className="register-link">
              <p>
                Already have an account &nbsp;
                <a href="#" onClick={loginLink}>
                  Login
                </a>
              </p>
            </div>
            <p className="err-msg">{regErrorMsg}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
