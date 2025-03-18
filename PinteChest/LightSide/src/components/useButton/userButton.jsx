import React from "react";
import "./userButton.css";
import { useState } from "react";
import Image from "../Image/image";
const UserButton = () => {
  const currentUser = true;
  const [open, setOpen] = useState(false);
  return currentUser ? (
    <div className="userButton">
      <Image path="/general/noAvatar.png" alt="" />
      <Image
        path="/general/arrow.svg"
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
