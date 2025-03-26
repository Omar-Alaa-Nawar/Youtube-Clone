export type VideosProps = {
  videoUrl: string;
  title: string;
  channel: string;
  avatar: string;
  subscribers: string;
  likes: string;
  description?: string;
  views:string;
};

export type VideosState = VideosProps[];
