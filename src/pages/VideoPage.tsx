import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Videos from "../components/Videos";




const VideoPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  return (
    <div>
      <Navbar onMenuClick={toggleSidebar} />
      <Videos />
      
    </div>
  );
};

export default VideoPage;
