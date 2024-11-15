import React from "react";
import Cookies from "js-cookie";

const Test = () => {
  const setToken = () => {
    // Set the cookie
    Cookies.set("token", "your_jwt_token", { expires: 7 });
    console.log("Cookie set:", Cookies.get()); // Log to check all cookies
  };

  const handleClick = (e) => {
    e.preventDefault();

    // Get all cookies
    let out = Cookies.get();
    console.log(out); // This will log an object of all cookies

    // To get a specific cookie
    let token = Cookies.get("token"); // Replace 'token' with the actual cookie name
    console.log(token);
  };

  return (
    <div>
      <button onClick={setToken}>Set Token Cookie</button>
      <button onClick={handleClick}>Check Cookies</button>
    </div>
  );
};

export default Test;
