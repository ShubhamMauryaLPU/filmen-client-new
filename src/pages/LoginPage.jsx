import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SignIn } from "../server/server.js";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext.jsx";
import "./LoginPage.css";
const LoginPage = () => {
  const [LogErrorMsg,setLogErrorMsg]=useState("");
  let [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  let handleChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };
  const navigate = useNavigate();
  const { updateUser } = useContext(AuthContext);
  const HandleLogForm = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      let response = await SignIn(formData, { withCredentials: true });
      console.log("Login successful:", response.data);
      updateUser(response.data);
      navigate("/");
      alert("Login successful");
    } catch (error) {
      setFormData({
        username: "",
        password: "",
      });
      console.error("Registration failed:", error);
      // setLogErrorMsg("Login failed, incorrect Credentials.");
    }
  };

  return (
    <div className="for-background">
      <div className="LoginPage-mainDiv">
        <div className="row">
          <div className="col-4 tophtml">
            <p className="text-center mt-5 ">
              <img
                src="/assets/images/tophtml.jpeg"
                alt=""
                className="tophtml-loginPage"
              />
              <b>TOP HTML</b>
            </p>
            <p className="para mt-5 ">
              Login using social media to get quick access
            </p>
            <div className="html-button mt-4">
              <button className="bg-primary text-light">
                Sign with facebook
              </button>
              <button className="bg-info text-light">Sign with twiter</button>
              <button className="bg-danger text-light">Sign with google</button>
            </div>
          </div>
          <div className="col-8 loginPage-logMain">
            <p className="mt-4 fs-4 text-muted text-center">
              <b>Login to your account</b>
            </p>
            <p className="text-center mb-5 text-dark">
              Don't have an account?&nbsp;
              <Link to={"/sign-up"}>
                <button className="for-register-button">Register</button>
              </Link>
            </p>
            <form action="#" method="post" onSubmit={HandleLogForm}>
              <div className="d-flex justify-content-center mb-3">
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  onChange={handleChange}
                  value={formData.username}
                />
              </div>
              <div className="d-flex justify-content-center mb-3">
                <input
                  type="password"
                  name="password"
                  id="pass"
                  placeholder="Password"
                  onChange={handleChange}
                  value={formData.password}
                />
              </div>
              <p className="mb-5">
                <a href="#" className="text-decoration-none forgot-password">
                  Forgot password?
                </a>
              </p>
              <button className="mt-5 login-button">Log in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
