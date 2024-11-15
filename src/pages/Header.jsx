import React, { useContext, useState } from "react";
import NavListItems from "../components/NavListItems";
import NavListData from "../data/NavListData";
import "./Header.css";
import Search from "../components/Search";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
import LogOut from "./LogOut";

function Header() {
  const { currentUser } = useContext(AuthContext);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };
  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  return (
    <header>
      <a href="/" className="logo">
        filmen
      </a>
      <ul className="nav">
        {NavListData.map((nav) => (
          <NavListItems key={nav._id} nav={nav} />
        ))}
      </ul>
      <Search />

      {currentUser ? (
        <div
          className="user-info"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ position: "relative" }}
        >
          {/*  */}
          {
            currentUser?(
              <img src={`/userdata/${currentUser.avatar}`} alt="serverImg"/>
            ):(
              <img src="/assets/images/titleImg.png" alt="profileImg" />
            )
          }
          {isDropdownVisible && (
            <div className="logout-dropdown">
              <LogOut name={currentUser} />
            </div>
          )}
        </div>
      ) : (
        <Link to={"/sign-in"}>
          <Button
            icon={<ion-icon name="log-in-outline"></ion-icon>}
            name="sign in"
          />
        </Link>
      )}
    </header>
  );
}

export default Header;
