import React from "react";
import "./TopBar.css";
import UserButton from "../useButton/userButton";
import Image from "../Image/image";

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="search">
        <Image path="/general/search.svg" alt="" />
        <input type="text" placeholder="Search" />
      </div>
      <UserButton />
    </div>
  );
};

export default TopBar;
