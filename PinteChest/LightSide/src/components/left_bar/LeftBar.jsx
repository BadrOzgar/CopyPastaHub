import React from "react";
import "./LeftBar.css";
import { Link } from "react-router";
import Image from "../image/image";

const LeftBar = () => {
  const menuItems = [
    { src: "/general/logo.png", alt: "logo", route: "" },
    { src: "/general/home.svg", alt: "home", route: "/home" },
    { src: "/general/create.svg", alt: "create", route: "/create" },
    { src: "/general/updates.svg", alt: "updates", route: "/updates" },
    { src: "/general/messages.svg", alt: "messages", route: "/messages" },
  ];

  return (
    <div className="leftBar">
      <div className="menuIcons">
        {menuItems.map((item, index) => (
          <Link key={index} to={item.route} className="menuIcon">
            <Image path={item.src} alt={item.alt} />
          </Link>
        ))}
      </div>
      <a href="">
        <img src="/general/settings.svg" alt="logo" />
      </a>
    </div>
  );
};

export default LeftBar;
