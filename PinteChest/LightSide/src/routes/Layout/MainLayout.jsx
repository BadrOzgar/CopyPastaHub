import React from "react";
import "./app.css";
import LeftBar from "../../components/left_bar/Leftbar";
import TopBar from "../../components/top_bar/TopBar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="app">
      <LeftBar />
      <div className="content">
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
