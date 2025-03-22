// Sidebar.tsx
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HistoryIcon from "@mui/icons-material/History";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import styles from "../Modules/SideBar.module.css";
import { SidebarProps } from "../Types/SideBar.types";



const Sidebar: React.FC<SidebarProps> = ({ expanded }) => {
  return (
    <div className={`${styles.sidebar} ${expanded ? styles.expanded : styles.collapsed}`}>
      {expanded ? (
        <>
          <div className={styles.iconWithText}><HomeIcon /><span>Home</span></div>
          <div className={styles.iconWithText}><SmartDisplayIcon /><span>Shorts</span></div>
          <div className={styles.iconWithText}><SubscriptionsIcon /><span>Subscriptions</span></div>

          <hr />

          <div className={styles.sectionTitle}>You</div>
          <div className={styles.iconWithText}><HistoryIcon /><span>History</span></div>
          <div className={styles.iconWithText}><PlaylistPlayIcon /><span>Playlists</span></div>
          <div className={styles.iconWithText}><VideoLibraryIcon /><span>Your videos</span></div>
          <div className={styles.iconWithText}><AccessTimeIcon /><span>Watch later</span></div>
          <div className={styles.iconWithText}><ThumbUpAltOutlinedIcon /><span>Liked videos</span></div>

          <hr />

          <div className={styles.sectionTitle}>Subscriptions</div>
          <div className={styles.iconWithText}>
            <img
              src="https://yt3.ggpht.com/a/default-user=s68-c-k-c0x00ffffff-no-rj"
              alt="avatar"
              style={{ width: 24, height: 24, borderRadius: "50%" }}
            />
            <span>Armada Music TV</span>
          </div>
          <div className={styles.iconWithText}>
            <img
              src="https://yt3.ggpht.com/a/default-user=s68-c-k-c0x00ffffff-no-rj"
              alt="avatar"
              style={{ width: 24, height: 24, borderRadius: "50%" }}
            />
            <span>Mr Bean World</span>
          </div>
        </>
      ) : (
        <>
          <div className={styles.iconOnly}><HomeIcon /><span>Home</span></div>
          <div className={styles.iconOnly}><SmartDisplayIcon /><span>Shorts</span></div>
          <div className={styles.iconOnly}><SubscriptionsIcon /><span>Subs</span></div>
          <div className={styles.iconOnly}><PersonOutlineIcon /><span>You</span></div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
