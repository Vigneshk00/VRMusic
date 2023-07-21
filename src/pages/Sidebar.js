import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import MessageTwoToneIcon from "@mui/icons-material/MessageTwoTone";
import SidebarOption from "./SidebarOption";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img className="logo" src="" alt="Logo" />
      <SidebarOption Icon={HomeOutlinedIcon} option="Home" />
      <SidebarOption Icon={SearchOutlinedIcon} option="Search" />
      <SidebarOption Icon={LibraryMusicIcon} option="Library" />
      <SidebarOption Icon={MessageTwoToneIcon} option="Chat Page" />
    </div>
  );
};

export default Sidebar;
