import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";
import styles from "../Modules/HomePage.module.css";
import Main from "../components/Main";

function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <div className={styles.appContainer}>
      <Navbar onMenuClick={toggleSidebar} />
      <div className={styles.mainLayout}>
        <Sidebar expanded={sidebarOpen} />
        <div className={styles.contentArea}>
          <Main />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
