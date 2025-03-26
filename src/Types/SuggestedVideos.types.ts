export interface Video {
  avatar: string;
  videoUrl: string;
  channel: string;
  title: string;
  views: string;
}

export interface SuggestedVideosProps {
  videos?: Video[];
  onVideoSelect: (video: Video) => void; // ✅ Function to update main video
}
