import React from "react";
import "./userButton.css";
import { useState } from "react";
const UserButton = () => {
  const currentUser = true;
  const [open, setOpen] = useState(false);
  return currentUser ? (
    <div className="userButton">
      <img src="/general/noAvatar.png" alt="" />
      <img
        src="/general/arrow.svg"
        onClick={() => setOpen((prev) => !prev)}
        className="arrow"
        alt=""
      />
      {open && (
        <div className="userOptions">
          <div className="userOption">Profile</div>
          <div className="userOption">Settings</div>
          <div className="userOption">Logout</div>
        </div>
      )}
    </div>
  ) : (
    <a href="/" className="loginLink">
      Login / Sign up
    </a>
  );
};

export default UserButton;
