import styles from "../Modules/Subscribe.module.css";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { SubscribeBarProps } from "../Types/SubscribeBar.types";


const SubscribeBar: React.FC<SubscribeBarProps> = ({
  avatar,
  channel,
  subscribers,
  likes,
}) => {
  return (
    <div className={styles.subscribeBar}>
      <div className={styles.channelInfo}>
        <img src={avatar} alt={channel} className={styles.profilePic} />
        <div>
          <div className={styles.channelName}>
            {channel} <span className={styles.verified}>✔</span>
          </div>
          <div className={styles.subscribers}>{subscribers} subscribers</div>
        </div>
        <button className={styles.subscribeButton}>Subscribe</button>
      </div>

      <div className={styles.actions}>
        <div className={styles.likeDislike}>
          <ThumbUpOutlinedIcon />
          <span className={styles.likesCount}>{likes}</span>
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
};

export default SubscribeBar;
