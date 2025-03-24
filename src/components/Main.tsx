import React from "react";
import styles from "../Modules/Main.module.css";
import VideoCard from "../components/VideoCard";
import Marwan_Serry from "../assets/Marwan_Serry.png";
import MohamedElboraiyAvatar from "../assets/elboraiy.png";
import OmarKhaledAvatar from "../assets/omargamal.png";
import ReykobAvatar from "../assets/lamine.png";
import MrBeastAvatar from "../assets/beast.png";
import MarvinMatykaAvatar from "../assets/songd.png";
import facts from "../assets/facts.png";
import champ from "../assets/champ.png";
import messi from "../assets/messi.png";
import software from "../assets/software.png";
import podu from "../assets/podu.png";
import rawData from "../data/videosdata.json";

import { VideoCardState } from "../Types/VideoCard.types";


// Map string keys to imported avatar images
const avatars: Record<string, string> = {
  Marwan_Serry,
  MohamedElboraiyAvatar,
  OmarKhaledAvatar,
  ReykobAvatar,
  MrBeastAvatar,
  MarvinMatykaAvatar,
  facts,
  champ,
  messi,
  software,
  podu
};
const videoData: VideoCardState = rawData as VideoCardState;
const Main: React.FC = () => {
  return (
    <div className={styles.videoGrid}>
      {videoData.map((video, index) => (
        <VideoCard
          key={index}
          videoUrl={video.videoUrl}
          title={video.title}
          channel={video.channel}
          views={video.views}
          avatar={avatars[video.avatar]} 
          description={video.description}
          likes={video.likes}
          subscribers={video.subscribers}
        />
      ))}
    </div>
  );
};

export default Main;



