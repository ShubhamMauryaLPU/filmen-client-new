import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterPage.css";
import { SignUp } from "../server/server.js";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [regData, setRegData] = useState({
    fullName: "",
    username: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [avatar, setAvatar] = useState(null);
  const [regErrorMsg, setRegErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const HandleRegChange = (e) => {
    setRegData({
      ...regData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle file input
  const HandleFileChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  // Handle form submission
  const HandleRegForm = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !regData.fullName ||
      !regData.username ||
      !regData.email ||
      !regData.gender ||
      !regData.password ||
      !regData.confirmPassword
    ) {
      setRegErrorMsg("All fields are required.");
      return;
    }

    if (regData.password !== regData.confirmPassword) {
      setRegErrorMsg("Passwords do not match.");
      return;
    }

    // Prepare FormData
    const formData = new FormData();
    formData.append("fullName", regData.fullName);
    formData.append("username", regData.username);
    formData.append("email", regData.email);
    formData.append("gender", regData.gender);
    formData.append("password", regData.password);
    formData.append("confirmPassword", regData.confirmPassword);
    if (avatar) {
      formData.append("avatar", avatar);
    }

    setIsSubmitting(true);
    setRegErrorMsg(""); // Clear error messages

    try {
      // Make the API call
      const response = await SignUp(formData);
      console.log(response);
      navigate("/sign-in");
    } catch (error) {
      // Detailed error handling
      if (error.response) {
        setRegErrorMsg(
          error.response.data.message || "Registration failed. Please try again."
        );
        console.error("Error response:", error.response.data);
      } else {
        setRegErrorMsg("An unexpected error occurred. Please try again.");
        console.error("Error:", error.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="register-mainDiv">
      <div className="content-div">
        <div className="row">
          <div className="col-4 register-form-pic">
            <h4 className="text-light p-3">Doing well</h4>
          </div>
          <div className="col-8 inputDiv">
            <p className="text-center fs-2">
              <b>Registration Form</b>
            </p>
            <form onSubmit={HandleRegForm} encType="multipart/form-data">
              <div>
                <input
                  type="text"
                  placeholder="Enter Full name"
                  name="fullName"
                  value={regData.fullName}
                  onChange={HandleRegChange}
                />
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  value={regData.username}
                  onChange={HandleRegChange}
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={regData.password}
                  onChange={HandleRegChange}
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={regData.confirmPassword}
                  onChange={HandleRegChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={regData.email}
                  className="emailinput"
                  onChange={HandleRegChange}
                />
                <select
                  name="gender"
                  value={regData.gender}
                  onChange={HandleRegChange}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="imgDiv">
                <label htmlFor="avatar">Upload Image:</label>
                <input type="file" name="avatar" onChange={HandleFileChange} />
              </div>
              {regErrorMsg && (
                <div className="error-message">{regErrorMsg}</div>
              )}
              <button
                type="submit"
                className="registerpage-submit-button"
                style={{ width: "40%" }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Registering..." : "Register"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
