import React, { useState } from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import styles from "../Modules/Comments.module.css";

const dummyComments = [
  {
    name: "@أحمد",
    text: "ماروان سري بيقدم محتوى جامد جدًا!",
    likes: 24,
    dislikes: 1,
    daysAgo: 10,
  },
  {
    name: "@منة",
    text: "ضحكتني جدًا الحلقة دي 😂",
    likes: 35,
    dislikes: 0,
    daysAgo: 3,
  },
  {
    name: "@كريم",
    text: "تحليل ممتاز كالعاده",
    likes: 17,
    dislikes: 2,
    daysAgo: 4,
  },
  {
    name: "@سارة",
    text: "ماروان سري فنان حقيقي 🙌",
    likes: 40,
    dislikes: 0,
    daysAgo: 5,
  },
  {
    name: "@يوسف",
    text: "أحلى محتوى على اليوتيوب",
    likes: 51,
    dislikes: 1,
    daysAgo: 11,
  },
  {
    name: "@ليلى",
    text: "فين الحلقة الجاية؟ مستنيينك 😍",
    likes: 30,
    dislikes: 0,
    daysAgo: 3,
  },
  {
    name: "@محمد",
    text: "ماروان متألق كالعاده 👏",
    likes: 45,
    dislikes: 0,
    daysAgo: 10,
  },
  {
    name: "@دينا",
    text: "أفكار جديدة ومختلفة دايمًا!",
    likes: 20,
    dislikes: 0,
    daysAgo: 9,
  },
  {
    name: "@رامي",
    text: "أنا بحب تحليلاتك أوي",
    likes: 15,
    dislikes: 3,
    daysAgo: 7,
  },
  {
    name: "@نجلاء",
    text: "أحلى حاجة حصلتلي النهاردة الحلقة دي!",
    likes: 23,
    dislikes: 0,
    daysAgo: 1,
  },
  {
    name: "@طارق",
    text: "فين كواليس التصوير؟",
    likes: 8,
    dislikes: 1,
    daysAgo: 4,
  },
  {
    name: "@ياسمين",
    text: "ضحكت من قلبي 😂",
    likes: 32,
    dislikes: 0,
    daysAgo: 5,
  },
  {
    name: "@شريف",
    text: "مفيش زيك يا ماروان",
    likes: 12,
    dislikes: 0,
    daysAgo: 6,
  },
  {
    name: "@هالة",
    text: "استمر دايمًا إحنا معاك ❤️",
    likes: 37,
    dislikes: 1,
    daysAgo: 5,
  },
  {
    name: "@عمر",
    text: "المنتاج والاخراج خرافي",
    likes: 29,
    dislikes: 0,
    daysAgo: 6,
  },
  {
    name: "@بسمة",
    text: "مش مصدقة إنك لسه مش مليون مشترك",
    likes: 50,
    dislikes: 2,
    daysAgo: 7,
  },
  {
    name: "@إبراهيم",
    text: "كل مرة بتفاجئنا",
    likes: 18,
    dislikes: 1,
    daysAgo: 7,
  },
  {
    name: "@شهد",
    text: "انت عالمي والله",
    likes: 26,
    dislikes: 0,
    daysAgo: 12,
  },
  {
    name: "@عمرو",
    text: "فين لينك اللعبة؟",
    likes: 6,
    dislikes: 2,
    daysAgo: 9,
  },
  {
    name: "@مريم",
    text: "احلى قناة على اليوتيوب",
    likes: 42,
    dislikes: 0,
    daysAgo: 11,
  },
];

function Comments() {
  const [comment, setComment] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const toggleComments = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.commentsWrapper}>
      <div className={styles.commentsHeader}>
        <span>{dummyComments.length} Comments</span>
        <div className={styles.toggleButton} onClick={toggleComments}>
          {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </div>
      </div>

      {isExpanded && (
        <>
          <div className={styles.inputContainer}>
            <img
              className={styles.userAvatar}
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="User Avatar"
            />
            <input
              className={styles.commentInput}
              type="text"
              placeholder="Add a comment..."
              value={comment}
              onChange={handleInputChange}
            />
          </div>

          {dummyComments.map((c, index) => (
            <div className={styles.comment} key={index}>
              <div className={styles.commentAvatar}>
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="avatar"
                />
              </div>
              <div className={styles.commentBody}>
                <div className={styles.commentHeaderRow}>
                  <span className={styles.commentAuthor}>{c.name}</span>
                  <span className={styles.commentDate}>
                    {c.daysAgo} days ago
                  </span>
                </div>
                <div className={styles.commentText}>{c.text}</div>
                <div className={styles.commentActions}>
                  <ThumbUpOutlinedIcon className={styles.icon} />
                  <span>{c.likes}</span>
                  <ThumbDownAltOutlinedIcon className={styles.icon} />
                  <span>{c.dislikes}</span>
                  <span className={styles.replyText}>Reply</span>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Comments;
