// Navbar.tsx
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsNoneSharpIcon from "@mui/icons-material/NotificationsNoneSharp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddIcon from "@mui/icons-material/Add";
import SearchBar from "./SearchBar";
import styles from "../Modules/NavBar.module.css";
import youtubeLogo from "../assets/YouTube_Logo.png";

interface NavbarProps {
  onMenuClick: () => void;
}

function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <div className={styles.navbar}>
      <MenuIcon
        className={styles.menuIcon}
        onClick={onMenuClick}
        style={{ cursor: "pointer" }}
      />
      <img src={youtubeLogo} alt="YouTube" className={styles.youtubeLogo} />

      <SearchBar />

      <button className={styles.createButton}>
        <AddIcon />
        <span>Create</span>
      </button>

      <button className={styles.iconButton}>
        <NotificationsNoneSharpIcon className={styles.iconsize} />
        <span className={styles.notificationBadge}>9+</span>
      </button>

      <button className={styles.avatarButton} title="Profile">
        <AccountCircleOutlinedIcon className={styles.avatarIcon} />
      </button>
    </div>
  );
}

export default Navbar;
