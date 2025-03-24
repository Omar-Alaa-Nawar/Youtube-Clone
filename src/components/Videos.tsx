import React from "react";
import styles from "../Modules/Videos.module.css";
import Comments from "./Comments";
import Description from "./Description";
import SubscribeBar from "./SubscribeBar";
import { VideosProps } from "../Types/Videos.types";


const Videos: React.FC<VideosProps> = ({
  videoUrl,
  title,
  description,
  subscribers,
  likes,
  avatar,
  channel,
}) => {
  return (
    <div className={styles.videoContainer}>
      <iframe
        className={styles.videoPlayer}
        src={videoUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <h2 className={styles.videoTitle}>{title}</h2>

      <SubscribeBar
        avatar={avatar}
        channel={channel}
        subscribers={subscribers}
        likes={likes}
      />

      <Description text={description || ""} />

      <Comments />
    </div>
  );
};

export default Videos;
