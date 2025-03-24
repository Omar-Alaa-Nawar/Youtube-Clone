export interface VideoCardProps {
  videoUrl: string;
  title: string;
  channel: string;
  views: string;
  avatar: string;
  description: string;
  likes: string;          
  subscribers: string;    
}

  export type VideoCardState = VideoCardProps[];