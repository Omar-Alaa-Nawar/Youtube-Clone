import styles from "../Modules/Subscribe.module.css";
import Marwan_Serry from "../assets/Marwan_Serry.png";

import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

function SubscribeBar() {
  return (
    <div className={styles.subscribeBar}>
      <div className={styles.channelInfo}>
        <img
          src={Marwan_Serry}
          alt="Marwan Serry"
          className={styles.profilePic}
        />
        <div>
          <div className={styles.channelName}>
            Marwan Serry - مروان سري <span className={styles.verified}>✔</span>
          </div>
          <div className={styles.subscribers}>845K subscribers</div>
        </div>
        <button className={styles.subscribeButton}>Subscribe</button>
      </div>

      <div className={styles.actions}>
        <div className={styles.likeDislike}>
          <ThumbUpOutlinedIcon />
          <span className={styles.likesCount}>36K</span>
          <span className={styles.separator}>|</span>
          <ThumbDownAltOutlinedIcon />
        </div>
        <button className={styles.iconButton}>
          <ReplyOutlinedIcon className="flipIcon" /> Share
        </button>
        <button className={styles.iconButton}>
          <DownloadOutlinedIcon /> Download
        </button>
        <button className={styles.moreBtn}>
          <MoreHorizOutlinedIcon />
        </button>
      </div>
    </div>
  );
}

export default SubscribeBar;
