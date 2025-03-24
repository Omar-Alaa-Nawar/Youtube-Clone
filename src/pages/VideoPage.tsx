import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // 🆕
import Navbar from "../components/Navbar";
import Videos from "../components/Videos";

const VideoPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const location = useLocation();
  const videoData = location.state;

  return (
    <div>
      <Navbar onMenuClick={toggleSidebar} />
      {videoData ? (
        <Videos {...videoData} /> // pass the props!
      ) : (
        <p style={{ textAlign: "center", padding: "2rem" }}>No video selected</p>
      )}
    </div>
  );
};

export default VideoPage;
