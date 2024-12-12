export interface JobBoard {
    id: string;
    company: string;
    deadline: string;
    title: string;
    description: string[];
    workMode: string;
    jobLevel: string;
    industry: string;
    location: string;
    startTime: string;
    availablity: string;
    salary: string;
    likes: string;
    dislikes: string;
    comments: string;
    bookmarks: string;
    appliedDate?: string;
}

export interface JobItemProps {
    job: JobBoard;
}
  
export interface JobBoardContentProps {
  jobs: JobBoard[];
  loading: boolean;
}

export interface DiscussionProps {
  id: number;
  profile: string;
  name: string;
  date: string;
  comment: string;
  likes: boolean;
  likeCount: string;
  time: string;
  replies: DiscussionProps[];
}