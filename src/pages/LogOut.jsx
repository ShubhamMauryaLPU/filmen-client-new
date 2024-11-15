import React from "react";
import "./LogOut.css";
import { useNavigate } from "react-router-dom";
const LogOut = ({ name }) => {
  const navigate = useNavigate();
  let handleLogOut = () => {
    if (localStorage.getItem("user")) {
      localStorage.removeItem("user");
    }
    navigate("/");
    window.location.reload();
  };
  return (
    <div className="logout-mainDiv">
      <div className="logout-img-div">
      <img src={`/userdata/${name.avatar}`} alt="serverImg"/>
        <p>
          <span className="username">{name.fullName}</span>
        </p>
      </div>
      <hr />
      <div className="logout-detail-div">
        <button>
          <ion-icon name="person-outline"></ion-icon> &nbsp;
          <span>Profile</span>
        </button>
        <p className="logout-bookmark">
          <a href="#">
            <ion-icon name="bookmarks-outline"></ion-icon>&nbsp;&nbsp;Bookmark
          </a>
        </p>
        <button style={{ marginBottom: "8px" }}>
          <ion-icon name="skull-outline"></ion-icon>&nbsp;&nbsp;
          <span>Subscription</span>
        </button>
        <button onClick={handleLogOut}>
          <ion-icon name="log-out-outline"></ion-icon>&nbsp;&nbsp;
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default LogOut;
