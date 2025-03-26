export interface Video {
    avatar: string;
    videoUrl: string;
    channel: string;
    title: string;
    views: string;
  }
  
  export interface SuggestedVideosProps {
    videos: Video[];
  }
  