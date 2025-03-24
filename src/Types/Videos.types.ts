export type VideosProps = {
  videoUrl: string;
  title: string;
  channel: string;
  avatar: string;
  subscribers: string;
  likes: string;
  description?: string;
  
};

export type VideosState = VideosProps[];
