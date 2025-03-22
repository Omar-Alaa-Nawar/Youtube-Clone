import styles from "../Modules/Videos.module.css";
import Comments from "./Comments";
import Description from "./Description";
import SubscribeBar from "./SubscribeBar";

function Videos() {
  return (
    <div className={styles.videoContainer}>
      
        <iframe
          className={styles.videoPlayer}
          src="https://www.youtube.com/embed/FzZuw8jwrQs"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      
      <h2 className={styles.videoTitle}>
        كازينو الالعاب الموسم ٦ ح٣ | شارموفرز SHARMOOFERS 🎵🛎️⏰
      </h2>
      <SubscribeBar/>
      <Description/>
      <Comments/>
    </div>
  );
}

export default Videos;
