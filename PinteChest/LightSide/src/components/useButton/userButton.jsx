import React from "react";
import "./userButton.css";
const UserButton = () => {
  const currentUser = false;
  return currentUser ? (
    <div className="userButton">
      <img src="/general/noAvatar.png" alt="" />
      <img src="/general/arrow.svg" alt="" />
    </div>
  ) : (
    <a href="/" className="loginLink">
      Login / Sign up
    </a>
  );
};

export default UserButton;
