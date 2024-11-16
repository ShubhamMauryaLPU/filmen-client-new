import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignIn } from "../server/server.js";
import { AuthContext } from "../components/AuthContext.jsx";
import "./LoginPage.css";

const LoginPage = () => {
  const [logErrorMsg, setLogErrorMsg] = useState(""); // Fixed variable naming convention
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const { updateUser } = useContext(AuthContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currData) => ({ ...currData, [name]: value }));
  };

  const handleLogForm = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    try {
      const response = await SignIn(formData, { withCredentials: true });
      console.log("Login successful:", response.data);

      updateUser(response.data); // Update user context
      navigate("/"); // Redirect to the home page
      alert("Login successful");
    } catch (error) {
      console.error("Login failed:", error);
      setLogErrorMsg("Login failed, incorrect credentials."); // Display error to the user
      setFormData({
        username: "",
        password: "",
      });
    }
  };

  return (
    <div className="login-page-background">
      <div className="login-page-container">
        <div className="row">
          {/* Left Side - Social Media Login */}
          <div className="col-4 login-sidebar">
            <p className="text-center mt-5">
              <img
                src="/assets/images/tophtml.jpeg"
                alt="Top HTML Logo"
                className="login-logo"
              />
              <b>TOP HTML</b>
            </p>
            <p className="text-center mt-5">Login using social media for quick access</p>
            <div className="social-login-buttons mt-4">
              <button className="btn btn-primary text-light">Sign with Facebook</button>
              <button className="btn btn-info text-light">Sign with Twitter</button>
              <button className="btn btn-danger text-light">Sign with Google</button>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="col-8 login-form-section">
            <p className="text-center mt-4 fs-4 text-muted">
              <b>Login to Your Account</b>
            </p>
            <p className="text-center mb-5 text-dark">
              Don't have an account?&nbsp;
              <Link to="/sign-up">
                <button className="btn btn-secondary">Register</button>
              </Link>
            </p>

            {logErrorMsg && <p className="error-message text-center">{logErrorMsg}</p>}

            <form onSubmit={handleLogForm}>
              <div className="form-group d-flex justify-content-center mb-3">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  aria-label="Username"
                  className="form-control"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group d-flex justify-content-center mb-3">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  aria-label="Password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <p className="text-center mb-5">
                <a href="#" className="text-decoration-none forgot-password">
                  Forgot password?
                </a>
              </p>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-success login-button">
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
