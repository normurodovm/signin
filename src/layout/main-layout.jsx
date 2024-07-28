import React from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { loadState } from "../config/storage";
import Leftimg from "/left-block-img.png"

export const MainLayout = () => {
  const user = loadState("user");
  if (!user) return <Navigate to={"/login"} />;

  return (
    <div className="flex">
      <div className="w-[20%] p-6 h-screen">
        <img src={Leftimg} />
      </div>
      <div className="w-[80%] p-8">
        <Outlet />
      </div>
    </div>
  );
};
