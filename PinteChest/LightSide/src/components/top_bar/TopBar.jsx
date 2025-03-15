import React from "react";
import "./TopBar.css";
import UserButton from "../useButton/userButton";

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="search">
        <img src="/general/search.svg" alt="" />
        <input type="text" placeholder="Search" />
      </div>
      <UserButton />
    </div>
  );
};

export default TopBar;
