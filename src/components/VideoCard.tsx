import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Modules/VideoCard.module.css";
import { VideoCardProps } from "../Types/VideoCard.types";

const VideoCard: React.FC<VideoCardProps> = ({
  videoUrl,
  title,
  channel,
  views,
  avatar,
  description,
  likes,
  subscribers
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/videopage", {
      state: {
        videoUrl,
        title,
        channel,
        views,
        avatar,
        description,
        likes,
        subscribers
      },
    });
  };

  return (
    <div className={styles.videoCard}>
      <div className={styles.thumbnailContainer} onClick={handleClick}>
        <iframe
          className={styles.iframe}
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className={styles.clickOverlay}></div>
      </div>
      <div className={styles.videoInfo}>
        <img src={avatar} alt="channel" className={styles.avatar} />
        <div className={styles.meta}>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.channel}>{channel}</p>
          <p className={styles.views}>{views}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
