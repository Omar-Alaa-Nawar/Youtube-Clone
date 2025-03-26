import React from "react";
import styles from "../Modules/SuggestedVideos.module.css";
import { VideosProps } from "../Types/Videos.types";
import { avatars } from "./Main";

interface SuggestedVideosProps {
  videos?: VideosProps[];
  onVideoSelect: (video: VideosProps) => void; // ✅ Function to update main video
}

const SuggestedVideos: React.FC<SuggestedVideosProps> = ({
  videos = [],
  onVideoSelect,
}) => {
  const selectVideo = (video: VideosProps) => {
    console.log({ video });
    onVideoSelect({ ...video, avatar: avatars[video.avatar] });
  };
  return (
    <div className={styles.suggestedVideos}>
      {videos.length > 0 ? (
        videos.map((video, index) => (
          <div key={index} className={styles.videoItem}>
            {/* ✅ Video Container with Clickable Overlay */}
            <div className={styles.videoContainer}>
              <iframe
                className={styles.videoIframe}
                src={video.videoUrl}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              {/* ✅ Transparent Overlay that captures the click */}
              <div
                className={styles.clickOverlay}
                onClick={() => selectVideo(video)}
              ></div>
            </div>

            {/* ✅ Video Info */}
            <div className={styles.videoInfo}>
              <h3 className={styles.videoTitle}>
                {video.title.length > 40
                  ? `${video.title.substring(0, 40)}...`
                  : video.title}
              </h3>
              <p className={styles.channelName}>{video.channel}</p>
              <p className={styles.views}>{video.views}</p>
            </div>
          </div>
        ))
      ) : (
        <p className={styles.noVideos}>No suggested videos available</p>
      )}
    </div>
  );
};

export default SuggestedVideos;
