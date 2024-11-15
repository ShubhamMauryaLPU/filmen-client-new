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

  const HandleRegChange = (e) => {
    setRegData({
      ...regData,
      [e.target.name]: e.target.value,
    });
  };

  const HandleFileChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  const HandleRegForm = async (e) => {
    e.preventDefault();

    if (regData.password !== regData.confirmPassword) {
      setRegErrorMsg("Passwords do not match.");
      return;
    }

    const formData = new FormData();
    formData.append("fullName", regData.fullName);
    formData.append("username", regData.username);
    formData.append("email", regData.email);
    formData.append("gender", regData.gender);
    formData.append("password", regData.password);
    formData.append("confirmPassword", regData.confirmPassword);
    const imageToSend = avatar ? avatar : "my.img";
    if (avatar) {
      formData.append("avatar", imageToSend);
    }

    try {
      let response = await SignUp(formData);
      console.log(response);
      navigate("/sign-in");
    } catch (error) {
      setRegErrorMsg("Registration failed, Credentials already exist.");
      console.error("Registration failed:", error);
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
                  onChange={HandleRegChange}
                />
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  onChange={HandleRegChange}
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  onChange={HandleRegChange}
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  onChange={HandleRegChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="emailinput"
                  onChange={HandleRegChange}
                />
                <select name="gender" onChange={HandleRegChange}>
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
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
