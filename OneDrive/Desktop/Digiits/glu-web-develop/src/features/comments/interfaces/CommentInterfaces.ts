export interface User {
    name: string;
    profileImage: string;
  }
  
  export interface Comment {
    id: number;
    user: User;
    birthdate: string;
    timestamp: string;
    content: string;
    likes: number;
    replies?: Comment[];
  }

  export interface ICommentSection{
    comments: Comment[];
  }