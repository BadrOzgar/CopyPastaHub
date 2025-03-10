import React from "react";
import "./LeftBar.css";

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
          <a key={index} href={item.route} className="menuIcon">
            <img src={item.src} alt={item.alt} />
          </a>
        ))}
      </div>
      <a href="">
        <img src="/general/messages.svg" alt="logo" />
      </a>
    </div>
  );
};

export default LeftBar;
