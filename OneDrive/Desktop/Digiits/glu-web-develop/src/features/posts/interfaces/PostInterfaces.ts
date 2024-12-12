export interface User {
    name: string,
    profileImage: string,
    isVerified: boolean
}

export interface Content {
    text: string,
    hastag: string
}

export interface MediaItem {
    type: 'image' | 'video' | 'audio',
    url: string,
    title?: string
}

export interface Post {
    id: number;
    user: User;
    timestamp: string;
    location: string;
    content: Content;
    media?: (string |MediaItem)[];
    likes: number;
    comments: number;
    shares: number;
    likedBy: string;
    likedByCount: number;
}