export interface User {
  id: number;
  name: string;
  avatar: string;
  location: string;
}

export interface MediaItem {
  type: 'image' | 'video' | 'audio';
  url: string;
  title?: string;
}

export interface Recommendation {
  id: number;
  user: User;
  timestamp: string;
  title: string;
  content: string;
  location: string;
  address: string;
  likes: number;
  comments: number;
  shares: number;
  recommendations: number;
  likedBy: string[];
  media?: (string | MediaItem)[];
}