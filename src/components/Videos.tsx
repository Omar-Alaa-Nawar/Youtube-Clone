import React, { useState } from "react";
import styles from "../Modules/Videos.module.css";
import Comments from "./Comments";
import Description from "./Description";
import SubscribeBar from "./SubscribeBar";
import { VideosProps } from "../types/Videos.types";
import SuggestedVideos from "./SuggestedVideos";
import rawData from "../data/videosdata.json";

const videoData = rawData.map((video) => ({
  ...video,
  likes: video.likes || "0",
  subscribers: video.subscribers || "0",
  avatar: video.avatar,
}));

const Videos: React.FC<VideosProps> = (initialVideo) => {
  // ✅ State for the currently playing video
  const [currentVideo, setCurrentVideo] = useState<VideosProps>(initialVideo);

  // ✅ Remove the currently playing video from the suggested list
  const filteredVideos = videoData.filter(
    (video) => video.videoUrl !== currentVideo.videoUrl
  );

  return (
    <div className={styles.videoPage}>
      <div className={styles.mainContent}>
        <div className={styles.videoContainer}>
          <iframe
            className={styles.videoPlayer}
            src={currentVideo.videoUrl}
            title={currentVideo.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <h2 className={styles.videoTitle}>{currentVideo.title}</h2>

          <SubscribeBar
            avatar={currentVideo.avatar}
            channel={currentVideo.channel}
            subscribers={currentVideo.subscribers}
            likes={currentVideo.likes}
          />

          <Description text={currentVideo.description || ""} />

          <Comments />
        </div>

        {/* ✅ Suggested Videos */}
        <div className={styles.suggestedVideosContainer}>
          <SuggestedVideos
            videos={filteredVideos}
            onVideoSelect={setCurrentVideo}
          />
        </div>
      </div>
    </div>
  );
};

export default Videos;
