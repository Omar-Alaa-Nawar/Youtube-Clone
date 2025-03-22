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

const Main: React.FC = () => {
  return (
    <div className={styles.videoGrid}>
      <VideoCard
        videoUrl="https://www.youtube.com/embed/FzZuw8jwrQs"
        title="كازينو الالعاب الموسم ٦ ح٣ | شارموفرز SHARMOOFERS🎵🛎️⏰"
        channel="Marwan Serry - مروان سري✅"
        views="600K views • 12 days ago"
        avatar={Marwan_Serry}
      />
      <VideoCard
        videoUrl="https://www.youtube.com/embed/Kp5-kBxcC0w"
        title="السجاير أنقذت حياته؟ l النهاية السودا مع يحيى عزام واتش"
        channel="Mohamed Elboraiy"
        views="274K views • 2 weeks ago"
        avatar={MohamedElboraiyAvatar}
      />
      <VideoCard
        videoUrl="https://www.youtube.com/embed/f80SM5sW08w"
        title="اتصل بملك دهشان تنقذ الموقف👩 | الأستاذ حازم راغب في 'فول مارك' ⏳| الحلقة الثالثة"
        channel="Omar Khaled - عمر خالد"
        views="184K views • 7 days ago"
        avatar={OmarKhaledAvatar}
      />
      <VideoCard
        videoUrl="https://www.youtube.com/embed/xzehnfQTM94"
        title="13 YEAR OLD LAMINE YAMAL HAS EVERYTHING TO BE A FOOTBALL STAR!"
        channel="Reykob 7-0 ✅"
        views="16M views • 4 years ago"
        avatar={ReykobAvatar}
      />
      <VideoCard
        videoUrl="https://www.youtube.com/embed/aKq8bkY5eTU"
        title="I Survived The 5 Deadliest Places On Earth"
        channel="MrBeast ✅"
        views="5,219,303 views  3 hours ago"
        avatar={MrBeastAvatar}
      />
      <VideoCard
        videoUrl="https://www.youtube.com/embed/UjnDpcgJXvA"
        title="Five Feet Apart - Don't Give Up On Me"
        channel="Marvin Matyka ✅"
        views="70M views  5 years ago "
        avatar={MarvinMatykaAvatar}
      />

      <VideoCard
        videoUrl="https://www.youtube.com/embed/BqSxjmvXzzY"
        title="57 Years Apart - A Boy And a Man Talk About Life"
        channel="Facts. ✅"
        views="35M views  9 years ago"
        avatar={facts}
      />
      <VideoCard
        videoUrl="https://www.youtube.com/embed/Yp3ZQD5HIig"
        title="it only takes one night…"
        channel="champ kent"
        views="1.7M views  1 month ago "
        avatar={champ}
      />
      <VideoCard
        videoUrl="https://www.youtube.com/embed/xzehnfQTM94"
        title="13 YEAR OLD LAMINE YAMAL HAS EVERYTHING TO BE A FOOTBALL STAR!"
        channel="Reykob 7-0 ✅"
        views="16M views • 4 years ago"
        avatar={ReykobAvatar}
      />
      <VideoCard
        videoUrl="https://www.youtube.com/embed/xzehnfQTM94"
        title="13 YEAR OLD LAMINE YAMAL HAS EVERYTHING TO BE A FOOTBALL STAR!"
        channel="Reykob 7-0 ✅"
        views="16M views • 4 years ago"
        avatar={ReykobAvatar}
      />
      <VideoCard
        videoUrl="https://www.youtube.com/embed/xzehnfQTM94"
        title="13 YEAR OLD LAMINE YAMAL HAS EVERYTHING TO BE A FOOTBALL STAR!"
        channel="Reykob 7-0 ✅"
        views="16M views • 4 years ago"
        avatar={ReykobAvatar}
      />
      <VideoCard
        videoUrl="https://www.youtube.com/embed/xzehnfQTM94"
        title="13 YEAR OLD LAMINE YAMAL HAS EVERYTHING TO BE A FOOTBALL STAR!"
        channel="Reykob 7-0 ✅"
        views="16M views • 4 years ago"
        avatar={ReykobAvatar}
      />
      <VideoCard
        videoUrl="https://www.youtube.com/embed/xzehnfQTM94"
        title="13 YEAR OLD LAMINE YAMAL HAS EVERYTHING TO BE A FOOTBALL STAR!"
        channel="Reykob 7-0 ✅"
        views="16M views • 4 years ago"
        avatar={ReykobAvatar}
      />
      <VideoCard
        videoUrl="https://www.youtube.com/embed/xzehnfQTM94"
        title="13 YEAR OLD LAMINE YAMAL HAS EVERYTHING TO BE A FOOTBALL STAR!"
        channel="Reykob 7-0 ✅"
        views="16M views • 4 years ago"
        avatar={ReykobAvatar}
      />
      <VideoCard
        videoUrl="https://www.youtube.com/embed/xzehnfQTM94"
        title="13 YEAR OLD LAMINE YAMAL HAS EVERYTHING TO BE A FOOTBALL STAR!"
        channel="Reykob 7-0 ✅"
        views="16M views • 4 years ago"
        avatar={ReykobAvatar}
      />
      <VideoCard
        videoUrl="https://www.youtube.com/embed/xzehnfQTM94"
        title="13 YEAR OLD LAMINE YAMAL HAS EVERYTHING TO BE A FOOTBALL STAR!"
        channel="Reykob 7-0 ✅"
        views="16M views • 4 years ago"
        avatar={ReykobAvatar}
      />
    </div>
  );
};

export default Main;
